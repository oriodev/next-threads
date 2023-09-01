import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Threads',
  description: 'a next.js threads app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<ClerkProvider>

  </ClerkProvider>)
}