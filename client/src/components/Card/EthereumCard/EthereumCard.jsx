import { useContext } from "react";
import { FaEthereum, FaInfoCircle } from "react-icons/fa";

import styles from "./EthereumCard.module.scss";
import { TransactionContext } from "../../../context/TransactionContext";
import { shortenAddress } from "../../../utils/shortenAddress";

const EthereumCard = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className={styles.card}>
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-inline-flex  border border-3 border-white rounded-circle p-2">
          <FaEthereum color="#fff" size={40} />
        </div>
        <FaInfoCircle color="#fff" size={25} />
      </div>
      <div>
        <p className="mb-1 text-white">
          {!currentAccount ? (
            "Address"
          ) : (
            <abbr title={currentAccount}>{shortenAddress(currentAccount)}</abbr>
          )}
        </p>
        <h3 className="mb-0 text-white">Ethereum</h3>
      </div>
    </div>
  );
};

export default EthereumCard;
