import styles from "./TransferFormContainer.module.scss";
import { EthereumCard, TransferForm } from "..";

const TransferFormContainer = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <EthereumCard />
        <TransferForm />
      </div>
      <div className={styles.formCard}></div>
    </div>
  );
};

export default TransferFormContainer;
