/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../../style/imageRing.css'
import Header from '@/components/header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Code2, Users2 } from 'lucide-react';


const About = () => {

  return (
    <div className='sky-bg-gradient-about'>
      <Header />
      <div className='mt-16 overflow-x-hidden'>
        {/* top */}
        <h1
          style={{
            animationDelay: '2s',
          }}
          className="
        text-4xl animate__bounceIn animate__animated
        text-center
        font-bold
        text-gray-900
        dark:text-gray-100
        mt-5
      ">About Me</h1>
        <div className='lg:flex gap-8 w-full lg:w-4/5 p-3
        mx-auto my-5 transition-all duration-500 ease-in-out'>
          {/* left */}
          <div className='my-auto'>
            <div
              className='my-5 w-60 lg:w-72 rounded-full px-2 mx-auto animate__animated animate__backInDown'>
              <div className='card'>
                <img src="sky.jpg" alt="photo"
                  className=" object-cover rounded-full dark:border-4
                shadow-2xl dark:shadow-none" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className='my-2 flex justify-center items-center'>
            <div className='w-full lg:max-w-[85%]'>
              {/* cards experience */}
              <div className='md:flex gap-3 justify-center my-5'>
                <Card style={{
                  animationDelay: '1s',
                }}
                  className='w-full my-2 h-60 animate__bounceInLeft animate__animated
                        rounded-2xl
                        shadow-xl'>
                  <CardHeader className=' text-center'>
                    <CardTitle>
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Code2 className='w-20 h-20 mx-auto' />
                  </CardContent>
                  <CardFooter >
                    <CardDescription className='mx-auto'>
                      2+ years of experience in web development
                    </CardDescription>
                  </CardFooter>
                </Card>
                <Card style={{
                  animationDelay: '1s',
                }}
                  className='my-2 w-full h-60 animate__bounceInRight animate__animated
                        rounded-2xl
                        shadow-xl'>
                  <CardHeader className=' text-center'>
                    <CardTitle>
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Users2 className='w-20 h-20 mx-auto' />
                  </CardContent>
                  <CardFooter >
                    <CardDescription className='mx-auto'>
                      Diploma in Computer Science Engineering (CSE)
                    </CardDescription>
                  </CardFooter>
                </Card>
              </div>
              {/* description  */}
              {/* //TODO: add animation */}
              <p
                style={{
                  animationDelay: '2s',
                }}
                className="animate__animated animate__zoomInUp 
        text-2xl
        text-center
        text-gray-900
        dark:text-gray-100
        px-4 mx-4
        py-2
      ">{`Hi! I'm Akash Mondal, a 19-year-old guy following 
      a Diploma in Computer Science Engineering (CSE).
       I enjoy learning new things and technology.
        Stay tuned as I describe my experience in the computer and technology industries.`}</p>
            </div>
          </div>
        </div>
        <div className='h-[40vh]'></div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default About;
