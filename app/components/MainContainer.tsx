import '../css/maincon.css'
import { useTranslation } from 'react-i18next'
import { sticker, gun_skin, key_charm, patch, musickit, medal, agent, gloves, knife } from '../utils/item_json'
import { useEffect, useState } from 'react'
import type {BasicInputData,Charm, Sticker} from '../utils/modleType'
import {getRarity} from '../utils/tools';
import { gsap } from 'gsap'

import Itemcard from './Itemcard'
import BasicInput from './BasicInput'
import StickerInput from './StickerInput'
import CharmInput from './CharmInput'

// sticker
const STICKER_DEFAULTS = [
   { name:'', slot: '0', rotation: '', x: '', y: '', wear: '' },
   { name:'', slot: '1', rotation: '', x: '', y: '', wear: '' },
   { name:'', slot: '2', rotation: '', x: '', y: '', wear: '' },
   { name:'', slot: '3', rotation: '', x: '', y: '', wear: '' },
   { name:'', slot: '0', rotation: '', x: '0.113', y: '0.035', wear: '' }
];
const EMPTY_STICKER_STATE = {
   name:'', slot: '', rotation: '', x: '', y: '', wear: '', isActive: false
};

export default function MainContainer() {
   const { t } = useTranslation();
   // Main Category Value
   const [value, setValue] = useState('gun_skin');
   // Subcategory Value
   const [series, setSeries] = useState('weapon_ak47');
   // Search filter
   const [filter, setFilter] = useState('');
   const [activeCardId, setActiveCardId] = useState<string | null>(null);
   const [genCode, setGenCode] = useState('');
   const [serverCode, setServerCode] = useState('');
   // receive from ItemCard
   const [itemId, setitemId] = useState('0');
   const [rarity, setRarity] = useState('99');
   const [gunIndex, setgunIndex] = useState('0');
   const [skinIndex, setskinIndex] = useState('0');
   // receive from BasicInput
   const [nameTag, setNameTag] = useState('');
   const [statTrakCount, setStatTrakCount] = useState('');
   const [pattern, setPattern] = useState('0');
   const [wear, setWear] = useState('0');
   // keycharm
   const [charm, setCharm] = useState<Charm>(
      { name: '',pattern:'', x: '',z: '',highlight:'' }
   );
   // Sticker
   const [stickerInputs, setStickerInputs] = useState(
        Array(5).fill(null).map(() => ({ ...EMPTY_STICKER_STATE }))
    );

   const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
      if (e.target.value === 'gun_skin'){
         setSeries('weapon_ak47');
      }
      else if (e.target.value === 'knife')
         setSeries('weapon_knife_push');
      else if (e.target.value === 'gloves')
         setSeries('studded_brokenfang_gloves');
      else if (e.target.value === 'agent')
         setSeries('4613');
      else if (e.target.value === 'sticker')
         setSeries('Warhammer 40,000 Xenos Sticker Capsule');
      else if (e.target.value === 'key_charm')
         setSeries('keychain');
      else if (e.target.value === 'patch')
         setSeries('patch');
      else if (e.target.value === 'musickit')
         setSeries('musickit');
      else if (e.target.value === 'medal')
         setSeries('medal');
      else
         setSeries('');
   }
   const handleSeriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSeries(e.target.value);
   }
   // ItemCard Click Handle
   const CardClick = (catgory:string,cardId: string, index: string,rarity:string) => {
      if (activeCardId === cardId) {
         setActiveCardId(null);
      } else {
         setActiveCardId(cardId);
         setRarity(getRarity(rarity,catgory));
         setskinIndex(cardId);
         console.log("catgory:",catgory,"CardId:", cardId, "Index:", index,"Rarity:",rarity);
      }
   }
   // BasicInput Data Handle
   const handleBasicInputData = (BasicInputData:BasicInputData) =>{
      // console.log('父组件实时接收到数据:', BasicInputData);
      if(value != 'key_charm'){
         setNameTag(BasicInputData.nameTag);
         setStatTrakCount(BasicInputData.statTrakCount);
         setPattern(BasicInputData.pattern);
         setWear(BasicInputData.wear);
      }else{
         setCharm({...charm,pattern:BasicInputData.pattern,highlight:BasicInputData.highlight});
      }
   }
   // StickerInput Toggle Activity
   const handleStickerToggle = (index:number)=>{
      const newStickerInputs = [...stickerInputs];
      const currentSticker = newStickerInputs[index];
      const isNowActive = !currentSticker.isActive;
      if(isNowActive){
         newStickerInputs[index] = {...STICKER_DEFAULTS[index], isActive: true};
      }else{
         newStickerInputs[index] = {...EMPTY_STICKER_STATE};
      }
      setStickerInputs(newStickerInputs);
   }
   // StickerInput Data Handle
   const handleStickerDataChange = (index:number,fieldName:keyof Sticker,value:string)=>{
      const newStickerInputs = stickerInputs.map((sticker,i) =>{
         if(i === index){
            return {...sticker, [fieldName]:value};
         }
         return sticker;
      })
   }
   

   useEffect(() => {
      console.log(nameTag,statTrakCount,pattern,wear,charm);
   }, [nameTag,statTrakCount,pattern,wear,charm]);

   return (
      <div className="main-container">
         <div className="select-panel">
            {/* Item Select */}
            <select value={value} onChange={handleValueChange} className='select'>
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
            {/* Series */}
            <select value={series} onChange={handleSeriesChange} className='select select-second' disabled={value === '' || value != 'gun_skin' && value != 'knife' && value != 'gloves' && value != 'sticker'}>
               {
                  value == '' || value != 'gun_skin' && value != 'knife' && value != 'gloves' && value != 'sticker' ? (<option value="">{t("")}</option>) :
                     value == 'gun_skin' ? (
                        Object.entries(gun_skin).map((item, index) => (
                           <option value={item[0]} key={index}>{t(item[0].replace(/^weapon_/, '').toUpperCase())}</option>
                        ))
                     ) : value == 'knife' ? (
                        Object.entries(knife).map((item, index) => (
                           <option value={item[0]} key={index}>{t(item[0])}</option>
                        ))
                     ) : value == 'gloves' ? (
                        Object.entries(gloves).map((item, index) => (
                           <option value={item[0]} key={index}>{t(item[0])}</option>
                        ))
                     ) : value == 'sticker' ? (
                        Object.entries(sticker).map((item, index) => (
                           <option value={item[0]} key={index}>{item[0]}</option>
                        ))
                     ) : null
               }
            </select>
         </div>
         {
            value == '' || value != 'gun_skin' && value != 'knife' && value != 'gloves' && value != 'agent' && value != 'key_charm' ? null : 
            value == 'gun_skin' ? (
               <div className='craft-panel'>
                  <BasicInput value='gun_skin' handleBasicInputData={handleBasicInputData}/>
                  {
                     stickerInputs.map((sticker,index)=>(
                        <StickerInput 
                           key={index}
                           index={index}
                           data={sticker}
                           handleStickerToggle={handleStickerToggle}
                           handleStickerDataChange={handleStickerDataChange}
                        />
                     ))
                  }
                  <CharmInput />
               </div>
            ) : value == 'knife' ? (
               <div className='craft-panel'>
                  <BasicInput value='knife' handleBasicInputData={handleBasicInputData}/>
               </div>
            ): value == 'gloves' ? (
               <div className='craft-panel'>
                  <BasicInput value='gloves' handleBasicInputData={handleBasicInputData}/>
               </div>
            ): value == 'agent' ? (
               <div className='craft-panel'>
                  
               </div>
            ): value == 'key_charm' ? (
               <div className='craft-panel'>
                  <BasicInput value='key_charm' handleBasicInputData={handleBasicInputData}/>
               </div>
            ): null
         }
         <div className='item-container'>
            <div className='item-panel-container'>
               <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} className='item-search' />
               <input type="text" disabled className='gen-code' value={genCode} placeholder={t("Inspect Command")}/>
               <input type="text" disabled className='gen-code' value={serverCode} placeholder={t("Server Inspect Command")}/>
               <button className='gen-button'>{t("Generate")}</button>
            </div>
            <div className='item-list'>
               {
                  value == 'gun_skin' && series ? (
                     gun_skin[series as keyof typeof gun_skin].filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                        <Itemcard category='gun_skin' CardClick={CardClick} isActicet={item.id === activeCardId} index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={item.id} />
                     ))
                  ) : value == 'knife' && series ? (
                     knife[series as keyof typeof knife].filter((item) => item.name.replace(/^★ .*? \| /, '').toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                        <Itemcard category='knife' CardClick={CardClick} isActicet={item.id === activeCardId} index={series} name={item.name.replace(/^★ .*? \| /, '')} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={item.id} />
                     ))
                  ) : value == 'gloves' && series ? (
                     gloves[series as keyof typeof gloves].filter((item) => item.name.replace(/^★ .*? \| /, '').toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                        <Itemcard category='gloves' CardClick={CardClick} isActicet={item.id === activeCardId} index={series} name={item.name.replace(/^★ .*? \| /, '')} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={item.id} />
                     ))
                  ) : value == 'sticker' && series ? (
                     sticker[series as keyof typeof sticker].filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                        <Itemcard category='sticker' CardClick={CardClick} isActicet={item.id === activeCardId} index={"sticker"} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={item.id} />
                     ))
                  ) : value == 'agent' ? (
                     Object.entries(agent).flatMap(([agentCollectionId, agentItemsArray]) => agentItemsArray.map(
                        (item, index) => (
                           <Itemcard category='agent' CardClick={CardClick} isActicet={agentCollectionId === activeCardId} index={agentCollectionId} name={item.name} id={agentCollectionId} rarity={item.rarity} thumbnail={item.thumbnail} key={agentCollectionId} />
                        )
                     ))
                  ) : value == 'key_charm' && series ? (
                     key_charm[series as keyof typeof key_charm].filter((item) => item.name.replace(/^Charm.*?\|/, '').toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                        <Itemcard category='key_charm' CardClick={CardClick} isActicet={item.id === activeCardId} index={"keychain"} name={item.name.replace(/^Charm.*?\|/, '')} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={item.id} />
                     ))
                  ) : value == 'patch' && series ? (
                     patch[series as keyof typeof patch].filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                        <Itemcard category='patch' CardClick={CardClick} isActicet={item.id === activeCardId} index={"patch"} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={item.id} />
                     ))
                  ) : value == 'musickit' && series ? (
                     musickit[series as keyof typeof musickit].filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                        <Itemcard category='musickit' CardClick={CardClick} isActicet={item.id === activeCardId} index={"musickit_default"} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={item.id} />
                     ))
                  ) : value == 'medal' && series ? (
                     medal[series as keyof typeof medal].filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())).map((item, index) => (
                        <Itemcard category='medal' CardClick={CardClick} isActicet={item.id === activeCardId} index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={item.id} />
                     ))
                  ) : null
               }
            </div>
         </div>
      </div>
   )
}