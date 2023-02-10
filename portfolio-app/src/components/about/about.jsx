import './about.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

function About() {
  return (
    <>
      <h1 className='about_h1'>ABOUT</h1>
      <div className="about_app">
        <div className='about_section'>
          <img src="https://cdn.discordapp.com/attachments/437424462586052628/1073622214110363657/image.png" alt="" />
          <span>
          Hi, I'm Francisco, a full-stack developer passionate about creating innovative and effective solutions. 
          With experience in a variety of technologies, I am committed to producing high-quality results.
          Thank you for visiting my portfolio, I hope you can see some of my projects and previous work. I am available for any further questions or discussion!
          </span>
          <div className='about_section_div1'>
            <a href="https://www.linkedin.com/in/francisco-schlatter/"><ArticleIcon style={{color: "blue"}}/></a>
            <a href="https://www.linkedin.com/in/francisco-schlatter/"><LinkedInIcon style={{color: "blue"}}/></a>
            <a href="https://github.com/FranSchlatter"><GitHubIcon style={{color: "blue"}}/></a>
          </div>
        </div>

        <div className='about_section'>
          <div className='about_section_div2'>
            <h6>HTML5</h6>
            <ProgressBar animated now={95} label={`${95}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>Css</h6>
            <ProgressBar animated now={85} label={`${85}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>JavaScript</h6>
            <ProgressBar animated now={90} label={`${90}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>React</h6>
            <ProgressBar animated now={85} label={`${85}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>Redux</h6>
            <ProgressBar animated now={85} label={`${85}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>TypeScript</h6>
            <ProgressBar animated now={50} label={`${50}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>NodeJs</h6>
            <ProgressBar animated now={85} label={`${85}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>Express</h6>
            <ProgressBar animated now={85} label={`${85}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>Sequelize</h6>
            <ProgressBar animated now={80} label={`${80}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>postgreSQL</h6>
            <ProgressBar animated now={85} label={`${85}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>MongoDB</h6>
            <ProgressBar animated now={60} label={`${60}%`} />
          </div>
          <div className='about_section_div2'>
            <h6>Git-Github</h6>
            <ProgressBar animated now={85} label={`${85}%`} />
          </div>
        </div>
      </div> 
    </>
  );
}

export default About;