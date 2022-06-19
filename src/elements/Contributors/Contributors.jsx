import React, { useState, useEffect } from "react"
import Contributor from "./Contributor"
import CarouselButton from "../../component/carouselButton/CarouselButton"

const Contributors = () => {
  const contributors = [
    {
      id: 1,
      name: "Engramar Bollas",
      nickname: "engramar",
      image: "/assets/images/volunteers/Mentor_Engramar.png",
      role: "Director of Code.Sydney",
      linkedIn: "https://www.linkedin.com/in/engramarbollas/",
    },
    {
      id: 2,
      name: "Qj Stout-Spykers",
      nickname: "QJ",
      image: "/assets/images/volunteers/Mentor_Qj.png",
      role: "Team Lead / Manager",
      linkedIn:
        "https://www.linkedin.com/in/qj-stout-spykers-704b221a1/?originalSubdomain=au",
    },
    {
      id: 3,
      name: "Luke Zhao",
      nickname: "Luukeeeee",
      image: "/assets/images/volunteers/WD_Luke.png",
      role: "Web Developer",
      linkedIn:
        "https://www.linkedin.com/in/luke-zhao-398886214/?originalSubdomain=au",
    },
    {
      id: 4,
      name: "Paolo Garde",
      nickname: "rpgarde",
      image: "/assets/images/volunteers/Mentor_Paolo.png",
      role: "Web Developer",
      linkedIn: "https://www.linkedin.com/in/paologarde/?originalSubdomain=au",
    },
    {
      id: 5,
      name: "Corey",
      nickname: "jabu-web",
      image: "/assets/images/logo/big-logo.png",
      role: "Web Developer",
      linkedIn: "https://github.com/jabu-web",
    },
    {
      id: 6,
      name: "Jan Xavier Gomez Virgen",
      nickname: "jandev",
      quote:
        " I like helping other developers and at the same time learning more about technologies.",
      image: "/assets/images/volunteers/WD_Jan.png",
      role: "Web Developer",
      linkedIn: "https://www.linkedin.com/in/janv/",
    },
    {
      id: 7,
      name: "Ella Ferreira",
      nickname: "Ella",
      quote:
        " It's been a great way of putting my skills in practice and learning with the Mentors as well.",
      image: "/assets/images/volunteers/WD_Ella.png",
      role: "Web Developer",
      linkedIn:
        "https://www.linkedin.com/in/ella-ferreira-3959aa82/?originalSubdomain=au",
    },
  ]
  const [index, setIndex] = useState(0)
  const { id, name, nickname, quote, image, role, linkedIn } =
    contributors[index]

  const onClickSetIndex = (number) => {
    setIndex(number)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (index === 5) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 15000)

    return () => clearInterval(interval)
  }, [index])

  let buttons = () => {
    let buttons = []
    for (let i = 0; i < contributors.length; i++) {
      buttons.push(
        <CarouselButton
          key={contributors[i].id}
          index={i}
          onClickSetIndex={onClickSetIndex}
        />
      )
    }
    return buttons
  }

  return (
    <div className="contributors">
      <h2 className="subtitle">Contributors</h2>
      <section className="carousel-section">
        <Contributor
          key={id}
          name={name}
          nickname={nickname}
          quote={quote}
          image={image}
          role={role}
          linkedIn={linkedIn}
        />
        <div className="carousel-nav">{buttons()}</div>
      </section>
    </div>
  )
}

export default Contributors
