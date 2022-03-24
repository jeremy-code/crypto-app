import { useState, useContext } from "react";
import ReactDOM from "react-dom";

import { Container, Card, ListGroup, Row, Col, Button} from "react-bootstrap";


import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={gifUrl || url} alt="gif" />
        <ListGroup variant="flush">
          <ListGroup.Item>
            From: {""}
            <a
              href={`https://ropsten.etherscan.io/address/${addressFrom}`}
              target="__blank"
              rel="noopener noreferrer"
            >
              {shortenAddress(addressFrom)}
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            To: {""}
            <a
              href={`https://ropsten.etherscan.io/address/${addressTo}`}
              target="__blank"
              rel="noopener noreferrer"
            >
              {shortenAddress(addressTo)}
            </a>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Title>Amount: {amount} ETH</Card.Title>
          <Card.Text>
            {message && (
              <>
                <br />
                <p>Message: {message}</p>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{timestamp}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

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
    <div className="p-5">
      <Container>
        {currentAccount ? (
          <h1 className="mb-4">Lastest Transactions</h1>
        ) : (
          <>
            <h3 className="mb-4">
              Connect your wallet to see your transactions
            </h3>
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
      </Container>
    </div>
  );
};

export default Transactions;
