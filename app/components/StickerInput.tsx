import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Plus, CircleX } from 'lucide-react';
import type { Sticker, StickerState } from '../utils/modleType'

import '../css/stickerinput.css'

interface StickerInputProps {
   index: number;
   data: StickerState;
   handleStickerDataChange: (index: number, fieldName: keyof Sticker, value: string) => void;
   onStickerAreaClick: (index: number) => void;
   handleStickerClear: (index: number) => void;
}

export default function StickerInput({ index, data, onStickerAreaClick, handleStickerDataChange, handleStickerClear }: StickerInputProps) {
   const { t } = useTranslation();
   const { thumbnail } = data;

   // Text Change
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      handleStickerDataChange(index, name as keyof Sticker, value);
   }
   // Clear
   const handleClearClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      handleStickerClear(index);
   };

   return (
      <div className='stickerinput'>
         {/* slot */}
         <div className='stickerinput-item' style={{ gridArea: 'a' }}>
            <label className='stickerinput-label' style={{ fontSize: '12px' }}>{t("slot")}:</label>
            <input name="slot" value={data.slot} className='stickerinput-input' onChange={handleChange} minLength={1} maxLength={1} type="text" />
         </div>
         {/* rotation */}
         <div className='stickerinput-item' style={{ gridArea: 'b' }}>
            <label className='stickerinput-label'>{t("R")}:</label>
            <input name="rotation" value={data.rotation} className='stickerinput-input' onChange={handleChange} minLength={1} maxLength={5} type="text" />
         </div>
         {/* x and y */}
         <div className='stickerinput-item' style={{ gridArea: 'd' }}>
            <label className='stickerinput-label'>{t("X")}:</label>
            <input name="x"  value={data.x} className='stickerinput-input' onChange={handleChange} minLength={1} maxLength={12} type="text" />
         </div>
         <div className='stickerinput-item' style={{ gridArea: 'c' }}>
            <label className='stickerinput-label'>{t("Y")}:</label>
            <input name="y" value={data.y} className='stickerinput-input' onChange={handleChange} minLength={1} maxLength={12} type="text" />
         </div>
         {/* wear */}
         <div className='stickerinput-item' style={{ gridArea: 'e' }}>
            <label className='stickerinput-label' style={{ fontSize: '12px' }}>{t("Wear ")}:</label>
            <input name="wear" value={data.wear} className='stickerinput-input' onChange={handleChange} minLength={1} maxLength={12} type="text" />
         </div>
         {/* sticker */}
         <div className='stickerinput-image' onClick={() => onStickerAreaClick(index)} style={{ gridArea: 'f' }}>
            {thumbnail ? (
               <>
                  <img
                     src={thumbnail}
                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  <button onClick={handleClearClick} className="sticker-clear-button">
                     <CircleX size={20} strokeWidth={2} />
                  </button>
               </>
            ) : (
               <Plus className='stickerinput-plus' size={28} strokeWidth={3} />
            )}
         </div>
      </div>
   )
}