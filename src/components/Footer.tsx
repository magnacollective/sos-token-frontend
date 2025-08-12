import { motion } from 'framer-motion'
import { Cross, Twitter, MessageCircle, Github, Mail } from 'lucide-react'

const Footer = () => {
  const links = {
    product: [
      { label: 'Download App', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Whitepaper', href: '#' },
      { label: 'BASE Token', href: '#' },
    ],
    community: [
      { label: 'Discord', href: '#' },
      { label: 'Telegram', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Churches', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  }

  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sos-navy-900/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sos-orange-500 to-sos-orange-600 flex items-center justify-center">
                <Cross className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">SOS</span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Transform your smartphone from a source of distraction into a tool of devotion. 
              Powered by BASE blockchain.
            </p>
            <div className="flex space-x-3">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white/60 hover:text-white" />
                  </motion.a>
                )
              })}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Community</h4>
            <ul className="space-y-2">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              © 2024 SOS. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-white/60">Built on</span>
              <span className="font-semibold gradient-text">BASE</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 italic">"Matthew 6:33"</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer