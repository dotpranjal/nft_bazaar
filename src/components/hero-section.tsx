import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-100 min-h-screen px-4">
    <div className="w-full md:w-1/2 max-w-xl">
      <Image
        src="/placeholder.svg?height=500&width=500"
        alt="Featured NFT - Digital Dreamscape"
        width={500}
        height={500}
        className="rounded-lg shadow-2xl mx-auto"
      />
    </div>
    <div className="w-full md:w-1/2 space-y-6 max-w-xl">
      <h1 className="text-5xl font-bold leading-tight text-gray-900">
        Own a Piece of Digital Dreamscape
      </h1>
      <p className="text-xl text-gray-600">
        Immerse yourself in the mesmerizing world of CryptoArt Collective's latest NFT series. 
        Each piece is a gateway to a realm where imagination knows no bounds.
      </p>
      <div className="flex space-x-4">
        <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
          Claim NFT
        </Button>
        <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="text-sm text-gray-500">
        <p>Total Supply: 1000 | Available: 750 | Price: 0.5 ETH</p>
      </div>
    </div>
  </section>
  )
}

