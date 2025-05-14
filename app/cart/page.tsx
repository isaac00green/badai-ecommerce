"use client"

import Link from "next/link"
import { ShoppingCart, Sparkles, Trash2, ArrowLeft, CreditCard, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart()

  const cartItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.id)
      return {
        ...item,
        product,
      }
    })
    .filter((item) => item.product)

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
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

      {/* Cart Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <Link href="/gallery" className="text-zinc-400 hover:text-rose-500 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-zinc-800 mb-6">
                <ShoppingCart className="h-10 w-10 text-zinc-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
              <p className="text-zinc-400 mb-8">Looks like you haven't added any terrible art to your cart yet.</p>
              <Link href="/gallery">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  Browse Gallery
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="bg-zinc-800/50 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold">Cart Items ({getCartCount()})</h2>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearCart}
                        className="text-zinc-400 hover:text-rose-500"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear Cart
                      </Button>
                    </div>

                    <div className="divide-y divide-zinc-700">
                      {cartItems.map((item) => (
                        <div key={item.product?.id} className="py-6 flex gap-4">
                          <div className="w-24 h-24 flex-shrink-0 bg-zinc-700 rounded overflow-hidden">
                            <Link href={`/product/${item.product?.id}`}>
                              <img
                                src={item.product?.image || "/placeholder.svg"}
                                alt={item.product?.title}
                                className="w-full h-full object-cover"
                              />
                            </Link>
                          </div>
                          <div className="flex-grow">
                            <Link href={`/product/${item.product?.id}`}>
                              <h3 className="font-bold hover:text-rose-500 transition-colors">{item.product?.title}</h3>
                            </Link>
                            <p className="text-sm text-zinc-400 mb-2">{item.product?.dimensions}</p>
                            <div className="flex items-center mt-2">
                              <button
                                className="w-8 h-8 flex items-center justify-center rounded-l border border-zinc-700 bg-zinc-800 text-zinc-100"
                                onClick={() => handleQuantityChange(item.product!.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <div className="w-12 h-8 flex items-center justify-center border-y border-zinc-700 bg-zinc-800">
                                {item.quantity}
                              </div>
                              <button
                                className="w-8 h-8 flex items-center justify-center rounded-r border border-zinc-700 bg-zinc-800 text-zinc-100"
                                onClick={() => handleQuantityChange(item.product!.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-between">
                            <span className="font-bold text-rose-500">
                              ${(item.product!.price * item.quantity).toFixed(2)}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.product!.id)}
                              className="text-zinc-400 hover:text-rose-500 p-0 h-auto"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-zinc-800/50 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Subtotal</span>
                        <span>${getCartTotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Tax</span>
                        <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                      </div>
                      <div className="border-t border-zinc-700 pt-4 flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-rose-500">${(getCartTotal() * 1.08).toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Checkout
                    </Button>
                    <p className="text-xs text-zinc-400 text-center mt-4">
                      By checking out, you agree that these images are terrible on purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-900 py-12 mt-auto">
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
