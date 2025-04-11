import SectionHeader from "./SectionHeader";
import projects from "../util/projects";
import ProjectsPage from "./ProjectsPage";
const Projects = () => {

  return (
    <>
      <SectionHeader first='PROJECTS' second=''sectionid='projects'/>

      <div  className="container mx-auto ">
        
          <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
            {projects.map((proj) => (
              <ProjectsPage
                key={proj.id}
                id={proj.id}
                image={proj.image}
                title={proj.title}
                description={proj.description}
                tools={proj.tools}
                toR={proj.toR}
                Link = {proj.Link}
                modal={proj.modal}
              />
            ))}
          </div>
        
      </div>
    </>
  );
};

export default Projects;
