import './home.css';

function Home( {homeRef} ) {
  return (
    <div className="home_app" ref={homeRef}>
      <h1>Hi, i'm <span>Francisco Schlatter</span></h1>
      <h3>FULLSTACK DEVELOPER</h3>
    </div>
  );
}

export default Home;

// Faltan: 
// - Gif backgound en home
// - Animaciones en about y contact? 
// - Animacion en send?
// - Animacion en los titulos?
// - Animacion en home? 
// - Animacion en navbar cuando se aplica el sticky?
// - Agregar softskills?
// - Navbar con color depende donde estoy
// - Cambiar fuente poppin
// - Animacion en contact
// - Tostify en contact
// - Borrar form con send 
// - Hover en proyects