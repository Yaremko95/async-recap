import React from "react";
import { Form } from "react-bootstrap";
import ModalForm from "./ModalForm";
import ProductsList from "./ProductsList";
class Home extends React.Component {
  render() {
    console.log("renders");

    return (
      <>
        <ModalForm btn={"add product"} method={"POST"} />
        <ProductsList />
      </>
    );
  }
}

export default Home;
