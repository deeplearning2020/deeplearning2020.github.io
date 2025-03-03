'use client'

import { memo } from 'react';
import { IconType } from 'react-icons';

interface TechItemProps {
  icon: IconType;
  name: string;
}

const TechItem = memo(({ icon: Icon, name }: TechItemProps) => (
  <div className="flex flex-col items-center text-center group">
    <Icon className="text-3xl mb-1.5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
    <span className="font-medium text-sm">{name}</span>
  </div>
));

TechItem.displayName = 'TechItem';

export { TechItem }; 