"use client"

import { useState, useEffect } from "react"
import { Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  sender: string
  avatar?: string
  content: string
  timestamp: string
  read: boolean
}

export default function MessageNotification() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Customer Support",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Your order #12345 has been shipped! Track your package here.",
      timestamp: "10 minutes ago",
      read: false,
    },
    {
      id: "2",
      sender: "Promotions",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Flash Sale! 50% off on all electronics for the next 24 hours.",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: "3",
      sender: "System",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Your account password was changed successfully.",
      timestamp: "Yesterday",
      read: true,
    },
  ])

  const unreadCount = messages.filter((msg) => !msg.read).length

  const markAsRead = (id: string) => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg)))
  }

  const markAllAsRead = () => {
    setMessages(messages.map((msg) => ({ ...msg, read: true })))
  }

  const deleteMessage = (id: string) => {
    setMessages(messages.filter((msg) => msg.id !== id))
  }

  // Simulate receiving a new message every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "Automated Notification",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "This is an automated message to demonstrate real-time notifications.",
        timestamp: "Just now",
        read: false,
      }
      setMessages((prev) => [newMessage, ...prev])
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative" onClick={() => setIsOpen(true)}>
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle className="text-xl font-bold">Messages</SheetTitle>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </SheetHeader>

        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <Bell className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium mb-2">No messages</h3>
            <p className="text-gray-500 text-center">You don't have any messages at the moment.</p>
          </div>
        ) : (
          <div className="mt-6 space-y-4 max-h-[80vh] overflow-y-auto pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg border ${message.read ? "bg-white" : "bg-yellow-50 border-yellow-200"}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={message.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{message.sender}</div>
                      <div className="text-xs text-gray-500">{message.timestamp}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {!message.read && (
                      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => markAsRead(message.id)}>
                        <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-gray-500 hover:text-red-500"
                      onClick={() => deleteMessage(message.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-700">{message.content}</p>
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
