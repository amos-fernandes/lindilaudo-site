/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f3ff',
          pink: '#ff00ff',
          purple: '#b026ff',
          green: '#39ff14',
          blue: '#0066ff',
          yellow: '#ffff00'
        },
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a2e',
          600: '#252542'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f3ff, 0 0 10px #00f3ff' },
          '100%': { boxShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff, 0 0 40px #00f3ff' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}