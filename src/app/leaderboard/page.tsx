"use client"

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { FishIcon as Frog, Trophy } from 'lucide-react'
// import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui"
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function ButtonComp({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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

const leaderboardData = [
  { id: 1, name: "FrogMaster", points: 5000, quests: 50, impact: 95 },
  { id: 2, name: "EcoWarrior", points: 4800, quests: 48, impact: 92 },
  { id: 3, name: "GreenLeaper", points: 4600, quests: 46, impact: 90 },
  { id: 4, name: "RiverGuardian", points: 4400, quests: 44, impact: 88 },
  { id: 5, name: "ForestHopper", points: 4200, quests: 42, impact: 86 },
  // Add more users as needed
]

export default function LeaderboardPage() {
  const [sortBy, setSortBy] = useState("points")

  const sortedData = [...leaderboardData].sort((a, b) => b[sortBy] - a[sortBy])

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Leaderboard</h1>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Top Froggy Adventurers</h2>
          <Select onValueChange={setSortBy} defaultValue={sortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="points">Leap Points</SelectItem>
              <SelectItem value="quests">Quests Completed</SelectItem>
              <SelectItem value="impact">Impact Score</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Adventurer</TableHead>
              <TableHead>Leap Points</TableHead>
              <TableHead>Quests Completed</TableHead>
              <TableHead>Impact Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  {index === 0 ? (
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  ) : index === 1 ? (
                    <Trophy className="w-6 h-6 text-gray-400" />
                  ) : index === 2 ? (
                    <Trophy className="w-6 h-6 text-orange-400" />
                  ) : (
                    `#${index + 1}`
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                      <Frog className="w-6 h-6 text-green-600" />
                    </div>
                    {user.name}
                  </div>
                </TableCell>
                <TableCell>{user.points}</TableCell>
                <TableCell>{user.quests}</TableCell>
                <TableCell>{user.impact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6 text-center">
          <ButtonComp className="bg-green-500 hover:bg-green-600">
            View Full Leaderboard
          </ButtonComp>
        </div>
      </div>
    </div>
  )
}

