import ShowcaseCard from './showcaseCard'
import SectionHeader from './sectionHeader'

export default function Showcase() {
  
  const showcases = [
    {
      title: 'Turinglab Platform',
      description: 'An online platform for helping educators teach programming in a fun and effective way.',
      image: {
        src: '/images/turinglab.png',
        alt: 'Turinglab learning platform'
      }
    },
    {
      title: 'Python Fundamentals',
      description: 'A zero-GCSE coding course built upon the Phaser.js Games engine for engaging blended learning at school',
      image: {
        src: '/images/farmbot.png',
        alt: 'Python Fundamentals Logo - Farmbot'
      }
    },
    {
      title: 'Visualising Neural Networks',
      description: 'A visualisation platform for helping machine learning researchers visualise training of deep neural networks.',
      image: {
        src: '/images/dnn.png',
        alt: 'Visualising Deep Neural Networks'
      }
    },
    {
      title: 'Climbing Training App',
      description: 'Design for a training application for Catalyst Climbing in collaboration with top professional climbers.',
      image: {
        src: '/images/catalyst.png',
        alt: 'Catalyst Climbing App Logo'
      }
    },
    {
      title: 'Urban Typology Design',
      description: 'How to create quick designs and showcase them to stakeholders. Mistakes and actions.',
      image: {
        src: '/images/urban.png',
        alt: 'Urban Design Mansion Blocks'
      }
    },
    {
      title: 'Added Value of Quality Design',
      description: 'How to create quick designs and showcase them to stakeholders. Mistakes and actions.',
      image: {
        src: '/images/design.png',
        alt: 'Quality Design Venn Diagram'
      }
    }
  ]

  const showcaseCards =  showcases.map(showcase => {
    return <ShowcaseCard
      title={showcase.title}
      description={showcase.description}
      image={showcase.image}
    ></ShowcaseCard>
  })

  return <div className="flex flex-col justify-center mx-auto mb-20 text-grey-dark">
    <SectionHeader title="Showcase" description="A few selected projects that showcase some key areas of interest"></SectionHeader>
    <div className="flex flex-wrap sm:w-2/3 w-4/5 justify-center mx-auto py-4 text-grey-dark items-center">
      {showcaseCards}
    </div>
  </div>
}