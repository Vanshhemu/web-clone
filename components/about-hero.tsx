"use client"

export default function AboutHero() {
  return (
    <div className="relative w-full h-96 md:h-[500px] bg-cover bg-center overflow-hidden">
      {/* Unsplash IT/Tech themed background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80)',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-6">
            Discover Our Story
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            ABOUT US
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Your trusted partner in innovative IT solutions and digital transformation
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white/20 rounded-lg animate-float-square"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-white/10 rounded-full animate-float-circle"></div>
      
      <style jsx>{`
        @keyframes float-square {
          0%, 100% { 
            transform: translateY(0px) rotate(45deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(45deg); 
          }
        }
        
        @keyframes float-circle {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-30px); 
          }
        }
        
        .animate-float-square {
          animation: float-square 6s ease-in-out infinite;
        }
        
        .animate-float-circle {
          animation: float-circle 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}