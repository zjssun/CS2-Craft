import {Sun,Moon} from "lucide-react"
import '../css/header.css'

interface Props{
   themeCheck:boolean,
   ChangeTheme:()=>void,
   lngCheck:boolean,
   ChangeLng:()=>void
}

export default function Header({themeCheck,ChangeTheme,lngCheck,ChangeLng}:Props) {
   return (
      <div className="header">
         <div className="logo">
            <img src="/assets/logo.png" alt="" />
         </div>
         {/* spacer */}
         <div className="spacer"></div>
         <div className="switch-container">
               {/* Language switch */}
               <label className="language">
                  <input type="checkbox" checked={lngCheck} onChange={ChangeLng} className=""/>
               </label>
               {/* dark/light mode switch */}
               <label className="toggle" htmlFor="switch">
                  <input id="switch" type="checkbox" onChange={ChangeTheme} checked={themeCheck}/>
                  <div className="icon icon--sun">
                     <Sun size={28}/>
                  </div>
                  <div className="icon icon--moon">
                     <Moon size={28}/>
               </div>
            </label>
         </div>
      </div>
   );
}