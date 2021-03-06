import { FC } from "react";
import { AppProps } from "next/app";
import "../styles/App.scss";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
};

export default App;
