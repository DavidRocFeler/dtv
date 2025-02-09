import { INotificationProps } from '@/interface/globalTypes'
import React from 'react'

const Notifications: React.FC<INotificationProps> = ({message, timeAgo, isRead}) => {
  return (
    <div className="py-3 border-b border-zinc-800">
        <p>{message}</p>
        <span className="text-sm text-zinc-500">{timeAgo}</span>
    </div>
  )
}

export default Notifications