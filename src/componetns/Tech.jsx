import {BallCanvas} from '../canvas/index.js'
import {SectionWrapper} from '../hoc'
import {technologies} from "../constants/index.js";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology, index) => (
                <div
                    className="w-28 h-28"
                    key={index}
                >
                    <BallCanvas
                        icon={technology.icon}
                    />
                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, "techologies")
