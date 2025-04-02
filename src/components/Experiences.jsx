const Experiences = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 border-b pb-2 border-gray-200 dark:border-gray-700">
        Recent Experiences
      </h2>

      <div className="space-y-6">
        {/* Experience Card 1 */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
            <h3 className="text-xl font-semibold">Wayfair</h3>
            <span className="mt-1 sm:mt-0 w-fit px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              Mar 2019 - March 2024 | 5 years
            </span>
          </div>
          <a
            href="https://sell.wayfair.com/grow-advertising"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 mb-4 hover:underline w-fit"
          >
            sell.wayfair.com/grow-advertising
          </a>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Worked as full-stack developer across multiple teams within the ads
            space, providing customer facing solutions for advertising products.
          </p>
        </div>

        {/* Experience Card 2 */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
            <h3 className="text-xl font-semibold">Solo Travel</h3>
            <span className="mt-1 sm:mt-0 w-fit px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700">
              Mar 2024 - July 2024 | 3 months
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              Vietnam 🇻🇳
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              Indonesia 🇮🇩
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              Philippines 🇵🇭
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              Thailand 🇹🇭
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Took a break from my career and traveled to take on a new challenge
            of getting to know myself, and experiencing the world and learning
            about different cultures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
