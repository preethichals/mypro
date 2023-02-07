import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaHeart, FaRegHeart, FaCartPlus } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}



function Product() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="mt-4 mx-4">
      <h3 className="text-uppercase fw-semibold" style={{letterSpacing:"0.5rem"}}>Deal of the Day</h3>
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
                <Card.Title className="d-flex justify-content-between">
                  <p>Herschel supply </p>
                  <span>
                    {`onClick ? ${(<FaRegHeart />)} : ${(<FaHeart />)} '`}
                  </span>
                </Card.Title>
                <Card.Text>
                  <p>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>

                  <ToggleButton
                    className="mb-2"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                  >
                    Add to Cart
                  </ToggleButton>
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
