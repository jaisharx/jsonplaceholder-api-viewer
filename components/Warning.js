import { Alert } from 'react-bootstrap';

export default function Warning({ text }) {
    return <Alert variant="danger">{text}</Alert>;
}
