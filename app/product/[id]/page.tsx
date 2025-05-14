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
      {/* Navbar */}
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
