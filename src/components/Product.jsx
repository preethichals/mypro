import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Product() {
  return (
    <div className="mt-4 mx-4">
          <Row sm={1} md={2} lg={3} xl={4} className="flex">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="./Images/product-02.jpg"
                style={{ width: "100%" }}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Product;
