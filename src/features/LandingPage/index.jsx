import Footer from "../Footer/Footer";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import EssentialFeature from "./components/EssentialFeature";
import Features from "./components/Features";
import Partners from "./components/Partners";
import Testamonials from "./components/Testamonials";

export default function LandingPage () {
    return (
        <div>
            <CTA />
            <Features />
            <EssentialFeature />
            <Benefits />
            <Partners />
            <Testamonials />
            <Footer />
        </div>
    );
}