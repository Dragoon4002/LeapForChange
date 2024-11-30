import { cn } from "@/lib/utils"
import { FrogIcon } from './frog-icon'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "./card"
import { Button } from "./button"

interface QuestCardProps {
  title: string
  description: string
  points: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  onStart: () => void
}

export function QuestCard({ title, description, points, difficulty, onStart }: QuestCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FrogIcon className="text-green-500" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm">
          <span>Points: {points}</span>
          <span className={
            difficulty === 'Easy' ? 'text-green-500' :
            difficulty === 'Medium' ? 'text-yellow-500' :
            'text-red-500'
          }>
            {difficulty}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onStart} className="w-full">Start Quest</Button>
      </CardFooter>
    </Card>
  )
}

