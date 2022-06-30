import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";

function LunchWishForm(props) {
  return (
      <Form onSubmit={props.onSubmit}>
        <Row>
          <Col>
            <Form.Control placeholder="Name" />
          </Col>
          <Col>
            <Form.Control placeholder="Lunch wish" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
            Submit
            </Button>
          </Col>
        </Row>
      </Form>
  );
}
export default LunchWishForm;