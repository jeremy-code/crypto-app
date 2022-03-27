import { useContext } from "react";
import { Button, Form, Spinner, FloatingLabel } from "react-bootstrap";

import { TransactionContext } from "../../context/TransactionContext";

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

const TransferForm = () => {
  const { formData, handleChange, sendTransaction, isLoading } =
    useContext(TransactionContext);

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
        className="py-3 w-100 text-uppercase text-tracking fw-bold"
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
  );
};

export default TransferForm;
