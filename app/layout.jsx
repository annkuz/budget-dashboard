import '@/app/ui/globals.css';
import { Theme } from '@radix-ui/themes';

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