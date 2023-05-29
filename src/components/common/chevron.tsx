import { motion } from 'framer-motion';

interface ChevronProps {
  isRight?: boolean;
}
export default function Chevron({ isRight = true }: ChevronProps) {
  return (
    <motion.div
      className={`w-12 h-12 flex hover:opacity-90 cursor-pointer justify-center items-center rounded-full ${
        isRight ? 'bg-[#7ca590]' : 'bg-[#88bfa5]'
      }`}
    >
      {isRight ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="w-6 h-6 cursor-pointer"
          whileHover={{
            translateY: [0, 4, -2, 0],
            transition: { duration: 0.2, ease: 'easeInOut' },
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </motion.svg>
      ) : (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="w-6 h-6 cursor-pointer"
          whileHover={{
            translateY: [0, 4, -2, 0],
            transition: { duration: 0.2, ease: 'easeInOut' },
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </motion.svg>
      )}
    </motion.div>
  );
}
