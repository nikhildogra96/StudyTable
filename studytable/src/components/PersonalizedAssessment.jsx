import { motion } from "framer-motion";
import sec3 from "../assets/sec3.png";

const PersonalizedAssessment = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  py-20 max-w-6xl mx-auto overflow-hidden">
      {/* Left Illustration */}
      <motion.div
        className="md:w-1/2 flex justify-center relative mt-10 md:mt-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img src={sec3} alt="Assessment Illustration" className="w-120" />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Personalized Assessment
        </h2>
        <motion.p
          className="text-gray-500 mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          We measure your learning differently. Not just comparing you among
          your classmates and peers rather, how much you have learnt and how
          much have your skills in each subject have grown. We create tests
          based on your learning session and exam requirements to understand and
          modify study plans for you. The tests are uniquely created for each
          student to improve and advance their respective knowledge.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PersonalizedAssessment;
