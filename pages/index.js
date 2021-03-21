import React from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import fetcher from 'api/fetcher';
import Head from 'next/head';
import useSWR from 'swr';
import Input from 'components/Input';
import Badges from 'components/Badges';
import Loader from 'components/Loader';
import Warning from 'components/Warning';

const APIUrl = 'https://jsonplaceholder.typicode.com';
const resource = 'todos/1';

const MainContent = ({ data, error }) => {
    if (!data) return <Loader />;
    if (error)
        return (
            <Warning>Resources can't be empty. Type any from above!</Warning>
        );

    return (
        <>
            <small>Your're React version: {React.version}</small>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default function Home() {
    const [parameter, setParameter] = useState(resource);
    const { data, error } = useSWR(`${APIUrl}/${parameter}`, fetcher);

    return (
        <>
            <Head>
                <title>Jsonplaceholder api viewer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="shadow-sm mt-4 mb-4 p-4 border rounded">
                <h1>{APIUrl}</h1>
                <Input val={parameter} onChangeHandler={setParameter} />
                <Badges>
                    {[
                        '/posts',
                        '/comments',
                        '/albums',
                        '/photos',
                        '/todos',
                        '/users',
                    ]}
                </Badges>
                <hr />

                {<MainContent data={data} error={error} />}
            </Container>
        </>
    );
}
