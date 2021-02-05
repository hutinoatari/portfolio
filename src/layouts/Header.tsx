import { FC } from "react";
import Link from "next/link";

const Header: FC<{}> = () => {
    return (
        <header>
            <h1>捻れたバベル</h1>
            <nav>
                <Link href="/" replace><a>TOP</a></Link>・
                <Link href="/works" replace><a>WORKS</a></Link>
            </nav>
        </header>
    );
}

export default Header;