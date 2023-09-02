/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import ProjectCard from './Card';
import {
  FileText, Instagram,
  ListTodo, MessagesSquare
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
}

interface ComponentNameProps { }
const ComponentName: FC<ComponentNameProps> = () => {

  return (
    <>
      <div className="overflow-x-hidden mt-24">
        <div className="lg:w-[1200px] mx-auto w-full mb-5">
          <h1 className="text-4xl text-center font-semibold mb-6">My Projects</h1>
          <div className="flex flex-col md:grid grid-cols-12">
            {/* Cards */}
            <ProjectCard
              link='https://github.com/AkashMondal0/Sky-Chat'
              link2='https://sky-chat-sigma.vercel.app/'
              name='Sky Chat'
              icon={<MessagesSquare className='mx-auto w-40 h-40 my-3' />} />
            <ProjectCard
              link='https://github.com/AkashMondal0/Instagram-Web-Clone'
              link2='https://instagram-clone-skyinc.vercel.app/'
              name='Instagram Clone'
              icon={<Instagram className='mx-auto w-40 h-40 my-3' />} />
            <ProjectCard
              link='https://github.com/AkashMondal0/To-do-App'
              link2='#'
              name='Todo List App'
              icon={<ListTodo className='mx-auto w-40 h-40 my-3' />} />
            <ProjectCard
              link='https://github.com/AkashMondal0/G-Form-Clone'
              link2='https://typescript-gform-clone.vercel.app/'
              name='Google Form Clone'
              icon={<FileText className='mx-auto w-40 h-40 my-3' />} />
            <ProjectCard
              link='https://github.com/AkashMondal0/Airbnb-Clone'
              link2='https://airbnb-clone-skyinc.vercel.app/'
              name='Airbnb Clone'
              icon={<img src='airbnb.png' alt="image" className='mx-auto w-40 h-40 my-3' />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentName;