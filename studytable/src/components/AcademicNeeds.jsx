import { motion } from "framer-motion";

const AcademicNeeds = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center px-10 py-20 max-w-6xl my-40 mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold leading-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Crafted for all your academic needs
      </motion.h2>

      <motion.button
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-800"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Get your Entry
      </motion.button>
    </motion.section>
  );
};

export default AcademicNeeds;
