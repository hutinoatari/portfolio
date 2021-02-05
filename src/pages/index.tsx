import { FC } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Top: FC<{}> = () => {
    return (
        <>
            <Header />
            <section>
                <h2>NEWS</h2>
                <ul>
                    <li>サイト公開</li>
                </ul>
            </section>

            <section>
                <h2>ABOUT</h2>
                <dl>
                    <dt>コーダー</dt>
                    <dd>淵野アタリ</dd>
                    <dt>サークル</dt>
                    <dd>捻れたバベル</dd>
                    <dt>Twitter</dt>
                    <dd>@umaiebiten2</dd>
                    <dt>github</dt>
                    <dd>hutinoatari</dd>
                </dl>
            </section>
            <Footer />
        </>
    );
};

export default Top;
