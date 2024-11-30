"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FrogIcon } from './ui/frog-icon'
import { cn } from "@/lib/utils"
import { Home, Award, Trophy, Settings } from 'lucide-react'
import { ConnectButton } from 'thirdweb/react'
import { createThirdwebClient } from 'thirdweb'
import { Button } from './ui/button'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/quests', label: 'Quests', icon: Award },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/profile', label: 'Profile', icon: Settings },
]

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
            <Link href={item.href} key={item.href}>
              <Button
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

