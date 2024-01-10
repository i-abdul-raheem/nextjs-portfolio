import Image from 'next/image';
import { ReadMore } from './ReadMore';

export const PortfolioItem = ({ avatar, title, description, tags, link }) => {
  return (
    <div className='min-w-full bg-dark-primary p-5 flex flex-col items-start justify-start gap-3 rounded-lg text-white-secondary hover:text-white'>
      <div className='flex flex-col w-full gap-2'>
        <div className='rounded-lgw-full h-[215px]'>
          <Image
            src={avatar || '/vercel.svg'}
            alt={title}
            width='1024'
            height='1024'
            className='rounded-md w-full h-full object-cover'
          />
        </div>
        <a href={link} target='_blank' rel='no-refferer' className='text-primary text-heading-3 font-semibold'>
          {title}
        </a>
      </div>
      <ReadMore>{description}</ReadMore>
      <div className='flex items-center justify-start flex-wrap w-full gap-3'>
        {tags?.slice(0, 4)?.map((i, index) => (
          <span
            key={index}
            className='text-caption border border-white-secondary p-2 rounded-md'
          >
            {i}
          </span>
        ))}
        {tags?.length - 4 > 0 && (
          <span className='text-caption border border-white-secondary p-2 rounded-md'>
            +{tags?.length - 4}
          </span>
        )}
      </div>
    </div>
  );
};
