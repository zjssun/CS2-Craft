import { useState, useEffect } from 'react';
import type {StickerInfo,StickerCollection} from '../utils/modleType'
import '../css/stickerpicker.css'

interface Props{
   isOpen:boolean;
   stickerData: StickerCollection;
   onClose: () => void;
   onStickerSelect: (sticker: StickerInfo) => void;
}

export default function StickerPicker({isOpen,stickerData, onClose, onStickerSelect}:Props){
   const capsuleNames = Object.keys(stickerData);
   const [selectedCapsule, setSelectedCapsule] = useState<string>(capsuleNames[0]||'');

   useEffect(()=>{
      if(isOpen && capsuleNames.length > 0){
         setSelectedCapsule(capsuleNames[0]);
      }
   },[isOpen,capsuleNames]);

   //Handle Select
   const handleSelectAndClose = (sticker:StickerInfo)=>{
      onStickerSelect(sticker);
      onClose();
   }

   return(
      <div className="modal-overlay" onClick={onClose}>
         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
               <div className="modal-header">
                  <h2>Select a Sticker</h2>
                  <button onClick={onClose} className="close-button">×</button>
               </div>
               <div className="modal-body">
                  <div className="capsule-selector">
                     <label htmlFor="capsule-select">Sticker Capsule:</label>
                     <select
                           id="capsule-select"
                           value={selectedCapsule}
                           onChange={(e) => setSelectedCapsule(e.target.value)}
                     >
                           {capsuleNames.map(name => (
                              <option key={name} value={name}>{name}</option>
                           ))}
                     </select>
                  </div>
                  <div className="sticker-grid">
                     {stickerData[selectedCapsule]?.map(sticker => (
                           <div key={sticker.id} className="sticker-item" onClick={() => handleSelectAndClose(sticker)}>
                              <img src={sticker.thumbnail} alt={sticker.name} title={`${sticker.name} (${sticker.rarity})`} />
                              <p>{sticker.name}</p>
                           </div>
                     ))}
                  </div>
               </div>
         </div>
      </div>
   );

}