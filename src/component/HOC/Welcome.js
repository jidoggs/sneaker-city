import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Brand from "../customIcon/Brand";

const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  z-index: 10;
  height: 100vh;
`;
const container = {
  hidden: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  visible: {
    backgroundColor: "#ffffff",
    color: "#000000",
    transition: {
      delay: 9.8,
    },
  },
};

const InnerContainer = styled(motion.div)`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`;

const innercontainer = {
  hidden: { x: 0, y: 0 },
  visible: {
    x: "calc(-50vw + 50% + 4rem )",
    y: "calc(-50vh + 50% + 24px )",
    transition: {
      delay: 9,
    },
  },
};

const Sentence = styled(motion.h1)`
  font-size: 2.25rem;
  line-height: 2.35rem;
  font-weight: 700;
  position: relative;
  width: max-content;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.08,
    },
  },
};

const newSentence = {
  hidden: {
    opacity: 1,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 5,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50, display: "none" },
  visible: {
    opacity: 1,
    y: 0,
    display: "inline-block",
  },
};
const newLetter = {
  hidden: { opacity: 0, x: 50, display: "none" },
  visible: {
    opacity: 1,
    x: 0,
    display: "inline-block",
  },
};

const hideDash = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: {
      yoyo: 21,
    },
  },
};

function Welcome() {
  const textConent = "   SneakerCity.";
  const finalTextConent = "SC.";

  const sentenceRef = useRef(null);
  const [state, setState] = useState(true);

  useEffect(() => {
    let time = setTimeout(() => {
      setState(false);
    }, 8000);

    return () => {
      clearTimeout(time);
    };
  }, [state]);

  return (
    <Container variants={container} initial="hidden" animate="visible">
      <InnerContainer
        variants={innercontainer}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          <Brand />
          {state ? (
            <Sentence
              variants={sentence}
              initial="hidden"
              animate="visible"
              exit={{ y: [-50, 50, 0], opacity: 0 }}
            >
              {textConent.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={letter}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    delay: `${idx < 3 ? idx * 0.4 : idx * 0.5}`,
                    bounce: 2,
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {
                <motion.span
                  variants={hideDash}
                  initial="hidden"
                  animate="visible"
                >
                  _
                </motion.span>
              }
            </Sentence>
          ) : (
            <Sentence
              ref={sentenceRef}
              variants={newSentence}
              initial="hidden"
              animate="visible"
            >
              {finalTextConent.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={newLetter}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
            </Sentence>
          )}
        </AnimatePresence>
      </InnerContainer>
    </Container>
  );
}

export default Welcome;
