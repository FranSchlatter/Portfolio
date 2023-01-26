import './about.css';

function About() {
  return (
    <div className="about_app">
      <div className='about_section'>
        <h1>Imagen</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Expedita minus at perferendis nulla commodi nesciunt, quas possimus non totam obcaecati, 
          itaque, ad soluta accusantium dolorem architecto eligendi. Magni, suscipit labore.
        </span>
      </div>

      <div className='about_section'>
        <h4>Javascript</h4>
        <h4>Css</h4>
        <h4>React</h4>
        <h4>Redux</h4>
        <h4>Express</h4>
        <h4>Sequelize</h4>
        <h4>posgreSQL</h4>
        <h4>MongoDB</h4>
      </div>
    </div>
  );
}

export default About;