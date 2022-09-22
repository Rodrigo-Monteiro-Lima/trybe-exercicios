import React from "react";

class About extends React.Component {
  render () {
    const skills = ['HTML', 'CSS','JavaScript', 'Jest']
    const jsxSkills = skills.map((skill) => <li>{skill}</li>)
    return (
      <div>
        <h1>Oi, eu sou Rodrigo.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu porta tellus. Etiam pellentesque est sed feugiat semper. Nullam eu ante in odio aliquet lobortis at id erat. Mauris at ante congue, hendrerit mauris eget, mattis lectus. Ut viverra, velit vel scelerisque ullamcorper, velit nisl aliquet quam, non elementum libero elit vitae ante.</p>
        <h2>Minhas Habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    )
  }
}
export default About;