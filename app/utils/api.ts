import axios from 'axios';
import type { Charm, Sticker } from '../utils/modleType';

//https://samrol-express.me
//http://localhost:3000
axios.defaults.baseURL = 'http://localhost:8080';

export async function postInspectData(itemId:string, rarity:string,gunIndex:string, skinIndex:string, nameTag:string, statTrak:boolean, statTrakCount:string, pattern:string, wear:string, charm:Charm, stickers:Sticker[]) {
   const inspectData ={
      itemId,
      rarity,
      gunIndex,
      skinIndex,
      nameTag,
      statTrak,
      statTrakCount,
      pattern,
      wear,
      charm,
      stickers
   }
   return axios.post(`/getItemCode/`, inspectData,{
      headers: {
        'Content-Type': 'application/json',
      },
    });
}