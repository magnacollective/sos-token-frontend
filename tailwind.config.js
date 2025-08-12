/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sos-navy': {
          900: '#0F1428',
          800: '#1A1F38',
          700: '#1F2541',
          600: '#2A3051',
          500: '#363D61',
        },
        'sos-orange': {
          500: '#FF8C00',
          400: '#FF9F28',
          600: '#F27300',
        },
        'sos-blue': {
          500: '#528AF3',
          400: '#6B9BF5',
          600: '#3974E8',
        },
        'sos-green': {
          500: '#33BF66',
          600: '#1E994D',
        },
        'sos-yellow': {
          500: '#FFBF4D',
          600: '#F28C0D',
        },
        'sos-red': {
          500: '#D94D5A',
          600: '#B22633',
        }
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 140, 0, 0.5), 0 0 40px rgba(255, 140, 0, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 140, 0, 0.6), 0 0 60px rgba(255, 140, 0, 0.4)' 
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}