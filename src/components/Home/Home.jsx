import React from 'react';

const Home = () => {
  return (
    <>
      {/* College Image Section */}
      <section className="mt-20">
        <img src="./collegeImg.png" alt="College Image" className="w-full h-64 object-cover" />
      </section>

      {/* College Principal Section */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center">
          {/* Principal Image */}
          <div className="w-1/2">
            <img src="./johnsmith.jpg" alt="Principal Image" className="w-1/2  h-1/2 object-cover rounded-lg" />
          </div>
          {/* Principal Description */}
          <div className="w-1/2 pl-6">
            <h2 className="text-2xl font-bold mb-2">Dr. Satyanshu Satyam</h2>
            <p className="text-gray-700">
              Dr. John Smith is the esteemed Principal of our college, bringing over two decades of experience in educational leadership. Under his guidance, the college has seen remarkable growth in both academic and extracurricular areas. Dr. Smith is dedicated to fostering an environment where students can excel and thrive, ensuring that each individual receives a well-rounded education.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="flex-grow bg-aqua mt-4">
        <div className="container mx-auto p-6 flex flex-wrap justify-around">
          {/* Stories Section */}
          <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
            <h2 className="text-center text-2xl font-bold mb-6">Stories</h2>

            {/* Story 1 */}
            <div className="flex mb-6 hover:scale-105 transform transition-transform duration-200">
              <img src="path/to/image1.jpg" alt="Story Image" className="w-24 h-24 mr-4 rounded-lg object-cover" />
              <div>
                <span className="text-gray-500 text-sm block mb-1">August 26, 2024</span>
                <h3 className="text-xl font-semibold mb-1">Harvard Is Up to the Challenge</h3>
                <p className="text-sm text-gray-700">
                  With the start of the fall semester, President Alan M. Garber AB '77, PhD '82 discusses the challenges and opportunities ahead.
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex mb-6 hover:scale-105 transform transition-transform duration-200">
              <img src="path/to/image2.jpg" alt="Story Image" className="w-24 h-24 mr-4 rounded-lg object-cover" />
              <div>
                <span className="text-gray-500 text-sm block mb-1">August 15, 2024</span>
                <h3 className="text-xl font-semibold mb-1">John Manning Named Provost</h3>
                <p className="text-sm text-gray-700">
                  John F. Manning AB '82, JD '85, who has served as Harvard's interim provost since March, has been appointed the next provost of the University.
                </p>
              </div>
            </div>

            {/* Story 3 */}
            <div className="flex mb-6 hover:scale-105 transform transition-transform duration-200">
              <img src="path/to/image3.jpg" alt="Story Image" className="w-24 h-24 mr-4 rounded-lg object-cover" />
              <div>
                <span className="text-gray-500 text-sm block mb-1">July 17, 2024</span>
                <h3 className="text-xl font-semibold mb-1">VP for Alumni Affairs and Development to Step Down</h3>
                <p className="text-sm text-gray-700">
                  Brian Lee, who has served as Harvard's vice president for alumni affairs and development since 2018, will retire at the end of 2024.
                </p>
              </div>
            </div>

            <a href="/stories" className="block text-center text-blue-600 font-bold hover:bg-gray-100 py-2 border-t border-gray-200 mt-4">View All Stories</a>
          </div>

          {/* Programs & Events Section */}
          <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-6">Programs & Events</h2>

            {/* Event 1 */}
            <div className="flex items-center mb-4 hover:scale-105 transform transition-transform duration-200">
              <span className="font-bold text-lg mr-3">Sep 01</span>
              <div>
                <span className="text-gray-500 text-sm block">Arts, Athletics, Virtual</span>
                <h4 className="text-md font-semibold">Discover the Power of Shakti Breath and DMT Breathing</h4>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex items-center mb-4 hover:scale-105 transform transition-transform duration-200">
              <span className="font-bold text-lg mr-3">Sep 03</span>
              <div>
                <span className="text-gray-500 text-sm block">Virtual</span>
                <h4 className="text-md font-semibold">SIG: Successful Aging – monthly group for Young and Old — and In-Between!</h4>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex items-center mb-4 hover:scale-105 transform transition-transform duration-200">
              <span className="font-bold text-lg mr-3">Sep 04</span>
              <div>
                <span className="text-gray-500 text-sm block">Virtual</span>
                <h4 className="text-md font-semibold">Black Ivy Votes Fireside Chat</h4>
              </div>
            </div>

            {/* Event 4 */}
            <div className="flex items-center mb-4 hover:scale-105 transform transition-transform duration-200">
              <span className="font-bold text-lg mr-3">Sep 04</span>
              <div>
                <span className="text-gray-500 text-sm block">Palm Beach, FL | Social</span>
                <h4 className="text-md font-semibold">Central County Monthly Luncheon</h4>
              </div>
            </div>

            <a href="/events" className="block text-center text-blue-600 font-bold hover:bg-gray-100 py-2 border-t border-gray-200 mt-4">View All Upcoming Events</a>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;