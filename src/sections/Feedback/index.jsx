import {motion} from "framer-motion";
import {styles} from "../../styles.js"
import {SectionWrapper} from '../../hoc/index.js'
import { textVariant} from '../../utils/motion.js'
import {testimonials} from "../../constants/index.js";
import FeedbackCard from "../../componetns/FeedbackCard.jsx";

const Feedback = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonalis.</h2>
                </motion.div>
            </div>

            <div className={`${styles.padding} mt-20 pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ) )}
            </div>
        </div>
    )
}

export default SectionWrapper(Feedback, "feedback")
