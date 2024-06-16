import { useEffect, useState } from 'react'
import { project, projects } from '../../types/project'

export default function ProjectsCarousel() {
  const [currentProject, setCurrentProject] = useState<project>(projects[0])

  useEffect(() => {
    const handleScroll = () => {
      const elements =
        document.querySelectorAll<HTMLElement>('.anchor-elements')

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()

        if (rect.top <= 25 && rect.top >= -25) {
          document
            .getElementById(`${element.dataset.projectName}-link`)
            ?.classList.add('text-blue-700')
        } else {
          document
            .getElementById(`${element.dataset.projectName}-link`)
            ?.classList.remove('text-blue-700')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function getProjectClasses(project: { id: number }, idx: number): string {
    const classes = ['py-2']
    if (idx < projects.length - 1) {
      classes.push('border-b')
    }
    if (project.id === currentProject.id) {
      classes.push('font-thin')
    }

    return classes.join(' ')
  }

  function handleMouseEnter(id: project['id']) {
    const foundProject = projects.find((project) => project.id === id)

    if (foundProject) {
      setCurrentProject(foundProject)
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <h1
        id="title-text"
        className="flex-none py-10 font-display text-5xl font-semibold lg:text-6xl"
      >
        My Projects
      </h1>
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="md:w-1/2">
          <ul className="mx-5 mb-5">
            {projects.map((project, idx) => {
              return (
                <li
                  className={getProjectClasses(project, idx)}
                  onClick={() => {
                    handleMouseEnter(project.id)
                  }}
                  onMouseEnter={() => {
                    handleMouseEnter(project.id)
                  }}
                >
                  {project.name}
                </li>
              )
            })}
          </ul>
          <div className="mx-5 my-5">
            <p>{currentProject.description}</p>
          </div>
        </div>
        <div
          key={currentProject.name}
          id={`${currentProject.name}-element`}
          data-project-name={currentProject.name}
          className="mx-5 md:w-1/2"
        >
          <img src={currentProject.imgSource} />
        </div>
      </div>
    </div>
  )
}
