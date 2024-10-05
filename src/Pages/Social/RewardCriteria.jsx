import { Link } from "react-router-dom";

const RewardCriteria = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 text-center my-4">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-8 text-center">
            <span className="font-bold tracking-wider uppercase dark:text-violet-600">
              View Reward Criteria 
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl">Earn Badges!</h2>
          </div>

          <div className="flex flex-wrap items-stretch -mx-4">
            {/* Beginner Level */}
            <div className="flex w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-blue-100 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Beginner Level</h4>
                  <span className="text-5xl font-bold">The Changemaker Badge</span>
                </div>
                <p className="mt-3 leading-relaxed dark:text-gray-600">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="flex-1 mb-6 dark:text-gray-600">
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Sign up in the website</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Donate for first time</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Rescue food item (optional)</span>
                  </li>
                </ul>
                <Link to="/addFood">
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="flex w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-green-100 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Advanced Level</h4>
                  <span className="text-5xl font-bold">The Community Hero</span>
                </div>
                <p className="mt-3 leading-relaxed dark:text-gray-600">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="flex-1 mb-6 dark:text-gray-600">
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Donate at least 5 food items</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Resque at least 2 food items from expiration</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Earn at leat 50 points</span>
                  </li>
                </ul>
                <Link to="/addFood">
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Pro Level */}
            <div className="flex w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-purple-100 dark:bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Pro Level</h4>
                  <span className="text-5xl font-bold">The Philanthropist</span>
                </div>
                <p className="mt-3 leading-relaxed dark:text-gray-600">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="flex-1 mb-6 dark:text-gray-600">
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Donate at least 10 food items</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Rescue at least 5 food items from expiration</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-violet-600">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Earn at least 100 points</span>
                  </li>
                </ul>
                <Link to="/addFood">
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RewardCriteria;
