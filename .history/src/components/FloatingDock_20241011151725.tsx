import React from 'react';
import { Dock } from '@/components/ui/floating-dock';
import { navlinks } from '@/constants/navlinks';
import { socials } from '@/constants/socials';

export function IndexDock() {
  const links = [...navlinks, ...socials];

  return (
    <div className=''>
      <Dock
        className=''
        items={links.map((link) => ({
          title: link.label,
          icon: React.createElement(link.icon, { className: '' }),
          href: link.href,
        }))}
      />
    </div>
  );
}
