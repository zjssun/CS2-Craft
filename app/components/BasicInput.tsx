import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type {BasicInputData} from '../utils/modleType'
import '../css/basicinput.css'

interface Props {
   value: string,
   handleBasicInputData: (formData:BasicInputData) => void,
   delay?: number
}

export default function BasicInput({value,handleBasicInputData,delay=500}: Props) {
   const { t } = useTranslation();
   const [formData,setFormData] = useState<BasicInputData>({
      nameTag: '',
      statTrakCount: '',
      pattern: '0',
      wear: '0',
      highlight: ''
   });

   useEffect(()=>{
      const handler = setTimeout(()=>{
         if(handleBasicInputData){
            handleBasicInputData(formData);
         }
      },delay);

      return () => clearTimeout(handler);
   },[formData,delay]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   }
   return (
      <div className='basicinput'>
         {
            value == 'gun_skin' || value == 'knife' ? (
               <>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Name Tag")}</label>
                     <input name='nameTag' value={formData.nameTag} onChange={handleChange} className='basicinput-input' type="text" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("StatTrak")}</label>
                     <input name='statTrakCount' value={formData.statTrakCount} onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Pattern ID")}</label>
                     <input name='pattern' value={formData.pattern} onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Wear")}</label>
                     <input name='wear' value={formData.wear} onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
               </>
            ):value == 'gloves' ? (
               <>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Pattern ID")}</label>
                     <input name='pattern' value={formData.pattern} onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Wear")}</label>
                     <input name='wear' value={formData.wear} onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
               </>
            ):value == 'key_charm' ? (
               <>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Pattern ID")}</label>
                     <input name='pattern' value={formData.pattern} onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("HightLight")}</label>
                     <input name='highlight' value={formData.highlight} onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
               </>
            ):null
         }
      </div>
   )
}