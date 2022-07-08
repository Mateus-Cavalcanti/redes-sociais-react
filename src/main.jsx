import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Textbox from './components/textbox'
import Select from './components/selectpage'
import './index.css'


const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
let safaribool = safari ? true : false;
var safety_bottom = "bottom-0";
if (safaribool) {
  safety_bottom = "bottom-20";
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div name="comeco" id="comeco" className="flex center justify-center flex-col h-screen space-y-5 items-center">
      <App content="A influência das redes sociais"/>
      <Textbox content="Os pontos negativos e positivos das redes sociais"/>
      <a href="#setw" className="btn btn-secondary w-56 justify-center">Começar</a>
      <Textbox classesName={"absolute " + safety_bottom} textSize="text-xs" content="Copyright © 2022 - mateusdccavalcanti@gmail.com"/>
    </div>
  {/* Twitter */}
    <div id="setw" name="setw" className="bg-twitter flex flex-col h-screen space-y-5 relative ">
      <a className="btn rounded-none btn-accent border-0 no-animation black-transparent-bg-30 w-auto h-1/6 mb-40 font-transparent font-anton text-4xl" href="#comeco">Ir para começo</a>
      <App AppClasses="self-center" content="Twitter"/>
      <Textbox content="A influencia do twitter na politica"/>
      <a href="#twitter-1" className="btn self-center btn-ghost font-anton font-color-primary text-2xl w-56">Começar</a>
      <a className={"btn rounded-none btn-accent border-0 no-animation black-transparent-bg-30 w-auto h-1/6 font-transparent font-anton text-4xl absolute w-screen " + safety_bottom} href="#sein">Ir para Instagram</a>
    </div>
  {/* Instagram */}
    <div id="sein" name="sein" className="bg-instagram flex flex-col h-screen space-y-5 relative ">
      <a className="btn rounded-none btn-accent border-0 no-animation black-transparent-bg-30 w-auto h-1/6 mb-40 font-transparent font-anton text-4xl" href="#setw">Ir para Twitter</a>
      <App AppClasses="self-center" content="Instagram"/>
      <Textbox content="Os prejuizos da auto exposição"/>
      <a href="#instagram-1" className="btn self-center btn-ghost font-anton font-color-primary text-2xl w-56">Começar</a>
      <a className={"btn rounded-none btn-accent border-0 no-animation black-transparent-bg-30 w-auto h-1/6 font-transparent font-anton text-4xl absolute w-screen " + safety_bottom} href="#setik">Ir para Tik Tok</a>
    </div>
  {/* TikTok */}
    <div id="setik" name="setik" className="bg-tiktok flex flex-col h-screen space-y-5 relative ">
      <a className="btn rounded-none btn-accent border-0 no-animation black-transparent-bg-30 w-auto h-1/6 mb-40 font-transparent font-anton text-4xl" href="#sein">Ir para Instagram</a>
      <App AppClasses="self-center" content="TikTok"/>
      <Textbox content="As consequencias desse vicio"/>
      <a href="#tiktok-1" className="btn self-center btn-ghost font-anton font-color-primary text-2xl w-56">Começar</a>
      <a className={"btn rounded-none btn-accent border-0 no-animation black-transparent-bg-30 w-auto h-1/6 font-transparent font-anton text-4xl absolute w-screen " + safety_bottom} href="#comeco">Ir para começo</a>
    </div>
  {/* Twitter content */}
  <Select name="twitter-1" bg="bg-twitter" content="O Twitter teve um grande impacto sobre a cultura no Brasil. Tem sido usado para difundir idéias e conectar pessoas de todo o país. O Twitter também tem sido usado para ajudar a organizar protestos e movimentos. Movimentos como #Occupy, #BlackLivesMatter, e #MeToo foram todos organizados, em parte, através do Twitter." title="Ideias" main="Twitter manifestações culturais" next="#twitter-2"/>
  <Select name="twitter-2" bg="bg-twitter" content="O twitter foi usado para ajudar a organizar protestos contra a brutalidade policial. Em 2015, um jovem chamado Edvaldo Viana foi morto pela polícia no Rio de Janeiro. Sua morte provocou indignação e protestos irromperam por todo o país. Os manifestantes usaram o Twitter para compartilhar informações e conectar-se uns com os outros. Os protestos levaram à mudanças nas táticas policiais." title="Indignação" main="Twitter manifestações culturais" next="#twitter-3"/>
  <Select name="twitter-3" bg="bg-twitter" content="O Twitter teve um grande impacto sobre a cultura no Brasil. Tem sido usado para espalhar idéias e conectar pessoas de todo o país. O Twitter também tem sido usado para ajudar a organizar protestos e movimentos. A plataforma tem ajudado a dar voz àqueles que de outra forma poderiam não ser ouvidos." title="Voz." main="Twitter manifestações culturais" next="#sein"/>
  {/* Instagram content */}
  <Select name="instagram-1" bg="bg-instagram" content="A Instagram é uma das plataformas de mídia social mais populares, com mais de 1 bilhão de usuários ativos. É uma plataforma altamente visual que permite que as pessoas compartilhem fotos e vídeos de suas vidas com outros." title="Mais popular." main="O problema da auto exposição" next="#instagram-2"/>
  <Select name="instagram-2" bg="bg-instagram" content="No entanto, a Instagram também pode ser um lugar prejudicial, particularmente para mulheres jovens que são bombardeadas com imagens de corpos e estilos de vida 'perfeitos'. Isto pode levar a vergonha corporal e sentimentos de inadequação. Além disso, a pressão para apresentar uma versão idealizada de si mesmo on-line pode causar ansiedade e depressão." title="Corpo perfeito." main="O problema da auto exposição" next="#instagram-3"/>
  <Select name="instagram-3" bg="bg-instagram" content="Em alguns casos, a busca por gostos e seguidores na Instagram pode até mesmo levar a comportamentos perigosos, tais como automutilação ou distúrbios alimentares. Embora existam muitos aspectos positivos no uso do Instagram, é importante estar ciente de seus potenciais efeitos negativos para que você possa usá-lo de forma saudável" title="Ansiedade, depressão." main="O problema da auto exposição" next="#setik"/>
  {/* TikTok content */}
  <Select name="tiktok-1" bg="bg-tiktok" content="
O popular aplicativo de mídia social TikTok já foi baixado mais de 500 milhões de vezes. Embora o aplicativo possa ser usado para criar vídeos engraçados ou para fazer playback de canções populares, ele também tem um lado negro. O aplicativo demonstrou ter um impacto negativo sobre a saúde mental de seus usuários, bem como para incentivar comportamentos negativos.
" title="80 Milhões de vezes..." main="Danos psicologicos do TikTok." next="#tiktok-2"/>
  <Select name="tiktok-2" bg="bg-tiktok" content="Um dos maiores problemas do TikTok é a forma como ele encoraja seus usuários a se apresentarem ao mundo. O aplicativo está cheio de vídeos de pessoas fazendo coisas que são arriscadas ou perigosas, muitas vezes na tentativa de obter gostos ou opiniões." title="Ser popular." main="Danos psicologicos do TikTok." next="#tiktok-3"/>
  <Select name="tiktok-3" bg="bg-tiktok" content="A pressão constante para ser popular no TikTok também pode levar a problemas de saúde mental, como ansiedade e depressão. Estudos têm mostrado que quanto mais tempo as pessoas passam nas mídias sociais, mais provável é que elas desenvolvam essas condições. Os usuários de TikTok estão especialmente em risco, pois estão constantemente se comparando às pessoas que vêem em vídeos e sentem que não são suficientemente bons." title="Depressão." main="Danos psicologicos do TikTok." next="#tiktok-4"/>
  <Select name="tiktok-4" bg="bg-tiktok" content="A TikTok pode ter impactos negativos na saúde mental e encorajar comportamentos negativos. Por exemplo, o aplicativo tem sido ligado ao desenvolvimento de distúrbios alimentares, pois os usuários estão constantemente expostos a vídeos de pessoas com corpos e estilos de vida perfeitos." title="Atitudes negativas" main="Danos psicologicos do TikTok." next="#tiktok-5"/>
  <Select name="tiktok-5" bg="bg-tiktok" content="Em geral, TikTok é um aplicativo de mídia social que pode ter um impacto negativo na saúde mental de seus usuários e encorajar comportamentos negativos. Os pais devem estar cientes dos riscos associados ao aplicativo e conversar com seus filhos sobre os perigos de usá-lo." title="Entender." main="Danos psicologicos do TikTok." next="#comeco"/>



  </React.StrictMode>
)
