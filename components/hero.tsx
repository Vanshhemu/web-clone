export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Hero content */}
      <div className="relative h-full flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 max-w-4xl">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                🚀 Transforming Digital Experiences
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Global IT{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                Solution
              </span>
              <br />
              Company
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-xl md:text-2xl max-w-2xl leading-relaxed">
              Delivering innovative IT solutions and services worldwide with cutting-edge technology and unmatched expertise
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute right-10 top-1/4 opacity-30 pointer-events-none animate-float">
        <div className="w-32 h-32 border-2 border-blue-400/50 rounded-lg rotate-45"></div>
      </div>
      <div className="absolute right-32 bottom-1/4 opacity-20 pointer-events-none animate-float-delayed">
        <div className="w-24 h-24 border-2 border-purple-400/50 rounded-full"></div>
      </div>
      <div className="absolute left-1/4 top-20 opacity-25 pointer-events-none animate-float">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg backdrop-blur-sm"></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-30px) rotate(-5deg); 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}