"use client"

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { FishIcon as Frog, Award, Gift } from 'lucide-react'

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

function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function Label({ className, ...props }) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically handle the form submission
  }

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Your Froggy Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Froggy Explorer" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="froggy@example.com" />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
                  <Frog className="w-12 h-12 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Froggy Explorer</h3>
                  <p className="text-gray-600">froggy@example.com</p>
                </div>
              </div>
              <div>
                <p className="font-medium">Leap Points: <span className="text-green-600">3,500</span></p>
                <p className="font-medium">Quests Completed: <span className="text-green-600">35</span></p>
              </div>
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Badges & Rewards</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-4">Your Badges</h3>
              <div className="grid grid-cols-3 gap-4">
                {['Ocean Guardian', 'Forest Protector', 'Climate Champion'].map((badge, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Award className="w-12 h-12 text-yellow-500 mb-2" />
                    <span className="text-sm text-center">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Available Rewards</h3>
              <div className="space-y-4">
                {[
                  { name: 'Eco-friendly Water Bottle', points: 500 },
                  { name: 'Tree Planting Kit', points: 1000 },
                  { name: 'Sustainable Living Guide', points: 1500 },
                ].map((reward, index) => (
                  <div key={index} className="flex items-center justify-between bg-green-100 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Gift className="w-8 h-8 text-green-600 mr-4" />
                      <div>
                        <p className="font-medium">{reward.name}</p>
                        <p className="text-sm text-gray-600">{reward.points} Leap Points</p>
                      </div>
                    </div>
                    <Button size="sm">Claim</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

