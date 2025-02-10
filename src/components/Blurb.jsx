import headshot from '../assets/headshot.png'
const Blurb = ({ }) => {
  return (

    <div className={"flex-blurb-container"}>
      <p className={"blurb-text"}>
        Hello 👋🏿   my name is Anwar and I am an mid-level Software Engineer with a solid background in e-commerce, contributing 5 years of dedicated service to a dynamic industry leader. My expertise lies in successfully managing Supplier Advertising, where I have excelled in developing and enhancing customer-facing applications tailored for serving ads and creating impactful advertising campaigns. Proficient in a diverse tech stack, I have honed my skills in Java, PHP, Python, React, and have hands-on experience with Kubernetes and Docker. My proven track record of delivering high-quality solutions and collaborating with cross-functional teams makes me a valuable asset for any forward-thinking organization. I am eager to bring my technical prowess and innovative mindset to a new challenge within the realm of software engineering.
      </p>
      <div>  <img src={headshot} className={"headshot"} alt="light mode toggle" /> </div>
    </div>
  )
}

export default Blurb
