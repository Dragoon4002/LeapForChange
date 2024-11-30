"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FrogIcon } from './ui/frog-icon'
import { cn } from "@/lib/utils"
import { Home, Award, Trophy, Settings } from 'lucide-react'
import { ConnectButton } from 'thirdweb/react'
import { createThirdwebClient } from 'thirdweb'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/quests', label: 'Quests', icon: Award },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/profile', label: 'Profile', icon: Settings },
]

function Button({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "h-10 px-4 py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function Navigation() {
  const pathname = usePathname()

  const client = createThirdwebClient({
    clientId: '3e76e10a04eadb82eff1642ad0b035dd',});

  return (
    <nav className="flex w-screen justify-between items-center bg-green-800 text-white p-4">
      <Link href={'/'} className='500px'>
        <div className="flex items-center gap-2">
          <FrogIcon className="text-white" size={32} />
          <span className="text-xl font-bold">Leap For Change</span>
        </div>
      </Link>
      <div className="space-x-5 flex">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link href={item.href}>
              <Button
                key={item.href}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                className={` w-full justify-start ${isActive ? 'bg-green-700' : ''}`}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </div>
      <ConnectButton client={client} />
    </nav>
  )
}

