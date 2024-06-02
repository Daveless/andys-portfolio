import React from 'react'
import WorkCard from './WorkCard'
import GridNav from './GridNav'

const InstagramGrid = ({category}) => {
  const projects = [
    {
      name: "sacred bean launch images",
      image: "work-1.png",
      category: ["design"]
    },
    {
      name: "cacao web studio web page design",
      image: "work-2.png",
      category: ["web"]
    },
    {
      name: "sacred bean shopify page",
      image: "work-3.png",
      category: ["web"]
    },
    {
      name: "rahua assets developing",
      image: "work-4.png",
      category: ["design"]
    },
    {
      name: "dechezmoi assets developing",
      image: "work-5.png",
      category: ["design"]
    },
    {
      name: "sacred bean mockups",
      image: "work-6.png",
      category: ["design"]
    },
    {
      name: "logo design",
      image: "work-7.png",
      category: ["design"]
    },
    {
      name: "rahua marketing campaings",
      image: "work-8.png",
      category: ["marketing"]
    },
    {
      name: "email marketing",
      image: "work-9.png",
      category: ["design", "web", "marketing"]
    },
  ]

  function getUniqueCategories(projects) {
  const categoriesSet = new Set();
  
  projects.forEach(project => {
    project.category.forEach(cat => categoriesSet.add(cat));
  });
  
  return Array.from(categoriesSet);
}
const uniqueCategories = getUniqueCategories(projects);

function filterProjectsByCategory(projects, category) {
    if (category) {
        return projects.filter(project => project.category.includes(category));
    }
    return projects;
}
let filteredProjects = []
if(category){
  filteredProjects = filterProjectsByCategory(projects, category);
}else{
  filteredProjects = projects
}

  return ( 
  <div className='bg-white'>
        <div className='mx-auto shadow-lg-lr lg:shadow-none max-w-2xl lg:max-w-6xl'>
        <hr className='w-5/6 mx-auto max-w-5xl bg-black mb-5'/>
        <GridNav categories={uniqueCategories} selectedcategory={category}/>
        <div className='w-full lg:w-5/6 mx-auto max-w-6xl grid grid-cols-3'> 
          {filteredProjects.map((project, index) => (
            <WorkCard key={index} projectName={project.name} projectImage={project.image}/>
          ))
          }
        </div>
      </div>
  </div>
  )
}

export default InstagramGrid