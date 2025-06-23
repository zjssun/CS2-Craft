import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/basicinput.css'

interface Props {
   value: string;
   // onChange: (value: string) => void;
}

export default function BasicInput({value}: Props) {
   const { t } = useTranslation();
   return (
      <div className='basicinput'>
         {
            value == 'gun_skin' || value == 'knife' ? (
               <>
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
               </>
            ):value == 'gloves' ? (
               <>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Pattern ID")}</label>
                     <input className='basicinput-input' minLength={1} maxLength={4} type="text" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Wear")}</label>
                     <input className='basicinput-input' type="text" />
                  </div>
               </>
            ):value == 'key_charm' ? (
               <>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Pattern ID")}</label>
                     <input className='basicinput-input' minLength={1} maxLength={4} type="text" />
                  </div>
               </>
            ):null
         }
      </div>
   )
}