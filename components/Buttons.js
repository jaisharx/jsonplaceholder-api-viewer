import { Button } from 'react-bootstrap';

export default function Buttons({ setParameter, data }) {
    return (
        <div className="d-flex mt-2 gap">
            {data.map((type) => (
                <Button
                    variant="primary"
                    size="sm"
                    key={type}
                    onClick={() => setParameter(type)}
                >
                    {type}
                </Button>
            ))}
        </div>
    );
}
