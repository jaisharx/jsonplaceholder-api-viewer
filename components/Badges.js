import { Badge, Button } from 'react-bootstrap';

export default function Badges({ setParameter, children }) {
    return (
        <div className="d-flex mt-2 gap">
            {children.map((type) => (
                <Button variant="primary" size="sm" key={type} onClick={() => setParameter(type)}>
                    {type}
                </Button>
            ))}

            <style jsx>
                {`
                    .gap {
                        gap: 10px;
                    }
                `}
            </style>
        </div>
    );
}
