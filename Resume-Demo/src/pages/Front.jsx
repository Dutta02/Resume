import React from "react";
import { Container} from "react-bootstrap";
import "./Front.css";
import { FaCamera } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

function Front() {

  
    const navigate = useNavigate();
    const getDesign = () => {
      navigate('/design');
    };
 
  return (

    <Container>
      <div>
      <div className="main">
        <div className="home-part-1">
          <p className="home-part-heading">Job-Winning Resume Templates</p>
         

          <p className="home-part-content">
            Get the job 2x as fast.1 Use recruiter-approved templates and
            step-by-step content recommendations to create a new resume or
            optimize your current one.
          </p>

          <div className="home-part-button"> 
               <div className="home-button"><button>Create new resume</button></div>
               <div className="home-button"><button>Optimize my resume</button></div>
          </div>
        </div>

        <div className="home-part-2">
            <img src="/src/assets/img12.jpg" alt="image of cv" />
        </div>
      </div>

      <div className="lol12">
        <div> <p className="home-part-heading">Create a resume that gets results</p></div>
         <div className="home-button1"><button onClick={getDesign}>Choose a template</button></div>         
       </div>

       <div className="grid-layout">
         
         <div className="grid-contain">
          <div className="lolipop"><FaCamera /></div>
           <p className="grid-heading">Recruiter-Approved Resume</p>
           <p className="grid-text">We work with recruiters to design resume templates that format automatically.</p>
         </div>

         <div className="grid-contain">
        <div className="lolipop"><MdOutlineTimer /></div>
           <p className="grid-heading">Finish Your Resume in 15 Minutes</p>
           <p className="grid-text">Resume Now helps you tackle your work experience by reminding you what you did at your job.</p>
         </div>

         <div className="grid-contain">
           <div className="lolipop"><HiShoppingBag /></div> 
           <p className="grid-heading">Land an Interview</p>
           <p className="grid-text">We suggest the skills you should add. It helped over a million people get interviews.</p>
         </div>
       </div>

      </div>
    </Container>
  )
}

export default Front;
