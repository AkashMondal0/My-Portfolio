/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Button } from './ui/button';
import Background from './backgraound';
import TypingText from './TypingText';
import Link from 'next/link';

interface HeroProps { }
const Hero: FC<HeroProps> = () => {
  return (
    <>
      {/* small device */}
      <div className="md:hidden h-16"></div>
      <div className="md:hidden h-full mt-10">
        <div className='mb-5'>
          <img src="/image 3.png" alt="photo" className="rounded-full w-60 h-60 object-cover mx-auto mt-20
        border-4 border-gray-900 dark:border-gray-100
        shadow-2xl
        dark:shadow-none
        transition-all
        duration-500
        ease-in-out " />
        </div>
        {/* heading */}
        <div className="">
          <h1 className="
        text-4xl
        text-center
        font-bold
        text-gray-900
        dark:text-gray-100
        mb-4
      ">{`Hi! I'm Akash`}</h1>
          {/* description */}
          <p className="
        text-2xl
        text-center
        text-gray-900
        dark:text-gray-100
        px-4
        py-2
      ">{`I'm a fullstack developer who loves playing with web technologies.`}</p>
          <div className="my-5 flex justify-center gap-4">
            <Link href="#skills">
              <Button variant={"outline"} size={'lg'}>My Skills</Button>
            </Link>
            <Link href="/project">
              <Button variant={'default'} size={'lg'}>My Projects</Button>
            </Link>
          </div>
        </div>
        <div className='h-96'>
          <img src="blackhole.png" alt="photo" className="w-full h-full object-cover hidden dark:flex" />
          <img src="light-hero.svg"
            alt="photo" className="p-5 w-full h-full object-cover dark:hidden flex" />
        </div>
      </div>

      {/* large device */}
      <div className="hidden md:flex justify-center items-center h-screen w-full mx-5">
        <div className="w-1/2 mx-auto text-center">
          {/* heading for  large device*/}
          <TypingText />
          {/* description for large device */}
          <p className="
          text-4xl
          text-center
          text-gray-900
          dark:text-gray-100
          p-4">
            {`I enjoy making websites that look great and work smoothly.`}
          </p>
          <div className="my-5 flex justify-center gap-4">
          <Link href="#skills">
              <Button variant={"outline"} size={'lg'}>My Skills</Button>
            </Link>
            <Link href="/project">
              <Button variant={'default'} size={'lg'}>My Projects</Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2"><Background /></div>
      </div>
    </>
  );
};

export default Hero;