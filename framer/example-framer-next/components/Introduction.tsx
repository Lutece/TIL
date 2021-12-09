import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Overview = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const { scrollYProgress } = useViewportScroll();

  return (
    <div>
      <motion.div initial={false} animate={{ x: 100 }}>
        100
      </motion.div>
      <motion.div
        drag="x"
        dragConstraints={{ right: 100 }}
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        -100
      </motion.div>
      <motion.div drag="x" style={{ x, opacity }}>
        opacity
      </motion.div>
      <motion.path style={{ pathLength: scrollYProgress }}>Scroll</motion.path>
    </div>
  );
};

const Variants = () => {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  return (
    <motion.ul animate="hidden" variants={list}>
      <motion.li variants={item}>1</motion.li>
      <motion.li variants={item}>2</motion.li>
      <motion.li variants={item}>3</motion.li>
    </motion.ul>
  );
};

const Introduction = () => {
  return (
    <div style={{ width: "200px", margin: "0 auto" }}>
      <Overview />
      <Variants />
    </div>
  );
};

export default Introduction;
