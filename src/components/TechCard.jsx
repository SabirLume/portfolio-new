const TechCard = ({ name, icon }) => {
  return (
    <div className="group flex flex-col items-center p-6 hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="w-16 h-16 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 text-4xl">
        {icon}
      </div>
      <p className="font-medium">{name}</p>
    </div>
  );
};
export default TechCard;
