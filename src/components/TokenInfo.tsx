import { motion } from 'framer-motion'
import { Coins, TrendingUp, Users, Lock, Zap, ArrowUpRight, ArrowDownRight, Shield } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const TokenInfo = () => {
  const tokenomics = [
    { name: 'Community Rewards', value: 40, color: '#FF8C00' },
    { name: 'Development', value: 20, color: '#528AF3' },
    { name: 'Marketing', value: 15, color: '#33BF66' },
    { name: 'Liquidity', value: 15, color: '#FFBF4D' },
    { name: 'Team', value: 10, color: '#D94D5A' },
  ]

  const features = [
    { icon: Shield, title: 'Faith Mining', desc: 'Earn BASE tokens for every Faith Mode session' },
    { icon: Users, title: 'Community Governance', desc: 'Vote on platform features and token distribution' },
    { icon: Lock, title: 'Staking Rewards', desc: 'Lock tokens for higher APY and exclusive benefits' },
    { icon: Zap, title: 'Instant Rewards', desc: 'Get BASE tokens immediately after completing sessions' },
  ]

  const priceHistory = [
    { date: 'Jan 1', price: 0.45, change: 12.5 },
    { date: 'Jan 8', price: 0.52, change: 15.6 },
    { date: 'Jan 15', price: 0.68, change: 30.8 },
    { date: 'Jan 22', price: 0.74, change: 8.8 },
    { date: 'Jan 29', price: 0.89, change: 20.3 },
    { date: 'Feb 5', price: 0.98, change: 10.1 },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">BASE Token Economics</h2>
          <p className="text-xl text-white/60">Powering the faith-driven digital wellness ecosystem</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-sos-orange-500/20 flex items-center justify-center">
                <Coins className="w-6 h-6 text-sos-orange-400" />
              </div>
              <span className="text-xs text-sos-green-500 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +19.5%
              </span>
            </div>
            <p className="text-sm text-white/60 mb-1">Current Price</p>
            <p className="text-3xl font-bold mb-2">$0.98</p>
            <p className="text-xs text-white/40">1 BASE = 0.00024 ETH</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-sos-blue-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-sos-blue-400" />
              </div>
              <span className="text-xs text-white/60">BASE Chain</span>
            </div>
            <p className="text-sm text-white/60 mb-1">Market Cap</p>
            <p className="text-3xl font-bold mb-2">$9.8M</p>
            <p className="text-xs text-white/40">Rank #842</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-sos-green-500/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-sos-green-500" />
              </div>
              <span className="text-xs text-white/60">TVL</span>
            </div>
            <p className="text-sm text-white/60 mb-1">Total Supply</p>
            <p className="text-3xl font-bold mb-2">10M</p>
            <p className="text-xs text-white/40">6.2M Circulating</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
            <div className="flex items-center space-x-8">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={tokenomics}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {tokenomics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1F38', 
                      border: '1px solid #ffffff20',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3 flex-1">
                {tokenomics.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">How to Earn BASE</h3>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-sos-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-sos-orange-400" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{feature.title}</p>
                      <p className="text-sm text-white/60">{feature.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Price History</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-sm font-medium text-white/60">Date</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-white/60">Price</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-white/60">24h Change</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-white/60">Volume</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-white/60">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {priceHistory.map((item, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-sm">{item.date}</td>
                    <td className="text-right py-3 px-4 font-semibold">${item.price}</td>
                    <td className="text-right py-3 px-4">
                      <span className={`flex items-center justify-end ${item.change > 0 ? 'text-sos-green-500' : 'text-sos-red-500'}`}>
                        {item.change > 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                        {Math.abs(item.change)}%
                      </span>
                    </td>
                    <td className="text-right py-3 px-4 text-sm text-white/60">$2.4M</td>
                    <td className="text-right py-3 px-4 text-sm text-white/60">${(item.price * 10).toFixed(1)}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card p-8 mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-2xl font-bold mb-2">Start Earning BASE Today</h3>
              <p className="text-white/60">Join thousands of believers transforming their digital habits</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 rounded-xl text-white font-semibold button-glow">
                Buy BASE
              </button>
              <button className="px-6 py-3 glass-card rounded-xl text-white font-semibold hover:bg-white/10 transition-colors">
                Add to Wallet
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TokenInfo