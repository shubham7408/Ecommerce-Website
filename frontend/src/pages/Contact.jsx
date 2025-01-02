// eslint-disable-next-line no-unused-vars
import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewLetter from "../components/NewLetter"

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="Contact Image" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600 ">Our Store</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet. <br/> Lorem ipsum dolor sit amet USA.</p>
          <p className="text-gray-500">TEL: (415) 555-01234 <br /> Email:admin@forever.com</p>
          <p className="font-semibold text-xl text-gray-500">Carrers at Forever</p>
          <p className="text-gray-500">Learn More About out Teams and job opening</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewLetter/>
    </div>
  );
};

export default Contact;