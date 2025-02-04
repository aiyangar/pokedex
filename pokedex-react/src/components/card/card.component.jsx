import "./card.styles.css"

function Card() {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
        </div>
        <div className="card-content">
          <h2>Bulbasaur</h2>
          <p>Grass | Poison</p>
        </div>
      </div>
    </div>
  )
}

export default Card