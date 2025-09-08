// DBC Fashion Homepage - React + Tailwind (Vercel Ready)

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function DBCFashionHomepage() {
  return (
    <div className="bg-white text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/dbc-hero-fashion.jpg')" }}>
        <div className="bg-white/80 p-6 rounded-2xl shadow-lg text-center">
          <h1 className="text-4xl font-semibold tracking-wide uppercase mb-2">DBC Fashion</h1>
          <p className="text-lg text-neutral-600 mb-4">Where Elegance Meets Everyday</p>
          <Button>Explore the Collection</Button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-4">
                <img src={`/fashion-item-${item}.jpg`} alt={`Fashion ${item}`} className="w-full rounded-lg mb-4" />
                <h3 className="text-lg font-medium">Collection {item}</h3>
                <p className="text-sm text-neutral-600">Shop the latest in premium fashion curated by DBC.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-8 bg-neutral-50">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Brands</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {["Armani", "Paul & Shark", "Aeronautica", "Hugo Boss"].map((brand) => (
            <div key={brand} className="text-center">
              <img src={`/brands/${brand.toLowerCase().replace(/ /g, '-')}.svg`} alt={brand} className="h-12 mb-2" />
              <p className="text-sm text-neutral-700">{brand}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About DBC Fashion</h2>
        <p className="text-neutral-700 max-w-2xl mx-auto">
          DBC Fashion is a division of Dhifaf Baghdad Cosmetics, offering an exclusive curation of premium fashion brands across Iraq. We combine timeless style with modern retail excellence to deliver a shopping experience that reflects elegance, quality, and cultural pride.
        </p>
      </section>

      {/* Store Locator + Newsletter */}
      <section className="bg-neutral-100 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Store Locator */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Visit Our Stores</h3>
            <p className="text-neutral-700 mb-4">Find our fashion collections in DBC branches across Baghdad and beyond.</p>
            <Button>Store Locator</Button>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join the DBC List</h3>
            <p className="text-neutral-700 mb-4">Get updates on new arrivals, campaigns, and exclusive events.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-grow" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} DBC Fashion. All rights reserved.</p>
      </footer>
    </div>
  );
}
