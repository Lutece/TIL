import { motion } from "framer-motion";

const Visible = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }}>Visible</motion.div>
);

export default Visible;
