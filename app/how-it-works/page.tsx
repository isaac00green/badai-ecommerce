"use client"

import Link from "next/link"
import { ShoppingCart, Sparkles, Cpu, Palette, ImageIcon, Zap, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Hero Banner */}
      <section className="bg-zinc-800/50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How We Make Art <span className="text-rose-500">Terrible</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              Our proprietary process for creating the world's most intentionally bad AI-generated art
            </p>
            <div className="flex justify-center">
              <Link href="/gallery">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  See The Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our <span className="text-rose-500">Questionable</span> Process
          </h2>

          <div className="grid gap-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-zinc-800/70 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-600 text-white mr-3 text-sm">
                      1
                    </span>
                    Confusing the AI
                  </h3>
                  <p className="text-zinc-300 mb-4">
                    We start by feeding our AI models contradictory instructions. For example, "Draw a cat, but make it
                    look like a horse, but also make sure it's clearly a cat, and give it the texture of melting ice
                    cream."
                  </p>
                  <p className="text-zinc-300">
                    Our proprietary "Confusion Engine™" ensures that the AI receives just enough conflicting information
                    to produce something recognizable yet hilariously wrong.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="bg-zinc-800 rounded-xl p-6 w-full max-w-md">
                  <div className="aspect-square rounded-lg bg-zinc-700 flex items-center justify-center">
                    <Cpu className="h-24 w-24 text-rose-500/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="bg-zinc-800 rounded-xl p-6 w-full max-w-md">
                  <div className="aspect-square rounded-lg bg-zinc-700 flex items-center justify-center">
                    <Palette className="h-24 w-24 text-rose-500/50" />
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-zinc-800/70 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-600 text-white mr-3 text-sm">
                      2
                    </span>
                    Artistic "Enhancements"
                  </h3>
                  <p className="text-zinc-300 mb-4">
                    Once we have a base image, our team of "de-artists" gets to work. They identify what makes the image
                    almost good, and then systematically undermine those elements.
                  </p>
                  <p className="text-zinc-300">
                    This might involve adding too many fingers to hands, making eyes slightly asymmetrical, or ensuring
                    that perspective and physics are subtly but noticeably wrong.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-zinc-800/70 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-600 text-white mr-3 text-sm">
                      3
                    </span>
                    Quality Control
                  </h3>
                  <p className="text-zinc-300 mb-4">
                    Our rigorous quality control process ensures that each piece meets our exacting standards of
                    badness. We use a proprietary "Hilarity Index" to measure each image's potential to make viewers say
                    "What the heck am I looking at?"
                  </p>
                  <p className="text-zinc-300">
                    If an image accidentally looks too good or professional, it's sent back for additional ruining. We
                    never settle for mediocrity – we aim for memorably terrible.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="bg-zinc-800 rounded-xl p-6 w-full max-w-md">
                  <div className="aspect-square rounded-lg bg-zinc-700 flex items-center justify-center">
                    <ImageIcon className="h-24 w-24 text-rose-500/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="bg-zinc-800 rounded-xl p-6 w-full max-w-md">
                  <div className="aspect-square rounded-lg bg-zinc-700 flex items-center justify-center">
                    <Zap className="h-24 w-24 text-rose-500/50" />
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-zinc-800/70 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-600 text-white mr-3 text-sm">
                      4
                    </span>
                    Naming and Storytelling
                  </h3>
                  <p className="text-zinc-300 mb-4">
                    The final step in our process is creating pretentious art titles and elaborate backstories for each
                    piece. This critical phase transforms a merely bad image into a conversation-starting masterpiece.
                  </p>
                  <p className="text-zinc-300">
                    Our team of creative writers excels at explaining why that horse has six legs or why that portrait's
                    subject has 37 fingers as if it were an intentional artistic choice rather than an AI hallucination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-zinc-800/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-rose-500">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-gray-200">
                  <Lightbulb className="h-5 w-5 text-rose-500" />
                  Is this really AI-generated?
                </h3>
                <p className="text-zinc-300">
                  Yes! Every piece is genuinely created by AI, though we carefully curate the results to ensure they're
                  the perfect level of bad. We don't want art that's so bad it's unrecognizable – we want art that's bad
                  in the most entertaining way possible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-gray-200">
                  <Lightbulb className="h-5 w-5 text-rose-500" />
                  Can I request a custom bad portrait?
                </h3>
                <p className="text-zinc-300">
                  Our custom commission service allows you to specify exactly what kind of terrible art you want. Want a
                  portrait of your cat with human teeth? A family portrait where everyone has slightly too many fingers?
                  We've got you covered.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-gray-200">
                  <Lightbulb className="h-5 w-5 text-rose-500" />
                  Do you offer refunds if the art isn't bad enough?
                </h3>
                <p className="text-zinc-300">
                  We stand by our commitment to quality badness. If you feel your purchased art is accidentally too
                  good, we'll happily ruin it further at no additional charge. Our satisfaction guarantee ensures you
                  receive art that's memorably terrible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-gray-200">
                  <Lightbulb className="h-5 w-5 text-rose-500" />
                  What if I accidentally like the art?
                </h3>
                <p className="text-zinc-300">
                  This happens more often than you might think! Many customers purchase our art ironically only to find
                  they genuinely enjoy it. We believe this is because truly bad art often has a charm and personality
                  that perfect art lacks. Embrace it!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-r from-rose-900/30 to-purple-900/30 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Own a Masterpiece of <span className="text-rose-500">Mediocrity</span>?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Browse our gallery of algorithmic abominations and find the perfect conversation piece for your home or
              office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gallery">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  Browse the Gallery
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700"
                >
                  Request a Custom Piece
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
