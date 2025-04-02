import TechCard from "./TechCard";

const Technologies = () => {
  const technologies = [
    { name: "Docker", icon: "🐳" },
    { name: "PHP", icon: "🐘" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Java", icon: "☕" },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 border-b pb-2 border-gray-200 dark:border-gray-700">
        Technologies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <TechCard key={index} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
