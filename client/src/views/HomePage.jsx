import { Row } from "react-bootstrap";
import { FaShieldAlt, FaEthereum, FaLock } from "react-icons/fa";

import { TransactionProvider } from "../context/TransactionContext";
import { Footer, Hero, Section, AboutCard, Transactions } from "../components";

const HomePage = () => {
  return (
    <TransactionProvider>
      <Hero />
      <Section title="Features" subtitle="Our Platform">
        <Row xs={1} sm={1} md={1} lg={3} className="g-3">
          <AboutCard
            icon={<FaShieldAlt />}
            title="Security"
            subtitle="Trade securely with blockchain technology through smart contracts"
          />
          <AboutCard
            icon={<FaEthereum />}
            title="Crypto"
            subtitle="Trade with cryptocurrency Ethereum in real time"
          />
          <AboutCard
            icon={<FaLock />}
            title="Privacy"
            subtitle="All transfers are encrypted and secure and sent to the blockchain through MetaMask"
          />
        </Row>
      </Section>
      <Section title="Trades" subtitle="View all your transactions">
        <Transactions />
      </Section>
      <Footer />
    </TransactionProvider>
  );
};

export default HomePage;
