import React from "react";
import { Button, Card } from "react-bootstrap";
import ModalForm from "./ModalForm";

class SingleProduct extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.product.imageUrl} />
        <Card.Body>
          <Card.Title>{this.props.product.name}</Card.Title>
          <Card.Text>{this.props.product.price}</Card.Text>
          <ModalForm
            btn={"Update"}
            method={"PUT"}
            data={this.props.product}
            refetchData={() => this.props.refetchData()}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default SingleProduct;
