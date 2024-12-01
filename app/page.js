import Image from 'next/image'
import Head from 'next/head'
import deved from '../public/IMG_1126.jpg'
import detector from '../public/detector.png'
import ContactForm from '@/components/contactform'
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
import tabs from '../public/image1.png'
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
      <div class='min-w-screen max-w-full overflow-x-hidden'>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 w-screen overflow-x-hidden max-w-[1440px] mx-auto '>
          <section id='home' className=' min-h-screen'>
            <nav className='py-6 mb-8 flex justify-between items-center'>
              <h1 className='xxs:text-xs text-[8px] text-xs sm:text-base lg:text-xl playfair_display underline'>
                Mohammad Ali
              </h1>
              <ul className='flex xxs:text-xs text-[8px] text-xs sm:text-base items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10'>
                <li>
                  <a href='/#home' className='hover:text-amber-950 transition'>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='/#services'
                    className='hover:text-amber-950 transition'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='/#projects'
                    className='hover:text-amber-950 transition'
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href='/#contact'
                    className='hover:text-amber-950 transition'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className='flex items-center'>
              <div className='relative mx-auto w-40 h-40 overflow-hidden rounded-full bg-gradient-to-b'>
                <Image
                  src={deved}
                  layout='fill'
                  objectFit='cover'
                  alt='Profile Picture'
                />
              </div>
              <div className='text-center p-10'>
                <h2 className='text-4xl text-amber-950 py-2  md:text-5xl max-w-lg mx-auto font-satoshi font-bold'>
                  Mohammad Ali
                </h2>
                <h3 className='text-2xl py-2 md:text-3xl'>
                  Full Stack Developer and Designer
                </h3>
                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
                  Hello! I am a passionate and driven full-stack developer ready
                  to bring innovative solutions to your startup or business.
                  With a solid foundation in both web and mobile development, I
                  am committed to delivering high-quality, tailored solutions
                  that meet your unique needs.
                </p>
              </div>
            </div>
            <div className='text-5xl flex justify-center gap-10 py-3 text-gray-800 md:gap-20 mb-8'>
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
          <section id='services'>
            <div>
              <h3 className='h3mktg text-3xl py-1'> Services I offer</h3>
              {/* <p className='text-md py-2 leading-8 text-gray-800'>
              Since the begining of my journey as a freelance developer, I've
              done remote work for
              <span className='text-amber-950'> agencies </span>
              consulted for <span className='text-amber-950'> startups </span>
              andcolaborated with talented people to create for both business
              and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I offer from a wide range of services, including programming and
              teaching.
            </p> */}
            </div>
            <div className='lg:flex gap-10 pt-0'>
              <div className=' card text-center shadow-lg p-10 rounded-xl my-10 bg-slate-400'>
                <div className='flex justify-center'>
                  <Image
                    src={frontend}
                    width={100}
                    height={100}
                    alt='front-end'
                  />
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
                  <Image
                    src={mobileapp}
                    width={100}
                    height={100}
                    alt='mobileapp'
                  />
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>
                  Mobile App Development
                </h3>
                <p className='py-1'>
                  Seamless apps for Android and iOS with clean code and the
                  latest features.
                </p>
              </div>
              <div className='card text-center shadow-lg p-10 rounded-xl my-10 bg-emerald-400'>
                <div className='flex justify-center'>
                  <Image src={backend} width={100} height={100} alt='backend' />
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
                  <li>PHP</li>
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
                  <li>Wordpress</li>
                  <li>Web Redesign</li>
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

          <section id='projects'>
            <div>
              <h3 className=' h3mktg text-3xl py-1'>Projects</h3>
              <p className='text-md py-2 leading-8 text-gray-800 text-xl font-serif'>
                I am excited to share some of the projects I have worked on
                while learning and developing my skills. Each of these projects
                represents a unique challenge and a valuable learning
                experience. Feel free to explore them and see the progress I
                have made along the way!
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-6 py-10 lg:flex-row lg:flex-wrap'>
              <div className='shadow-lg shadow-amber-950 rounded-xl mt-0 mb-8 ml-0 mr-4 mx-0 basis-1/3 flex-1 w-full h-fit'>
                <Image
                  src={tabs}
                  className='rounded-lg object-cover'
                  layout='responsive'
                  alt='Tabsform'
                  style={{
                    width: '384px !important',
                    height: '192px !important',
                  }}
                />
                <div className='py-8 px-6'>
                  <h3 className='mt-0 text-3xl playfair_display font-medium'>
                    Tabsform
                  </h3>
                  <div className='my-3 text-base leading-[1.2] tracking-lighter'>
                    It is a next-generation form-building SaaS platform designed
                    to revolutionize how forms and surveys are created and
                    experienced. Tabsform offers features like real-time
                    input-driven adaptation, AI-based personalization,
                    gamification, and deep analytics integration.
                  </div>
                  <div className='mt-auto self-end'>
                    <a
                      href='https://tabsform.netlify.app'
                      className='items-center flex p-1 w-fit font-bold text-amber-950'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 16 16'
                        height='20'
                        width='20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1'
                      >
                        <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'></path>
                        <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'></path>
                      </svg>
                      Website
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex-col shadow-lg shadow-amber-800 rounded-xl mt-0 mb-8 ml-0 mr-4 mx-0 basis-1/3 flex-1 w-full h-fit'>
                <Image
                  src={detector}
                  className='rounded-lg object-cover'
                  style={{
                    width: '384px !important',
                    height: '192px !important',
                  }}
                  layout='responsive'
                  alt='Lie Detector'
                />
                <div className='py-8 px-6'>
                  <h3 className='mt-0 text-3xl playfair_display font-medium'>
                    Lie Detector
                  </h3>
                  <div className='my-3 text-base leading-[1.2] tracking-lighter'>
                    An advanced software system to enhance deception detection
                    by combining facial analysis with physiological signal
                    processing. Utilizing advanced machine learning algorithms,
                    it analyzes real-time video data to detect subtle behavioral
                    and physiological cues that indicate deceptive behavior.
                  </div>
                  <div className='mt-auto self-end'>
                    <a
                      href='https://github.com/theali29/Lie-Detector'
                      className='items-center flex p-1 w-fit font-bold text-amber-950'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 16 16'
                        height='20'
                        width='20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1'
                      >
                        <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'></path>
                        <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'></path>
                      </svg>
                      Application
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex-col shadow-lg shadow-amber-950 rounded-xl mt-0 mb-8 ml-0 mr-4 mx-0 basis-1/3 flex-1 w-full h-fit'>
                <Image
                  src={gym}
                  className='rounded-lg object-cover'
                  style={{
                    width: '384px !important',
                    height: '192px !important',
                  }}
                  layout='responsive'
                  alt='Ali Fitness'
                />
                <div className='py-8 px-6'>
                  <h3 className='mt-0 text-3xl playfair_display font-medium'>
                    Ali Fitness
                  </h3>
                  <div className='my-3 text-base leading-[1.2] tracking-lighter'>
                    A dynamic and responsive fitness platform designed to
                    enhance the user experience. It features visually appealing
                    layouts, recommended meal plans, personalized fitness
                    programs, and engaging workout sessions, all aimed at
                    inspiring and guiding users on their fitness journey.
                  </div>
                  <div className='mt-auto self-end'>
                    <a
                      href='https://fitness-landing-page1.netlify.app/'
                      className='items-center flex p-1 w-fit font-bold text-amber-950'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 16 16'
                        height='20'
                        width='20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1'
                      >
                        <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'></path>
                        <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'></path>
                      </svg>
                      Website
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex-col  shadow-lg shadow-amber-950 rounded-xl mt-0 mb-8 ml-0 mr-4 mx-0 basis-1/3 flex-1 w-full h-fit'>
                <Image
                  src={education}
                  className='rounded-lg object-cover'
                  style={{
                    width: '384px !important',
                    height: '192px !important',
                  }}
                  layout='responsive'
                  alt='Education Hub'
                />
                <div className='py-8 px-6'>
                  <h3 className='mt-0 text-3xl playfair_display font-medium'>
                    Education Hub
                  </h3>
                  <div className='my-3 text-base leading-[1.2] tracking-lighter'>
                    A comprehensive platform designed for learners and educators
                    to access curated resources, interactive tools, and
                    personalized learning paths. Built to support educational
                    institutions and self-learners alike.
                  </div>
                  <div className='mt-auto self-end'>
                    <a
                      href='https://github.com/theali29/responsive_web'
                      className='items-center flex p-1 w-fit font-bold text-amber-950'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 16 16'
                        height='20'
                        width='20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1'
                      >
                        <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'></path>
                        <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'></path>
                      </svg>
                      Website
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex-col shadow-lg shadow-amber-800 rounded-xl mt-0 mb-8 ml-0 mr-4 mx-0 basis-1/3 flex-1 w-full h-fit'>
                <Image
                  src={web5}
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                  alt='Aimm'
                />
                <div className='py-8 px-6'>
                  <h3 className='mt-0 text-3xl playfair_display font-medium'>
                    Aimm
                  </h3>
                  <div className='my-3 text-base leading-[1.2] tracking-lighter'>
                    It is a next-generation form-building SaaS platform designed
                    to revolutionize how forms and surveys are created and
                    experienced. Tabsform offers features like real-time
                    input-driven adaptation, AI-based personalization,
                    gamification, and deep analytics integration.
                  </div>
                  <div className='mt-auto self-end'>
                    <a
                      href='https://tabsform.netlify.app'
                      className='items-center flex p-1 w-fit font-bold text-amber-950'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 16 16'
                        height='20'
                        width='20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1'
                      >
                        <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'></path>
                        <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'></path>
                      </svg>
                      Website
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex-col shadow-lg shadow-amber-800 rounded-xl mt-0 mb-8 ml-0 mr-4 mx-0 basis-1/3 flex-1 w-full h-fit'>
                <Image
                  src={web6}
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                  alt='Nunito'
                />
                <div className='py-8 px-6'>
                  <h3 className='mt-0 text-3xl playfair_display font-medium'>
                    Nunito
                  </h3>
                  <div className='my-3 text-base leading-[1.2] tracking-lighter'>
                    It is a next-generation form-building SaaS platform designed
                    to revolutionize how forms and surveys are created and
                    experienced. Tabsform offers features like real-time
                    input-driven adaptation, AI-based personalization,
                    gamification, and deep analytics integration.
                  </div>
                  <div className='mt-auto self-end'>
                    <a
                      href='https://tabsform.netlify.app'
                      className='items-center flex p-1 w-fit font-bold text-amber-950'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 16 16'
                        height='20'
                        width='20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1'
                      >
                        <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'></path>
                        <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'></path>
                      </svg>
                      Website
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className='flex-col shadow-lg shadow-amber-800 rounded-xl mt-0 mb-8 ml-0 mr-4 mx-0 basis-1/3 flex-1 w-full h-fit'>
                <Image
                  src={tabs}
                  className='rounded-lg object-cover'
                  width={'100%'}
                  height={'100%'}
                  layout='responsive'
                  alt='Project 7'
                />
                <div className='py-8 px-6'>
                  <h3 className='mt-0 text-3xl playfair_display font-medium'>
                    Tabsform
                  </h3>
                  <div className='my-2 text-base leading-[1.2] tracking-lighter'>
                    It is a next-generation form-building SaaS platform designed
                    to revolutionize how forms and surveys are created and
                    experienced. Tabsform offers features like real-time
                    input-driven adaptation, AI-based personalization,
                    gamification, and deep analytics integration.
                  </div>
                  <div className='mt-auto self-end'>
                    <a
                      href='https://tabsform.netlify.app'
                      className='items-center flex p-1 w-fit font-bold text-amber-950'
                    >
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 16 16'
                        height='20'
                        width='20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mr-1s'
                      >
                        <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z'></path>
                        <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z'></path>
                      </svg>
                      Website
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
          <section
            id='contact'
            className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'
          >
            <h2 className='mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white'>
              Get in Touch
            </h2>
            <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
              Let&apos;s talk about everything!
            </p>
            <ContactForm />
          </section>
        </main>
      </div>
    </div>
  )
}
