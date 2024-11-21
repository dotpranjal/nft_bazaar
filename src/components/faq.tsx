import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqItems = [
    {
      question: "What is an NFT?",
      answer: "NFT stands for Non-Fungible Token. It's a unique digital asset verified using blockchain technology. NFTs can represent ownership of digital art, music, videos, and more."
    },
    {
      question: "How do I purchase a Digital Dreamscape NFT?",
      answer: "To purchase a Digital Dreamscape NFT, you'll need to connect your Ethereum wallet (like MetaMask) to our website and have enough ETH to cover the cost plus gas fees. Click the 'Claim NFT' button to start the process."
    },
    {
      question: "What rights do I have as an NFT owner?",
      answer: "As an owner of a Digital Dreamscape NFT, you have full ownership and commercial rights to your specific piece. You can display it, sell it, or use it for commercial purposes."
    },
    {
      question: "Are there any ongoing costs after purchasing an NFT?",
      answer: "There are no ongoing costs from our end after purchasing an NFT. However, if you decide to sell or transfer your NFT in the future, you may incur standard Ethereum network gas fees."
    },
    {
      question: "How can I view my NFT after purchase?",
      answer: "After purchase, your NFT will be visible in your connected Ethereum wallet. You can also view it in our 3D virtual gallery by connecting your wallet to the gallery platform."
    },
  ]

  return (
    <section id="faq" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

