import {
  IconBuildingBroadcastTower,
  IconBook,
  IconBrandYoutube,
  IconMusic,
  IconMicrophone,
  IconUsersGroup,
} from '@tabler/icons-react'

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card title="Broadcast Ads" href="https://www.youtube.com/@neifbank" Icon={IconBuildingBroadcastTower} />
        <Card title="Educational" href="https://www.youtube.com/channel/UC7OVYG_Py-V6FWQZibBOp_A" Icon={IconBook} />
        <Card
          title="Drone Videography"
          href="https://grell.s3.us-east-2.amazonaws.com/Smid3.mp4"
          Icon={IconBrandYoutube}
        />
        <Card title="Music" href="https://www.youtube.com/@IfEyeMayMusic" Icon={IconMusic} />
        <Card title="Podcast Compilations" href="https://www.youtube.com/@atsojka" Icon={IconMicrophone} />
        <Card
          title="For Groups & Conferences"
          href="https://www.youtube.com/@uniinterpreterstheatre2876"
          Icon={IconUsersGroup}
        />
      </div>
    </div>
  )
}

interface CardType {
  title: string
  Icon: React.FC<any>
  href: string
}

const Card = ({ title, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="group relative w-full overflow-hidden rounded-xl border-[1px] border-n-8 p-1 md:p-4 lg:p-6 dark:border-n-1">
      <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-t from-s to-a transition-transform duration-300 group-hover:translate-y-[0%]" />

      <Icon className="absolute -right-12 -top-12 z-[10] size-56 text-transparent transition-transform duration-300 group-hover:rotate-12 group-hover:text-white/30" />
      <Icon className="relative z-10 mb-2 stroke-1 text-2xl text-a transition-colors duration-300 group-hover:stroke-2 group-hover:text-black" />
      <h3 className="relative z-[11] text-sm md:text-lg lg:text-xl text-black duration-300 dark:text-white dark:group-hover:text-black">
        {title}
      </h3>
    </a>
  )
}

export default HoverDevCards
