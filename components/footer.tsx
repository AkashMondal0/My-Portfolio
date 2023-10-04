/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FC } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer: FC = () => {
  return (
    <footer className="
    bg-white
    border-t-[1px]
    xl:mt-20 mx-2
    dark:bg-black
    ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 my-5 justify-between">

          <div className="mt-2 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full dark:bg-white bg-black">
                <img src="Image.png" alt="avatar" className="w-full h-full rounded-full object-cover" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">SkySolo</h1>
            </div>
          </div>

          <div className="mt-2 md:mt-0">
            <h5 className="uppercase mb-3">Resources</h5>
            <ul className="list-none">
              <li className="mt-2">
                <Link href="/">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Portfolio</div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/about">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">About</div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="#contact">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Contact</div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/projects">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Projects</div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-2 md:mt-0">
            <h5 className="uppercase mb-3">More</h5>
            <ul className="list-none">
              <li className="mt-2">

                <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Privacy Policy</div>

              </li>
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">Terms of Service</div>

              </li>
            </ul>
          </div>

          <div className="mt-2 md:mt-0">
            <h5 className="uppercase mb-3">About Sky.inc</h5>
            <ul className="list-none">
              <li className="mt-2">
                <Link href="https://github.com/AkashMondal0" target="_blank">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">
                    Github
                  </div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="https://stackoverflow.com/users/21296702/akash-mondal" target="_blank">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">
                    Stack Overflow
                  </div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="https://www.instagram.com/akashmondal__1/" target="_blank">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer">
                    Instagram
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-2 md:mt-0">
            <h5 className="uppercase mb-3">Subscribe to our newsletter</h5>
            <ul className="list-none">
              <li className="my-2">
                <div className="my-2 hover:opacity-80 transition-all delay-75 duration-150 sm:cursor-pointer text-sm">
                  Get the latest news and updates from Sky.Inc
                </div>
              </li>
              <li className="my-2">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t-[1px]">
          <p className="text-base hover:opacity-80 py-2 transition-all delay-75 duration-150">
            &copy; 2023 Sky.Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;