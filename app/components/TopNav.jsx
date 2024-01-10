'use client';

import Image from 'next/image';
import { Link } from './Link';
import { CiMenuFries } from 'react-icons/ci';
import { Button } from './Button';
import { useState, useLayoutEffect, useRef, useEffect } from 'react';

export const TopNav = () => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const handleToggleSideNav = () => {
    if (ref.current) {
      if (ref.current.style.right === `-${width}px`) {
        ref.current.style.right = '0px';
      } else {
        ref.current.style.right = `-${width}px`;
      }
    }
  };
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (ref.current) {
      ref.current.style.width = `${width}px`;
      ref.current.style.right = `-${width}px`;
      ref.current.style.display = `block`;
    }
  }, [ref, width]);
  return (
    <div
      className='fixed top-0 left-0 z-50 w-full flex justify-center items-center bg-dark-primary md:bg-none'
      id='navbar'
    >
      <header className='p-3 w-full max-w-[1440px] flex justify-between items-center'>
        <Image src={'/vercel.svg'} alt='Abdul Raheem' height={75} width={75} />
        <div className='text-white hidden md:flex gap-1 capitalize'>
          <Link href='about'>about</Link>
          <Link href='experience'>experience</Link>
          <Link href='skills'>skills</Link>
          <Link href='portfolio'>portfolio</Link>
          <Link href='contact'>contact</Link>
          <a href='/resume.pdf' download={true}>
            <Button title={'Resume'} />
          </a>
        </div>
        <CiMenuFries
          onClick={handleToggleSideNav}
          className='md:hidden text-white text-heading-1 hover:bg-black-transparent p-2 rounded-full'
        />
      </header>
      <div
        ref={ref}
        className={`hidden h-[calc(100vh-63.5px)] bg-dark-primary absolute top-[63.5px] !important transition-all duration-700 border-l-dark`}
      >
        <div className='flex flex-col items-start justify-center text-white p-3 capitalize'>
          <Link
            onClick={handleToggleSideNav}
            href='about'
            className='w-[calc(100%-8px)] mb-3'
          >
            about
          </Link>
          <Link
            onClick={handleToggleSideNav}
            href='experience'
            className='w-[calc(100%-8px)] mb-3'
          >
            experience
          </Link>
          <Link
            onClick={handleToggleSideNav}
            href='skills'
            className='w-[calc(100%-8px)] mb-3'
          >
            skills
          </Link>
          <Link
            onClick={handleToggleSideNav}
            href='portfolio'
            className='w-[calc(100%-8px)] mb-3'
          >
            portfolio
          </Link>
          <Link
            onClick={handleToggleSideNav}
            href='contact'
            className='w-[calc(100%-8px)] mb-3'
          >
            contact
          </Link>
          <a href='/resume.pdf' download={true}>
            <Button title={'Resume'} />
          </a>
        </div>
      </div>
    </div>
  );
};
