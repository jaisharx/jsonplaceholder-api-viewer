import { Spinner } from 'react-bootstrap';

export default function Spinner() {
    return (
        <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}
