import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import { timelineItems } from "@/lib/config";
import useTextScramble from "./text";
import { useScroll,motion } from "framer-motion";
import { useRef } from "react";
import Icon from "./Icon";

interface DataProps {
  head: string;
  date: string;
  des: string;
  links: string;
  add: string;
}

const Data: React.FC<DataProps> = ({ head, date, des, links, add }: DataProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });
  return (
    <li ref={ref} className="my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between mx:w-[80%]  ">
     <figure className="absolute left-0 stroke-green-600 ">
      <svg className="-rotate-90 mx:w-[60px] mx:h-[60px] xs:w-[60px] xs:h-[60px]" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="23" className="stroke-none  stroke-3 fill-black" />
        <motion.circle style={{pathLength: scrollYProgress}} cx="75" cy="50" r="23" className="stroke-[5px] fill-none" />
        
        
      </svg><svg className="absolute left-7 top-2 " height="19" viewBox="0 0 20 20">
        <path className="animate-pulse stroke-1 fill-green-100"viewBox="0 0 20 20"   d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" /></svg>
    </figure>
      <motion.div  className="backdrop-opacity-10 bg-green-900 bg-opacity-10 rounded-lg  backdrop-blur-3xl w-full"
    >
        <h3 className="capitalize font-bold text-1.5xl font-pixelate text-green-600 sm:text-xl xs:text-lg mx-3 my-3 ">
          {head}; </h3> <a className="capitalize font-small text-0.5xl font-pixelate text-green-100 mx-3 my-3" href={links}></a>
       
        <span className="capitalize font-thin text-1.1xl  sm:text-xl xs:text-lg text-white xs:text-sm mx-3 my-3 ">
          {date} | {add}
        </span>
        <p className="font-thin text-0.4xl  text-white sm:text-xl xs:text-lg w-full mx:text-sm mx-3 my-3 ">
        {des}
        </p>
      </motion.div>
    </li>
  );
};
const Timeline2 = () => {
  const phrases = [
    " Timeline"
   ];
   
   const textRef = useTextScramble(phrases);
   const ref1 = useRef(null)
   const {scrollYProgress} =useScroll(
    {
      target: ref1,
      offset: ["start end","center start"] 
    }
   )
  return (
   
    <PageSection id="timeline">
    <div className="my-0 overflow-hidden">
      <BinaryText
        className="text-white font-pixelate text-[2rem] mx:text-[3rem] font-bold mb-30"
        reveal
      ><div className="text-white" ref={textRef}></div>
       
      </BinaryText>
      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] mx:w-full">
<motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-green-600 origin-top mx:w-[3px] lg:w-[4px] xs:w-[2px] mx:left-[30px]   lg:left-9 xs:left-[20px]"/>
<ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2">
<Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://Akash.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
</ul>
      </div></div>
  </PageSection>
 
  );
};

export default Timeline2;
