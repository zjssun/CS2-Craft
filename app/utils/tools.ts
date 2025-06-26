import {rarity_ids,rarity_agent,rarity_sticker_rarity} from '../utils/item_json';

export function truncate(str:string, maxLength = 15) {
  if (typeof str !== 'string') return '';
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

export function rarityToColor(rarity:String){
  switch (rarity) {
    //gun
    case 'Stock': return '#ded6cc';
    case 'Consumer Grade': return '#C0C0C0';
    case 'Industrial Grade': return '#5e98d9';
    case 'Mil-Spec Grade': return '#4c6aff';
    case 'Restricted': return '#8948ff';
    case 'Classified': return '#d32de6';
    case 'Covert': return '#eb4c4c';
    case 'Contraband': return '#f7cf04';
    case 'Gold': return '#f7cf04';
    // sticker
    case 'High Grade' : return '#4c6aff';
    case 'Remarkable' : return '#8948ff';
    case 'Exotic' : return '#d32de6';
    case 'Extraordinary' : return '#eb4c4c';
    //agent
    case 'Distinguished': return '#4c6aff';
    case 'Superior': return '#8948ff';
    case 'Exceptional': return '#d32de6';
    case 'Master': return '#eb4c4c';
    default: return '#FFFFFF';
  }
}

export function getRarity(rarity:string,catgory:string):string{
  if(catgory=='gun_skin' || catgory=='knife' || catgory=='gloves'){
    return Object.keys(rarity_ids).find(key=>rarity_ids[key as keyof typeof rarity_ids] === rarity) ?? "";
  }
  else if(catgory=='sticker' || catgory=='patch' || catgory=='musickit' || catgory=="medal"){
    return Object.keys(rarity_sticker_rarity).find(key=>rarity_sticker_rarity[key as keyof typeof rarity_sticker_rarity] === rarity) ?? "";
  }else{
    return Object.keys(rarity_agent).find(key=>rarity_agent[key as keyof typeof rarity_agent] === rarity) ?? "";
  }
}