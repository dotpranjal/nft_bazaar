import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function InfoSection() {
  return (
    <section id="about" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">About the Collection</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <Card className="bg-white border-blue-200 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Digital Dreamscape Series</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              The Digital Dreamscape Series is a limited collection of 1000 unique NFTs, each representing a 
              fragment of an expansive digital universe. Created by renowned digital artist DigitalArtMaster, 
              these pieces blend surrealism with futuristic elements to create truly one-of-a-kind digital artworks.
            </p>
            <p className="text-gray-600 mb-4">
              Each NFT is more than just an image; it's a key to an interactive experience. Holders can explore 
              their Digital Dreamscape in a 3D virtual gallery, unlocking hidden features and easter eggs.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>1000 unique pieces</li>
              <li>Programmatically generated with over 150 possible traits</li>
              <li>Stored as ERC-721 tokens on the Ethereum blockchain</li>
              <li>Includes full ownership and commercial rights</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white border-blue-200 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">About the Creator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="DigitalArtMaster"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">DigitalArtMaster</h3>
                <p className="text-gray-600">Visionary Digital Artist</p>
              </div>
            </div>
            <p className="text-gray-600">
              DigitalArtMaster, known in the traditional art world as Alexandra Chen, is a pioneer in the realm of 
              digital art with over a decade of experience. Her work seamlessly blends traditional artistic techniques 
              with cutting-edge digital technologies.
            </p>
            <p className="text-gray-600">
              With a background in both fine arts and computer science, Alexandra pushes the boundaries of what's 
              possible in digital art. Her pieces have been featured in major digital art exhibitions worldwide, 
              including the prestigious DigiArt Biennale in New York and the Crypto Creator Showcase in Tokyo.
            </p>
            <p className="text-gray-600">
              The Digital Dreamscape Series represents Alexandra's most ambitious project to date, combining her 
              signature style with blockchain technology to create a truly immersive and interactive art experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

