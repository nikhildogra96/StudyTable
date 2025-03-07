import { motion } from "framer-motion";
import sec2 from "../assets/sec2.png";

const PracticeSession = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  py-20 max-w-6xl mx-auto">
      {/* Left Content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Unlimited Practice Session
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          For topics and subjects you go through in your school and coaching
          every day, we create instant practice sessions specially made for your
          daily needs.
        </p>
        <p className="text-gray-500 font-bold mt-4 text-lg">
          Our innovative AI algorithm crafts batches of 20 questions, each
          accompanied by instant feedback and solutions – it's like having a
          home tutor 24X7.
        </p>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        className="md:w-1/2 flex justify-center relative mt-10 md:mt-0"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={sec2} alt="Student Studying" className="w-120" />
      </motion.div>
    </section>
  );
};

export default PracticeSession;
