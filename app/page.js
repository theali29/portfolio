import Image from 'next/image'
import Head from 'next/head'
import deved from '../public/IMG_1127.jpg'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from 'react-icons/ai'
import frontend from '../public/front-end.png'
import backend from '../public/backend.png'
import mobileapp from '../public/mobileapp.png'
import web1 from '../public/web1.png'
// import web2 from '../public/web2.png'
// import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import gym from '../public/gym1.png'
import education from '../public/education1.png'
import login from '../public/loginpage.png'
// import web6 from '../public/web6.png'

import DarkModeToggle from '../components/DarkModeToggle.js'
// import { useState } from 'react'
export default function Home() {
  // const [darkMode, setDarkMode] = useState(false)

  // const handleDarkModeToggle = (newMode) => {
  //   setDarkMode(newMode)
  // }
  return (
    // className={darkMode ? 'dark' : ''}
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 '>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl playfair_display underline'>Mohammad A. </h1>
            <ul className='flex items-center'>
              {/* <li>
                <DarkModeToggle onToggle={handleDarkModeToggle} />
              </li> */}
              <li>
                <a
                  className='card big-gradient-to-r bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href='/Mohammad Ali - ASE.pdf'
                  download='Mohammad Ali - ASE.pdf'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='relative mx-auto w-40 h-40 overflow-hidden rounded-full bg-gradient-to-b'>
            <Image
              src={deved}
              layout='fill'
              objectFit='cover'
              alt='Profile Picture'
            />
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl text-amber-950 py-2 playfair_display font-medium md:text-6xl '>
              Mohammad Ali
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl'>
              Full Stack Developer and Designer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
              Hello! I am a passionate and driven full-stack developer ready to
              bring innovative solutions to your startup or business. With a
              solid foundation in both web and mobile development, I am
              committed to delivering high-quality, tailored solutions that meet
              your unique needs.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
            <a
              href='https://twitter.com/aliisjustfine'
              target='blank'
              rel='noopener noreferrer'
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href='https://www.linkedin.com/in/mohammadali08/'
              target='blank'
              rel='noopener noreferrer'
            >
              <AiFillLinkedin />
            </a>
            <a
              href='https://youtube.com'
              target='blank'
              rel='noopener noreferrer'
            >
              <AiFillYoutube />
            </a>
            <a
              href='https://github.com/theali29'
              target='blank'
              rel='noopener noreferrer'
            >
              <AiFillGithub />
            </a>
          </div>
        </section>
        <section>
          <div>
            <h3 className=' h3mktg text-3xl py-1'> Services I offer</h3>
            {/* <p className='text-md py-2 leading-8 text-gray-800'>
              Since the begining of my journey as a freelance developer, I've
              done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'> startups </span>
              andcolaborated with talented people to create for both business
              and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I offer from a wide range of services, including programming and
              teaching.
            </p> */}
          </div>
          <div className='lg:flex gap-10'>
            <div className=' card text-center shadow-lg p-10 rounded-xl my-10 bg-slate-400'>
              <div className='flex justify-center'>
                <Image src={frontend} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Front-End Development
              </h3>
              <p className='py-1'>
                Modern front-end design for a smooth and efficient website
                experience.
              </p>
            </div>
            <div className='card text-center shadow-lg p-10 rounded-xl my-10 bg-red-400'>
              <div className='flex justify-center'>
                <Image src={mobileapp} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Mobile App Development
              </h3>
              <p className='py-1'>
                Seamless apps for Android and iOS with clean code and the latest
                features.
              </p>
            </div>
            <div className='card text-center shadow-lg p-10 rounded-xl my-10 bg-emerald-400'>
              <div className='flex justify-center'>
                <Image src={backend} width={100} height={100} />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Back-End Development
              </h3>
              <p className='py-1'>
                Reliable back-end services for smooth data management and
                application performance.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className=' h3mktg text-7xl py-1'> Skills</h3>
          </div>
          <div className='shadow-2xl rounded-xl my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
            <div className=' shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-lg font-bold pt-8 pb-2 text-orange-500'>
                Front-End
              </h3>
              <ul className='list-disc list-inside'>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>JavaScript</li>
                <li>HTML | CSS</li>
                <li>Flutter</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div className='shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-lg font-bold pt-8 pb-2 text-cyan-500'>
                Back-End Development
              </h3>
              <ul className='list-disc list-inside'>
                <li>NodeJS</li>
                <li>Python</li>
                <li>Firebase</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className='shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-lg font-bold pt-8 pb-2 text-rose-800'>
                Version Control
              </h3>
              <ul className='list-disc list-inside'>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
            <div className='shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-lg font-bold pt-8 pb-2 text-fuchsia-800'>
                Design
              </h3>
              <ul className='list-disc list-inside'>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
              </ul>
            </div>
            <div className='shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-lg font-bold pt-8 pb-2 text-indigo-700'>
                CI/CD
              </h3>
              <ul className='list-disc list-inside'>
                <li>Azure</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className=' h3mktg text-3xl py-1'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800 text-xl font-serif'>
              I am excited to share some of the projects I have worked on while
              learning and developing my skills. Each of these projects
              represents a unique challenge and a valuable learning experience.
              Feel free to explore them and see the progress I have made along
              the way!
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web1}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={gym}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={education}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web4}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web5}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={web6}
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
