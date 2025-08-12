import { motion } from 'framer-motion'
import { Trophy, Target, Flame, Calendar, Award, Star, TrendingUp } from 'lucide-react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const Analytics = () => {
  const radarData = [
    { category: 'Focus Time', value: 85 },
    { category: 'Apps Blocked', value: 92 },
    { category: 'Scripture Read', value: 78 },
    { category: 'Streaks', value: 95 },
    { category: 'Community', value: 70 },
    { category: 'BASE Earned', value: 88 },
  ]

  const monthlyData = [
    { month: 'Jan', sessions: 45, minutes: 2340, tokens: 234 },
    { month: 'Feb', sessions: 52, minutes: 2890, tokens: 289 },
    { month: 'Mar', sessions: 58, minutes: 3120, tokens: 312 },
    { month: 'Apr', sessions: 61, minutes: 3450, tokens: 345 },
    { month: 'May', sessions: 67, minutes: 3780, tokens: 378 },
    { month: 'Jun', sessions: 73, minutes: 4100, tokens: 410 },
  ]

  const achievements = [
    { icon: Trophy, name: 'Faith Warrior', desc: '30 consecutive days', progress: 100, unlocked: true },
    { icon: Target, name: 'Focus Master', desc: '100 hours total focus', progress: 87, unlocked: false },
    { icon: Flame, name: 'Scripture Scholar', desc: 'Read 500 verses', progress: 65, unlocked: false },
    { icon: Calendar, name: 'Sabbath Keeper', desc: 'Every Sunday for a month', progress: 100, unlocked: true },
    { icon: Star, name: 'Early Bird', desc: '50 morning sessions', progress: 78, unlocked: false },
    { icon: Award, name: 'Digital Defender', desc: 'Block 1000 distractions', progress: 92, unlocked: false },
  ]

  const leaderboard = [
    { rank: 1, name: 'John P.', score: 9847, change: 'up' },
    { rank: 2, name: 'Sarah M.', score: 9234, change: 'up' },
    { rank: 3, name: 'David K.', score: 8912, change: 'down' },
    { rank: 4, name: 'Mary L.', score: 8456, change: 'up' },
    { rank: 5, name: 'You', score: 7823, change: 'up', isUser: true },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Your Faith Journey Stats</h2>
          <p className="text-xl text-white/60">Track your spiritual growth and digital wellness</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Faith Score Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#ffffff20" />
                  <PolarAngleAxis dataKey="category" stroke="#ffffff60" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#ffffff20" />
                  <Radar name="Score" dataKey="value" stroke="#FF8C00" fill="#FF8C00" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
              <div className="space-y-4">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-sos-orange-500/20 to-sos-orange-600/10 border border-sos-orange-500/30">
                  <p className="text-5xl font-bold gradient-text mb-2">847</p>
                  <p className="text-lg font-semibold">Overall Faith Score</p>
                  <p className="text-sm text-white/60 mt-2">Top 15% of users</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <p className="text-2xl font-bold">142h</p>
                    <p className="text-xs text-white/60">Total Focus</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <p className="text-2xl font-bold">1,847</p>
                    <p className="text-xs text-white/60">BASE Earned</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-bold mb-4">Community Ranking</h3>
            <div className="space-y-3">
              {leaderboard.map((user, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    user.isUser ? 'bg-sos-orange-500/20 border border-sos-orange-500/30' : 'bg-white/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank <= 3 ? 'bg-gradient-to-r from-sos-yellow-500 to-sos-yellow-600' : 'bg-white/10'
                    }`}>
                      {user.rank}
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-white/60">{user.score} points</p>
                    </div>
                  </div>
                  {user.change === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-sos-green-500" />
                  ) : (
                    <TrendingUp className="w-4 h-4 text-sos-red-500 rotate-180" />
                  )}
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
              View Full Leaderboard
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 mb-8"
        >
          <h3 className="text-2xl font-bold mb-6">6-Month Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#ffffff60" />
              <YAxis stroke="#ffffff60" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1F38', 
                  border: '1px solid #ffffff20',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="sessions" fill="#528AF3" radius={[8, 8, 0, 0]} />
              <Bar dataKey="tokens" fill="#FF8C00" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-sos-blue-500" />
              <span className="text-sm text-white/60">Sessions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-sos-orange-500" />
              <span className="text-sm text-white/60">BASE Tokens</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Achievements</h3>
            <span className="text-sm text-white/60">4 of 12 unlocked</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-sos-orange-500/20 to-sos-orange-600/10 border-sos-orange-500/30'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      achievement.unlocked ? 'bg-sos-orange-500/30' : 'bg-white/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${achievement.unlocked ? 'text-sos-orange-400' : 'text-white/40'}`} />
                    </div>
                    {achievement.unlocked && (
                      <Star className="w-5 h-5 text-sos-yellow-500" fill="currentColor" />
                    )}
                  </div>
                  <h4 className="font-semibold mb-1">{achievement.name}</h4>
                  <p className="text-xs text-white/60 mb-3">{achievement.desc}</p>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        achievement.unlocked ? 'bg-sos-orange-500' : 'bg-white/30'
                      }`}
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-white/40 mt-2">{achievement.progress}% Complete</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Analytics