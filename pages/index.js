import Head from 'next/head'
import { server } from '../config'
import HeadBanner from '../comps/Homepage/HeadBanner'
import AboutMeSection from '../comps/Homepage/AboutMeSection'
import WhatIOfferSection from '../comps/Homepage/WhatIOfferSection'
import SetApart from '../comps/Homepage/SetApart'
import PricingSection from '../comps/Homepage/PricingSection'
import CallToAction from '../comps/Homepage/CallToAction'
import { whatioffer } from '../data/whatiofferdata'
import { setMeApartData } from '../data/setmeapartdata'
import { packagesData } from '../data/packagesdata'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bivens Blueprint</title>
      </Head>

      <main>
        <HeadBanner />

        <AboutMeSection />

        <WhatIOfferSection whatIOfferData={whatioffer} />

        <SetApart setMeApartData={setMeApartData} />

        <PricingSection packagesData={packagesData} />

        <CallToAction />     
      </main>

    </div>
  )
}
