'use client'
import { FC, useLayoutEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Github, Radio } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProjectCardProps {
    name: string;
    description?: string;
    url: string;
    link: string;
    link2: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
    name,
    description,
    url,
    link,
    link2
}) => {
    const Ref = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Target the image element
        const div = Ref.current;
        const animation = gsap.from(div, {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            paused: true, // Animation starts paused
        });

        // Create a ScrollTrigger
        ScrollTrigger.create({
            trigger: div, // Element that triggers the animation
            start: 'top 95%', // Animation starts when the element is 80% in view
            end: 'bottom 5%', // Animation ends when the element is 20% in view
            animation: animation, // Animation to play
            once: true, // Animation only plays once
            toggleActions: 'play none none none', // Animation plays on entering the trigger area
        });
        return () => {
            // Kill the ScrollTrigger instance
            ScrollTrigger.getAll().forEach((instance) => {
                instance.kill();
            });
        }
    }, []);
    return (
        <div className="flex md:contents">
            <div className="col-start-2 col-end-4 mx-2 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 dark:bg-white bg-black pointer-events-none" />
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full dark:bg-white bg-black text-center">
                    <i className="fas fa-check-circle " />
                </div>
            </div>

            <div className="max-w-[600px] col-start-4 col-end-12 rounded-2xl my-4 m-3 w-full">
                <Card
                    ref={Ref}
                    style={{
                        animationDelay: '1s',
                    }}
                    className='w-full max-w-80
                        rounded-2xl
                        shadow-xl'>
                    <CardContent className='p-2 rounded-2xl'>
                        <img src={url} alt={name} className='w-full rounded-2xl' />
                    </CardContent>
                    <CardHeader>
                        <CardTitle className=' text-center'>{name}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                        <CardDescription className='flex gap-3 mx-auto'>
                            <Link href={link} target="_blank">
                                <Button variant={"outline"} size={'lg'}><Github className='mx-1' />Github</Button>
                            </Link>
                            <Link href={link2} target="_blank">
                                <Button variant={'default'} size={'lg'}><Radio className='mx-1' />Live</Button>
                            </Link>
                        </CardDescription>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default ProjectCard;