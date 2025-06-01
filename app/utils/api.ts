import axios from 'axios';
import type { Charm, Sticker } from '../utils/modleType';

//https://samrol-express.me
//http://localhost:3000
///https://samrol-express.shop
axios.defaults.baseURL = 'http://localhost:8080';

export async function postInspectData(itemId:string, rarity:string,gunIndex:string, skinIndex:string, nameTag:string, statTrak:boolean, statTrakCount:string, pattern:string, wear:string, musicIndex:string, entIndex:string, petIndex:string, charm:Charm, stickers:Sticker[]) {
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
      musicIndex,
      entIndex,
      petIndex,
      charm,
      stickers
   }
   return axios.post(`/getItemCode/`, inspectData,{
      headers: {
        'Content-Type': 'application/json',
      },
    });
}