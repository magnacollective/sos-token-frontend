import { motion } from 'framer-motion'
import { Users, MessageCircle, Heart, Share2, BookOpen, Calendar, MapPin, Video } from 'lucide-react'

const Community = () => {
  const posts = [
    {
      author: 'Pastor James',
      avatar: '🙏',
      time: '2 hours ago',
      content: 'Just completed my 100th Faith Mode session! The journey of digital discipline has brought me closer to God than ever before. Remember: every moment away from distraction is a moment closer to Him.',
      likes: 234,
      comments: 45,
      shares: 12,
      verified: true
    },
    {
      author: 'Sarah M.',
      avatar: '✝️',
      time: '5 hours ago',
      content: 'Day 30 of my Faith Mode journey! My family has noticed such a difference during dinner time. No more phones, just genuine conversation and prayer. BASE tokens are a bonus - the real reward is connection.',
      likes: 189,
      comments: 32,
      shares: 8,
      verified: false
    },
    {
      author: 'Youth Group Leader',
      avatar: '🕊️',
      time: '1 day ago',
      content: 'Our entire youth group started using SOS Token last month. The transformation has been incredible! Kids are reading scripture instead of scrolling. This is the future of faith-based technology.',
      likes: 567,
      comments: 89,
      shares: 34,
      verified: true
    },
  ]

  const events = [
    {
      title: 'Global Faith Mode Hour',
      date: 'Feb 15, 2024',
      time: '7:00 PM EST',
      participants: 2341,
      type: 'virtual'
    },
    {
      title: 'Digital Sabbath Challenge',
      date: 'Every Sunday',
      time: 'All Day',
      participants: 5678,
      type: 'recurring'
    },
    {
      title: 'Scripture & BASE Rewards',
      date: 'Feb 20, 2024',
      time: '6:00 PM PST',
      participants: 892,
      type: 'virtual'
    },
  ]

  const churches = [
    { name: 'Grace Community Church', location: 'Austin, TX', members: 342 },
    { name: 'First Baptist', location: 'Nashville, TN', members: 287 },
    { name: 'Hillside Chapel', location: 'Los Angeles, CA', members: 198 },
    { name: 'Faith Assembly', location: 'Miami, FL', members: 156 },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Join the Faith Community</h2>
          <p className="text-xl text-white/60">Connect with believers transforming their digital lives</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">Community Feed</h3>
              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/10 last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full bg-sos-orange-500/20 flex items-center justify-center text-2xl">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <p className="font-semibold">{post.author}</p>
                          {post.verified && (
                            <div className="w-4 h-4 rounded-full bg-sos-blue-500 flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                          <span className="text-xs text-white/40">• {post.time}</span>
                        </div>
                        <p className="text-white/80 mb-4">{post.content}</p>
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-white/60 hover:text-sos-orange-400 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-white/60 hover:text-sos-blue-400 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-white/60 hover:text-sos-green-500 transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span className="text-sm">{post.shares}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                Load More Posts
              </button>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6">Participating Churches</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {churches.map((church, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{church.name}</h4>
                      <Users className="w-4 h-4 text-sos-orange-400" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {church.location}
                      </span>
                      <span className="text-sos-orange-400">{church.members}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 rounded-lg bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 text-white font-semibold button-glow">
                Register Your Church
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white/60">Active Users</span>
                  <span className="text-xl font-bold">12,543</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white/60">Churches</span>
                  <span className="text-xl font-bold">287</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white/60">Countries</span>
                  <span className="text-xl font-bold">42</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <span className="text-white/60">BASE Staked</span>
                  <span className="text-xl font-bold">3.2M</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white/5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm">{event.title}</h4>
                      {event.type === 'virtual' && <Video className="w-4 h-4 text-sos-blue-400" />}
                    </div>
                    <div className="space-y-1 text-xs text-white/60">
                      <p className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date}
                      </p>
                      <p>{event.time}</p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-sos-green-500">{event.participants} joined</span>
                      <button className="text-xs text-sos-orange-400 hover:text-sos-orange-300">
                        Join →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Daily Verse</h3>
              <div className="p-4 rounded-lg bg-sos-blue-500/10 border border-sos-blue-500/20">
                <BookOpen className="w-6 h-6 text-sos-blue-400 mb-3" />
                <p className="text-sm italic mb-3">
                  "Therefore encourage one another and build each other up, just as in fact you are doing."
                </p>
                <p className="text-xs text-sos-blue-400">1 Thessalonians 5:11</p>
              </div>
              <button className="w-full mt-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm">
                Share Verse
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Community