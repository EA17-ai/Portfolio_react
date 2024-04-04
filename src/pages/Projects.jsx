import { Link } from 'react-router-dom';
import projects from "../database.js"
import { useAuth0 } from '@auth0/auth0-react';
const Projects = () => {
  const {user,isAuthenticated}=useAuth0()

  return (
    <>
 {/*  {isAuthenticated ?
  (  */}       <div className='grid grid-cols-3 gap-4  bg-[linear-gradient(135deg,_#f5f7fa_0%,_#c3cfe2_100%)]'>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-col p-2 m-5 bg-white rounded-lg border-2 border-black space-y-4'>
            <img className='hover:scale-75 hover:rounded-lg w-full h-40 rounded-lg object-cover' src={`data:image/jpeg;base64,${project.image}`} alt={project.title} />
            <hr />
            <p className='h-28 text-center text-xl font-bold font-serif'>{project.title}</p>
            <Link className='bg-blue-700 py-2 text-white text-center rounded-lg' to={project.link}>GitHub Link</Link>
          </div>
        ))}
      </div>
{/* ):<p className='flex justify-center items-center animate-pulse   text-3xl font-bold font-serif delay-700 h-screen bg-[linear-gradient(to_top,_#9890e3_0%,_#b1f4cf_100%)]'> Please Login to view the projects</p>
  }
 */}      
    </>
  
    
  );
};

export default Projects;
