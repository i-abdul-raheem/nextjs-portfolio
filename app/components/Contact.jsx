import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { SectionHeader } from './SectionHeader';

export const Contact = () => {
  return (
    <div
      className='w-full bg-dark flex items-center justify-center'
      id='contact'
    >
      <div className='w-full max-w-[1440px] border-b border-b-dark-primary min-h-screen flex flex-col justify-center items-center p-3 gap-8'>
        <SectionHeader title={'Contact'} />
        <span className='text-body text-white-secondary max-w-md text-center mb-5'>
        If you have any questions, feedback, or would like to get in touch, I&apos;m always open to connecting. Feel free to reach out via email, and I&apos;ll respond as soon as possible. I appreciate the opportunity to engage with you and explore potential collaborations. Looking forward to hearing from you!
        </span>
        <a
          href='mailto:abdul@gmail.com'
          className={
            'p-3 px-5 bg-primary rounded-md hover:bg-secondary text-white font-semibold '
          }
        >
          Write Message
        </a>
        <span className='py-3 w-full max-w-md flex items-center justify-center gap-5'>
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
  );
};
