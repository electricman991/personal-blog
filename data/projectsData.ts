interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Project Tracker',
    description: `A project managing website that allows for small businesses to track and `,
    imgSrc: '',
    href: '/blog/project-tracker'
  },
  {
    title: 'Package Tracker',
    description: `A backend api that allows for the trucks to send information data and have it saved
    and updated based on reltime data.`,
    imgSrc: '',
    href: '/blog/project-tracker'
  },
  {
    title: 'Real Estate API',
    description: `An API that serves publicly avaliable data from a csv to a user in json format.`,
    imgSrc: '',
    href: 'https://github.com/electricman991/housing_market'
  }
]

export default projectsData
