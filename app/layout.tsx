import './styles/global.scss'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Layer One | SMS Campaigns, AI Reply Automation, Campaign Management',
  description: 'Layer One builds SMS-first campaigns with AI-powered inbound response automation and managed copywriting across SMS, WhatsApp, and Instagram.',
  icons: {
    // icon: '/img/favicon2.png',
    icon: '/img/layerone_logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning={true} className='antialiased'>
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
