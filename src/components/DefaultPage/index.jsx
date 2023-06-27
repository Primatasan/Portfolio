import Footer from "/src/components/Footer";
import Header from "/src/components/Header";
import Menu from "/src/components/Menu";
import { Outlet } from "react-router-dom";

export default function DefautPage(){
    return(
        <>
            <header>
                <Menu />
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}