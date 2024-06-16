import pokemonImg from '../assets/project-images/pokemon.webp'
import budgetImg from '../assets/project-images/budget.webp'
import googleMapsApiImg from '../assets/project-images/google_maps_api.webp'
import budgetAutomationImg from '../assets/project-images/budget_automation.webp'

export type project = {
  id: number
  name: string
  imgSource: string
  description: string
  languages: string[]
}

export const projects: project[] = [
  {
    id: 1,
    name: 'Pokemon Stat App',
    imgSource: pokemonImg,
    description:
      'A website to view different strengths and weaknesses for pokemon using the PokéAPI',
    languages: ['Vue', 'Typescript'],
  },
  {
    id: 2,
    name: 'Budget App',
    imgSource: budgetImg,
    description:
      'A clone of the Everydollar budgeting app using Vue, ASP.net Core and SQLite',
    languages: ['Vue', 'ASP.net Core', 'SQLite'],
  },
  {
    id: 3,
    name: 'Google Maps API',
    imgSource: googleMapsApiImg,
    description:
      "An integrated Google Map's API for an interactive location search",
    languages: ['Vue'],
  },
  {
    id: 4,
    name: 'Budget Automation',
    imgSource: budgetAutomationImg,
    description:
      'A python script using pandas and selenium to automate transaction tracking from bank statements into the Everydollar App',
    languages: ['Python', 'Pandas', 'Selenium'],
  },
]
