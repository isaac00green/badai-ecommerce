"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Sparkles, Filter, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import ProductCard from "@/components/product-card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function GalleryPage() {
  const { getCartCount } = useCart()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(products.map((product) => product.category)))

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur">
        <div className="container mx-auto px-4 max-w-7xl flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-rose-500">
            <Sparkles className="h-6 w-6" />
            <span>BadAi</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/gallery" className="text-rose-500 hover:text-rose-400 transition-colors">
              Gallery
            </Link>
            <Link href="/how-it-works" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              How It Works
            </Link>
            <Link href="/about-us" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button
                variant="outline"
                size="icon"
                className="relative bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700 hover:text-zinc-100"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-bold">
                  {getCartCount()}
                </span>
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-zinc-900 border-zinc-800 p-0">
                <div className="flex flex-col h-full">
                  <div className="border-b border-zinc-800 p-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold text-rose-500">
                      <Sparkles className="h-5 w-5" />
                      <span>BadAi</span>
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-zinc-400">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col p-4 gap-2">
                    <Link href="/gallery" className="p-3 bg-zinc-800 rounded-md text-rose-500 transition-colors">
                      Gallery
                    </Link>
                    <Link
                      href="/how-it-works"
                      className="p-3 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      How It Works
                    </Link>
                    <Link
                      href="/about-us"
                      className="p-3 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      className="p-3 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>
                  <div className="mt-auto p-4 border-t border-zinc-800">
                    <Link href="/cart">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        View Cart ({getCartCount()} items)
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-zinc-800/50 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">The BadAi Gallery</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Browse our complete collection of algorithmically confused masterpieces. Each piece is uniquely terrible
              in its own special way.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Filters */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex flex-wrap items-center gap-4 min-w-max pb-2">
              <div className="flex items-center mr-4">
                <Filter className="h-5 w-5 mr-2 text-zinc-400" />
                <span className="text-zinc-400">Filter by:</span>
              </div>
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={
                  selectedCategory === null
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700"
                }
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-rose-600 hover:bg-rose-700 text-white"
                      : "bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-rose-500">
                <Sparkles className="h-6 w-6" />
                <span>BadAi</span>
              </Link>
              <p className="mt-4 text-zinc-400">
                Proudly creating the worst AI-generated art since yesterday. Quality not guaranteed.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Shop</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <Link href="/gallery" className="hover:text-rose-500">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-rose-500">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-rose-500">
                    Discounted Disasters
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-rose-500">
                    Custom Commissions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Company</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <Link href="/about-us" className="hover:text-rose-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-rose-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-rose-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-rose-500">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>Email: hello@badai.art</li>
                <li>Phone: (555) BAD-ARTS</li>
                <li>Address: Digital Wasteland, Internet</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-zinc-500">
            <p>© {new Date().getFullYear()} BadAi. All rights reserved. No refunds for bad taste.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
