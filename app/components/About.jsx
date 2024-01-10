import Image from 'next/image';
import { SectionHeader } from './SectionHeader';

const Stats = ({ title, total }) => {
  return (
    <div className='flex flex-col items-center justify-center hover:text-white'>
      <span className='text-heading-1 font-bold text-primary'>{total}+</span>
      <span className='text-caption'>{title}</span>
    </div>
  );
};

export const About = () => {
  return (
    <div className='w-full bg-dark flex items-center justify-center' id='about'>
      <div className='w-full max-w-[1440px] border-b border-b-dark-primary min-h-screen flex flex-col justify-center items-center p-3'>
        <SectionHeader title={'About Me'} />
        <div className='flex flex-col md:flex-row items-start justify-center text-white-secondary p-5 gap-5'>
          <div className='w-full md:w-[40%] flex items-center justify-center'>
            <div className='w-[242px] relative h-[242px]'>
              <div className='absolute w-[242px] h-[242px] border border-r-white-secondary -right-[12px] top-[12px] z-30'></div>
              <Image
                src={'/dp0.jpeg'}
                alt='Logo Temp'
                height={1024}
                width={1024}
                className='w-[242px] h-[242px] relative z-40'
              />
            </div>
          </div>
          <div className='flex items-start justify-start flex-col gap-5'>
            <p>
              As a full-stack developer, I orchestrate the symphony of code,
              weaving seamless interactions on the front-end and orchestrating
              powerful functionalities on the back-end, crafting digital
              experiences that transcend mere lines of code.
            </p>
            <div className='flex flex-col md:flex-row items-start justify-between gap-5 w-full'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full'>
                <span className='font-semibold text-white'>Email:</span>
                <a
                  className='col-span-2 hover:text-white'
                  href='mailto:abdulraheem.arhex@gmail.com'
                >
                  abdulraheem.arhex@gmail.com
                </a>
                <span className='font-semibold text-white'>Phone:</span>
                <a
                  className='col-span-2 hover:text-white'
                  href='tel:+92-313-438-6826'
                >
                  +92-313-438-6826
                </a>
                <span className='font-semibold text-white'>WhatsApp:</span>
                <a
                  className='col-span-2 hover:text-white'
                  href='https://wa.me/923134386826'
                >
                  +92-313-438-6826
                </a>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full'>
                <span className='font-semibold text-white'>Age:</span>
                <a className='col-span-2 hover:text-white'>25</a>
                <span className='font-semibold text-white'>LinkedIn:</span>
                <a
                  className='col-span-2 hover:text-white'
                  href='https://linkedin.com/in/i-abdul-raheem'
                >
                  i-abdul-raheem
                </a>
                <span className='font-semibold text-white'>Languages:</span>
                <a className='col-span-2 hover:text-white'>English, German</a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full max-w-md bg-dark-primary p-5 text-white-secondary grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Stats total={1} title={'Years of experience'} />
          <Stats total={51} title={'Completed Projects'} />
          <Stats total={6} title={'Satisfied Clients'} />
        </div>
      </div>
    </div>
  );
};
