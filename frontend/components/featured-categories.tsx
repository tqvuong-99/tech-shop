import Link from "next/link"
import Image from "next/image"

interface Category {
  name: string
  image: string
  count: number
  href: string
}

interface FeaturedCategoriesProps {
  categories: Category[]
}

export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
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
