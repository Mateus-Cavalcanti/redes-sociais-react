import './selectpage.css'
import '../index.css'
import App from '../App'
import Textbox from './textbox'

function Select(props) {
  const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  let safaribool = safari ? true : false;
  var safety_bottom = "bottom-0";
  if (safaribool) {
    safety_bottom = "bottom-20";
  }
  return (
    <div id={props.name} name={props.name} className={"flex flex-col h-screen space-y-5 relative grow " + props.bg}>
      <a className="btn cursor-default rounded-none btn-accent border-0 no-animation black-transparent-bg-30 w-auto h-1/6 mb-20 font-transparent font-anton text-4xl">{props.main}</a>
      <App AppClasses="self-center" content={props.title}/>
      <div className="p-9">
        <Textbox content={props.content}/>
      </div>
      <a className={"btn rounded-none btn-accent border-0 no-animation black-transparent-bg-30 w-auto h-1/6 font-transparent font-anton text-4xl safe-padding absolute w-screen " + safety_bottom} href={props.next}>Proximo</a>
    </div>
  )
}

export default Select
