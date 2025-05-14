// app/components/header.tsx
"use client"

import Link from "next/link"
import { Menu, ShoppingCart, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

export default function Header() {
  const { getCartCount } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur">
      <div className="container mx-auto px-4 max-w-7xl flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-rose-500">
          <Sparkles className="h-6 w-6" />
          <span>BadAi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/gallery" className="text-zinc-400 hover:text-zinc-100 transition-colors">
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
                  <Link
                    href="/gallery"
                    className="p-3 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
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
  )
}