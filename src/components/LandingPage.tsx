import { motion } from 'framer-motion'
import { Check, Clock, DollarSign, Smartphone, Users, TrendingUp, Shield, Heart, Download, Apple, Play } from 'lucide-react'

const LandingPage = () => {
  const stats = [
    { label: 'Active Users', value: '12,543', icon: Users },
    { label: 'Focus Minutes Tracked', value: '2.5M', icon: Clock },
    { label: 'Churches Partnered', value: '287', icon: Heart },
    { label: 'SOSF Tokens Distributed', value: '1.8M', icon: TrendingUp },
  ]

  const features = [
    { icon: Shield, title: 'Faith-Driven Blocking', desc: 'Advanced app blocking with encouraging Scripture overlays instead of guilt-based restrictions' },
    { icon: Clock, title: 'Focus Time Rewards', desc: 'Earn SOSF tokens for every verified minute spent in Faith Mode - turn discipline into impact' },
    { icon: Heart, title: 'Automatic Church Giving', desc: 'Set your contribution split - support your church automatically with every focus session' },
    { icon: Users, title: 'Community Challenges', desc: 'Join streaks, compete with friends, and participate in global faith-building events' },
    { icon: TrendingUp, title: 'Self-Custody Wallet', desc: 'Full control of your tokens - we never hold your funds, built on secure Base L2 blockchain' },
    { icon: Smartphone, title: 'Cross-Platform Sync', desc: 'Native iOS and Android apps with web dashboard for advanced token management' },
  ]

  const pricingPlans = [
    {
      name: 'Faithful (Free)',
      price: '$0',
      period: '/month',
      description: 'Earn your subscription through discipline',
      features: [
        '15+ verified focus hours/month required',
        'Access to all Faith Mode features',
        'Basic SOSF token earnings',
        'Community participation',
        'Church contribution splitting',
        'NFC device support'
      ],
      cta: 'Start Free',
      highlighted: false
    },
    {
      name: 'Supporter',
      price: '$10',
      period: '/month',
      description: 'Full access regardless of focus time',
      features: [
        'No minimum focus hours required',
        'All Faithful features included',
        'Premium SOSF earning rates',
        'Advanced analytics & insights',
        'Priority customer support',
        'Early access to new features',
        'Enhanced token management tools'
      ],
      cta: 'Choose Supporter',
      highlighted: true
    }
  ]

  const howItWorks = [
    { step: 1, title: 'Download & Setup', desc: 'Get the SOS app on iOS or Android. Link your self-custody wallet or create one.' },
    { step: 2, title: 'Configure Faith Mode', desc: 'Select which apps to block and set your church contribution preferences.' },
    { step: 3, title: 'Focus & Earn', desc: 'Activate Faith Mode to block distractions. Earn SOSF tokens for every verified minute.' },
    { step: 4, title: 'Impact & Give', desc: 'Watch your tokens automatically support your church while you keep your share.' }
  ]

  return (
    <div className="space-y-20">
      {/* Mission Statement */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Transform Distraction Into <span className="gradient-text">Devotion</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              SOS (Save Our Soul) is the first faith-driven digital wellness platform that rewards spiritual discipline. 
              Block distracting apps, earn SOSF tokens, and automatically support your church community - all while 
              maintaining complete control of your digital assets through self-custody wallets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-black rounded-xl text-white font-semibold hover:bg-gray-800 transition-colors">
                <Apple className="w-5 h-5" />
                <span>Download for iOS</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 rounded-xl text-white font-semibold hover:bg-green-700 transition-colors">
                <Play className="w-5 h-5" />
                <span>Get on Android</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
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
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Fair Pricing</h2>
            <p className="text-xl text-white/60">Pay $10/month or earn your subscription through spiritual discipline</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 ${plan.highlighted ? 'ring-2 ring-sos-orange-500/50' : ''}`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-white/60 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-white/60">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-sos-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlighted 
                    ? 'bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 text-white button-glow'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-white/50">
              * Free tier requires 15+ verified focus hours per month. The app will pay for itself if you maintain spiritual discipline!
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How SOS Works</h2>
            <p className="text-xl text-white/60">Four simple steps to transform your digital habits</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Faith-First Features</h2>
            <p className="text-xl text-white/60">Everything you need to reclaim your digital life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-sos-orange-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-sos-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/60">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Life?</h2>
            <p className="text-xl text-white/60 mb-8">
              Join thousands of believers who have reclaimed their time and strengthened their faith through digital discipline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-xl text-white font-bold text-lg button-glow flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download SOS App</span>
              </button>
              <button className="px-8 py-4 glass-card rounded-xl text-white font-bold text-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
            <p className="text-sm text-white/40 mt-6">
              "But seek first his kingdom and his righteousness, and all these things will be given to you as well." - Matthew 6:33
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage