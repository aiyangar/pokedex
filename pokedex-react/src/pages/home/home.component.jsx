import Navbar from "../../components/navbar/navbar.component";
import CardsContainer from "../../components/cardsContainer/cardsContainer.component";

import "./home.styles.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Pokédex</h1>
      <Navbar />
      <CardsContainer />
    </div>
  );
}

export default Home;