'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Input, InputProps } from '../ui/input';
import { CrossIcon, SearchIcon } from '../icons/icons';
import { cn } from '@/lib/utils';

let searchBarSize = {
  sm: {
    fontsize: '14px',
    height: 10,
  },
  md: {
    fontsize: '15px',
    height: 12,
  },
  lg: {
    fontsize: '16px',
    height: 14,
  },
};
interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  componentSize?: 'sm' | 'md' | 'lg';
}

const SearchBar = ({ className, componentSize = 'sm' }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(searchBarSize[componentSize].height);
  };

  const handleCancelClick = () => {
    setInputValue('');
  };
  return (
    <div id="search-bar" className={cn(className, ` mb-5 relative group h-${searchBarSize[componentSize].height} `)}>
      <SearchIcon className="absolute top-[10px] left-3 group-hover:text-red-900 cursor-pointer" />
      <Input
        onChange={handleSearchBarChange}
        placeholder="Search"
        value={inputValue}
        className={`w-full pl-10 h-full pr-8 rounded-3xl text-[${searchBarSize[componentSize].fontsize}]`}
      />
      <span
        onClick={handleCancelClick}
        className={cn('absolute top-3 right-3 cursor-pointer', { hidden: !inputValue })}
      >
        <CrossIcon />
      </span>
    </div>
  );
};

export default SearchBar;
