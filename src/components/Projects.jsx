import React from 'react'
import { Project } from "../components/Project.jsx"
import { ProjectList } from "../data/ProjectList.js"

const Projects = () => {
    return (
        <>
            {ProjectList.map((project, index) => (
                <Project
                    key={index}
                    name={project.name}
                    desc={project.desc}
                    tech={project.tech}
                    pic={project.pic}
                    link={project.link}
                    githubLink={project.githubLink}
                />
            ))}

        </>
    )
}

export default Projects