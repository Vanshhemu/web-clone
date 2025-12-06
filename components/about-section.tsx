export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              ABOUT US
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="space-y-6">
            {/* Main intro card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                Savekey Technology is an <span className="font-semibold text-blue-600">ISO 9001:2015, ISO 27001:2022</span> and <span className="font-semibold text-blue-600">ISO 20000-1:2018</span> systems integrator committed to delivering the best IT solutions driven by the latest technology and best suited business-driven solutions to small, medium and global companies.
              </p>
            </div>

            {/* Location card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">📍</span>
                </div>
                <div>
                  <p className="font-bold text-xl text-blue-900 mb-2">Pan India Presence</p>
                  <p className="text-gray-700 leading-relaxed">
                    New Delhi • Noida • Mumbai • Bengaluru • Hyderabad • Chennai • Kolkata
                  </p>
                </div>
              </div>
            </div>

            {/* Key highlights */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start group">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <p className="text-gray-700 leading-relaxed flex-1">
                  Our technology expertise and approach gave us an edge that made us the <span className="font-semibold text-gray-900">preferred partner for global enterprises</span>.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <p className="text-lg font-semibold italic">
                  "It is not enough to find Talent; it is important to know what to do with it"
                </p>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <p className="text-gray-700 leading-relaxed flex-1">
                  Our professional experts specialising in <span className="font-semibold text-gray-900">recruitment, outsourcing, and talent management</span> are versatile enough to find the best manpower for hard-to-fill jobs.
                </p>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <p className="text-gray-700 leading-relaxed flex-1">
                  We aim to evolve into a <span className="font-semibold text-gray-900">Community Centre</span> focusing on providing innovative and productive solutions for critical community needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Visual Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Image 1 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-4xl mb-2">👥</div>
                  <p className="font-semibold">Team Collaboration</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-4xl mb-2">💼</div>
                  <p className="font-semibold">Professional Team</p>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 col-span-2">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-10 text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative">
                  <div className="flex items-baseline gap-2 mb-3">
                    <p className="text-7xl md:text-8xl font-bold">25</p>
                    <span className="text-3xl font-light">+</span>
                  </div>
                  <p className="text-2xl font-semibold leading-tight">
                    Years Experience<br/>
                    Of IT Solution
                  </p>
                  <div className="mt-6 flex gap-3">
                    <div className="w-16 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">7</p>
                <p className="text-sm text-gray-600 font-medium">Cities</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">3</p>
                <p className="text-sm text-gray-600 font-medium">ISO Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a 
            href="/about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
}