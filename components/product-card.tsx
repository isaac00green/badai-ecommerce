"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

type ProductCardProps = {
  id: number
  title: string
  description: string
  price: number
  image: string
}

export default function ProductCard({ id, title, description, price, image }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <Card className="overflow-hidden bg-zinc-800 border-zinc-700 h-full flex flex-col">
      <Link href={`/product/${id}`} passHref>
        <div className="aspect-square overflow-hidden bg-zinc-700">
          <img
            src={image || "/placeholder.svg?height=400&width=400"}
            alt={title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6 flex flex-col flex-grow">
        <Link href={`/product/${id}`} passHref>
          <h3 className="mb-2 text-xl font-bold text-gray-200 hover:text-rose-500 transition-colors">{title}</h3>
        </Link>
        <p className="mb-4 text-sm text-zinc-400 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-rose-500">${price.toFixed(2)}</span>
          <div className="flex gap-2">
              <Link href={`/product/${id}`} passHref>
              <Button size="sm" className="hover:bg-gray-800 hover:text-white">
                View
              </Button>
              </Link>
              <Button
              size="sm"
              onClick={() => addToCart(id)}
              className="bg-rose-500 text-white hover:text-white hover:bg-rose-700"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
