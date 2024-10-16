import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconEyeClosed, IconMenu4 } from '@tabler/icons-react';
import { Planet } from 'react-planet';

interface DockProps {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}

const Dock: React.FC<DockProps> = ({ items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed bottom-6 right-6 z-[1001] ${className}`}>
      <Planet
        centerContent={
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-p-light p-3 text-2xl text-n-light shadow-lg transition-colors hover:bg-p shadow-shadow-g1"
          >
            {isOpen ? <IconEyeClosed /> : <IconMenu4 />}
          </button>
        }
        open={isOpen}
        autoClose
        orbitRadius={80}
        bounce
        rotation={30}
        orbitStyle={() => ({
          border: 'none',
        })}
      >
        {items.map((item, index) => (
          <IconContainer key={item.title} {...item} index={index} />
        ))}
      </Planet>
    </div>
  );
};

interface IconContainerProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  index: number;
}

const IconContainer: React.FC<IconContainerProps> = ({ title, icon, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={href}>
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-s-light text-p shadow-md transition-colors hover:bg-s">
          {icon}
        </div>
        {hovered && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-md bg-n-light px-3 py-1 text-sm font-medium text-p shadow-md whitespace-nowrap">
            {title}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Dock;