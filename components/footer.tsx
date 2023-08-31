import Link from 'next/link';
import { FC } from 'react';

interface FooterProps { }

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="
    bg-white
    border-t-[1px]
    xl:mt-20
    dark:bg-black
    ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-8 my-5 justify-between">

          <div className="mt-4 md:mt-0">
            <h5 className="uppercase mb-3 font-bold text-white">LOGO</h5>
            <ul className="list-none">
              <li className="mt-2">
                <Link href="/">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150">Home</div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/about">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150">About</div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/contact">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150">Contact</div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h5 className="uppercase mb-3 font-bold text-white">Resources</h5>
            <ul className="list-none">
              <li className="mt-2">
                <Link href="/">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150">Home</div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/about">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150">About</div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/contact">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150">Contact</div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h5 className="uppercase mb-3 font-bold text-white">More</h5>
            <ul className="list-none">
              <li className="mt-2">
                <Link href="/privacy-policy">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150">Privacy Policy</div>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="/terms-of-service">
                  <div className=" hover:opacity-80 transition-all delay-75 duration-150">Terms of Service</div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h5 className="uppercase mb-3 font-bold text-white">About Sky.inc</h5>
            <ul className="list-none">
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Twitter
                </div>
              </li>
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Facebook
                </div>
              </li>
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Instagram
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h5 className="uppercase mb-3 font-bold text-white">Legal</h5>
            <ul className="list-none">
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Twitter
                </div>
              </li>
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Facebook
                </div>
              </li>
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Instagram
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0">
            <h5 className="uppercase mb-3 font-bold text-white">Subscribe to our newsletter</h5>
            <ul className="list-none">
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Twitter
                </div>
              </li>
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Facebook
                </div>
              </li>
              <li className="mt-2">
                <div className=" hover:opacity-80 transition-all delay-75 duration-150">
                  Instagram
                </div>
              </li>
            </ul>
          </div>

        </div>
        <div className="mtb-2 border-t-[1px]">
          <p className="text-base hover:opacity-80 transition-all delay-75 duration-150">
            &copy; 2023 Sky.Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;