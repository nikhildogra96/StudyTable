import { motion } from "framer-motion";

const HowWeCameToThis = () => {
  return (
    <motion.section
      className="flex flex-col items-center px-10 py-20 max-w-6xl mx-auto my-20 bg-gray-900 text-white rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold leading-tight"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        How we came to this?
      </motion.h2>

      <motion.p
        className="mt-4 text-lg text-gray-300 text-center max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        We observed and researched for three years in a variety of students.
        Where the best need more attention to do better and the struggling
        students need more attention to improve their own abilities. All
        students need personal attention. Based on the notion of "Personal
        attention," we have built our algorithm and AI tutor to cater to each
        child uniquely...
      </motion.p>

      <motion.a
        href="#"
        className="mt-6 text-lg underline text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Read the full story →
      </motion.a>
    </motion.section>
  );
};

export default HowWeCameToThis;
