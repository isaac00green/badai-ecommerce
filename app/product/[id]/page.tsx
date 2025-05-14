"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Menu, Minus, Plus, ShoppingCart, Sparkles, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import ProductCard from "@/components/product-card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart, getCartCount } = useCart()
  const [quantity, setQuantity] = useState(1)

  // Convert the ID to a number and find the product
  const productId = typeof params.id === "string" ? Number.parseInt(params.id, 10) : -1
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-zinc-400 mb-6">Even our AI couldn't make this one up.</p>
          <Link href="/">
            <Button className="bg-rose-600 hover:bg-rose-700">Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = product.relatedProducts
    ? product.relatedProducts.map((id) => products.find((p) => p.id === id)).filter(Boolean)
    : []

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity)
    router.push("/cart")
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Breadcrumb */}
      <div className="bg-zinc-800/30">
        <div className="container mx-auto px-4 max-w-7xl py-3">
          <div className="flex items-center text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-100">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/gallery" className="hover:text-zinc-100">
              Gallery
            </Link>
            <span className="mx-2">/</span>
            <span className="text-zinc-100">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-zinc-800 rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg?height=600&width=600"}
                alt={product.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <Link href="/gallery" className="inline-flex items-center text-zinc-400 hover:text-rose-500 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Gallery
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
              <div className="mb-6">
                <span className="text-3xl font-bold text-rose-500">${product.price.toFixed(2)}</span>
              </div>
              <div className="mb-6">
                <p className="text-zinc-300">{product.longDescription}</p>
              </div>
              <div className="mb-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 w-24">Category:</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 w-24">Dimensions:</span>
                    <span>{product.dimensions}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 w-24">Tags:</span>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="bg-zinc-800 px-2 py-1 rounded text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400">Quantity:</span>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decreaseQuantity}
                      className="h-8 w-8 rounded-r-none bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="h-8 w-12 flex items-center justify-center border-y border-zinc-700 bg-zinc-800">
                      {quantity}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={increaseQuantity}
                      className="h-8 w-8 rounded-l-none bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-500 hover:bg-gray-800 hover:text-white flex-1"
                  onClick={() => addToCart(product.id, quantity)}
                >
                  Add and Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-zinc-800/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-bold mb-8">Other Masterpieces You Might "Enjoy"</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map(
                (product) =>
                  product && (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={product.image}
                    />
                  ),
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
