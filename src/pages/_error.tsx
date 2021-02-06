import { FC } from "react";
import Head from "next/head";

const Error: FC<{}> = () => {
    return (
        <>
            <Head>
                <title>NOTHING</title>
            </Head>

            <p>存在しないページです。</p>
        </>
    );
};

export default Error;
