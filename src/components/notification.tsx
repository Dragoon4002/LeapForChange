"use client"

import { useState, useEffect } from 'react'
import { Toast, ToastProvider, ToastViewport } from '@/components/ui/toast'
import { FishIcon as Frog, Award, Bell } from 'lucide-react'

interface Notification {
  id: number
  type: 'quest_complete' | 'new_quest' | 'badge_earned'
  message: string
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Simulating incoming notifications
    const notificationTypes: Notification['type'][] = ['quest_complete', 'new_quest', 'badge_earned']
    const interval = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now(),
        type: notificationTypes[Math.floor(Math.random() * notificationTypes.length)],
        message: `Notification ${notifications.length + 1}`
      }
      setNotifications(prev => [...prev, newNotification])
    }, 10000) // New notification every 10 seconds

    return () => clearInterval(interval)
  }, [notifications.length])

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  return (
    <ToastProvider>
      {notifications.map(notification => (
        <Toast key={notification.id} onOpenChange={() => removeNotification(notification.id)}>
          <div className="flex items-center">
            {notification.type === 'quest_complete' && <Frog className="w-6 h-6 text-green-500 mr-2" />}
            {notification.type === 'new_quest' && <Bell className="w-6 h-6 text-blue-500 mr-2" />}
            {notification.type === 'badge_earned' && <Award className="w-6 h-6 text-yellow-500 mr-2" />}
            <div className="grid gap-1">
              <p className="font-medium">
                {notification.type === 'quest_complete' && 'Quest Completed!'}
                {notification.type === 'new_quest' && 'New Quest Available!'}
                {notification.type === 'badge_earned' && 'New Badge Earned!'}
              </p>
              <p className="text-sm text-muted-foreground">{notification.message}</p>
            </div>
          </div>
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}

