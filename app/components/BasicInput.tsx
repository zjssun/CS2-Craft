import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type {BasicInputData} from '../utils/modleType'
import '../css/basicinput.css'

interface Props {
   value: string,
   handleBasicInputData: (BasicInputData:BasicInputData) => void,
   delay?: number
}

export default function BasicInput({value,handleBasicInputData,delay=500}: Props) {
   const { t } = useTranslation();
   const [formData,setFormData] = useState<BasicInputData>({
      nameTag: '',
      statTrakCount: '',
      pattern: '',
      wear: '',
   });

   useEffect(()=>{
      const handler = setTimeout(()=>{
         if(handleBasicInputData){
            handleBasicInputData(formData);
         }
      },delay);

      return () => clearTimeout(handler);
   },[formData,handleBasicInputData,delay]);

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
                     <input name='nameTag' onChange={handleChange} className='basicinput-input' type="text" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("StatTrak")}</label>
                     <input name='statTrakCount' onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Pattern ID")}</label>
                     <input name='pattern' onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Wear")}</label>
                     <input name='wear' onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
               </>
            ):value == 'gloves' ? (
               <>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Pattern ID")}</label>
                     <input name='pattern' onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Wear")}</label>
                     <input name='wear' onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
               </>
            ):value == 'key_charm' ? (
               <>
                  <div className='basicinput-item'>
                     <label className='basicinput-label'>{t("Pattern ID")}</label>
                     <input name='pattern' onChange={handleChange} className='basicinput-input' type="number" />
                  </div>
               </>
            ):null
         }
      </div>
   )
}