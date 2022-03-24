import { useContext } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Card,
  Form,
  Spinner,
  FloatingLabel,
} from "react-bootstrap";
import { FaEthereum, FaInfoCircle } from "react-icons/fa";

import styles from "./Welcome.module.css";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <FloatingLabel controlId={name} label={placeholder} className="mb-3">
      <Form.Control
        placeholder={placeholder}
        name={name}
        type={type}
        step="0.0001"
        value={value}
        onChange={handleChange}
        className="my-2"
      />
    </FloatingLabel>
  );
};

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) {
      return alert("Please fill in all fields");
    } else {
      sendTransaction();
    }
  };

  return (
    <Container>
      <Row xs={1} lg={2} className={styles.heroSection}>
        <Col className="align-self-center">
          <h1 className="mt-0">Send Crypto across the world</h1>
          <p className="mb-5">
            Explore the cyrpto world. Buy and sell cryptocurrencies easily on
            Crypto App.
          </p>
          <Button
            onClick={connectWallet}
            className="py-2 px-4 rounded-pill"
            disabled={currentAccount}
          >
            {!currentAccount ? (
              <>
                <FaEthereum /> Connect wallet
              </>
            ) : (
              <>
                <FaEthereum /> Wallet connected
              </>
            )}
          </Button>
          <Row xs={1} sm={2} md={3} className="g-3 mt-3">
            {[
              "Ethereum",
              "Blockchain",
              "Web 3.0",
              "Privacy",
              "Security",
              "Decentralized",
            ].map((item, index) => (
              <Col key={item + index}>
                <Card key={item + index}>
                  <Card.Body>
                    <Card.Title className="mb-0">{item}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="align-self-center">
          <div style={{ maxWidth: "25rem", margin: "auto" }}>
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
                    <abbr title={currentAccount}>
                      {shortenAddress(currentAccount)}
                    </abbr>
                  )}
                </p>
                <h3 className="mb-0 text-white">Ethereum</h3>
              </div>
            </div>
            <div style={{ margin: "20px" }}>
              <Input
                placeholder="Address to"
                name="addressTo"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
              <Input
                placeholder="Keyword (GIF)"
                name="keyword"
                type="text"
                handleChange={handleChange}
              />
              <Input
                placeholder="Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />
              <Button
                variant="primary"
                onClick={handleSubmit}
                className="py-3 w-100"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Send Now"
                )}
                <span className="visually-hidden">Loading...</span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
