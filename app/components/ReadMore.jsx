'use client';

import { useState } from 'react';
import { DEFAULT_STRING_LENGTH, truncateString } from '../utils';

export const ReadMore = ({ children }) => {
  const [more, setMore] = useState(false);
  return more ? (
    <p className='text-body'>
      {children}{' '}
      <span
        className='font-semibold text-primary cursor-pointer'
        onClick={() => setMore(!more)}
      >
        Hide
      </span>
    </p>
  ) : (
    <p className='text-body'>
      {truncateString(children)}{' '}
      {children.toString().split('').length > DEFAULT_STRING_LENGTH && (
        <span
          className='font-semibold text-primary cursor-pointer'
          onClick={() => setMore(!more)}
        >
          Read more
        </span>
      )}
    </p>
  );
};
