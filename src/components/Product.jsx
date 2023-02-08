import Card from "react-bootstrap/Card";
import { FaHeart, FaRegHeart, FaCartPlus } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function Product() {
  const [checked, setChecked] = useState(false);
  return (
    <Card className="justify-content-around p-3" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="./Images/product-02.jpg"
        style={{ width: "100%" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <p>Herschel supply </p>
          <span>
            <FaRegHeart />
            <FaHeart />
          </span>
        </Card.Title>
        <Card.Text>
          <p>
            <span>$16.64</span>
            <ToggleButton
              className="ml-4 d-inline"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
            >
              Add to Cart
            </ToggleButton>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
