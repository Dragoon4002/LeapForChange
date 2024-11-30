import { PageHeader } from '@/components/ui/page-header'
import { ProgressBar } from '@/components/ui/progress-bar'
import { QuestCard } from '@/components/ui/quest-card'
import BadgeDisplay from '@/components/ui/badge-display'

export default function Dashboard() {
  return (
    <div>
      <PageHeader 
        title="Welcome, Froggy Explorer!" 
        description="Here's your learning progress"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <ProgressBar value={350} max={1000} label="Total Leap Points" />
        <ProgressBar value={7} max={10} label="Quests Completed" />
        <ProgressBar value={2} max={5} label="Badges Earned" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Your Badges</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {/* <BadgeDisplay name="Ocean Guardian" />
        <BadgeDisplay name="Forest Protector" color="secondary" /> */}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Available Quests</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <QuestCard
          title="Save the Rainforest"
          description="Learn about deforestation and plant a tree"
          points={100}
          difficulty="Easy"
          onStart={() => console.log('Starting quest: Save the Rainforest')}
        />
        <QuestCard
          title="Clean Ocean Challenge"
          description="Organize a beach cleanup and document your findings"
          points={200}
          difficulty="Medium"
          onStart={() => console.log('Starting quest: Clean Ocean Challenge')}
        />
        <QuestCard
          title="Reduce Carbon Footprint"
          description="Track and reduce your daily carbon emissions for a week"
          points={300}
          difficulty="Hard"
          onStart={() => console.log('Starting quest: Reduce Carbon Footprint')}
        />
      </div>
    </div>
  )
}

