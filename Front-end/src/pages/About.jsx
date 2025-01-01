// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Title } from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewLetter from "../components/NewLetter"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About image" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur distinctio fugit dolorum. Ea modi rerum vitae obcaecati neque labore consequatur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, assumenda tempore nulla iure pariatur maxime culpa aspernatur consectetur ipsum ex?</p>
        <b className="text-gray-500">Our Misson</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nam perspiciatis quod id ratione perferendis aspernatur eius debitis tempora unde!</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5 text-gray-700">
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga non laborum nesciunt eos nam esse veniam eveniet, distinctio enim voluptate.</p>
        </div>
        <div className="border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5 text-gray-700">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga non laborum nesciunt eos nam esse veniam eveniet, distinctio enim voluptate.</p>
        </div>
        <div className="border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5 text-gray-700">
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga non laborum nesciunt eos nam esse veniam eveniet, distinctio enim voluptate.</p>
        </div>
      </div>
      <NewLetter/>
    </div>
  )
}

export default About