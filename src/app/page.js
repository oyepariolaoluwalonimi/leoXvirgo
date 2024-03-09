'use client'
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Confetti from "react-confetti"; // Import the Confetti component
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Preloader from '@/components/Preloader'

export default function Home() {
  const [active, setIsActive] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleRouterPush = () => {
    setIsExploding(true); // Trigger confetti explosion
    setTimeout(() => {
      router.push('https://wa.link/uzamc1');
    }, 5000);
  };


  useEffect( () => {
    (
      async () => {
          // const LocomotiveScroll = (await import('locomotive-scroll')).default
          // const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            // document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <>
          <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        <div className="flex flex-col h-screen w-screen items-center justify-center text-center">
          {isExploding && <Confetti />} {/* Render Confetti component when isExploding is true */}
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <div className="mb-8 flex">
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" />
                  <div className="inline-flex h-6 w-40 cursor-pointer justify-center rounded-full bg-white  text-sm font-medium leading-5 text-slate-600 backdrop-blur-xl ">
                    <Marquee> Adeyemi 🥺❤️ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oluwagbemileke❤️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Onyechi😩❤️ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hallelyah 🥰&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aderinsola🥺 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>
                  </div>
                </span>
              </div>
              <h2 className="text-center text-xl font-medium text-gray-900 ">
                Gbemidebe, My Love{' '}
                <br />
                <span className="animate-text-gradient text-3xl inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent ">
                  Will You Be My Girlfriend ?
                </span>
                😍
              </h2>
              <p className="mt-6 text-center text-lg leading-6 text-gray-600 ">
                I'll be a good boy for you and all, lol. I'll shower you with small love 😂😂 and be a sweet boy. Most importantly, i'll continue to make you smile🥺
              </p>
              <div className="mt-10 flex gap-4">
                <button
                  className="bg-black text-white rounded-xl outline-none px-4 py-1"
                  onClick={() => {
                    handleRouterPush();
                  }}
                >
                  Yes, i dont have choice
                </button>
                <button className="  border-2 px-4 py-1 rounded-xl" onClick={() => { setIsActive(!active) }}>
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${active ? 'flex' : 'hidden'} absolute top-0 bottom-0 right-0 flex items-center justify-center left-0 bg-black bg-opacity-50`}>
          <div className='text-black z-index bg-white shadow-xl flex items-center justify-center rounded-xl h-[35vh] opacity-100 w-[20rem] p- lg:w-[29rem] '>
            <div className='flex items-center justify-center flex-col opacity-100 p-5 text-center'>
              <p>You dont want to be my girlfriend ke?, dey play</p>
              <p>Shall we try again?</p>
              <button className='bg-black mt-4 text-white rounded-xl px-4 py-1' onClick={() => { setIsActive(false) }}>
                <p> Yes daddy 😩!</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
