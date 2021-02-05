import { FC } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Error: FC<{}> = () => {
    return (
        <>
        <Header />
        <p>存在しないページです。</p>
        <Footer />
        </>
    );
}

export default Error;