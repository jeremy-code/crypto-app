import { useContext } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

import styles from "./Hero.module.scss";
import { TransactionContext } from "../../context/TransactionContext";
import { Navbar, TransferFormContainer } from "../../components";

const Hero = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div>
      <Navbar />
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
          <Col>
            <TransferFormContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
