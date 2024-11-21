import { CheckCircle, Globe, Lock, Zap, Gift, Users } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Exclusive Virtual Events",
      description: "Attend VIP digital gatherings and artist meet-and-greets in our custom-built metaverse space."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Governance Rights",
      description: "Have a say in future collections and community initiatives through our DAO voting system."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Early Access",
      description: "Get priority access to future drops and collaborations before the general public."
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-600" />,
      title: "Exclusive Merch",
      description: "Receive limited edition physical merchandise inspired by your Digital Dreamscape NFT."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community Access",
      description: "Join our private Discord channel to connect with fellow collectors and the artist."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Royalty Sharing",
      description: "Earn a share of secondary sale royalties through our community pool."
    },
  ]

  return (
    <section id="features" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Holder Benefits</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg space-y-4 shadow-md">
            {feature.icon}
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

