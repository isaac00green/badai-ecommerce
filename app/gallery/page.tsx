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
    </div>
  )
}
