import Nav from "./nav";
import Head from 'next/head';
import Footer from "./footer";

function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="shortcut icon" href="/netmonk-favicon.svg" type="image/x-icon"/>
            </Head>
            <Nav/>
            {props.children}
            <Footer showTryBanner={props.showTryBanner}/>
        </div>
    )
}

export default Layout
