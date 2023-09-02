import { FC } from 'react';
import SkillCard from './skillCard';
const skills = [
    {
        name: 'React',
        image: 'react.png',
        description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
    },
    {
        name: 'GraphQL',
        image: 'gql.png',
        description: 'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.'
    },
    {
        name: 'NodeJS',
        image: 'nodejs.png',
        description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'
    },
    {
        name: 'TypeScript',
        image: 'ts.png',
        description: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.'
    },
    {
        name: 'My SQL',
        image: 'mysql.png',
        description: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius daughter, and "SQL", the abbreviation for Structured Query Language.'
    },
    {
        name: 'JavaScript',
        image: 'js.png',
        description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.'
    },
    {
        name: 'Mongodb',
        image: 'mongodb.webp',
        description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.'
    },
    {
        name: 'ExpressJS',
        image: 'express.png',
        description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.'
    },
    {
        name: 'TailwindCSS',
        image: 'tailwind.png',
        description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.'
    },
    {
        name: 'Git',
        image: 'git.png',
        description: 'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.'
    },
    {
        name: 'Azure',
        image: 'azure.png',
        description: 'Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services.'
    },
    {
        name: 'Docker',
        image: 'docker1.png',
        description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.'
    }
]
const Skills: FC = () => {
    return (
        <>
            <div className='h-10 w-full' id='skills'></div>
            <div className="my-10 w-full md:mx-auto" >
            <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-gray-100 mb-4">Skills</h1>
            {/* skills description */}
            <p className="text-2xl text-center text-gray-900 
                dark:text-gray-100 px-4 mx-auto py-2 md:max-w-[95%] lg:max-w-[60%]">
                I have a strong command over both front-end and back-end technologies with 2+ years of experience.</p>
            </div>

            {/* cards */}
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 md:max-w-[95%] lg:max-w-[70%] w-full mx-auto'>
                {skills.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} image={skill.image} description={skill.description} />
                ))}
            </div>
        </>
    );
};

export default Skills;