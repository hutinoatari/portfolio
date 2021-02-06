import { FC } from "react";
import Head from "next/head";

const Works: FC<{}> = () => {
    return (
        <>
            <Head>
                <title>WORKS</title>
            </Head>

            <h2>WORKS</h2>
            <ol reversed>
                <li>Space Wandering</li>
                <li>食神セタップ</li>
                <li>流動者</li>
                <li>期限ギリギリスト</li>
            </ol>
        </>
    );
};

export default Works;
