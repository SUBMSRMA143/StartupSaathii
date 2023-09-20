import HeroPage from "./HeroPage/HeroPage"
import AboutUs from "./AboutUs/AboutUs"
import OurServices from "./OurServices/OurServices"
import StartUps from "./Startups/StartUps."
import StoryTelling from "./StoryTelling/StoryTelling"
import LatestNews from "./LatestNews/LatestNews"
import FAQ from "./FAQ's/FAQ's"
import NavBar from "../Navbar/Navbar"


const MainPage = () => {

    return (
        <>
            <NavBar />
            <HeroPage />
            <AboutUs />
            <OurServices />
            <StartUps />
            <StoryTelling />
            <LatestNews />
            <FAQ />
        </>
    )
}

export default MainPage