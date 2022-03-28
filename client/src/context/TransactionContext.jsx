import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

const { ethereum } = window;
export const TransactionContext = React.createContext();

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  return contract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount") || 0
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please connect to MetaMask");
      const contract = getEthereumContract();
      const avaliableTransactions = await contract.getAllTransactions();
      console.log(avaliableTransactions);
      const structuredTransactions = avaliableTransactions.map(
        (transaction) => ({
          addressFrom: transaction.sender,
          addressTo: transaction.receiver,
          timestamp: new Date(transaction.timestamp * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: ethers.utils.formatEther(transaction.amount).toString(),
        })
      );
      console.log(structuredTransactions);
      setTransactions(structuredTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletConnected = async () => {
    try {
      if (!ethereum) {
        console.log("Please connect to MetaMask");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("Please connect to MetaMask. No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object found");
    }
  };

  const checkIfTransactionExist = async () => {
    try {
      const contract = getEthereumContract();
      const transactionCount = await contract.getTransactionCount();
      localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object found");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please connect to MetaMask");
      }
      await ethereum.enable();
      const accounts = await ethereum.request({ method: "eth_accounts" });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object found");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!currentAccount) {
        return alert("Please connect to MetaMask");
      }
      const { addressTo, amount, keyword, message } = formData;
      const contract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x186a0",
            value: parsedAmount.toHexString(),
          },
        ],
      });
      const transactionHash = await contract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );
      setIsLoading(true);
      console.log(`Loading transaction ${transactionHash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Transaction ${transactionHash} mined`);
      const transactionCount = await contract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("Transaction failed");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
    checkIfTransactionExist();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        isLoading,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
