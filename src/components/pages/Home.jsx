import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../layouts/Banner'
import Searchbar from '../layouts/Searchbar'
import About from '../layouts/About'
import Service from '../layouts/Service'
import Feature from '../layouts/Feature'
import Fleets from '../layouts/Fleets'
import Testimonial from '../layouts/Testimonial'
import Blog from '../layouts/Blog'

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home | Car Rental</title>
            <meta name="description" content="Welcome to our website. Discover our fleets, services, and more." />
        </Helmet>
        <Banner/>
        <Searchbar/>
        <About/>
        <Service/>
        <Feature/>
        <Fleets/>
        <Testimonial/>
        <Blog/>
        </>
    )
}

export default Home