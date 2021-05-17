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
  const next = () => {
    if (activeIndex === featuredPosts.length - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(prevItem => prevItem + 1)
    }
  }
  const prev = () => {
    if (activeIndex === 0) {
      setActiveIndex(featuredPosts.length - 1)
    } else {
      setActiveIndex(prevItem => prevItem - 1)
    }
  }
  return (
    <section className={`min-h-screen ${generatedClass}`}>
      <Container>
        <div className="min-h-screen flex phone:flex-col phone:pt-16 tablet:flex-row-reverse tablet:items-center">
          <Carousel
            autoPlay
            infiniteLoop
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            selectedItem={activeIndex}
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
          <div className="flex items-center flex-initial min-w-1/2 phone:h-96">
            <h1 className="text-2xl">{featuredPosts[activeIndex].excerpt}</h1>
          </div>
          <div className="flex phone:items-start tablet:flex-col tablet:pr-8">
            <button className="phone:p-4 phone:pl-0 tablet:p-0" onClick={next} aria-label="Next story">Next</button>
            <button className="phone:p-4 tablet:p-0" onClick={prev} aria-label="Previous story">Prev</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
