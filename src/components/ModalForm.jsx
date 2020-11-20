import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
class ModalForm extends React.Component {
  state = {
    show: false,
    credentials: this.props.data ? this.props.data : {},
  };

  onChangeHandler = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = async () => {
    const url =
      this.props.method === "PUT"
        ? "https://striveschool-api.herokuapp.com/api/product/" +
          this.props.data._id
        : "https://striveschool-api.herokuapp.com/api/product/";
    try {
      const response = await fetch(url, {
        method: this.props.method,
        body: JSON.stringify(this.state.credentials),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjhlNjk4MzViMDAwMTc1ODRlZTciLCJpYXQiOjE2MDU3ODk5MjYsImV4cCI6MTYwNjk5OTUyNn0.4C10FpKd6Z_zglQM7bO9F87KNlDxjd5t-7JQnKV6WR0",
        }),
      });
      if (response.ok) {
        alert("ok");
        this.props.refetchData();
        this.setState({ show: false });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Button variant="primary" onClick={() => this.setState({ show: true })}>
          {this.props.btn}
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              id={"name"}
              value={this.state.credentials.name}
              onChange={(e) => this.onChangeHandler(e)}
            />
            <Form.Control
              id={"brand"}
              value={this.state.credentials.brand}
              onChange={(e) => this.onChangeHandler(e)}
            />
            <Form.Control
              id={"description"}
              value={this.state.credentials.description}
              onChange={(e) => this.onChangeHandler(e)}
            />
            <Form.Control
              id={"imageUrl"}
              value={this.state.credentials.imageUrl}
              onChange={(e) => this.onChangeHandler(e)}
            />
            <Form.Control
              id={"price"}
              value={this.state.credentials.price}
              onChange={(e) => this.onChangeHandler(e)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.handleSubmit()}>
              Post data
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalForm;

// function Example() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//
//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>
//
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
