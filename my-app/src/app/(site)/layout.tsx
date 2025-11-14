import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import "../globals.css";

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderMenu />
            {children}
            <Footer />
        </>
    );
}