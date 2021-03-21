import { useEffect } from 'react';

import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json);

export default function JSONViewer({ data }) {
    useEffect(() => {
        hljs.initHighlighting();
        hljs.highlightAll();
    }, [data]);

    return (
        <pre>
            <code className="language-json hljs">{`${JSON.stringify(
                data,
                null,
                2
            )}`}</code>
        </pre>
    );
}
