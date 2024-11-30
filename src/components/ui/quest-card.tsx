import { cn } from "@/lib/utils"
import { FrogIcon } from './frog-icon'

const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
)

const CardHeader = ({ className, ...props }) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
)

const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
)

const CardDescription = ({ className, ...props }) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
)

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

const CardFooter = ({ className, ...props }) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
)

function Button({ children, className, ...props }) {
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
        {/* <Button onClick={onStart} className="w-full">Start Quest</Button> */}
      </CardFooter>
    </Card>
  )
}

