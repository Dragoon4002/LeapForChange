"use client"

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { FishIcon as Frog, Upload } from 'lucide-react'

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

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export default function QuestsPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Current Quest: Ocean Conservation Story</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-start mb-6">
          <Frog className="w-12 h-12 text-green-500 mr-4 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Write a short story about ocean conservation</h2>
            <p className="text-gray-600">
              Create a compelling narrative that highlights the importance of protecting our oceans. 
              Your story should inspire others to take action in preserving marine life and ecosystems.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Quest Objectives:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Write a story of 300-500 words</li>
            <li>Include at least one marine animal as a character</li>
            <li>Highlight a specific ocean conservation issue</li>
            <li>Propose a solution or call-to-action for readers</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Rewards:</h3>
          <p className="text-gray-600">Complete this quest to earn 100 Leap Points and the "Ocean Guardian" badge!</p>
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Submit Your Quest</h2>
          
          <div className="mb-4">
            <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">
              Your Ocean Conservation Story
            </label>
            <Textarea 
              id="story" 
              placeholder="Once upon a time, in a vibrant coral reef..."
              className="w-full h-40"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
              Attach any relevant images (optional)
            </label>
            <Input id="file" type="file" accept="image/*" className="w-full" />
          </div>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
            <Upload className="w-4 h-4 mr-2" />
            Leap Forward (Submit Quest)
          </Button>
        </form>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <Frog className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Quest Submitted Successfully!</h2>
          <p className="text-gray-600 mb-4">
            Great job, Froggy Explorer! Your ocean conservation story has been received. 
            We'll review it shortly and update your progress.
          </p>
          <Button className="bg-green-500 hover:bg-green-600">
            Return to Dashboard
          </Button>
        </div>
      )}
    </div>
  )
}

