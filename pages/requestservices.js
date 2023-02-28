import Head from 'next/head'
import MyServices from '../comps/MyServices/MyServices'
import ServicesHeader from '../comps/MyServices/ServicesHeader'
import { server } from '../config'
import { servicesData } from '../data/servicesdata'

const requestservices = () => {
    
    return (
        <div>
            <Head>
                <title>Bivens Blueprint | Request Services</title>
            </Head>

        <ServicesHeader />

        <MyServices servicesData={servicesData} />    

        </div>
    );
}

export default requestservices;