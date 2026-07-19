import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  show: boolean;
}

export default function SuccessAnimation({ show }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-[500px]">
            <Lottie animationData={animationData} loop={false} autoplay />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
