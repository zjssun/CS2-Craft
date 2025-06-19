import type {Route} from "./+types/test"
import SkinInput from "../components/SkinInput";

export function meta({}:Route.MetaArgs){
   return [
      { title: "Craft Test" },
      { name: "description", content: "Welcome to CS2 Craft!" },
   ];
}

export default function Test(){
   return(
      <div>
         <SkinInput/>
      </div>
   )
}