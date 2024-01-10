export const SectionHeader = ({ title }) => {
  return (
    <div className='w-full flex items-center justify-center relative p-3 mb-8'>
      <span className='text-heading-2 text-white uppercase font-bold tracking-wider'>
        {title}
      </span>
      <span className='absolute bottom-0 w-[60px] border-2 border-primary'></span>
    </div>
  );
};
