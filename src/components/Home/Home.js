import React from 'react';
import Notice from '../Notice/Notice';
import HeroSection from './HeroSection';
import LatestBoyans from './LatestBoyans';
import LatestQA from './LatestQA';

const Home = ({setAudioData}) => {
    return (
        <div>
            <HeroSection></HeroSection>
            {/* <LatestBoyans setAudioData={setAudioData}></LatestBoyans> */}
            {/* <LatestQA setAudioData={setAudioData}></LatestQA> */}
            <Notice/>
        </div>
    );
};

export default Home;