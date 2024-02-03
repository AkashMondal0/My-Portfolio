/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ProjectCard from './Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
}


const ComponentName: FC = () => {

  const projects = [
    {
      link: 'https://github.com/AkashMondal0/Sky-chat-expo.git',
      link2: '#',
      name: 'React Native Chat App',
      url: 'sky chat.png',
    },
    {
      link: 'https://github.com/AkashMondal0/React-Native-Instagram-old.git',
      link2: '#',
      name: 'React Native Instagram App',
      url: 'instagram-app.png',
    },
    {
      link: 'https://github.com/AkashMondal0/Airbnb-Clone',
      link2: 'https://airbnb-clone-skyinc.vercel.app/',
      name: 'Airbnb Clone',
      url: 'airbnb-project.png',
    },
    {
      link: 'https://github.com/AkashMondal0/Sky-Chat',
      link2: 'https://sky-chat-sigma.vercel.app/',
      name: 'Sky Chat',
      url: 'sky-chat.png',
    },
    {
      link: 'https://github.com/AkashMondal0/Discord-Clone',
      link2: '#',
      name: 'Discord Clone',
      url: 'Discord-Clone.png',
    },
    {
      link: 'https://github.com/AkashMondal0/Instagram-Web-Clone',
      link2: 'https://instagram-clone-skyinc.vercel.app/',
      name: 'Instagram Clone',
      url: 'insta.png',
    },
    {
      link: 'https://github.com/AkashMondal0/G-Form-Clone',
      link2: 'https://typescript-gform-clone.vercel.app/',
      name: 'Google Form Clone',
      url: 'forms.png',
    },
    {
      link: 'https://github.com/AkashMondal0/To-do-App',
      link2: '#',
      name: 'Todo List App',
      url: 'todo.jpeg',
    },
  ];

  return (
    <>
      <div className="overflow-x-hidden mt-24">
        <div className="lg:w-[1200px] mx-auto w-full mb-5">
          <h1 className="text-4xl text-center font-semibold mb-6">My Projects</h1>
          <div className="flex flex-col md:grid grid-cols-12">
            {/* Cards */}
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                link={project.link}
                link2={project.link2}
                name={project.name}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentName;