'use client'
import { cn } from '@/lib/utils';
import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypingTextProps {
    data: any[]
    className: string
}
const TypingText: FC<TypingTextProps> = ({
    data,
    className
}) => {


    return <div className=''>
        <TypeAnimation
            sequence={data}
            wrapper="span"
            speed={40}
            className={cn(className)}
            repeat={Infinity}
        />
    </div>
};

export default TypingText;