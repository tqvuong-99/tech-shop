"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  isNew?: boolean
  isSale?: boolean
  onQuickView?: (id: string) => void
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isNew = false,
  isSale = false,
  onQuickView,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation() // Prevent navigation
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image,
    })
  }

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    // Wishlist functionality would go here
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onQuickView) onQuickView(id)
  }

  return (
    <Link
      href={`/product/${id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative">
          {/* Product image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
            {isSale && originalPrice && <Badge className="bg-red-500 hover:bg-red-600">-{discount}%</Badge>}
          </div>

          {/* Action buttons */}
          <div
            className={`absolute inset-0 bg-black/5 flex items-center justify-center gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-white hover:bg-yellow-400 hover:text-gray-800"
              onClick={handleAddToWishlist}
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-white hover:bg-yellow-400 hover:text-gray-800"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-white hover:bg-yellow-400 hover:text-gray-800"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product info */}
        <div className="p-4">
          <h3 className="font-medium text-gray-800 mb-1 line-clamp-1">{name}</h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-semibold">${price.toFixed(2)}</span>
              {originalPrice && <span className="text-gray-400 line-through text-sm">${originalPrice.toFixed(2)}</span>}
            </div>

            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
