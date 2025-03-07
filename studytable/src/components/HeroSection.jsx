import { motion } from "framer-motion";
import sec1 from "../assets/sec1.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 max-w-6xl mx-auto">
      {/* Left Content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl leading-tight font-sans font-medium">
          <motion.span
            className="text-black block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            Optimize Your
          </motion.span>
          <motion.span
            className="text-gray-500 block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.5 }}
          >
            Performance For
          </motion.span>
          <motion.span
            className="text-black block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.5 }}
          >
            JEE, NEET, <span className="text-gray-500 ">and</span> Boards
          </motion.span>
        </h1>
        <motion.p
          className="text-gray-500 mt-4 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ amount: 0.5 }}
        >
          Your personal AI-Tutor for all academic needs. Whether it's school
          exams, boards, or competitive exams, we plan, manage, and help you
          clear your doubts instantly. For students of class 10th, 11th, and
          12th (CBSE) preparing for medical or engineering entrance exams.
        </motion.p>
        <div className="mt-6 flex gap-4">
          <motion.button
            className="bg-black text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ amount: 0.5 }}
          >
            Apply for admission
          </motion.button>
          <motion.button
            className="text-black underline flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ amount: 0.5 }}
          >
            Sign In <span className="ml-2">→</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        className="md:w-1/2 flex justify-center relative mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ amount: 0.5 }}
      >
        <motion.img
          src={sec1}
          alt="Study Illustration"
          className="w-120"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ amount: 0.5 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
