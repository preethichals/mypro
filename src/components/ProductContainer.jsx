import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductContainer() {
  
  return (
    <div className="mt-2 mx-4">
      <Row sm={1} md={2} lg={3} xl={4} className="d-inline-flex p-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
           <Product />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductContainer;
