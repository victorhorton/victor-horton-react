import { useEffect, useState } from 'react'
import { project, projects } from '../../types/project'

export default function ProjectsCarousel() {
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

  type project = {
    name: string
    imgSource: string
    description: string
    languages: string[]
  }

  const projects: project[] = [
    {
      name: 'Pokemon Stat App',
      imgSource: pokemonImg,
      description:
        'A website to view different strengths and weaknesses for pokemon',
      languages: ['Vue', 'Typescript'],
    },
    {
      name: 'Budget App',
      imgSource: budgetImg,
      description: 'A clone of the Everydollar budgeting app',
      languages: ['Vue', 'ASP.net Core', 'SQLite'],
    },
  ]

  return (
    <div className="">
      <div className="sticky top-0 flex min-h-dvh w-1/2 flex-col place-content-center">
        <ul className="me-10">
          {projects.map((project, idx) => {
            return (
              <li className={idx === 0 ? 'border-b' : ''}>
                <HashLink
                  smooth
                  to={`/#${project.name}-element`}
                  id={`${project.name}-link`}
                >
                  {project.name}
                </HashLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="ms-auto w-1/2">
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              id={`${project.name}-element`}
              data-project-name={project.name}
              className="anchor-elements h-screen flex-col place-content-center"
            >
              <h1>{project.name}</h1>
              <img src={project.imgSource} />
              <p>{project.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
