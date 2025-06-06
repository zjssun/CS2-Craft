
interface Props{
   index:string,
   name:string,
   id:string,
   rarity:string,
   thumbnail:string
}

export default function Itemcard({name,id,rarity,thumbnail}:Props){
   return(
      <div>{name}{id}{rarity}{thumbnail}</div>
   )
}