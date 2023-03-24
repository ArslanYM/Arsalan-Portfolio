import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Arsalan</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Developer and Open Source </p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a  full-stack developer and content creator building my
            version of the digital world one step at a time. All coding projects
            are built from the ground up, from planning and designing all the way
            to solving real-life problems with code.
            <br />
            I love to contribute to Open Source Project and love the Idea of learning in public, If you want to learn more and get started with your journey subscribe to  {' '}
            <a
               href="https://www.youtube.com/channel/UC5ikQhC8LL602d4nDbMFdmg"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               ArsalanMalik
            </a>{' '}
            and join my journey.
         </p>
      </div>
   )
}

export default Intro;