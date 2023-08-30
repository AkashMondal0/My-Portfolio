import TypingText from "@/components/TypingText";
import Background from "@/components/backgraound";
import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="w-full h-full overflow-x-hidden pt-16" id='myScrollbar'>
        <Header />
        {/* small device */}
        <div className="md:hidden h-full">
          {/* heading */}
          <div className="my-16">
            <h1 className="
            text-4xl
            text-center
            font-bold
            text-gray-900
            dark:text-gray-100
            mb-4
          ">{`Hi! I'm Akash`}</h1>
            {/* description */}
            <p className="
            text-2xl
            text-center
            text-gray-900
            dark:text-gray-100
            px-4
            py-2
          ">{`I'm a fullstack developer who loves playing with web technologies.`}</p>
            <div className="my-5 flex justify-center gap-4">
              <Button variant={'default'} size={'lg'}>Show Projects</Button>
              <Button variant={"outline"} size={'lg'}>Show Skills</Button>
            </div>
          </div>
          {/* background */}
          <Background />
        </div>

        {/* large device */}
        <div className="hidden md:flex justify-center items-center h-full w-full mx-5">
          <div className="w-1/2 mx-auto text-center">
            {/* heading for  large device*/}
            <TypingText />
            {/* description for large device */}
            <p className="
              text-4xl
              text-center
              text-gray-900
              dark:text-gray-100
              p-4">
              {`          I enjoy making websites that look great and work smoothly.`}
            </p>
            <div className="my-5 flex justify-center gap-4">
              <Button variant={'default'} size={'lg'}>Show Projects</Button>
              <Button variant={"outline"} size={'lg'}>Show Skills</Button>
            </div>
          </div>
          <div className="w-1/2"><Background /></div>
        </div>

        {/* show skills */}
        <div className="w-full h-screen">

        </div>
      </div>
    </>
  )
}
