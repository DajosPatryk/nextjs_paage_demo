import type {Config} from "tailwindcss"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	safelist: ["dark"],
	prefix: "",
	important: true,
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'geist-sans': [
					'var(--font-geist-sans)'
				],
				'geist-mono': [
					'var(--font-geist-mono)'
				]
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					'50': 'var(--primary-50)',
					'100': 'var(--primary-100)',
					'200': 'var(--primary-200)',
					'300': 'var(--primary-300)',
					'400': 'var(--primary-400)',
					'500': 'var(--primary-500)',
					'600': 'var(--primary-600)',
					'700': 'var(--primary-700)',
					'800': 'var(--primary-800)',
					'900': 'var(--primary-900)',
					'950': 'var(--primary-950)',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					'50': 'var(--secondary-50)',
					'100': 'var(--secondary-100)',
					'200': 'var(--secondary-200)',
					'300': 'var(--secondary-300)',
					'400': 'var(--secondary-400)',
					'500': 'var(--secondary-500)',
					'600': 'var(--secondary-600)',
					'700': 'var(--secondary-700)',
					'800': 'var(--secondary-800)',
					'900': 'var(--secondary-900)',
					'950': 'var(--secondary-950)',
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					'50': 'var(--accent-50)',
					'100': 'var(--accent-100)',
					'200': 'var(--accent-200)',
					'300': 'var(--accent-300)',
					'400': 'var(--accent-400)',
					'500': 'var(--accent-500)',
					'600': 'var(--accent-600)',
					'700': 'var(--accent-700)',
					'800': 'var(--accent-800)',
					'900': 'var(--accent-900)',
					'950': 'var(--accent-950)',
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				util: {
					'50': 'var(--util-50)',
					'100': 'var(--util-100)',
					'200': 'var(--util-200)',
					'300': 'var(--util-300)',
					'400': 'var(--util-400)',
					'500': 'var(--util-500)',
					'600': 'var(--util-600)',
					'700': 'var(--util-700)',
					'800': 'var(--util-800)',
					'900': 'var(--util-900)',
					'950': 'var(--util-950)',
					'1000': 'var(--util-1000)',
					DEFAULT: 'var(--util-50)'
				},
				success: {
					DEFAULT: 'var(--success)',
					foreground: 'var(--success-foreground)'
				},
				danger: {
					DEFAULT: 'var(--danger)',
					foreground: 'var(--danger-foreground)'
				},
				warning: {
					DEFAULT: 'var(--warning)',
					foreground: 'var(--warning-foreground)'
				},
				information: {
					DEFAULT: 'var(--information)',
					foreground: 'var(--information-foreground)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			width: {
				'50': '50px',
				'150': '150px',
				'200': '200px',
				'300': '300px'
			},
			height: {
				'50': '50px',
				'150': '150px',
				'200': '200px',
				'300': '300px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: 0
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: 0
					}
				},
				'collapsible-down': {
					from: {
						height: 0
					},
					to: {
						height: 'var(--radix-collapsible-content-height)'
					}
				},
				'collapsible-up': {
					from: {
						height: 'var(--radix-collapsible-content-height)'
					},
					to: {
						height: 0
					}
				},
				'marquee': {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-120%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'collapsible-down': 'collapsible-down 0.2s ease-in-out',
				'collapsible-up': 'collapsible-up 0.2s ease-in-out',
				'marquee': 'marquee 60s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
