import { Badge } from 'react-bootstrap';

export default function Badges({ children }) {
    return (
        <div className="mt-2">
            <Badge variant="light">Resources:</Badge>
            {children.map((type) => (
                <Badge className="mx-2" variant="primary" key={type}>
                    {type}
                </Badge>
            ))}
        </div>
    );
}
