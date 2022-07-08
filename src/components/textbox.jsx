import './textbox.css'
import '../index.css'

function Textbox(props) {
  let classvar = "Textbox "
  if (!!props.classesName) {
    classvar += props.classesName
  }

  let textSize = "text-1xl"

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
