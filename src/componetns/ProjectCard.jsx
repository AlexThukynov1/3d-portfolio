import {motion} from "framer-motion";
import {fadeIn, textVariant} from '../utils/motion.js'
import Tilt from "react-tilt";
import {github} from "../assets/index.js";

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
    return (
        <motion.div varinants={fadeIn("up", "spring", index *0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                   <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                   />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={github}
                                alt="github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <p
                            key={tag.name}
                            className={`text-[14px] ${ tag.color }`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

export default ProjectCard;
