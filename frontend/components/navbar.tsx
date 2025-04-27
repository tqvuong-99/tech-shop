"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart, User, ChevronDown, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [wishlistCount, setWishlistCount] = useState(2)
  const [messageCount, setMessageCount] = useState(5)

  const categories = [
    { name: "Smartphone", href: "/category/smartphone" },
    { name: "Tablet", href: "/category/tablet" },
    { name: "Laptop", href: "/category/laptop" },
    { name: "Accessories", href: "/category/accessories" },
    { name: "Wearables", href: "/category/wearables" },
    { name: "Audio", href: "/category/audio" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-gray-100 text-gray-700 font-bold py-2 px-4">
        <div className="container mx-auto flex justify-between items-center w-6/12">
            <span className="text-sm">About</span>
            <span className="text-sm">Contact</span>
            <span className="text-sm">Help</span>
            <span className="text-sm">Blog</span>
            <span className="text-sm">Privacy Policy</span>
          </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Mobile menu button */}
            <div className="col-span-2 md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between py-4 border-b">
                      <Link href="/" className="flex items-center">
                        <span className="text-yellow-400 font-bold text-xl mr-1">NOTHING</span>
                        <span className="text-gray-800 font-bold text-xl">PHONE</span>
                      </Link>
                    </div>

                    <div className="py-4">
                      <div className="relative w-full mb-4">
                        <Input type="text" placeholder="Search for products" className="w-full pr-10" />
                        <Button className="absolute right-0 top-0 h-full rounded-l-none bg-yellow-400 hover:bg-yellow-500">
                          <Search className="h-4 w-4 text-gray-800" />
                        </Button>
                      </div>

                      <nav className="space-y-4">
                        <div className="font-semibold text-lg">Categories</div>
                        {categories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="block py-2 border-b border-gray-100"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </nav>
                    </div>

                    <div className="mt-auto border-t pt-4 space-y-2">
                      <Link href="/customer-service" className="flex items-center justify-between py-2">
                        <span>Messages</span>
                        {messageCount > 0 && (
                          <Badge className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">{messageCount}</Badge>
                        )}
                      </Link>
                      <Link href="/wishlist" className="flex items-center justify-between py-2">
                        <span>Wishlist</span>
                        {wishlistCount > 0 && (
                          <Badge className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">{wishlistCount}</Badge>
                        )}
                      </Link>
                      <Link href="/cart" className="flex items-center justify-between py-2">
                        <span>Cart</span>
                        {cartCount > 0 && (
                          <Badge className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">{cartCount}</Badge>
                        )}
                      </Link>
                      <Link href="/account" className="flex items-center justify-between py-2">
                        <span>My Account</span>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <div className="col-span-8 md:col-span-3 flex justify-center md:justify-start">
              <Link href="/" className="flex items-center">
                <span className="text-yellow-400 font-bold text-2xl md:text-3xl mr-1">NOTHING</span>
                <span className="text-gray-800 font-bold text-2xl md:text-3xl">PHONE</span>
              </Link>
            </div>

            {/* Search bar */}
            <div className="hidden md:flex col-span-5 relative">
              <div className="flex w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-r-none border-r-0 bg-white hover:bg-yellow-400 text-gray-700 font-medium"
                    >
                      All Categories <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.name} asChild>
                        <Link href={category.href}>{category.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Search for products"
                    className="w-full rounded-none border-x-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button className="rounded-l-none bg-yellow-400 hover:bg-yellow-400 text-gray-800">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Icons - right side */}
            <div className="col-span-2 md:col-span-4 flex items-center justify-end space-x-4">
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                    {cartCount}
                  </Badge>
                )}
              </Link>
              <Link href="/account" className="hidden md:flex">
                <User className="h-6 w-6 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
      </div>
   {/* Mobile search - shown only on mobile */}
      <div className="md:hidden bg-white p-4 border-t">
        <div className="relative w-full">
          <Input type="text" placeholder="Search for products" className="w-full pr-10" />
          <Button className="absolute right-0 top-0 h-full rounded-l-none bg-yellow-400 hover:bg-yellow-500">
            <Search className="h-4 w-4 text-gray-800" />
          </Button>
        </div>
      </div>
    </header>
  )
}
