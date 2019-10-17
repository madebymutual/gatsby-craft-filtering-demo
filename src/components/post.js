/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

export default ({ title }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    positionTransition
    sx={{
      backgroundColor: "primary",
      textAlign: "center",
      padding: 4,
    }}
  >
    {title}
  </motion.div>
)
