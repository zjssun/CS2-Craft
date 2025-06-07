import { useEffect, useRef, useState } from 'react';
import { rarityToColor,truncate } from '../utils/tools';
import '../css/Itemcard.css'

interface Props{
   index:string,
   name:string,
   id:string,
   rarity:string,
   thumbnail:string,
   isActicet:boolean,
   CardClick:(id:string,index:string)=>void
}

export default function Itemcard({index,name,id,rarity,thumbnail,CardClick,isActicet}:Props){
   const pRef = useRef<HTMLDivElement>(null);
   const [rarityWidth, setRarityWidth] = useState(0);

   useEffect(()=>{
      if(pRef.current){
         const width = pRef.current.offsetWidth;
         if(width>150){
            setRarityWidth(150);
         }else{
            setRarityWidth(width + 5);
         }
      }
   },[])
   
   return(
      <div className={`Itemcard ${isActicet ? 'active' : ''}`} onClick={()=>CardClick(id,index)}>
         <div className="card-title">
            <p ref={pRef}>{truncate(name)}</p>
            <div className="rarity" style={{width:`${rarityWidth}px`,backgroundColor:`${rarityToColor(rarity)}`}}></div>
         </div>
         <div className="card-image">
            <img src={thumbnail} alt="" />
         </div>
         <div className='card-footer'>
            <p>{id}</p>
         </div>
      </div>
   )
}