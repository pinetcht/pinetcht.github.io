import { Experience } from "../components/Experience.jsx"

const Experiences = () => {
    return (
        <>
            <Experience company="The Standard" date="June 2025 - July 2025"
                role="IT Infrastructure Intern" location={"Bangkok, Thailand"}
                desc="Networking " 
                />
            <Experience company="Pomona College" date="September 2025 - Present" role="CS51 TA" location={"Claremont, CA"} />
            <Experience company="VinePair" date="June 2024 - August 2024"
                role="Software Developer Intern" location={"New York, New York"}
                desc="Data pipeline + Interactive Dashboard "
                github="https://github.com/pinetcht/VinePair-Dashboard.git" />
            <Experience company="Launch Program"
                date="Dec 2023 - June 2024"
                role="SWE Training"
                location={"Remote"} />
            <Experience company="Chulalongkorn University"
                date="May 2023 - August 2023"
                role="Textbook Research Intern"
                location={"Bangkok, Thailand"}
                github="https://github.com/pinetcht/thai-dict-parser.git" />
        </>
    )
}

export default Experiences