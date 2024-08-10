function App() {
  return (
    <div className="card">
      <Avatar image="./profile-avatar.jfif" />
      <div className="data">
        <Intro
          name="Kosei Yokoyama"
          description="Full Stack Developer with experience with Angular/React for front end and Spring/Node.js for backend"
          website="https://www.linkedin.com/in/kosei-yokoyama-776b20123/"
          websiteDescription="LinkedIn"
        />
        <SkillList
          skills={[
            "HTML",
            "CSS",
            "Javascript",
            "Typescript",
            "Angular",
            "React",
            "Spring Boot",
            "Node.js",
            "PostgreSQL",
            "MongoDb",
            "Git",
            "Docker",
          ]}
        />
      </div>
    </div>
  );
}

function Avatar(props: { image: string }) {
  return <img className="avatar" src={props.image} />;
}

function Intro(props: {
  name: string;
  description: string;
  website?: string;
  websiteDescription?: string;
}) {
  return (
    <>
      <h1>{props.name}</h1>
      <span>{props.description}</span>
      {props.website && props.websiteDescription && (
        <div style={{ marginTop: "12px" }}>
          <a href={props.website}>{props.websiteDescription}</a>
        </div>
      )}
    </>
  );
}

function SkillList(props: { skills: string[] }) {
  const colors = ["salmon", "aquamarine", "orange", "yellow", "green", "cyan"];

  return (
    <div className="skill-list">
      {props.skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
}

function Skill(props: { skill: string; color: string }) {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
    </span>
  );
}

export default App;
