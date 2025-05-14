// app/components/footer.tsx
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-rose-500">
              <Sparkles className="h-6 w-6" />
              <span>BadAi</span>
            </Link>
            <p className="mt-4 text-zinc-400">
              Proudly creating the worst AI-generated art since yesterday. Quality not guaranteed.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Shop</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/gallery" className="hover:text-rose-500">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-rose-500">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-rose-500">
                  Discounted Disasters
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-500">
                  Custom Commissions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/about-us" className="hover:text-rose-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-rose-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-rose-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-rose-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>Email: hello@badai.art</li>
              <li>Phone: (+365) 01100101</li>
              <li>Address: World Wide Web</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} BadAi. All rights reserved. No refunds for bad taste.</p>
        </div>
      </div>
    </footer>
  )
}