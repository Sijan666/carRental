import React from 'react'
import Banner from '../layouts/Banner'
import Searchbar from '../layouts/Searchbar'
import About from '../layouts/About'
import Service from '../layouts/Service'
import Feature from '../layouts/Feature'
import Fleets from '../layouts/Fleets'

const Home = () => {
    return (
        <>
        <Banner/>
        <Searchbar/>
        <About/>
        <Service/>
        <Feature/>
        <Fleets/>
        </>
    )
}

export default Home