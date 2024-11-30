"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Frog, Award } from 'lucide-react'

interface QuestFeedbackProps {
  isOpen: boolean
  onClose: () => void
  questName: string
  pointsEarned: number
  newBadge?: string
}

export function QuestFeedback({ isOpen, onClose, questName, pointsEarned, newBadge }: QuestFeedbackProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Quest Completed!</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center py-4">
          <div className={`relative ${isAnimating ? 'animate-bounce' : ''}`}>
            <Frog className="w-24 h-24 text-green-500" />
            {newBadge && (
              <Award className="w-8 h-8 text-yellow-500 absolute -top-2 -right-2" />
            )}
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">{questName}</h3>
          <p className="text-green-600 font-medium mb-2">+{pointsEarned} Leap Points</p>
          {newBadge && (
            <p className="text-yellow-600 font-medium">New Badge: {newBadge}</p>
          )}
        </div>
        <DialogFooter>
          <Button onClick={onClose} className="w-full">Next Quest</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

