import { Container } from 'react-bootstrap';
import { useState } from 'react';
import React from 'react';
import fetcher from 'api/fetcher';
import Head from 'next/head';
import useSWR from 'swr';
import Input from 'components/Input';
import Buttons from 'components/Buttons';
import Warning from 'components/Warning';
import JSONViewer from 'components/JSONViewer';
import resources from 'lib/resources';
import Skeleton from 'react-loading-skeleton';

const APIUrl = resources.APIUrl;
const resource = resources.resource;

const ALLResources = [
    '/posts',
    '/comments',
    '/albums',
    '/photos',
    '/todos',
    '/users',
];

export default function Home() {
    const [parameter, setParameter] = useState(resource);

    return (
        <>
            <Head>
                <title>jsonplaceholder api viewer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="shadow-sm mt-4 mb-4 p-4 border rounded">
                <h1>{APIUrl}</h1>
                <Input val={parameter} onChangeHandler={setParameter} />
                <Buttons setParameter={setParameter} data={ALLResources} />
                <hr />

                <MainContent parameter={parameter} />
            </Container>
        </>
    );
}

const MainContent = ({ parameter }) => {
    const { data, error } = useSWR(`${APIUrl}${parameter}`, fetcher);

    if (error) return <Warning errorType="noValidResource" />;
    if (!data) return <Skeleton count={5} />; // loading state

    return (
        <main>
            <small>React v{React.version} currently in use.</small>
            <JSONViewer data={data} />
        </main>
    );
};
