import '../css/maincon.css'
import { useTranslation } from 'react-i18next'
import { sticker, gun_skin, key_charm, patch, musickit, medal, agent, gloves, knife } from '../utils/item_json'
import { useEffect, useState } from 'react'

import Itemcard from './Itemcard'
import BasicInput from './BasicInput'
import StickerInput from './StickerInput'
import CharmInput from './CharmInput'


export default function MainContainer() {
   const { t } = useTranslation();
   const [value, setValue] = useState('gun_skin');
   const [series, setSeries] = useState('weapon_ak47');
   const [filter, setFilter] = useState('');
   const [activeCardId, setActiveCardId] = useState<string | null>(null);
   const [isCraftVisible, setIsCraftVisible] = useState(false);

   const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
      if (e.target.value === 'gun_skin')
         setSeries('weapon_ak47');
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
   const CardClick = (catgory:string,cardId: string, index: string) => {
      if (activeCardId === cardId) {
         setActiveCardId(null);
         setIsCraftVisible(false);
      } else {
         setActiveCardId(cardId);
         console.log("catgory:",catgory,"CardId:", cardId, "Index:", index);
         if(catgory === 'gun_skin' || catgory === 'knife' || catgory === 'gloves' || catgory === 'agent'){
            setIsCraftVisible(true);
         }else{
            setIsCraftVisible(false);
         }
      }
   }

   useEffect(() => {

   }, []);

   return (
      <div className="main-container">
         <div className="select-panel">
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
         <div className='craft-panel'>
            <BasicInput />
            <StickerInput />
            <StickerInput />
            <StickerInput />
            <StickerInput />
            <StickerInput />
            <CharmInput />
         </div>
         <div className='item-container'>
            <div className='item-panel-container'>
               <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} className='item-search' />
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