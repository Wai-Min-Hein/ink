import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full  grid grid-cols-1    gap-4   !bg-[#0d0d0d] !text-[#d2d2d2]">
      {cards.map((card, i) => (
        <div key={i} 
        className={card._id % 2 === 0 ? 'row-span-2' : ''}
        
        // className={cn(card.className, )}
        
        >
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?._id === card._id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?._id === card._id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?._id === card._id && <SelectedCard selected={selected} />}
            <BlurImage card={card}  />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?._id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?._id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    // <Image
    //   src={card.thumbnail}
    //   height="500"
    //   width="500"
    //   onLoad={() => setLoaded(true)}
    //   className={cn(
    //     "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
    //     loaded ? "blur-none" : "blur-md"
    //   )}
    //   alt="thumbnail"
    // />

    <img
      src={card.img}
      alt=""
      className={cn(
        "object-cover object-top absolute inset-0 w-full md:h-full md:w-full transition duration-200",
        loaded ? "blur-none" : "blur-s"
      )}
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.artist}
      </motion.div>
    </div>
  );
};
