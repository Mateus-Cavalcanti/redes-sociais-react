import './textbox.css'
import '../index.css'

function Textbox(props) {
  let classvar = "Textbox "
  if (!!props.classesName) {
    classvar += props.classesName
  }

  let textSize = "2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-1xl text-1xl"

  if (!!props.textSize) {
    textSize = props.textSize
  }

  let fontElements = props.textSize + " text-center font-color-primary font-dosis font-light"

  return (
    <div className={classvar}>
    <h1 className={fontElements}>
      {props.content}
    </h1>

    </div>
  )
}

export default Textbox
