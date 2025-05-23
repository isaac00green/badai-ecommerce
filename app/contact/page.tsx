"use client"

import Link from "next/link"
import { ShoppingCart, Sparkles, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { relative } from "path"
import { text } from "stream/consumers"
import { useState } from 'react' 

export default function ContactPage() {
  const [message, setMessage] = useState('')

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const MAX_MESSAGE_LENGTH = 300;
    if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
      setMessage(e.target.value);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Hero Banner */}
      <section className="bg-zinc-800/50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-rose-500">Touch</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Have questions about our terrible art? Want to commission a custom piece of awfulness? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Send Us a <span className="text-rose-500">Message</span>
              </h2>
              <div className="bg-zinc-800/50 rounded-xl p-8">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={6}
                        value={message}
                        onChange={handleMessageChange}
                        className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 min-h-[200px] max-h-[400px]"
                        placeholder="Tell us what's on your mind..."
                      ></textarea>
                        <div className={`text-xs mt-1 ${
                          message.length >= 300 ? 'text-rose-500' : 'text-zinc-400'
                        }`}>
                          {message.length}/300 characters
                        </div>
                    </div>
                  </div>
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info and Custom Commission */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Contact <span className="text-rose-500">Information</span>
                </h2>
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="mt-1 bg-zinc-700 p-2 rounded-full">
                          <Mail className="h-5 w-5 text-rose-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-200">Email</h3>
                          <p className="text-zinc-300">hello@badai.art</p>
                          <p className="text-zinc-400 text-sm">We respond within 24 hours</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-1 bg-zinc-700 p-2 rounded-full">
                          <Phone className="h-5 w-5 text-rose-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-200">Phone</h3>
                          <p className="text-zinc-300">(+365) 01100101</p>
                          <p className="text-zinc-400 text-sm">Mon-Fri, 9am-5pm EST</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-1 bg-zinc-700 p-2 rounded-full">
                          <MapPin className="h-5 w-5 text-rose-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-200">Address</h3>
                          <p className="text-zinc-300">World Wide Web</p>
                          <p className="text-zinc-400 text-sm">We're primarily online, but our servers are real!</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Custom <span className="text-rose-500">Commissions</span>
                </h2>
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <p className="text-zinc-300 mb-4">
                      Want a truly unique piece of bad AI art? Our custom commission service allows you to specify
                      exactly what kind of terrible art you want.
                    </p>
                    <h3 className="font-bold mb-2 text-gray-200">Popular Requests:</h3>
                    <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-6">
                      <li>Family portraits with subtle anatomical errors</li>
                      <li>Pet portraits with human features</li>
                      <li>Landscapes that defy the laws of physics</li>
                      <li>Historical figures using modern technology</li>
                    </ul>
                    <p className="text-zinc-400 text-sm mb-4">
                      Custom commissions start at $99.99. Fill out the contact form with "Custom Commission" as the
                      subject to get started.
                    </p>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">Request Custom Art</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-zinc-800/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-rose-500">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-200 font-bold mb-3">How long does shipping take?</h3>
                <p className="text-zinc-300">
                  For digital downloads, delivery is instant. For physical prints, we ship within 3-5 business days, and
                  delivery typically takes 5-10 business days depending on your location.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-200 font-bold mb-3">Do you ship internationally?</h3>
                <p className="text-zinc-300">
                  Yes! Bad art knows no borders. We ship to most countries worldwide. International shipping may take
                  2-3 weeks depending on customs processing times.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-200 font-bold mb-3">What's your return policy?</h3>
                <p className="text-zinc-300">
                  We offer a 30-day satisfaction guarantee. If you're not completely dissatisfied with your bad art,
                  we'll make it worse at no additional charge. If you still want to return it, we accept returns within
                  30 days.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-200 font-bold mb-3">How long do custom commissions take?</h3>
                <p className="text-zinc-300">
                  Custom commissions typically take 1-2 weeks to complete, depending on complexity and our current
                  queue. We'll provide you with updates throughout the process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
