import { ExperienceItem } from './ExperienceItem';
import { SectionHeader } from './SectionHeader';

export const Experience = () => {
  return (
    <div
      className='w-full bg-dark flex items-center justify-center'
      id='experience'
    >
      <div className='w-full max-w-[1440px] border-b border-b-dark-primary min-h-screen flex flex-col justify-center items-center p-3'>
        <SectionHeader title={'Experience'} />
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-3'>
          <ExperienceItem
            company={'ConsoleDot . Full-Time'}
            title={'Senior Software Engineer'}
            yearStart={'Jan 2023'}
            description={`Over the course of the last twelve months, I have served as a Full-Stack Developer specializing in the
              MERN (MongoDB, Express.js, React, Node.js) stack. My professional expertise encompasses the
              development of high-caliber enterprise applications, with a particular focus on diverse projects
              ranging from e-commerce dashboards and freelancing platforms to the integration of metaverse
              wallets and the creation of social media applications. Additionally, I possess practical experience in
              implementing sophisticated Chatbots, all while maintaining a keen attention to detail and adhering to
              industry best practices.`}
          />
          <ExperienceItem
            company={'Cooperative Computing . Contract'}
            title={'MERN Developer'}
            yearStart={'Aug 2023'}
            yearEnd={'Sep 2023'}
            description={`I've served as a dedicated Full-Stack Developer with a focus on the MERN (MongoDB, Express.js, React, Node.js) stack within the realm of Cooperative Computing. In this short but impactful contract, I've successfully contributed to the development of dynamic enterprise applications. From creating efficient project management tools to implementing collaborative task-tracking systems, my expertise has been channeled into ensuring the seamless integration of diverse functionalities. The satisfaction of my clients during this one-month engagement is a testament to my commitment to precision and adherence to industry best practices.`}
          />
          <ExperienceItem
            company={'Upwork . Freelancing'}
            title={'Full Stack Developer'}
            yearStart={'2020'}
            description={`My role as a Full-Stack Developer specializing in the MERN stack has been deeply intertwined with platforms like Upwork, where I've successfully crafted high-caliber enterprise applications. My diverse projects on Upwork, ranging from intuitive e-commerce dashboards to seamless integration of metaverse wallets and engaging social media applications, have consistently garnered positive feedback from satisfied clients. Beyond technical proficiency, I've applied my skills to implement sophisticated Chatbots, enhancing user experiences. Throughout these endeavors, I've maintained a meticulous attention to detail and a commitment to industry best practices, ensuring not just functional solutions but exceeding client expectations and leaving them happily content with our collaborations.`}
          />
        </div>
      </div>
    </div>
  );
};
