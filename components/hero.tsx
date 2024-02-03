/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Button } from './ui/button';
import Background from './backgraound';
import TypingText from './TypingText';
import Link from 'next/link';
import "../style/imageRing.css"

const Hero: FC = () => {
  return (
    <>
      <div className="md:hidden h-16"></div>
      {/* small device */}
      <div className="md:hidden h-full mt-16">
        <div className='flex justify-center my-8 animate__flip animate__animated'>
          <div className='ring2'>
            <img src="image 3.png" alt="photo" className="rounded-full w-52 h-52 object-cover mx-auto shadow-2xl
             dark:shadow-none transition-all duration-500 ease-in-out "/>
          </div>
        </div>
        {/* heading */}
        <div className='text-center'>
          <TypingText data={[
            `Hello! I'm Akash,`,
            2000,
            'I like javascript and typescript.',
            3000,
            'I love creating websites',
            3000,
          ]} className="text-4xl text-center font-bold text-gray-900 dark:text-gray-100 mb-4" />
          {/* description */}
          <p className="text-2xl text-center text-gray-900 dark:text-gray-100 px-4 py-2">
            {`I enjoy making websites that look great and work smoothly.`}
          </p>
          <div className="my-5 flex justify-center gap-4">
            <Link href="#skills">
              <Button variant={"outline"} size={'lg'}>Skills</Button>
            </Link>
            <Link href="#contact">
              <Button variant={'default'} size={'lg'}>Contact Me</Button>
            </Link>
          </div>
        </div>
        <div className='h-96'>
          <img src="blackhole.png" alt="photo" className="w-full h-full object-cover hidden dark:flex" />
          <img src="hero.jpg"
            alt="hero" className="p-5 w-full h-full object-cover dark:hidden" />
        </div>
      </div>

      {/* large device */}
      <div className="hidden md:flex justify-center items-center h-screen w-full mx-5">
        <div className="w-1/2 mx-auto text-center">
          {/* heading for  large device*/}
          <TypingText
            className='text-5xl
          text-center
          font-bold
          text-gray-900
          dark:text-gray-100
          mb-4 inline-block'
            data={[
              `Hello! I'm Akash,`,
              2000,
              'I\'m very passionate about full-stack web development.',
              3000,
              'I love creating websites and apps that look great and work well.',
              3000,
            ]} />
          {/* description for large device */}
          <p className="text-4xl text-center text-gray-900 dark:text-gray-100 p-4">
            {`I enjoy making websites that look great and work smoothly.`}
          </p>
          <div className="my-5 flex justify-center gap-4">
            <Link href="#skills">
              <Button variant={"outline"} size={'lg'}>Skills</Button>
            </Link>
            <Link href="#contact">
              <Button variant={'default'} size={'lg'}>Contact Me</Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2"><Background /></div>
      </div>
    </>
  );
};

export default Hero;