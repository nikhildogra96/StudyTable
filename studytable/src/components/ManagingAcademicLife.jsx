import { motion } from "framer-motion";
import sec4 from "../assets/sec4.png";

const ManagingAcademicLife = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  py-20 max-w-6xl mx-auto overflow-hidden">
      {/* Left Content */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Managing students' academic life
        </h2>
        <motion.p
          className="text-gray-500 mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          There is more to study than just practicing giving tests. To meet the
          requirement of the exam, we need to carefully do the revision,
          repeatedly align our study plan, and understand students' own learning
          curve. This all needs to be done along with school tests and other
          scholarship exams. We manage it all for you, so that you focus on
          learning and worry no more.
        </motion.p>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        className="md:w-1/2 flex justify-center relative mt-10 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          src={sec4}
          alt="Managing Academic Life"
          className="w-120"
        />
      </motion.div>
    </section>
  );
};

export default ManagingAcademicLife;
