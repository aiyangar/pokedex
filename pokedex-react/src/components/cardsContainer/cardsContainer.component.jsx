import Card from "../card/card.component"

import "./cardsContainer.styles.css"

function CardsContainer() {
  return (
    <div className="cards-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardsContainer