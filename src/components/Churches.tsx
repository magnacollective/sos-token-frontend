import { motion } from 'framer-motion'
import { MapPin, Users, DollarSign, CheckCircle, Building2, Heart, TrendingUp, Clock } from 'lucide-react'

const Churches = () => {
  const featuredChurches = [
    {
      name: 'Grace Community Church',
      location: 'Austin, TX',
      members: 342,
      monthlyEarnings: '$2,847',
      description: 'A vibrant community focused on digital discipleship and youth engagement.',
      verified: true,
      image: '⛪'
    },
    {
      name: 'First Baptist Nashville',
      location: 'Nashville, TN',
      members: 287,
      monthlyEarnings: '$2,156',
      description: 'Traditional values meeting modern technology for spiritual growth.',
      verified: true,
      image: '✝️'
    },
    {
      name: 'Hillside Chapel',
      location: 'Los Angeles, CA',
      members: 198,
      monthlyEarnings: '$1,789',
      description: 'Urban ministry focused on digital wellness and community connection.',
      verified: true,
      image: '🏔️'
    },
    {
      name: 'Faith Assembly',
      location: 'Miami, FL',
      members: 156,
      monthlyEarnings: '$1,342',
      description: 'Multicultural congregation embracing faith-driven technology.',
      verified: true,
      image: '🌊'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Automatic Donations',
      description: 'Receive SOSF tokens automatically from your congregation\'s focus time'
    },
    {
      icon: Users,
      title: 'Member Engagement',
      description: 'Track your congregation\'s digital wellness journey and spiritual growth'
    },
    {
      icon: TrendingUp,
      title: 'Transparent Reporting',
      description: 'Real-time dashboard showing contributions, member activity, and impact'
    },
    {
      icon: Heart,
      title: 'Community Building',
      description: 'Foster deeper connections through shared digital discipline challenges'
    }
  ]

  const onboardingSteps = [
    {
      step: 1,
      title: 'Verification Process',
      description: 'Submit church documents or connect through our partner verification API'
    },
    {
      step: 2,
      title: 'Wallet Setup',
      description: 'Configure your payout wallet with optional auto-convert to stable coins'
    },
    {
      step: 3,
      title: 'Member Integration',
      description: 'Share your unique church link for congregation members to join'
    },
    {
      step: 4,
      title: 'Dashboard Access',
      description: 'Monitor contributions, member activity, and generate tax receipts'
    }
  ]

  const stats = [
    { label: 'Partner Churches', value: '287', icon: Building2 },
    { label: 'Total Members', value: '12,543', icon: Users },
    { label: 'Monthly Distributions', value: '$45.2K', icon: DollarSign },
    { label: 'Average per Church', value: '$158', icon: TrendingUp },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Partner Churches</h2>
          <p className="text-xl text-white/60">Join hundreds of churches receiving automatic donations through faith-driven technology</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Church Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-12 text-center"
        >
          <Building2 className="w-16 h-16 text-sos-orange-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Register Your Church</h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Start receiving automatic donations from your congregation's focus time. 
            No setup fees, no monthly charges - just transparent technology supporting your ministry.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-xl text-white font-bold text-lg button-glow">
            Start Church Registration
          </button>
        </motion.div>

        {/* Featured Churches */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Partner Churches</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredChurches.map((church, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{church.image}</span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold">{church.name}</h4>
                        {church.verified && (
                          <CheckCircle className="w-4 h-4 text-sos-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-white/60 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {church.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-sos-green-500">{church.monthlyEarnings}</p>
                    <p className="text-xs text-white/60">Monthly</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{church.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <Users className="w-4 h-4" />
                    <span>{church.members} members</span>
                  </div>
                  <button className="text-sm text-sos-orange-400 hover:text-sos-orange-300">
                    View Profile →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Why Churches Choose SOS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
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
                  <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                  <p className="text-white/60">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Onboarding Process */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Simple Onboarding Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((step, index) => (
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
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="text-white/60 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Church Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Church Dashboard Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5">
              <DollarSign className="w-8 h-8 text-sos-green-500 mb-3" />
              <h4 className="font-semibold mb-2">Real-Time Donations</h4>
              <p className="text-sm text-white/60">Track incoming SOSF tokens from your congregation's focus sessions</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5">
              <Users className="w-8 h-8 text-sos-blue-500 mb-3" />
              <h4 className="font-semibold mb-2">Member Analytics</h4>
              <p className="text-sm text-white/60">See how your community is growing in digital discipline</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5">
              <Clock className="w-8 h-8 text-sos-orange-400 mb-3" />
              <h4 className="font-semibold mb-2">Focus Reports</h4>
              <p className="text-sm text-white/60">Generate reports for congregation engagement and impact</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Churches