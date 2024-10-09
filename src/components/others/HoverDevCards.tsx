import { IconType } from "react-icons";
import { FiMusic, FiBookOpen, FiVideo } from "react-icons/fi";
import { PiApplePodcastsLogo } from "react-icons/pi";
import { TbBuildingBroadcastTowerFilled } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";




const HoverDevCards = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <Card title='Broadcast Ads' subtitle='' href='https://www.youtube.com/@neifbank' Icon={TbBuildingBroadcastTowerFilled} />
        <Card title='Educational' subtitle="" href='https://www.youtube.com/channel/UC7OVYG_Py-V6FWQZibBOp_A' Icon={FiBookOpen} />
        <Card title='Drone Videography' subtitle="" href="https://grell.s3.us-east-2.amazonaws.com/Smid3.mp4" Icon={FiVideo} />
        <Card title='Music' subtitle='' href='https://www.youtube.com/@IfEyeMayMusic' Icon={FiMusic} />
        <Card title='Podcast Compilations' subtitle='' href='https://www.youtube.com/@atsojka' Icon={PiApplePodcastsLogo} />
        <Card title='For Groups & Conferences' subtitle='' href='https://www.youtube.com/@uniinterpreterstheatre2876' Icon={FaPeopleRoof} />

      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-success-white relative overflow-hidden group bg-neutral-900 "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-neutral-900  group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="relative z-10 mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors duration-300" />
      <h3 className="relative z-10 text-lg font-medium text-primary-light group-hover:text-white duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-slate-400 group-hover:text-violet-200 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;