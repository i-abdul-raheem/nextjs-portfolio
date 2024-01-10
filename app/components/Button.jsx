'use client';

export const Button = ({ title, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        'p-3 px-5 bg-primary rounded-md hover:bg-secondary text-white font-semibold ' +
        className
      }
    >
      {title}
    </button>
  );
};
