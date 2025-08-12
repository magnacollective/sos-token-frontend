import { motion } from 'framer-motion'
import { TrendingUp, Clock, Shield, Award, Zap, Book } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const sessionData = [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 62 },
    { day: 'Wed', minutes: 58 },
    { day: 'Thu', minutes: 73 },
    { day: 'Fri', minutes: 89 },
    { day: 'Sat', minutes: 95 },
    { day: 'Sun', minutes: 120 },
  ]

  const tokenData = [
    { time: '00:00', value: 0.82 },
    { time: '04:00', value: 0.85 },
    { time: '08:00', value: 0.91 },
    { time: '12:00', value: 0.94 },
    { time: '16:00', value: 0.89 },
    { time: '20:00', value: 0.96 },
    { time: '24:00', value: 0.98 },
  ]

  const streakData = [
    { week: 'W1', days: 3 },
    { week: 'W2', days: 5 },
    { week: 'W3', days: 6 },
    { week: 'W4', days: 7 },
  ]

  const stats = [
    { icon: Clock, label: 'Today\'s Focus', value: '2h 15m', change: '+18%' },
    { icon: Shield, label: 'Apps Blocked', value: '23', change: 'Active' },
    { icon: Award, label: 'Current Streak', value: '7 days', change: '+1' },
    { icon: Zap, label: 'BASE Earned', value: '142', change: '+12' },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white/60 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sos-green-500 text-sm mt-2">{stat.change}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-sos-orange-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-sos-orange-400" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Weekly Faith Sessions</h3>
              <div className="flex items-center space-x-2 text-sos-green-500">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">+23% vs last week</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={sessionData}>
                <defs>
                  <linearGradient id="colorSession" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF8C00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF8C00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="day" stroke="#ffffff40" />
                <YAxis stroke="#ffffff40" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F38', 
                    border: '1px solid #ffffff20',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="minutes" 
                  stroke="#FF8C00" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorSession)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold mb-6">Streak Progress</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={streakData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="week" stroke="#ffffff40" />
                <YAxis stroke="#ffffff40" domain={[0, 7]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F38', 
                    border: '1px solid #ffffff20',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="days" fill="#528AF3" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold mb-6">BASE Token Price</h3>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-3xl font-bold">$0.98</p>
                <p className="text-sos-green-500 text-sm">+19.5% (24h)</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/60">Volume</p>
                <p className="font-semibold">$2.4M</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={tokenData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="time" hide />
                <YAxis hide domain={[0.8, 1]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F38', 
                    border: '1px solid #ffffff20',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#33BF66" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 glass-card p-6"
          >
            <h3 className="text-xl font-bold mb-6">Recent Achievements</h3>
            <div className="space-y-4">
              {[
                { icon: Award, title: '7-Day Warrior', desc: 'Completed a week-long Faith Mode streak', time: '2 hours ago' },
                { icon: Book, title: 'Scripture Scholar', desc: 'Read 100 verses during Faith Sessions', time: '5 hours ago' },
                { icon: Shield, title: 'Digital Defender', desc: 'Blocked 500+ distracting app attempts', time: 'Yesterday' },
              ].map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-sos-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-sos-orange-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{achievement.title}</p>
                      <p className="text-sm text-white/60">{achievement.desc}</p>
                    </div>
                    <p className="text-xs text-white/40">{achievement.time}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard