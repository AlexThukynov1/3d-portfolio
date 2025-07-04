import {VerticalTimeline} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../../styles.js'
import {experiences} from "../../constants/index.js";
import {SectionWrapper} from "../../hoc"
import {textVariant} from "../../utils/motion.js";
import ExperienceCard from "../../componetns/ExperienceCard.jsx";

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    What i have done so far
                </p>
                <h2 className={styles.sectionHeadText}>
                    Work Experience
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col cursor-default">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "experience")
