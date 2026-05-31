import React from 'react';
import { Helmet } from 'react-helmet';

export default function Abouts() {
    return (
        <div className="bg-amber-400 mt-35">
            <Helmet>
                <title>About Us | My Website</title>
                <meta 
                    name="description" 
                    content="Learn more about our company, mission, and our amazing team on the About page." 
                />
                <meta name="keywords" content="About, Company, Team, Contact" />
            </Helmet>
            {/* Page Content */}
            <h1 className='text-center'>About Page</h1>
        </div>
    );
}