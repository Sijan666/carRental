import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | My Website</title>
                <meta 
                    name="description" 
                    content="Get in touch with us. Find our contact information, email, and phone number on the Contact page." 
                />
                <meta name="keywords" content="Contact, Support, Help, Customer Service" />
            </Helmet>
            {/* Page Content */}
            <div className="bg-amber-400 mt-35">
                <h1 className='text-center'>Contact Page</h1>
            </div>
        </>
    );
}

export default Contact;