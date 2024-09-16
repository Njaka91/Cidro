import OverLayText from "./OverLayText";
import StickyImg from "./StickyImg";

import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const ImageParallax = ({ imgBg, subHeading, heading, children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start", "end", "end", "start"]
  });

  const text1YScroll = useTransform(scrollYProgress, [0, 0.2], [500, -200]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.16], [1, 0]);

  return (
    <div className="relative">
      <div className="relative h-[100vh]">
        <StickyImg imgBg={imgBg} />
        <motion.span
          style={{
            opacity: opacity1,
            y: text1YScroll,
          }}
        >
          <OverLayText subHeading={subHeading} heading={heading} />
        </motion.span>
      </div>
      
      {children}
    </div>
  );
};

export default ImageParallax;
