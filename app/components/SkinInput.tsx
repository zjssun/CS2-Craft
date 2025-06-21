import React, { use, useState } from 'react';
import type { Charm, Sticker } from '../utils/modleType';
import {postInspectData} from '../utils/api'


export default function StickerInput() {
   const [itemId, setitemId] = useState('0');
   const [rarity, setRarity] = useState('99');
   const [gunIndex, setgunIndex] = useState('0');
   const [skinIndex, setskinIndex] = useState('0');
   const [nameTag, setNameTag] = useState('');
   const [statTrakCount, setStatTrakCount] = useState('');
   const [pattern, setPattern] = useState('0');
   const [wear, setWear] = useState('');
   const [musicIndex, setMusicIndex] = useState('');
   const [entIndex, setEntIndex] = useState('');
   const [petIndex, setPetIndex] = useState('');
   const [charm, setCharm] = useState<Charm>(
      { name: '',pattern:'', x: '',z: '',highlight:'' }
   );

   const [stickers, setStickers] = useState<Sticker[]>(
      Array.from({ length: 5 }, () => ({
         name: '',
         wear: '',
         x: '',
         y: '',
         rotation: '',
         slot: '',
      }))
   );

   const handleStickerChange = (index: number, field: keyof Sticker, value: string) => {
      const newStickers = [...stickers];
      newStickers[index][field] = value;
      setStickers(newStickers);
   };
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      postInspectData(itemId, rarity,gunIndex, skinIndex, nameTag, statTrakCount, pattern, wear, musicIndex, entIndex, petIndex, charm, stickers);
      console.log({
         itemId,
         rarity,
         gunIndex,
         skinIndex,
         statTrakCount,
         pattern,
         wear,
         musicIndex,
         entIndex,
         petIndex,
         charm,
         stickers,
      });
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Item ID:</label>
            <input value={itemId} onChange={(e) => setitemId(e.target.value)} />
         </div>
         <div>
            <label>Rarity:</label>
            <input value={rarity} onChange={(e) => setRarity(e.target.value)} />
         </div>
         <div>
            <label>Gun Index:</label>
            <input value={gunIndex} onChange={(e) => setgunIndex(e.target.value)} />
         </div>
         <div>
            <label>Skin Index:</label>
            <input value={skinIndex} onChange={(e) => setskinIndex(e.target.value)} />
         </div>
         <div>
            <label>Name Tag:</label>
            <input value={nameTag} onChange={(e) => setNameTag(e.target.value)} />
         </div>
         <div>
            <label>StatTrak Count:</label>
            <input value={statTrakCount} onChange={(e) => setStatTrakCount(e.target.value)} />
         </div>
         <div>
            <label>Pattern:</label>
            <input value={pattern} onChange={(e) => setPattern(e.target.value)} />
         </div>
         <div>
            <label>Wear:</label>
            <input value={wear} onChange={(e) => setWear(e.target.value)} />
         </div>
         <div>
            <label>Music Index:</label>
            <input value={musicIndex} onChange={(e) => setMusicIndex(e.target.value)} />
         </div>
         <div>
            <h4>Charm</h4>
            <div>
               <label>Charm Index:</label>
               <input
                  value={charm.name}
                  onChange={(e) => setCharm({ ...charm, name: e.target.value })}
               />
            </div>
            <div>
               <label>Charm Pattern:</label>
               <input
                  value={charm.pattern}
                  onChange={(e) => setCharm({ ...charm, pattern: e.target.value })}
               />
            </div>
            <div>
               <label>Charm X:</label>
               <input
                  value={charm.x}
                  onChange={(e) => setCharm({ ...charm, x: e.target.value })}
               />
            </div>
            <div>
               <label>Charm Z:</label>
               <input
                  value={charm.z}
                  onChange={(e) => setCharm({ ...charm, z: e.target.value })}
               />
            </div>
            <div>
               <label>Charm Highlight:</label>
               <input
                  value={charm.highlight}
                  onChange={(e) => setCharm({ ...charm, highlight: e.target.value })}
               />
            </div>
         </div>

         {stickers.map((sticker, index) => (
            <div key={index}>
               <h4>贴纸 #{index + 1}</h4>
               <div>
                  <label>贴纸Index:</label>
                  <input
                     value={sticker.name}
                     onChange={(e) => handleStickerChange(index, 'name', e.target.value)}
                  />
               </div>
               <div>
                  <label>贴纸磨损:</label>
                  <input
                     value={sticker.wear}
                     onChange={(e) => handleStickerChange(index, 'wear', e.target.value)}
                  />
               </div>
               <div>
                  <label>贴纸x轴:</label>
                  <input
                     value={sticker.x}
                     onChange={(e) => handleStickerChange(index, 'x', e.target.value)}
                  />
               </div>
               <div>
                  <label>贴纸y轴:</label>
                  <input
                     value={sticker.y}
                     onChange={(e) => handleStickerChange(index, 'y', e.target.value)}
                  />
               </div>
               <div>
                  <label>贴纸旋转度数:</label>
                  <input
                     value={sticker.rotation}
                     onChange={(e) => handleStickerChange(index, 'rotation', e.target.value)}
                  />
               </div>
               <div>
                  <label>贴纸槽位:</label>
                  <input
                     value={index==4?sticker.slot="0":sticker.slot}
                     onChange={(e) => handleStickerChange(index, 'slot', e.target.value)}
                  />
               </div>
            </div>
         ))}

         <button type="submit">提交</button>
      </form>
   );
}
