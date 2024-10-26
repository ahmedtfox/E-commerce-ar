import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";
import ProductCard from "./ProductCard";

function CardProductsContainer() {
  return (
    <Container className="mb-5">
      <SubTitle title="الاكثر مبيعا" btnTitle="المزيد" />
      <Row className="mx-2 my-1 justify-content-between d-flex">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
}

export default CardProductsContainer;
