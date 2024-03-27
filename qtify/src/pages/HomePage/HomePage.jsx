import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";

function HomePage() {
    const { data } = useOutletContext();
    const { newAlbums, topAlbums, songs } = data;
    return(
        <>
            <HeroSection />
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
        
        </>
    )
}

export default HomePage;