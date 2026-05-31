import React from 'react';
import { Helmet } from 'react-helmet';

export default function Fleet() {
    return (
        <div className="bg-amber-400 mt-35">
            <Helmet>
                <title>Our Fleet | My Website</title>
                <meta 
                    name="description" 
                    content="Explore our diverse fleet of vehicles. Find the perfect ride for your transportation needs." 
                />
                <meta name="keywords" content="Fleet, Vehicles, Cars, Transport, Services" />
            </Helmet>
            {/* Page Content */}
            <h1 className='text-center'>Fleet Page</h1>
        </div>
    );
}