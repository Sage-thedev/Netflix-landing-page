import {} from 'react'
import TopSection from '../LandingFolder/TopSection'
import BannerSection from '../LandingFolder/BannerSection'
import SectionTwo from '../LandingFolder/SectionTwo'
import SectionThree from '../LandingFolder/SectionThree'
import SectionFour from '../LandingFolder/SectionFour'
import Faq from '../LandingFolder/Faq'

function LandingPage() {
  
  return (
    <div className='overflow-hidden'>
        <TopSection />
        <BannerSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Faq />
    </div>
  )
}

export default LandingPage