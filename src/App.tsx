interface Skill {
  skill: string;
  level: "beginner" | "intermediate" | "advanced";
}

const colors = ["salmon", "aquamarine", "orange", "yellow", "green", "cyan"];

const skills: Skill[] = [
  { skill: "HTML", level: "intermediate" },
  { skill: "CSS", level: "intermediate" },
  { skill: "Javascript", level: "advanced" },
  { skill: "Typescript", level: "advanced" },
  { skill: "Java", level: "advanced" },
  { skill: "Angular", level: "advanced" },
  { skill: "React", level: "intermediate" },
  { skill: "Spring Boot", level: "intermediate" },
  { skill: "Node.js", level: "beginner" },
  { skill: "PostgreSQL", level: "intermediate" },
  { skill: "MongoDb", level: "beginner" },
  { skill: "Git", level: "advanced" },
  { skill: "Docker", level: "intermediate" },
];

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
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

interface AvatarProps {
  image: string;
}

function Avatar({ image }: AvatarProps) {
  return <img className="avatar" src={image} />;
}

interface IntroProps {
  name: string;
  description: string;
  website?: string;
  websiteDescription?: string;
}

function Intro({ name, description, website, websiteDescription }: IntroProps) {
  return (
    <>
      <h1>{name}</h1>
      <span>{description}</span>
      {website && websiteDescription && (
        <div style={{ marginTop: "12px" }}>
          <a href={website}>{websiteDescription}</a>
        </div>
      )}
    </>
  );
}

interface SkillListProps {
  skills: Skill[];
}

function SkillList({ skills }: SkillListProps) {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
}

interface SkillProps {
  skill: Skill;
  color: string;
}

function getIconForLevel(level: string): string {
  switch (level) {
    case "beginner":
      return "👶";
    case "intermediate":
      return "👍";
    case "advanced":
      return "💪";
    default:
      return "❔";
  }
}

function Skill({ skill, color }: SkillProps) {
  return (
    <span className="skill" style={{ backgroundColor: color }}>
      {skill.skill} {getIconForLevel(skill.level)}
    </span>
  );
}

export default App;
