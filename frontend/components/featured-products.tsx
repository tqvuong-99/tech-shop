"use client"

import { useState } from "react"
import ProductCard from "./product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  isNew?: boolean
  isSale?: boolean
  category: string
}

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  const categories = ["All", "Smartphone", "Tablet", "Laptop", "Accessories"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  const handleQuickView = (id: string) => {
    // Implement quick view functionality
    console.log("Quick view", id)
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-left mb-2">Featured Products</h2>
        <Tabs defaultValue="All" className="w-full">
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    isNew={product.isNew}
                    isSale={product.isSale}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
