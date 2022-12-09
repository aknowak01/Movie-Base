import React from 'react';
import './styles/Home.css'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import Container from "../components/Conatainer";

function Home() {
    return (
        <div className="Home">
            <Navbar/>
            <div id={'container'}>
               <Container />
            </div>
            <Footer id={'footer'}/>
        </div>
    );
}

export default Home;
