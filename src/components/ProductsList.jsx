import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
class ProductsList extends React.Component {
  state = {
    products: [],
  };
  fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/",
        {
          method: "GET",
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjhlNjk4MzViMDAwMTc1ODRlZTciLCJpYXQiOjE2MDU3ODk5MjYsImV4cCI6MTYwNjk5OTUyNn0.4C10FpKd6Z_zglQM7bO9F87KNlDxjd5t-7JQnKV6WR0",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ products: data });
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount = async () => {
    this.fetchData();
  };

  render() {
    console.log("render");
    return (
      <Container>
        <Row>
          {this.state.products.map((p) => (
            <SingleProduct product={p} refetchData={() => this.fetchData()} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default ProductsList;
