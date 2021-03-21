import { Alert } from 'react-bootstrap';

const WarningTypes = {
    noValidResource: 'Type a valid resource from above!',
    emptyParameter: 'No resource provided.',
};

export default function Warning({ errorType }) {
    return <Alert variant="danger">{WarningTypes[errorType]}</Alert>;
}
