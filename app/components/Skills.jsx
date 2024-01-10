'use client';

import { useState } from 'react';
import { SKILLS_DATA } from '../constants';
import { SectionHeader } from './SectionHeader';
import { SkillFilter } from './SkillFilter';
import { SkillItem } from './SkillItem';
import { useSearchParams } from 'next/navigation';

export const Skills = () => {
  const searchParams = useSearchParams();
  const activeSkill = searchParams.get('activeSkill');
  const [section, setSection] = useState(activeSkill ? activeSkill : 'all');
  return (
    <div
      className='w-full bg-dark flex items-center justify-center'
      id='skills'
    >
      <div className='w-full max-w-[1440px] border-b border-b-dark-primary min-h-screen flex flex-col justify-center items-center p-3'>
        <SectionHeader title={'Skills'} />
        <div className='flex items-center justify-center gap-3 flex-wrap w-full p-1 mb-3'>
          <SkillFilter setSection={setSection} selector='all'>
            All
          </SkillFilter>
          <SkillFilter setSection={setSection} selector='frontend'>
            Frontend
          </SkillFilter>
          <SkillFilter setSection={setSection} selector='backend'>
            Backend
          </SkillFilter>
          <SkillFilter setSection={setSection} selector='databases'>
            Databases
          </SkillFilter>
          <SkillFilter setSection={setSection} selector='orm'>
            ORM
          </SkillFilter>
          <SkillFilter setSection={setSection} selector='baas'>
            BaaS
          </SkillFilter>
          <SkillFilter setSection={setSection} selector='ai'>
            AI
          </SkillFilter>
          <SkillFilter setSection={setSection} selector='ar'>
            AR
          </SkillFilter>
        </div>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-3'>
          {section === 'all'
            ? Object.keys(SKILLS_DATA).map((sec) =>
                SKILLS_DATA[sec]?.map((skill, index) => (
                  <SkillItem
                    key={index}
                    title={skill.title}
                    avatar={skill.avatar}
                    description={skill.description}
                  />
                ))
              )
            : SKILLS_DATA[section]?.map((skill, index) => (
                <SkillItem
                  key={index}
                  title={skill.title}
                  avatar={skill.avatar}
                  description={skill.description}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
