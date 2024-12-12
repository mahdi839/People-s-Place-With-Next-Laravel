import BackEndLayout from "../components/layouts/BackEndLayout"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <BackEndLayout>
    {children}
    </BackEndLayout>
     
      
  )
}
