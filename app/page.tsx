"use client"

import Link from "next/link"
import { BadgeCheck, Menu, ShoppingCart, Sparkles, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  const { addToCart, getCartCount } = useCart()
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
              Proudly Presenting <span className="text-rose-500">Terrible</span> AI Art
            </h1>
            <p className="mb-8 text-xl text-zinc-400">
              Why buy good art when you can have hilariously bad AI-generated masterpieces? Our algorithms are
              specifically trained to miss the mark in the most entertaining ways possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gallery">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-zinc-100 w-full sm:w-auto">
                  Shop the Absurdity
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-100 w-full sm:w-auto"
                >
                  See How Bad It Gets
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-b from-rose-900 to-transparent"></div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our <span className="text-rose-500">Masterpieces</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden bg-zinc-800 border-zinc-700">
                <Link href={`/product/${product.id}`}>
                  <div className="aspect-square overflow-hidden bg-zinc-700">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </Link>
                <CardContent className="p-6">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="mb-2 text-xl font-bold text-gray-200 hover:text-rose-500 transition-colors">{product.title}</h3>
                  </Link>
                  <p className="mb-4 text-sm text-zinc-400">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-rose-500">${product.price.toFixed(2)}</span>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link href={`/product/${product.id}`}>
                        <Button size="sm" className="hover:bg-gray-800 hover:text-white">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        onClick={() => addToCart(product.id)}
                        className="bg-rose-500 text-white hover:text-white hover:bg-rose-700"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button size="lg" className="bg-rose-700 text-zinc-100 border-zinc-700 hover:text-zinc-100 w-full sm:w-auto">
                View All Abominations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why BadAi Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-12 text-3xl font-bold">
              Why Choose <span className="text-rose-500">BadAi</span>?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-rose-950 p-4">
                  <Sparkles className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Guaranteed Awful</h3>
                <p className="text-zinc-400">
                  Our AI is specifically trained to create art that's just bad enough to be hilarious.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-rose-950 p-4">
                  <BadgeCheck className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Conversation Starters</h3>
                <p className="text-zinc-400">
                  Nothing breaks the ice like a painting of a horse with six legs and human teeth.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-rose-950 p-4">
                  <ShoppingCart className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Affordable Absurdity</h3>
                <p className="text-zinc-400">
                  Why spend thousands on fine art when you can have digital nightmares for a fraction of the price?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Our <span className="text-rose-500">Victims</span> Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="mb-4 italic text-zinc-300 flex-1">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-rose-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-200">{testimonial.name}</p>
                      <p className="text-sm text-zinc-400">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mx-auto max-w-2xl rounded-xl bg-gradient-to-r from-rose-900/50 to-purple-900/50 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Join the Bad Art Revolution</h2>
            <p className="mb-6 text-zinc-300">
              Subscribe to our newsletter for new releases, special discounts, and the worst AI art you've ever seen.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-100 focus:border-rose-500 focus:outline-none"
              />
              <Button className="bg-rose-600 hover:bg-rose-700">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const testimonials = [
  {
    quote:
      "I bought this as a joke for my friend's birthday. Now it's hanging in their living room. I'm not sure if they're being ironic or if they actually like it.",
    name: "Sarah Johnson",
    title: "Confused Gift Giver",
  },
  {
    quote:
      "My 5-year-old said my new BadAi purchase looks like something he could make. He's right, and that's why I love it.",
    name: "Michael Chen",
    title: "Proud Art Collector",
  },
  {
    quote:
      "I've never had more people ask about a piece of art in my home. It's a great conversation starter, even if that conversation is 'What the heck is that?'",
    name: "Jessica Williams",
    title: "Social Butterfly",
  },
]
