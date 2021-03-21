import { Alert } from 'react-bootstrap';

export default function Warning({ children }) {
    return <Alert variant="danger">{children}</Alert>;
}
