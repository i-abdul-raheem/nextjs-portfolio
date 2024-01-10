import { PORTFOLIO_DATA } from '../constants';
import { PortfolioItem } from './PortfolioItem';
import { SectionHeader } from './SectionHeader';
import { SkillItem } from './SkillItem';

export const Portfolio = () => {
  return (
    <div
      className='w-full bg-dark flex items-center justify-center'
      id='portfolio'
    >
      <div className='w-full max-w-[1440px] border-b border-b-dark-primary min-h-screen flex flex-col justify-center items-center p-3'>
        <SectionHeader title={'Portfolio'} />
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-3'>
          {PORTFOLIO_DATA?.map((portfolio, index) => (
            <PortfolioItem
              key={index}
              title={portfolio.title}
              avatar={portfolio.avatar}
              description={portfolio.description}
              tags={portfolio.tags}
              link={portfolio.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
