'use client'

import { useState, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from '@/hooks/use-toast'
import { Card } from '../ui/card'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [message, setMessage] = useState('')
    const { toast } = useToast()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Log the form data
    console.log('Form submitted:', { name, emailOrPhone, message })

    // Show a toast notification
    toast({
      title: "Form Submitted!",
      description: "Thank you for your message. We'll get back to you soon.",
    })

    // Clear the form fields
    setName('')
    setEmailOrPhone('')
    setMessage('')
  }

  return (
    <Card className="max-w-2xl mx-auto p-8 my-20">
        
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">Email or Phone</label>
        <Input
          type="text"
          id="emailOrPhone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
          className="mt-1"
          placeholder="Your Email or Phone Number"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1"
          placeholder="Your Message"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
    </Card>
  )
}

