import Navbar from "../../components/navbar/navbar.component";
import CardsContainer from "../../components/cardsContainer/cardsContainer.component";

import "./home.styles.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <h1>Welcome to the Pokédex</h1>
        
        <CardsContainer />
      </div>
    </div>
  );
}

export default Home;