import React from 'react';
import { Helmet } from 'react-helmet';

export default function Services() {
    return (
        <div className="bg-amber-400 mt-35">
            {/* React Helmet Meta Tags */}
            <Helmet>
                <title>Our Services | My Website</title>
                <meta 
                    name="description" 
                    content="Discover the wide range of services we offer. We provide top-notch solutions tailored to meet your needs." 
                />
                <meta name="keywords" content="Services, Solutions, Offerings, Professional Services" />
            </Helmet>
            {/* Page Content */}
            <h1 className='text-center'>Services Page</h1>
        </div>
    );
}