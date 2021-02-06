import { FC } from "react";
import Head from "next/head";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Works: FC<{}> = () => {
    return (
        <>
            <Head>
                <title>WORKS</title>
            </Head>

            <Header />
            <h2>WORKS</h2>
            <ol reversed>
                <li>Space Wandering</li>
                <li>食神セタップ</li>
                <li>流動者</li>
                <li>期限ギリギリスト</li>
            </ol>
            <Footer />
        </>
    );
};

export default Works;
