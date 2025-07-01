export interface Sticker{
   name: string;
   wear: string;
   x: string;
   y: string;
   rotation: string;
   slot: string;
   id?:string;
   thumbnail?: string;
};

export interface StickerState extends Sticker{
   isActive: boolean;
}

export interface Charm{
   name: string;
   pattern: string;
   x: string;
   z: string;
   highlight:string;
}

export interface BasicInputData{
   nameTag:string,
   statTrakCount:string,
   pattern:string,
   wear:string,
   highlight:string,
}

export interface StickerInfo{
   name: string;
   id: string;
   rarity: string;
   thumbnail: string;
}

export type StickerCollection = Record<string, StickerInfo[]>;