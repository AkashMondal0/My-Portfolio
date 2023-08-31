'use client'
/* eslint-disable @next/next/no-img-element */
import { FC, useLayoutEffect, useRef } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface SkillCardProps {
    name: string;
    image: string;
}
const SkillCard: FC<SkillCardProps> = ({
    name,
    image
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
    return <Card ref={Ref}
        className=' w-full
                        h-full
                        rounded-2xl
                        shadow-xl
                        transition-all
                        duration-500
                        ease-in-out
                        dark:hover:border-gray-100/30
                        hover:border-gray-900/30'>
        <MouseParallaxContainer globalFactorX={0.2} globalFactorY={0.1}>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    2+ years of experience with Microsoft Azure
                </CardDescription>
            </CardContent>
            <CardFooter>
                <MouseParallaxChild factorX={1.0} factorY={1.0} className='mx-auto'>
                    <img src={image} alt="image" className=' w-40 h-40' />
                </MouseParallaxChild>
            </CardFooter>
        </MouseParallaxContainer>
    </Card>
};

export default SkillCard;