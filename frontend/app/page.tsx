import Navbar from "@/components/navbar"
import Carousel from "@/components/carousel"
import CategorySection from "@/components/category-section"
import FeaturedProducts from "@/components/featured-products"
import OfferBanner from "@/components/offer-banner"
import VendorCarousel from "@/components/vendor-carousel"
import Footer from "@/components/footer"

export default function Home() {
  const carouselSlides = [
    {
      image: "/images/carousels/quality.webp",
      title: "Quality Products",
      description: "Discover the latest tech gadgets and accessories",
      buttonText: "Shop Now",
      buttonLink: "/shop",
    },
    {
      image: "/images/carousels/price.jpg",
      title: "Reasonable Prices",
      description: "Get the best deals on all your favorite products",
      buttonText: "View Offers",
      buttonLink: "/offers",
    },
    {
      image: "/images/carousels/delivery.webp",
      title: "Fast Delivery",
      description: "We deliver your products right to your doorstep",
      buttonText: "Learn More",
      buttonLink: "/shipping",
    },
  ]

  const categories = [
    {
      name: "Smartphones",
      image: "/images/categories/smartphone.jpg",
      count: 123,
      href: "/category/smartphone",
    },
    {
      name: "Tablets",
      image: "/images/categories/tablet.jpg",
      count: 78,
      href: "/category/tablet",
    },
    {
      name: "Laptops",
      image: "/images/categories/laptop.png",
      count: 92,
      href: "/category/laptop",
    },
    {
      name: "Accessories",
      image: "/images/categories/accessories.png",
      count: 154,
      href: "/category/categories/accessories",
    },
    {
      name: "Wearables",
      image: "/images/categories/wearable.png",
      count: 65,
      href: "/category/wearables",
    },
    {
      name: "Audio",
      image: "/images/categories/audio.png",
      count: 88,
      href: "/category/audio",
    },
  ]

  const products = [
    {
      id: "1",
      name: "iPhone 15 Pro Max",
      price: 1299,
      image: "/images/products/iphone15promax.webp",
      rating: 5,
      reviewCount: 127,
      isNew: true,
      category: "Smartphone",
    },
    {
      id: "2",
      name: "Samsung Galaxy Tab S9 FE 5G",
      price: 699,
      originalPrice: 799,
      image: "/images/products/tabs9fe.jpg",
      rating: 4,
      reviewCount: 89,
      isSale: true,
      category: "Tablet",
    },
    {
      id: "3",
      name: "MacBook Air M2",
      price: 1199,
      image: "/images/products/macbookairm2.jpg",
      rating: 5,
      reviewCount: 156,
      category: "Laptop",
    },
    {
      id: "4",
      name: "AirPods Pro 2",
      price: 249,
      originalPrice: 279,
      image: "/images/products/airpodspro2.png",
      rating: 4,
      reviewCount: 203,
      isSale: true,
      category: "Accessories",
    },
    {
      id: "5",
      name: "Apple Watch Series 9",
      price: 399,
      image: "/images/products/applewatchs9.jpeg",
      rating: 4,
      reviewCount: 78,
      isNew: true,
      category: "Wearables",
    },
    {
      id: "6",
      name: "Sony WH-1000XM5",
      price: 349,
      image: "/images/products/1000xm5.webp",
      rating: 5,
      reviewCount: 112,
      category: "Audio",
    },
    {
      id: "7",
      name: "Google Pixel 8",
      price: 799,
      originalPrice: 899,
      image: "/images/products/googlepixel8.jpg",
      rating: 4,
      reviewCount: 67,
      isSale: true,
      category: "Smartphone",
    },
    {
      id: "8",
      name: "iPad Air 7",
      price: 599,
      image: "/images/products/ipadair7.jpg",
      rating: 4,
      reviewCount: 94,
      category: "Tablet",
    },
  ]

  // Sample data for vendors
  const vendors = [
    { name: "Apple", logo: "/images/vendors/apple.png", href: "#" },
    { name: "Samsung", logo: "/images/vendors/samsung.png", href: "#" },
    { name: "Sony", logo: "/images/vendors/sony.png", href: "#" },
    { name: "Microsoft", logo: "/images/vendors/microsoft.webp", href: "#" },
    { name: "Google", logo: "/images/vendors/google.webp", href: "#" },
    { name: "LG", logo: "/images/vendors/lg.jpg", href: "#" },
    { name: "Dell", logo: "/images/vendors/dell.jpg", href: "#" },
    { name: "HP", logo: "/images/vendors/hp.png", href: "#" },
  ]

  return (
    <main className="bg-gray-100">
      <Navbar />
      <Carousel slides={carouselSlides} />
      <CategorySection title="Categories" categories={categories} />
      <FeaturedProducts products={products} />
      <OfferBanner />
      <CategorySection title="Recent Products" categories={categories.slice(0, 4)} />     
      <VendorCarousel vendors={vendors} />

      <Footer />
    </main>
  )
}
