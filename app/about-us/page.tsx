"use client"

import Link from "next/link"
import { ShoppingCart, Sparkles, Users, Award, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Hero Banner */}
      <section className="bg-zinc-800/50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-rose-500">Masterminds</span> Behind the Mediocrity
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Meet the team dedicated to lowering the bar for AI-generated art everywhere
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-rose-500">Story</span>
              </h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  BadAi was founded in 2023 when our CEO, Alex Terrible, noticed something peculiar about AI art: when
                  it fails, it fails in the most fascinating and hilarious ways.
                </p>
                <p>
                  While everyone else was trying to make AI art better, we asked the question: "What if we deliberately
                  made it worse, but in the most entertaining way possible?"
                </p>
                <p>
                  Thus, BadAi was born – a company dedicated to the proposition that not all art needs to be good to be
                  valuable. Sometimes, the most memorable pieces are the ones that make you say "What on earth am I
                  looking at?" while simultaneously being unable to look away.
                </p>
                <p>
                  Today, our team of "de-artists" works tirelessly to ensure that each piece we create hits that perfect
                  sweet spot of recognizable yet hilariously wrong. We've shipped thousands of pieces to customers
                  worldwide who appreciate the unique charm of algorithmic absurdity.
                </p>
              </div>
            </div>
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="aspect-video rounded-lg bg-zinc-700 flex items-center justify-center">
                <Users className="h-24 w-24 text-rose-500/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-zinc-800/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-rose-500">Values</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-900/50 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200">Commitment to Mediocrity</h3>
                <p className="text-zinc-300">
                  We believe in setting a low bar and then limboing under it. Our dedication to creating art that's just
                  bad enough to be funny, but not so bad it's unrecognizable, drives everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-900/50 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200">Customer Satisfaction</h3>
                <p className="text-zinc-300">
                  We're not happy unless you're laughing. Our success is measured not in artistic achievement but in the
                  number of coffee spittakes and confused head tilts our art generates in your home.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-900/50 flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-200">Innovation in Regression</h3>
                <p className="text-zinc-300">
                  While others push AI forward, we're pioneering new ways to make it stumble backward. Our R&D
                  department works tirelessly to discover novel methods of artistic confusion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="text-rose-500">Team</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-zinc-700 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-gray-200">{member.name}</h3>
                  <p className="text-rose-500 mb-4">{member.title}</p>
                  <p className="text-zinc-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-16 bg-zinc-800/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Our <span className="text-rose-500">Team</span>
            </h2>
            <p className="text-zinc-300 mb-8">
              Are you passionate about creating art that's so bad it's good? Do you have a keen eye for identifying what
              makes an image almost work, and then systematically undermining those elements? We want to hear from you!
            </p>
            <div className="bg-zinc-800 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Current Openings</h3>
              <ul className="space-y-4 text-left">
                <li className="p-4 border border-zinc-700 rounded-lg">
                  <h4 className="font-bold">Senior De-Artist</h4>
                  <p className="text-zinc-400">
                    Responsible for taking almost-good AI art and making it memorably bad.
                  </p>
                </li>
                <li className="p-4 border border-zinc-700 rounded-lg">
                  <h4 className="font-bold">AI Confusion Engineer</h4>
                  <p className="text-zinc-400">Develop prompts that create the perfect level of AI hallucination.</p>
                </li>
                <li className="p-4 border border-zinc-700 rounded-lg">
                  <h4 className="font-bold">Pretentious Art Title Creator</h4>
                  <p className="text-zinc-400">Craft names and descriptions that make our bad art sound intentional.</p>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="bg-rose-600 hover:bg-rose-700">Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Alex Terrible",
    title: "Founder & CEO",
    bio: "Former fine art curator who decided that bad art is more interesting. Specializes in explaining why artistic failures are actually successes.",
  },
  {
    name: "Morgan Glitch",
    title: "Chief De-Artist",
    bio: "Has a master's degree in fine arts and uses it exclusively to identify what makes art good, then do the opposite.",
  },
  {
    name: "Jamie Confusion",
    title: "AI Prompt Engineer",
    bio: "Creates the contradictory prompts that confuse our AI models into producing their most entertainingly bad work.",
  },
  {
    name: "Sam Absurdity",
    title: "Marketing Director",
    bio: "Convinced the world needs more intentionally bad art. Previously sold ice to Eskimos and sand to desert dwellers.",
  },
]
