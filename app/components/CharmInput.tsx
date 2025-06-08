import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Plus } from 'lucide-react'
import '../css/charminput.css'

export default function CharmInput() {
   const { t } = useTranslation();
   return (
      <div className='charminput'>
         {/* Pattern */}
         <div className='charminput-item' style={{ gridArea: 'b' }}>
            <label className='charminput-label' style={{ fontSize: '12px' }}>{t("HightLight")}:</label>
            <input className='charminput-input' minLength={1} maxLength={4} type="text" />
         </div>
         {/* x and z */}
         <div className='charminput-item' style={{ gridArea: 'd' }}>
            <label className='charminput-label'>{t("X")}:</label>
            <input className='charminput-input' minLength={1} maxLength={12} type="text" />
         </div>
         <div className='charminput-item' style={{ gridArea: 'c' }}>
            <label className='charminput-label'>{t("Z")}:</label>
            <input className='charminput-input' minLength={1} maxLength={12} type="text" />
         </div>
         {/* Pattern */}
         <div className='charminput-item' style={{ gridArea: 'e' }}>
            <label className='charminput-label' style={{ fontSize: '12px' }}>{t("Pattern")}:</label>
            <input className='charminput-input' minLength={1} maxLength={4} type="text" />
         </div>
         {/* sticker */}
         <div className='charminput-image' style={{ gridArea: 'f' }}>
            <Plus className='charminput-plus' size={28} strokeWidth={3} />
         </div>
      </div>
   )
}