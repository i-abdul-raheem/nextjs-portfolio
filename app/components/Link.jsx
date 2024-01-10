'use client';

export const Link = ({ href, className, children, onClick }) => {
  const scrollToElement = () => {
    const element = document.getElementById(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };
  return (
    <span
      onClick={() => {
        scrollToElement(href);
        if (onClick) {
          onClick();
        }
      }}
      className={
        'mx-1 hover:bg-primary p-3 rounded-md cursor-pointer ' + className
      }
    >
      {children}
    </span>
  );
};
