import '@/app/ui/globals.css';
import '@radix-ui/themes/styles.css';
// import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Annkuz Budget Dashboard',
  description: 'Next.js dachboard app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  )
}