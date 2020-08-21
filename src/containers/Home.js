import React, { useLayoutEffect } from "react";
import Aux from "../hoc/Auxilliary";
import Intro from "../components/layout/Intro";
import FeaturedWorks from "../components/layout/FeaturedWorks";
import Features from "../components/layout/Features";
import Tools from "../components/layout/Tools";

const Home = () => {
    useLayoutEffect(() => window.scrollTo(0, 0), []);

    return (
        <Aux>
            <Intro />
            <FeaturedWorks />
            <Features />
            <Tools />
        </Aux>
    )
}

export default Home;