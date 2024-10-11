import { Dock } from '@/components/ui/floating-dock';
import { navlinks } from '@/constants/navlinks';
import { socials } from '@/constants/socials';

export function IndexDock() {
  const links = [...navlinks, ...socials];

  return (
    <div className='fixed bottom-0 right-0 p-4 z-[1000]'>
      <Dock
        className='mx-auto'
        items={links.map((link) => ({
          title: link.label,
          icon: <link.icon className="h-12 w-12" />,
          href: link.href,
        }))}
      />
    </div>
  );
}
