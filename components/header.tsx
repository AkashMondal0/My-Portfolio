/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import { FC } from 'react';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import Link from 'next/link';

interface HeaderProps { }
const Header: FC<HeaderProps> = () => {
    return (
        <div className={cn('navbar-blur', "w-full h-16 fixed top-0 z-50")}>
            <div className="flex justify-between items-center h-full w-full mx-3">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full dark:bg-white bg-black">
                            <img src="/Image.png" alt="avatar" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">SkySolo</h1>
                    </div>
                </Link>
                {/* navigation */}
                <div className="items-center gap-4 flex">
                    {/* navigation */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-gray-900 dark:text-gray-100">Home</Link>
                        <Link href="/about" className="text-gray-900 dark:text-gray-100">About</Link>
                        <Link href="/projects" className="text-gray-900 dark:text-gray-100">Projects</Link>

                    </div>
                    {/*  */}
                    <div className='md:flex hidden gap-4'>
                        <Link href="#contact">
                            <Button>Contact</Button>
                        </Link>
                        {/* mode toggle */}
                    </div>
                    <ModeToggle />
                    <div className="w-4">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;