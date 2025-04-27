"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VendorCarouselProps {
  vendors: {
    name: string
    logo: string
    href: string
  }[]
}

export default function VendorCarousel({ vendors }: VendorCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const currentRef = carouselRef.current
    if (currentRef) {
      checkScrollButtons()
      currentRef.addEventListener("scroll", checkScrollButtons)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollButtons)
      }
    }
  }, [])

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Our Vendors</h2>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-yellow-400 hover:text-gray-800"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 py-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {vendors.map((vendor, index) => (
              <a
                key={index}
                href={vendor.href}
                className="flex-shrink-0 border rounded-lg p-4 bg-white hover:shadow-md transition-shadow duration-300 w-[180px]"
              >
                <div className="relative h-20 w-full">
                  <Image src={vendor.logo || "/placeholder.svg"} alt={vendor.name} fill className="object-contain" />
                </div>
              </a>
            ))}
          </div>

          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-yellow-400 hover:text-gray-800"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
