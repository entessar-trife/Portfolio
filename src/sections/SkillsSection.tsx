import MainTitle from "../components/MainTitle";
import SkillComponent from "../components/SkillComponent";
import { SkillsData } from "../Data/SkillsData";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center pt-24 "
    >
      <MainTitle title=" My Skills" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {SkillsData.map((skill, index) => (
          <SkillComponent
            index={index}
            icon={skill.icon}
            name={skill.name}
            desc={skill.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
