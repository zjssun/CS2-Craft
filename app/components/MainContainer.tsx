import '../css/maincon.css'
import {useTranslation} from 'react-i18next'
import {sticker,gun_skin,key_charm,patch,musickit,medal,agent,gloves,knife} from '../utils/item_json'
import {truncate} from '../utils/tools'
import {useState} from 'react'

export default function MainContainer(){
   const {t} = useTranslation();
   const [value, setValue] = useState('');
   const [series, setSeries] = useState('');
   return(
      <div className="main-container">
         <div className="select-panel">
            <select value={value} onChange={(e) => setValue(e.target.value)} className='select'>
               <option value="">{t("Select an option")}</option>
               <option value="gun_skin">{t("Weapons")}</option>
               <option value="knife">{t("Knife")}</option>
               <option value="gloves">{t("Gloves")}</option>
               <option value="agent">{t("Agent")}</option>
               <option value="sticker">{t("Stickers")}</option>
               <option value="key_charm">{t("Charms")}</option>
               <option value="patch">{t("Patches")}</option>
               <option value="musickit">{t("MusicKit")}</option>
               <option value="medal">{t("Pins,Cases,Medals,Etc")}</option>
            </select>
            <select value={series} onChange={(e) => setSeries(e.target.value)} className='select select-second' disabled={value === '' || value != 'gun_skin' && value != 'knife' && value != 'gloves' && value != 'sticker'}>
               {
                  value == ''|| value != 'gun_skin' && value != 'knife' && value != 'gloves' && value != 'sticker' ?(<option value="">{t("")}</option>) : 
                  value == 'gun_skin' ? (
                     Object.entries(gun_skin).map((item, index) => (
                        <option value={item[0]} key={index}>{item[0].replace(/^weapon_/, '')}</option>
                     ))
                  ) : value == 'knife' ? (
                     Object.entries(knife).map((item, index) => (
                        <option value={item[0]} key={index}>{t(item[0])}</option>
                     ))
                  ) : value == 'gloves' ? (
                     Object.entries(gloves).map((item, index) => (
                        <option value={item[0]} key={index}>{item[0]}</option>
                     ))
                  ): value == 'sticker' ? (
                     Object.entries(sticker).map((item, index) => (
                        <option value={item[0]} key={index}>{item[0]}</option>
                     ))
                  ): null
               }
            </select>
         </div>
      </div>
   )
}