import { FC } from "react";
import Head from "next/head";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Error: FC<{}> = () => {
    return (
        <>
            <Head>
                <title>NOTHING</title>
            </Head>

            <Header />
            <p>存在しないページです。</p>
            <Footer />
        </>
    );
};

export default Error;
