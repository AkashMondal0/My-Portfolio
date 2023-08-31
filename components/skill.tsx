import { FC } from 'react';
import SkillCard from './skillCard';
const skills = [
    {
        name: 'React',
        image: 'react.png',
    },
    {
        name: 'GraphQL',
        image: 'gql.png',
    },
    {
        name: 'NodeJS',
        image: 'nodejs.png',
    },
    {
        name: 'TypeScript',
        image: 'ts.png',
    },
    {
        name: 'My SQL',
        image: 'mysql.png',
    },
    {
        name: 'JavaScript',
        image: 'js.png',
    },
    {
        name: 'Mongodb',
        image: 'mongodb.webp',
    },
    {
        name: 'ExpressJS',
        image: 'express.png',
    },
    {
        name: 'TailwindCSS',
        image: 'tailwind.png',
    },
    {
        name: 'Git',
        image: 'git.png',
    },
    {
        name: 'Azure',
        image: 'azure.png',
    },
    {
        name: 'Docker',
        image: 'docker1.png',
    }
]
interface SkillsShowProps { }
const SkillsShow: FC<SkillsShowProps> = () => {
    return (
        <>
            <div className="my-10 w-full md:mx-auto" id='skills'>
                <h1 className="
        text-4xl
        text-center
        font-bold
        text-gray-900
        dark:text-gray-100
        mb-4
      ">Skills</h1>
                {/* skills description */}
                <p className="
        text-2xl
        text-center
        text-gray-900
        dark:text-gray-100
        px-4
        mx-auto
        py-2 md:max-w-[95%]
        lg:max-w-[60%]
      ">I have a strong command over both front-end and back-end technologies with 2+ years of experience.</p>
            </div>

            {/* cards */}
            <div className='
        grid
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
        gap-4
        p-4
        md:max-w-[95%]
        lg:max-w-[70%]
        w-full
        mx-auto
            '>
                {skills.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} image={skill.image} />
                ))}
            </div>
        </>
    );
};

export default SkillsShow;