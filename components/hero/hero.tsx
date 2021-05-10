import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
} from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Container from "../container" // requires a loader

const arrowStyles: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 30,
  height: 30,
  cursor: "pointer",
}

const indicatorStyles: CSSProperties = {
  background: "#fff",
  width: 8,
  height: 8,
  display: "inline-block",
  margin: "0 8px",
}

const Hero: FunctionComponent<{}> = () => {
  const [generatedClass, setGeneratedClass] = useState("")
  const applyClass = () => {
    const getRandomInt = () => {
      const min = Math.ceil(1)
      const max = Math.floor(4)
      return Math.floor(Math.random() * (max - min)) + min
    }
    return setGeneratedClass(`bg-indigo-${getRandomInt()}00`)
  }
  return (
    <section
      className={`flex phone:flex-col tablet:flex-row min-h-screen ${generatedClass}`}
    >
      <Container>
        <Carousel
          className="tablet:max-w-3xl"
          renderArrowPrev={(onClickHandler, hasPrev, label) => {
            const onClick = () => {
              onClickHandler()
              applyClass()
            }
            return (
              hasPrev && (
                <button
                  type="button"
                  onClick={onClick}
                  title={label}
                  style={{ ...arrowStyles, left: 15 }}
                >
                  -
                </button>
              )
            )
          }}
          renderArrowNext={(onClickHandler, hasNext, label) => {
            const onClick = () => {
              onClickHandler()
              applyClass()
            }
            return (
              hasNext && (
                <button
                  type="button"
                  onClick={onClick}
                  title={label}
                  style={{ ...arrowStyles, right: 15 }}
                >
                  +
                </button>
              )
            )
          }}
        >
          <div>
            <img src="/assets/blog/focus.svg" />
          </div>
          <div>
            <img src="/assets/blog/cat.svg" />
          </div>
        </Carousel>
        <h1 className="text-2xl">some text</h1>
      </Container>
    </section>
  )
}

export default Hero
