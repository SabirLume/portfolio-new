const Experiences = ({ props }) => {
  return (
    <div className={"experience-section"}>
      <h2 className={"title"}> Recent Experiences </h2>
      <div className={"experience-item"}>
        <p className={"experience-item-title"}>Wayfair</p>
        <p className={"experience-item-date"}>Mar 2019 - March 2024 | 5 years </p>
        <p className={"experience-item-info"}>https://sell.wayfair.com/grow-advertising</p>
        <p className={"experience-item-summary"}>
          Worked as full-stack developer across multiple teams within the ads space, providing customer facing solutions for advertising products.
        </p>
      </div>
      <div className={"experience-item"}>
        <p className={"experience-item-title"}>Solo Travel</p>
        <p className={"experience-item-date"}>Mar 2024 - July 2024 | 3 months</p>
        <p className={"experience-item-info"}>Vietname 🇻🇳  |  Indonesia 🇮🇩  |  Philippines 🇵🇭  |  Thailand 🇹🇭</p>
        <p className={"experience-item-summary"}>Took a break from my career and traveled to take on a new challange of getting to know myself, and experiencing the world and learning about different cultures.</p>
      </div>
    </div>
  )
}

export default Experiences 
