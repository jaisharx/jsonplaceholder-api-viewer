import { Badge } from 'react-bootstrap';

export default function Badges({ resources }) {
    return (
        <div className="mt-2">
            {resources.map((type) => (
                <Badge className="mx-2" key={type}>{type}</Badge>
            ))}
        </div>
    );
}
