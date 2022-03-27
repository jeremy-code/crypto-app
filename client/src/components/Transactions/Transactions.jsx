import { useState, useContext } from "react";
import { Row, Button } from "react-bootstrap";

import { TransactionContext } from "../../context/TransactionContext";
import dummyData from "../../utils/dummyData";
import { TransactionCard } from "..";

const DummyData = () => {
  return (
    <Row xs={1} md={2} lg={4} className="g-5 mt-1">
      {dummyData.reverse().map((transaction, i) => (
        <TransactionCard key={i} {...transaction} />
      ))}
    </Row>
  );
};

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  const [isDummyData, setIsDummyData] = useState(false);

  const generateDummyData = (e) => {
    e.preventDefault();
    setIsDummyData(true);
  };

  return (
    <>
      {!currentAccount && (
        <>
          <p className="mb-4">Connect your wallet to see your transactions</p>
          <Button onClick={generateDummyData} disabled={isDummyData}>
            {isDummyData ? "Dummy Data Generated" : "Generate Dummy Data"}
          </Button>
          {isDummyData && <DummyData />}
        </>
      )}

      {transactions.length > 0 ? (
        <Row xs={1} md={2} lg={3} className="g-5">
          {transactions.map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </Row>
      ) : (
        <p className="fs-5 mt-4">No transactions yet</p>
      )}
    </>
  );
};

export default Transactions;
