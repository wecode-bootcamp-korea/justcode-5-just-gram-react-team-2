import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";
import "./ProductCard.css";
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="border">
        <Container>
          <Row>
            {productList.map((menu) => (
              <Col className="" lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
          <ProductCard />
        </Container>
      </div>
    </div>
  );
};

export default ProductAll;
