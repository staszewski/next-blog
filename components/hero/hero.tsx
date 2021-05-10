import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Container from "../container"

interface Properties {
  featuredPosts: any[]
}

const Hero: FunctionComponent<Properties> = ({ featuredPosts }) => {
  const [generatedClass, setGeneratedClass] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const applyClass = () => {
    const getRandomInt = () => {
      const min = Math.ceil(1)
      const max = Math.floor(4)
      return Math.floor(Math.random() * (max - min)) + min
    }
    return setGeneratedClass(`bg-indigo-${getRandomInt()}00`)
  }
  useEffect(() => applyClass(), [])
  return (
    <section className={`min-h-screen ${generatedClass}`}>
      <Container>
        <div className="min-h-screen flex phone:flex-col phone:items-center phone:pt-16 tablet:flex-row">
          <div className="flex items-center tablet:w-1/2 h-64">
            <h1 className="text-2xl">{featuredPosts[activeIndex].excerpt}</h1>
          </div>
          <Carousel
            autoPlay
            infiniteLoop
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            onSwipeEnd={applyClass}
            onChange={(index) => {
              setActiveIndex(index)
              applyClass()
            }}
          >
            {featuredPosts.map((post) => {
              return (
                <div className="pt-20" key={post.date}>
                  <img src={post.coverImage} />
                </div>
              )
            })}
          </Carousel>
        </div>
      </Container>
    </section>
  )
}

export default Hero
