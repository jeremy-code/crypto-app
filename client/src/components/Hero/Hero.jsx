import { useContext } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

import styles from "./Hero.module.scss";
import { TransactionContext } from "../../context/TransactionContext";
import { TransferForm, EthereumCard } from "../../components";

const Welcome = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <Container>
      <Row xs={1} lg={2} className={styles.heroSection}>
        <Col className="align-self-center">
          <h1 className="mt-0 mb-5 fs-1">
            <strong>Trade Ethereum through the blockchain securely</strong>
          </h1>
          <Button
            onClick={connectWallet}
            className="py-3 px-4 rounded-pill text-uppercase text-tracking fw-bold"
            disabled={currentAccount}
          >
            {!currentAccount ? "Connect Wallet" : "Wallet Connected"}
          </Button>
        </Col>
        <Col className="align-self-center">
          <div style={{ maxWidth: "25rem", margin: "auto" }}>
            <EthereumCard />
          </div>
          <TransferForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
