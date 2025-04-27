import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OfferBanner() {
  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offer</h2>
            <p className="text-lg mb-6">Save up to 50% on selected items. Limited time offer!</p>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-5xl font-bold mb-2">24</div>
              <div className="text-lg">Days</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-lg">Hours</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-5xl font-bold mb-2">38</div>
              <div className="text-lg">Minutes</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-5xl font-bold mb-2">45</div>
              <div className="text-lg">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
