import { truncateString } from '../utils';
import { ReadMore } from './ReadMore';

export const ExperienceItem = ({
  title,
  company,
  yearStart,
  yearEnd,
  description,
}) => {
  return (
    <div className='min-w-full bg-dark-primary p-5 flex flex-col items-start justify-start gap-3 rounded-lg text-white-secondary hover:text-white'>
      <div className='flex flex-col w-full gap-1'>
        <span className='text-primary text-heading-3 font-semibold'>
          {title}
        </span>
        <span className='text-caption text-white-secondary'>
          {company} / {yearStart}-{yearEnd || 'Ongoing'}
        </span>
      </div>
      <ReadMore>{description}</ReadMore>
    </div>
  );
};
