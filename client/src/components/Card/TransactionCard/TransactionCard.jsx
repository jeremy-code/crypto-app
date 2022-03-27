import { Card, ListGroup, Col } from "react-bootstrap";

import { shortenAddress } from "../../../utils/shortenAddress";
import useFetch from "../../../hooks/useFetch";

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
          <Card.Title className="text-dark">Amount: {amount} ETH</Card.Title>
          <Card.Text className="text-dark">
            {message && (
              <>
                <br />
                Message: {message}
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

export default TransactionCard;
