import '@/app/ui/globals.css';
import { Theme } from '@radix-ui/themes';
import Background from './ui/background/background';

export const metadata = {
  title: 'Annkuz Budget Dashboard',
  description: 'Next.js dachboard app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Background />
        <Theme appearance="dark" accentColor="cyan">
          {children}
        </Theme>
      </body>
    </html>
  )
}