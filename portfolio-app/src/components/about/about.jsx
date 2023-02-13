import './about.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

function About( {aboutRef} ) {
  return (
    <div className='main_about_app' ref={aboutRef}>
      <h1 className='about_title_h1'>ABOUT</h1>
      <div className="about_app">
        <div className='about_section'>
          <img src="https://i.postimg.cc/Tw49xwYC/fto-perfil.jpg" alt="" />
          <span className='about_span_description'>
          Hi, I'm Francisco, a full-stack developer passionate about creating innovative and effective solutions. 
          With experience in a variety of technologies, I am committed to producing high-quality results.
          Thank you for visiting my portfolio, I hope you can see some of my projects and previous work. I am available for any further questions or discussion!
          </span>

          <div className='proyects_section_div'>
            <div>
              <a href="https://docs.google.com/document/d/1P3WyG5THCkXRuniN-WlXiHgbXeoMa2fa53RnOOE4nA4/edit?usp=sharing" target={'_blank'}><ArticleIcon style={{color: "blue"}}/></a>
              <span>Resume</span>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/francisco-schlatter/" target={'_blank'}><LinkedInIcon style={{color: "blue"}}/></a>
              <span>Linkedin</span>
            </div>
            <div>
              <a href="https://github.com/FranSchlatter" target={'_blank'}><GitHubIcon style={{color: "blue"}}/></a>
              <span>Github</span>
            </div>
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
            <ProgressBar animated now={60} label={`${60}%`} />
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
    </div>
  );
}

export default About;