import { ReactNode } from 'react'

export default function Body({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-10 lg:px-16">
      {children}
    </div>
  )
}
