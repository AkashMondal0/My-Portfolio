/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '../../style/imageRing.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Code2, Github, Mail, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Me',
}

const About = () => {

  return (
    <>
      <div className='mt-24 overflow-x-hidden'>
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
        dark:text-gray-100">About Me</h1>
        {/* main */}
        <div className='lg:flex gap-8 w-full
        p-4 max-w-[1200px] justify-center mx-auto
        my-5 transition-all duration-500 ease-in-out'>
          {/* left */}
          <div>
            <div className='my-5 w-60 lg:w-72 rounded-full px-2 mx-auto animate__animated animate__backInDown'>
              <div className='ring'>
                <img src="sky.jpg" alt="photo"
                  className=" object-cover rounded-full dark:border-4
                shadow-2xl dark:shadow-none" />
              </div>
            </div>
            <h1 style={{
              animationDelay: '1s',
            }} className="text-2xl animate__bounceIn animate__animated text-center font-bold text-gray-900 dark:text-gray-100 my-2">
              Akash Mondal
            </h1>
            <p className='text-center mb-5'>akash2003mondal@gmail.com</p>
            <div className='w-full flex justify-center gap-2 animate__bounceIn animate__animated'>
              <Link href='https://github.com/AkashMondal0' target="_blank">
                <Button variant={"outline"}>
                  <Github className="mr-2 h-4 w-4" /> Github
                </Button>
              </Link>
              <Link href='mailto: akash2003mondal@gmail.com'>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Button>
              </Link>
            </div>
          </div>
          {/* right */}
          <div className='my-2 flex justify-center items-center'>
            <div className='w-full'>
              {/* description  */}
              {/* //TODO: add animation */}
              <p
                style={{
                  animationDelay: '1s',
                }}
                className="animate__animated animate__zoomInUp  text-xl text-center text-gray-900 dark:text-gray-100 px-4 mx-4 py-2 ">
                {`Hi! I'm Akash Mondal, a 20-year-old. I enjoy learning new things and technology. 
                  Stay tuned as I describe my experience in the computer and technology industries.`}</p>
              {/* cards experience */}
              <div className='md:flex gap-3 justify-center my-5'>
                <Card style={{
                  animationDelay: '2s',
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
                    <Code2 className='w-16 h-16 mx-auto' />
                  </CardContent>
                  <CardFooter >
                    <CardDescription className='mx-auto'>
                      2+ years of experience in web development
                    </CardDescription>
                  </CardFooter>
                </Card>
                <Card style={{
                  animationDelay: '2s',
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
                    <Users2 className='w-16 h-16 mx-auto' />
                  </CardContent>
                  <CardFooter >
                    <CardDescription className='mx-auto'>
                      Diploma in Computer Science Engineering (CSE)
                    </CardDescription>
                  </CardFooter>
                </Card>
              </div>
              <div className='animate__bounceInLeft animate__animated'
                style={{
                  animationDelay: '2s',
                }}>
                <p className='mx-3 mt-2 text-xl'>🐍 A Snake Eating my Contributions Graph</p>
                <Card
                  className='w-full h-96 my-2 rounded-2xl shadow-xl'>
                  <img src="grid-snake.svg" alt="about" className='w-full h-full object-cover p-2 rounded-2xl' />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
