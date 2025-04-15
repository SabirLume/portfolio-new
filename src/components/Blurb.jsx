import headshot from "../assets/headshot.png";
const Blurb = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 mb-16 items-center md:items-start">
      <div className="md:flex-1 space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Hello{" "}
          <span className="inline-block animate-wave origin-bottom-right">
            👋
          </span>
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          My name is{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Anwar
          </span>{" "}
          I'm a software engineer who loves solving real-world problems. I
          believe software should make life simpler, work more efficient, and
          ideas more accessible. Whether it’s streamlining workflows, expanding
          product reach, or enhancing daily life, this is what drives me to
          build.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          With 5 years engineering experience within advertising, I’ve seen
          firsthand how robust software transforms businesses. Now, I’m looking
          into continuing to channeling my experience into crafting solutions
          that matter.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Proficient in a diverse tech stack, I have honed my skills in Java,
          PHP, React, and have hands-on experience with Kubernetes and Docker.
          My proven track record of delivering high quality solutions and
          collaborating with cross-functional teams makes me a valuable asset
          for any forward-thinking organization.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-1">
          <div className="absolute inset-0 rounded-full overflow-hidden m-1 border-2 border-gray-200 dark:border-gray-700">
            <img
              src={headshot}
              alt="Profile picture"
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blurb;
