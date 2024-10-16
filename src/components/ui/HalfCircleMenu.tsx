import React, { useState } from 'react';
import { Planet } from 'react-planet';
import { Link } from 'react-router-dom';
import { IconMenu2 } from '@tabler/icons-react';

interface NavLink {
  label: string;
  href: string;
  icon: React.ComponentType;
}

interface HalfCircleMenuProps {
  navlinks: NavLink[];
  socials: NavLink[];
  className?: string;
}

const HalfCircleMenu: React.FC<HalfCircleMenuProps> = ({ navlinks, socials, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const allItems = [...navlinks, ...socials];

  return (
    <div className={`fixed bottom-16 right-16 z-[1001] ${className}`}>
      <Planet
        centerContent={
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-blue-500 p-3 text-white shadow-lg transition-colors hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            <IconMenu2 size={24} />
          </button>
        }
        open={isOpen}
        autoClose
        orbitRadius={80}
        rotation={0}
        bounce
        orbitStyle={(defaultStyle) => ({
          ...defaultStyle,
          borderWidth: 0,
        })}
        mass={1}
        tension={400}
        friction={28}
      >
        {allItems.map((item, index) => (
          <MenuItemButton
            key={index}
            {...item}
            angle={180 - (180 / (allItems.length - 1)) * index}
            isExternal={item.href.startsWith('http')}
          />
        ))}
      </Planet>
    </div>
  );
};

interface MenuItemButtonProps {
  label: string;
  icon: React.ComponentType;
  href: string;
  angle: number;
  isExternal: boolean;
}

const MenuItemButton: React.FC<MenuItemButtonProps> = ({ label, icon: Icon, href, angle, isExternal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const ButtonContent = () => (
    <>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-500 shadow-md transition-colors hover:bg-blue-100 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-gray-700"
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <Icon />
      </button>
      {isHovered && (
        <div
          className="absolute whitespace-nowrap rounded bg-white px-2 py-1 text-xs font-medium text-blue-500 shadow-md dark:bg-gray-800 dark:text-blue-300"
          style={{
            [angle > 90 ? 'right' : 'left']: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            marginLeft: angle <= 90 ? '0.5rem' : '0',
            marginRight: angle > 90 ? '0.5rem' : '0',
          }}
        >
          {label}
        </div>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ButtonContent />
    </Link>
  );
};

export default HalfCircleMenu;