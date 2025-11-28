export default function CareerHero() {
  return (
    <div className="relative w-full min-h-56 sm:min-h-64 md:min-h-80 lg:min-h-96 bg-brand-gradient flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 400">
          {/* Decorative career-related icons and patterns */}
          <rect
            x="50"
            y="50"
            width="80"
            height="80"
            fill="none"
            stroke="currentColor"
            opacity="0.3"
          />
          <circle
            cx="200"
            cy="100"
            r="40"
            fill="none"
            stroke="currentColor"
            opacity="0.3"
          />
          <path
            d="M 300 50 L 350 150 L 300 200"
            fill="none"
            stroke="currentColor"
            opacity="0.3"
            strokeWidth="2"
          />
          <rect
            x="400"
            y="80"
            width="100"
            height="100"
            fill="none"
            stroke="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full px-4 sm:px-6 gap-8 sm:gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            CAREER
          </h1>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Hand holding pencil illustration - represented as SVG */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              ✏️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
