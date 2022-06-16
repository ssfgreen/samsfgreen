import ArticleCard from './ArticleCard'
import SectionHeader from './sectionHeader'

export default function Writing() {
  
  const writing = [
    {
      title: 'Incremental wins and the power of praise',
      description: 'Discussing the power of celebrating the small increases in students’ understanding to support engagement and attainment',
      link: 'https://helloworld.raspberrypi.org/articles/hw18-incremental-wins-and-the-power-of-praise',
      image: {
        src: '/images/hello_world.png',
        alt: 'Hello World Magazine Logo'
      }
    }
  ]

  const writingCards =  writing.map(article => {
    return <ArticleCard
      title={article.title}
      description={article.description}
      image={article.image}
      link={article.link}
    ></ArticleCard>
  })

  return <div className="flex flex-col justify-center mx-auto mb-20 text-grey-dark">
    <SectionHeader title="Writing" description="I write about what I know in the hope of helping new designers and product builders."></SectionHeader>
    <div className="flex flex-wrap sm:w-4/5 w-full justify-center mx-auto py-4 text-grey-dark items-center">
      {writingCards}
    </div>
  </div>
}