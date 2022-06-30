
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'bootstrap';
import { useRef } from 'react';
import Col from 'react-bootstrap/esm/Col';

function LunchWishForm(props) {
    const nameInputRef = useRef(null);
    const lunchWishInputRef = useRef(null);

  return (
      <Form onSubmit={e => props.onSubmit(e, nameInputRef?.current?.value, lunchWishInputRef?.current?.value)}>
        <Row>
          <Col>
            <Form.Control placeholder="Name" ref={nameInputRef} />
          </Col>
          <Col>
            <Form.Control placeholder="Lunch wish" ref={lunchWishInputRef} />
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