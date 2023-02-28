import Head from "next/head";
import PortfolioHeader from "../comps/Portfolio/PortfolioHeader";
import PortfolioCard from "../comps/Portfolio/PortfolioCard";
import { server } from '../config'
import Portfolio from "../comps/Portfolio/Portfolio";
import { portfolioData } from "../data/portfoliodata";

const portfolio = () => {
    return (
        <div>
            <Head>
                <title>Bivens Blueprint | Portfolio</title>
            </Head>

            <PortfolioHeader />

            <Portfolio portfolioData={portfolioData} />

        </div>
    );
}

export default portfolio;