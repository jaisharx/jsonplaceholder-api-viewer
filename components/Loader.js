import { Spinner } from 'react-bootstrap';

export default function Loader() {
    return (
        <Spinner animation="border" role="status" variant="primary">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}
