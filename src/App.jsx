import { useState } from 'react'
import './App.css'
import './index.css'

function App(props) {

  let classesName = "text-6xl font-bold text-center font-anton font-color-primary "

  if (!!props.classesName) {
    classesName += props.classesName
  }

  let AppClasses = "App "

  if (!!props.AppClasses) {
    AppClasses += props.AppClasses
  }

  return (
    <div className={AppClasses}>
    <h1 className={classesName}>
    {props.content}
    </h1>

    </div>
  )
}

export default App
