import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface CategorySectionProps {
  title: string
  categories: {
    name: string
    image: string
    count: number
    href: string
  }[]
}

export default function CategorySection({ title, categories }: CategorySectionProps) {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <Link href="/categories" className="text-gray-600 hover:text-yellow-400 flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="bg-white border rounded-lg p-4 text-center transition-all duration-300 hover:shadow-md">
                <div className="relative w-full aspect-square mb-3 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
