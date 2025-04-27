import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-yellow-400" />
                <p>20 Trinh Dinh Thao Street, Da Nang City</p>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-yellow-400" />
                <p>nothingphone@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-yellow-400" />
                <p>0766.721.808</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block hover:text-yellow-400">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-yellow-400">
                Contact Us
              </Link>
              <Link href="/privacy" className="block hover:text-yellow-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block hover:text-yellow-400">
                Terms & Conditions
              </Link>
              <Link href="/faq" className="block hover:text-yellow-400">
                FAQs
              </Link>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-xl font-semibold mb-4">My Account</h3>
            <div className="space-y-2">
              <Link href="/account" className="block hover:text-yellow-400">
                My Account
              </Link>
              <Link href="/cart" className="block hover:text-yellow-400">
                View Cart
              </Link>
              <Link href="/wishlist" className="block hover:text-yellow-400">
                Wishlist
              </Link>
              <Link href="/orders" className="block hover:text-yellow-400">
                Track My Order
              </Link>
              <Link href="/help" className="block hover:text-yellow-400">
                Help
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-l-none bg-yellow-400 hover:bg-yellow-500 text-gray-800">Sign Up</Button>
            </div>
            <div className="flex mt-4 space-x-2">
              <a
                href="#"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 h-10 w-10 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 h-10 w-10 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 h-10 w-10 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 h-10 w-10 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-bold">NOTHING</span>
            <span className="font-bold">PHONE</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
