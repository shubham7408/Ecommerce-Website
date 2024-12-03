// eslint-disable-next-line no-unused-vars
import React from 'react'
import {assets} from "../assets/frontend_assets/assets"

const Footer = () => {
  // Memoize static content
  const companyLinks = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Delivery', href: '/delivery' },
    { label: 'Privacy Policy', href: '/privacy' }
  ];

  const contactInfo = [
    { label: '+91-123456789', href: 'tel:+91123456789' },
    { label: 'contact@Adminforever.com', href: 'mailto:contact@Adminforever.com' }
  ];

  return (
    <footer className="container mx-auto px-4">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 lg:gap-14 my-10 mt-20 lg:mt-40 text-sm">
        <div>
          <img 
            src={assets.logo} 
            className="mb-5 w-24 sm:w-32" 
            alt="Admin Forever Logo"
            loading="lazy"
            width={128}
            height={40}
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi culpa hic, deleniti dolor accusamus ad necessitatibus enim praesentium veniam minus.
          </p>
        </div>
        
        <nav aria-label="Company Links">
          <p className="text-lg sm:text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            {companyLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-gray-900 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-lg sm:text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            {contactInfo.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-gray-900 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="w-full">
        <hr className="border-gray-200"/>
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright © {new Date().getFullYear()} Shubham - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;