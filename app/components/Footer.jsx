export const Footer = () => {
  const date = new Date();
  return (
    <div className='flex items-center justify-centerw-full bg-dark-primary'>
      <div className='p-3 py-5 w-full max-w-[1440px] text-center text-white'>
        <span>Abdul <span className="text-primary">Raheem</span> - {date.getFullYear()}</span>
      </div>
    </div>
  );
};
