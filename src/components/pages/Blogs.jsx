import React from 'react';
import { Helmet } from 'react-helmet';

export default function Blogs() {
    return (
        <div className="bg-amber-400 mt-35">
            {/* React Helmet Meta Tags */}
            <Helmet>
                <title>Our Blog | My Website</title>
                <meta 
                    name="description" 
                    content="Read our latest blog posts, news, and articles on various interesting topics." 
                />
                <meta name="keywords" content="Blog, Articles, News, Updates, Posts" />
            </Helmet>
            {/* Page Content */}
            <h1 className='text-center'>Blogs Page</h1>
        </div>
    );
}