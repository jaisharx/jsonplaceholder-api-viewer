import { Form } from 'react-bootstrap';

export default function Input({ val, onChangeHandler }) {
    return (
        <Form>
            <Form.Control
                type="text"
                placeholder="type url here"
                value={val}
                onChange={(e) => onChangeHandler(e.target.value)}
            ></Form.Control>
        </Form>
    );
}
