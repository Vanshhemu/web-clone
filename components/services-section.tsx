import { Lightbulb, FileText, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Lightbulb,
      title: 'IT Hardware Solutions',
      description: 'Comprehensive hardware solutions for all your technology needs',
      features: ['Servers & Workstations', 'Networking Equipment', 'Storage Solutions'],
      color: 'blue',
      link: '/solutions#it-hardware'
    },
    {
      icon: FileText,
      title: 'Accessories & Connectivity',
      description: 'Premium accessories and connectivity solutions for seamless operations',
      features: ['Cables & Adapters', 'Peripheral Devices', 'Network Components'],
      color: 'purple',
      link: '/solutions#accessories-connectivity'
    },
    {
      icon: Users,
      title: 'Expert Repair Services',
      description: 'Professional repair and maintenance services for all devices',
      features: ['Hardware Diagnostics', 'Component Replacement', 'System Optimization'],
      color: 'cyan',
      link: '/solutions#repair-services'
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'from-blue-500 to-blue-600',
      light: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      iconBg: 'bg-blue-100',
      hover: 'hover:border-blue-400'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-600',
      iconBg: 'bg-purple-100',
      hover: 'hover:border-purple-400'
    },
    cyan: {
      bg: 'from-cyan-500 to-cyan-600',
      light: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-600',
      iconBg: 'bg-cyan-100',
      hover: 'hover:border-cyan-400'
    }
  }

  return (
    <section className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-transparent bg-clip-text">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = colorClasses[service.color]
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 border-2 ${colors.border} ${colors.hover} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`${colors.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={40} className={colors.text} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:${colors.text} transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className={colors.text} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${colors.light} rounded-full -mr-12 -mt-12 opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="group">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
                500+
              </p>
              <p className="text-gray-600 font-medium">Projects Delivered</p>
            </div>
            <div className="group border-x border-slate-200">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 text-transparent bg-clip-text mb-2">
                150+
              </p>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="group">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text mb-2">
                98%
              </p>
              <p className="text-gray-600 font-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}