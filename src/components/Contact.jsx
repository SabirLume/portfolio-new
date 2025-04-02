const Contact = () => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-8 border-b pb-2 border-gray-200 dark:border-[#313244]">
        Contact Me
      </h2>

      <div className="rounded-lg border border-gray-200 dark:border-[#313244] p-6 bg-white dark:bg-[#252538] bg-opacity-50 dark:bg-opacity-100 backdrop-blur-sm ide-card">
        <p className="text-gray-600 dark:text-[#cdd6f4] mb-6 text-lg">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email Card */}
          <a
            href="mailto:your.email@example.com"
            className="rounded-lg border border-gray-200 dark:border-[#313244] p-4 bg-white dark:bg-[#1e1e2e] hover:shadow-md transition-all duration-300 flex flex-col items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-[#313244] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-600 dark:text-[#89b4fa]"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-medium dark:text-[#89b4fa] mb-1">Email</h3>
              <p className="text-sm text-gray-600 dark:text-[#cdd6f4] break-all">
                your.email@example.com
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 dark:border-[#313244] p-4 bg-white dark:bg-[#1e1e2e] hover:shadow-md transition-all duration-300 flex flex-col items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-[#313244] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-600 dark:text-[#89b4fa]"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-medium dark:text-[#89b4fa] mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-[#cdd6f4]">
                linkedin.com/in/yourprofile
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 dark:border-[#313244] p-4 bg-white dark:bg-[#1e1e2e] hover:shadow-md transition-all duration-300 flex flex-col items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-[#313244] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-600 dark:text-[#89b4fa]"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-medium dark:text-[#89b4fa] mb-1">GitHub</h3>
              <p className="text-sm text-gray-600 dark:text-[#cdd6f4]">
                github.com/yourusername
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
