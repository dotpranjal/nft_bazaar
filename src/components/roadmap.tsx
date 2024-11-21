import { CheckCircle, Circle } from 'lucide-react'

export function Roadmap() {
  const milestones = [
    {
      title: "Project Launch",
      description: "Initial release of 1000 Digital Dreamscape NFTs",
      completed: true,
    },
    {
      title: "Community Building",
      description: "Establishment of Discord community and social media presence",
      completed: true,
    },
    {
      title: "Virtual Gallery",
      description: "Launch of 3D virtual gallery for NFT showcase",
      completed: false,
    },
    {
      title: "Collaboration Series",
      description: "Partnership with guest artists for exclusive NFT drops",
      completed: false,
    },
    {
      title: "Metaverse Integration",
      description: "Integration with popular metaverse platforms",
      completed: false,
    },
    {
      title: "Physical Exhibition",
      description: "Real-world art show featuring Digital Dreamscape prints",
      completed: false,
    },
  ]

  return (
    <section id="roadmap" className="py-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Project Roadmap</h2>
      <div className="max-w-3xl mx-auto">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-start mb-8">
            <div className="flex-shrink-0 mr-4">
              {milestone.completed ? (
                <CheckCircle className="h-8 w-8 text-green-600" />
              ) : (
                <Circle className="h-8 w-8 text-blue-400" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

