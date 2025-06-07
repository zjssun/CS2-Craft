import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/basicinput.css'

export default function BasicInput() {
   const { t } = useTranslation();
   return (
      <div className='basicinput'>
         <div className='basicinput-item'>
            <label className='basicinput-label'>{t("Name Tag")}</label>
            <input className='basicinput-input' type="text" />
         </div>
         <div className='basicinput-item'>
            <label className='basicinput-label'>{t("StatTrak")}</label>
            <input className='basicinput-input' minLength={1} maxLength={4} type="text" />
         </div>
         <div className='basicinput-item'>
            <label className='basicinput-label'>{t("Pattern ID")}</label>
            <input className='basicinput-input' minLength={1} maxLength={4} type="text" />
         </div>
         <div className='basicinput-item'>
            <label className='basicinput-label'>{t("Wear")}</label>
            <input className='basicinput-input' type="text" />
         </div>
      </div>
   )
}