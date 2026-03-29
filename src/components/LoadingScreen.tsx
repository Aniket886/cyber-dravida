import { motion, AnimatePresence } from "framer-motion";

import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 4;
      });
    }, 50);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 400);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <img src="/CDTRANS.png" alt="Cyber Dravida" className="h-28 w-28 object-contain animate-pulse mb-4" />
          <h1 className="font-heading text-2xl font-bold text-heading mb-6">
            Cyber Dravida
          </h1>
          <div className="w-48">
            <Progress value={progress} className="h-1.5 bg-muted" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
