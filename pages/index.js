import { Container } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import fetcher from 'api/fetcher';
import Head from 'next/head';
import useSWR from 'swr';
import Input from 'components/Input';
import Badges from 'components/Badges';
import Loader from 'components/Loader';
import Warning from 'components/Warning';
import JSONViewer from 'components/JSONViewer';
import resources from 'lib/resources';

const APIUrl = resources.APIUrl;
const resource = resources.resource;

const MainContent = ({ data, error }) => {
    if (!data && !error) return <Loader />; // loading state
    if (error) return <Warning errorType="noValidResource" />;

    return (
        <>
            <small>Your're React version: {React.version}</small>
            <JSONViewer data={data} />
        </>
    );
};

export default function Home() {
    const [parameter, setParameter] = useState(resource);
    const { data, error } = useSWR(`${APIUrl}${parameter}`, fetcher);

    return (
        <>
            <Head>
                <title>jsonplaceholder api viewer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="shadow-sm mt-4 mb-4 p-4 border rounded">
                <h1>{APIUrl}</h1>
                <Input val={parameter} onChangeHandler={setParameter} />
                <Badges setParameter={setParameter}>
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
