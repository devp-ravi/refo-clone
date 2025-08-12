import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion";

function Products() {

     const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
    {
      title: "layout ",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
  ];

   const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
  {products.map((elem, index) => (
    <Product mover={mover} count={index} val={elem} key={index} />
  ))}

  <div className="absolute top-0 w-full h-full pointer-events-none z-20">
    <motion.div
      initial={{ y: pos, x: "-50%" }}
      animate={{ y: pos + "rem", x: "-50%" }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
      className="absolute w-[22rem] h-[12rem] bg-white left-[44%] -top-[5%] overflow-hidden"
    >
      {/* First video */}
      <motion.div
        animate={{ y: -pos + "rem" }}
        className="w-full h-full overflow-hidden"
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Second video */}
      <motion.div
        animate={{ y: -pos + "rem" }}
        className="w-full h-full overflow-hidden"
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Third video */}
      <motion.div
        animate={{ y: -pos + "rem" }}
        className="w-full h-full overflow-hidden"
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Fourth video */}
      <motion.div
        animate={{ y: -pos + "rem" }}
        className="w-full h-full overflow-hidden"
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
    </motion.div>
  </div>
</div>
  )
};

export default Products