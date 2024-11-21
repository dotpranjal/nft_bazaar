import Image from "next/image"

export function CollectionPreview() {
  const previewImages = [
    { src: "/placeholder.svg?height=200&width=200", alt: "NFT Preview 1" },
    { src: "/placeholder.svg?height=200&width=200", alt: "NFT Preview 2" },
    { src: "/placeholder.svg?height=200&width=200", alt: "NFT Preview 3" },
    { src: "/placeholder.svg?height=200&width=200", alt: "NFT Preview 4" },
  ]

  return (
    <section id="collection" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Collection Preview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {previewImages.map((image, index) => (
          <div key={index} className="relative group">
            <Image
              src={image.src}
              alt={image.alt}
              width={200}
              height={200}
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">View Details</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

