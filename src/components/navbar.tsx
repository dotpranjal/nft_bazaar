"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b border-blue-200 py-4 sticky top-0 bg-white/80 backdrop-blur-sm z-10 text-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">CryptoArt Collective</div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#collection" className="hover:text-blue-600 transition-colors">Collection</a>
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#roadmap" className="hover:text-blue-600 transition-colors">Roadmap</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
            Connect Wallet
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white p-4">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#collection" className="hover:text-blue-600 transition-colors">Collection</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#roadmap" className="hover:text-blue-600 transition-colors">Roadmap</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
