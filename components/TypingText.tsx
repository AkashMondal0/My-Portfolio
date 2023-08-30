'use client'
import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypingTextProps {
}
const TypingText: FC<TypingTextProps> = ({

}) => {


    return <div className=''>
        <TypeAnimation
            sequence={[
                `Hello! I'm Akash,`,
                2000,
                'I\'m very passionate about full-stack web development.',
                3000,
                'I love creating websites and apps that look great and work well.',
                3000,
            ]}
            wrapper="span"
            speed={40}
            className='
            text-6xl
              text-center
              font-bold
              text-gray-900
              dark:text-gray-100
              mb-4 inline-block '
            repeat={Infinity}
        />
    </div>
};

export default TypingText;