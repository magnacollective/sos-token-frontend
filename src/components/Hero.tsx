import { motion } from 'framer-motion'
import { ArrowRight, Shield, Heart, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sos-orange-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="gradient-text">Save Our Soul</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Transform your smartphone from a source of distraction into a tool of devotion. 
            Powered by Base L2 blockchain and SOSF token rewards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-xl text-white font-bold text-lg button-glow flex items-center justify-center space-x-2"
            >
              <span>Start Faith Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card rounded-xl text-white font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'Faith Mode', value: '12,543', label: 'Active Users' },
              { icon: Heart, title: 'Devotion Time', value: '2.5M', label: 'Minutes Saved' },
              { icon: Users, title: 'Community', value: '8,231', label: 'SOSF Holders' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-sos-orange-400 mx-auto mb-3" />
                  <h3 className="text-sm text-white/60 mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero