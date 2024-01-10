'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const SkillFilter = ({ selector, setSection, children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(false);
  const activeSkill = searchParams.get('activeSkill');
  useEffect(() => {
    if (activeSkill) setActive(activeSkill);
    else setActive('all');
  }, [activeSkill]);
  return (
    <span
      onClick={() => {
        router.replace('/?activeSkill=' + selector + '#skills');
        setSection(selector);
      }}
      className={`${
        selector === active && 'bg-dark-primary'
      } text-white-secondary border border-white-secondary hover:border-white px-8 py-3 rounded-full cursor-pointer`}
    >
      {children}
    </span>
  );
};
