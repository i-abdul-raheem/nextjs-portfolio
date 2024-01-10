import Image from 'next/image';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { Button } from './Button';
import { Link } from './Link';

export const Hero = () => {
  return (
    <div
      className={`relative w-full flex flex-col gap-16 justify-center items-center bg-dark-primary h-screen`}
      id='hero'
    >
      <div className='flex flex-col md:flex-row p-8 items-center justify-center gap-5 md:bg-[#111] rounded-xl max-w-full'>
        <Image
          src='/dp0.png'
          alt='Abdul Raheem'
          width='1024'
          height='1024'
          className='md:w-52 md:h-52 w-32 h-32 object-cover'
        />
        <div className='flex flex-col gap-1 md:items-start items-center'>
          <span className='text-white md:text-heading-1 text-heading-2 font-bold'>
            Abdul <span className='text-primary'>Raheem</span>
          </span>
          <i className='text-white text-body underline'>Full Stack Developer</i>
          <a
            href='https://www.upwork.com/freelancers/~01958f9bba5a1b7436'
            target='_blank'
            rel='no-referer'
          >
            <Button className={'py-1 mt-2 mb-2'} title={'Hire Me'} />
          </a>
          <span className='py-3 w-full flex items-center justify-center md:justify-start gap-5'>
            <a
              href='https://github.com/i-abdul-raheem'
              target='_blank'
              rel='no-referer'
            >
              <FaGithub className='hover:text-white text-white-secondary text-[25px] cursor-pointer' />
            </a>
            <a
              href='https://linkedin.com/in/i-abdul-raheem'
              target='_blank'
              rel='no-referer'
            >
              <FaLinkedin className='hover:text-white text-white-secondary text-[25px] cursor-pointer' />
            </a>
            <a
              href='https://stackoverflow.com/users/19925764/abdul-raheem'
              target='_blank'
              rel='no-referer'
            >
              <FaStackOverflow className='hover:text-white text-white-secondary text-[25px] cursor-pointer' />
            </a>
          </span>
        </div>
      </div>
      <Link href={'about'} className={'hover:bg-dark-primary'}>
        <Image
          src='/hero-arrow.svg'
          alt='Abdul Raheem'
          width='1024'
          height='1024'
          title='Explore'
          className='w-10 p-2'
        />
      </Link>
    </div>
  );
};
