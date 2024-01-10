import Image from 'next/image';
import { truncateString } from '../utils';
import { ReadMore } from './ReadMore';

export const SkillItem = ({ title, avatar, description }) => {
  return (
    <div className='min-w-full bg-dark-primary p-5 flex flex-col items-start justify-start gap-3 rounded-lg text-white-secondary hover:text-white'>
      <div className='flex flex-col w-full gap-2'>
        <Image
          src={avatar || '/vercel.svg'}
          alt={title}
          width='1024'
          height='1024'
          className='rounded-md w-[75px] h-[75px] object-cover'
        />
        <span className='text-primary text-heading-3 font-semibold'>
          {title}
        </span>
      </div>
      <ReadMore>{description}</ReadMore>
    </div>
  );
};
