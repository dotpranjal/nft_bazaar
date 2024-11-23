"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import p1 from ".//assets/p1.jpg"
import p2 from ".//assets/p2.jpg"
import p3 from ".//assets/p3.jpg"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { getContract } from "thirdweb"
import { client } from "@/app/client"
import { sepolia } from "thirdweb/chains"
import { MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react"
import { getContractMetadata } from "thirdweb/extensions/common"
import { claimTo } from "thirdweb/extensions/erc721"

export function InfoSection() {
  const account = useActiveAccount();
  const contract = getContract({
    client: client,
    chain: sepolia,
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string
    
  });

  const  {data: contractMetadata} = useReadContract(
    getContractMetadata,
    {
      contract: contract
    }
  );
  console.log(contractMetadata)


  const previewImages = [
    { src: "/placeholder.svg?height=200&width=200", alt: "NFT Preview 1" },
    { src: "/placeholder.svg?height=200&width=200", alt: "NFT Preview 2" },
    { src: "/placeholder.svg?height=200&width=200", alt: "NFT Preview 3" },
    { src: "/placeholder.svg?height=200&width=200", alt: "NFT Preview 4" },
  ]
  return (
    <>
    <section className="py-20 flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-100 min-h-screen px-4">
    <div className="w-full md:w-1/2 max-w-xl">
      
      <MediaRenderer
        client={client}
        src={contractMetadata?.image}
        width="500"
        height="500"
        style={{
          borderRadius: "1rem",
          border: "1px solid #e0e0e0",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",

        }}
      />
    </div>
    <div className="w-full md:w-1/2 space-y-6 max-w-xl">
      <h1 className="text-5xl font-bold leading-tight text-gray-900">
        {contractMetadata?.name}
      </h1>
      <p className="text-xl text-gray-600">
        {contractMetadata?.description}
      </p>
      <div className="flex space-x-4">
        
        <TransactionButton
          transaction={() => claimTo({
            contract: contract,
            to: account?.address as string, 
            quantity: BigInt(1),
          })}
          onTransactionConfirmed={async ()=> alert("NFT claimed successfully")}
        
        >
          Cliam 1 NFT
        </TransactionButton>
        <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
    </div>
  </section>
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
                src={p1}
                alt="DigitalArtMaster"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">Kaiser</h3>
                <p className="text-gray-600">Visionary Digital Artist</p>
              </div>
            </div>
            <p className="text-gray-600">
              Kaiser, known in the traditional art world as Pranjal, is a pioneer in the realm of 
              digital art with over a decade of experience. His work seamlessly blends traditional artistic techniques 
              with cutting-edge digital technologies.
            </p>
            <p className="text-gray-600">
              With a background in both fine arts and computer science, Pranjal pushes the boundaries of what's 
              possible in digital art. His pieces have been featured in major digital art exhibitions worldwide, 
              including the prestigious DigiArt Biennale in New York and the Crypto Creator Showcase in Tokyo.
            </p>
            <p className="text-gray-600">
              The Digital Dreamscape Series represents Pranjal's most ambitious project to date, combining his 
              signature style with blockchain technology to create a truly immersive and interactive art experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
    <section id="collection" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Collection Preview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {previewImages.map((image, index) => (
          <div key={index} className="relative group">
            <Image
              src={p3}
              alt={image.alt}
              width={400}
              height={400}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">View Details</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

