"use client"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import Heading from "../components/ui/Heading"
import CreateMovie from "./CreateMovie"
import { moviesList } from "../../data/moviesList"
import EmptyPage from "./EmptyPage"

const MoviePage = () => {
  const [createMovie, setCreateMovie] = useState(false)
  const render = () => {
    if (moviesList.length === 0 && createMovie === false) {
      return <EmptyPage setOnClick={setCreateMovie} />
    } else {
      return (
        <>
          {moviesList.length > 0 && createMovie === false ? (
            <div className="px-6 xl:px-[120px]">
              <div className="flex justify-between items-center">
                <Heading
                  logout
                  addMovie
                  title={"My movies"}
                  setOnClick={setCreateMovie}
                />
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-[280px]">
                {moviesList.map((item, index) => (
                  <Card key={index} data={item} />
                ))}
              </div>
            </div>
          ) : (
            <CreateMovie setOnClick={setCreateMovie} />
          )}
        </>
      )
    }
  }

  return render()
}

export default MoviePage
