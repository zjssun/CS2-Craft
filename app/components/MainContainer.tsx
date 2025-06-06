import '../css/maincon.css'
import { useTranslation } from 'react-i18next'
import { sticker, gun_skin, key_charm, patch, musickit, medal, agent, gloves, knife } from '../utils/item_json'
import { useEffect, useState } from 'react'

import Itemcard from '../components/Itemcard'

export default function MainContainer() {
   const { t } = useTranslation();
   const [value, setValue] = useState('gun_skin');
   const [series, setSeries] = useState('weapon_ak47');

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
         setSeries('key_charm');
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

   useEffect(() => {

   }, []);

   return (
      <div className="main-container">
         <div className="select-panel">
            <select value={value} onChange={handleValueChange} className='select'>
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
         <div className='item-container'>
            <div className='item-panel-container'>
               <input type="text" className='item-search' />
            </div>
            <div className='item-list'>
               {
                  value == 'gun_skin' && series ? (
                     gun_skin[series as keyof typeof gun_skin].map((item, index) => (
                        <Itemcard index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={index} />
                     ))
                  ) : value == 'knife' && series ? (
                     knife[series as keyof typeof knife].map((item, index) => (
                        <Itemcard index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={index} />
                     ))
                  ) : value == 'gloves' && series ? (
                     gloves[series as keyof typeof gloves].map((item, index) => (
                        <Itemcard index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={index} />
                     ))
                  ) : value == 'sticker' && series ? (
                     sticker[series as keyof typeof sticker].map((item, index) => (
                        <Itemcard index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={index} />
                     ))
                  ) : value == 'agent' ? (
                     Object.entries(agent).flatMap(([agentCollectionId, agentItemsArray]) => agentItemsArray.map(
                        (item, index) => (
                           <Itemcard index={agentCollectionId} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={agentCollectionId} />
                        )
                     ))
                  ) : value == 'key_charm' && series ? (
                     key_charm[series as keyof typeof key_charm].map((item, index) => (
                        <Itemcard index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={index} />
                     ))
                  ) : value == 'patch' && series ? (
                     patch[series as keyof typeof patch].map((item, index) => (
                        <Itemcard index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={index} />
                     ))
                  ) : value == 'musickit' && series ? (
                     musickit[series as keyof typeof musickit].map((item, index) => (
                        <Itemcard index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={index} />
                     ))
                  ) : value == 'medal' && series ? (
                     medal[series as keyof typeof medal].map((item, index) => (
                        <Itemcard index={series} name={item.name} id={item.id} rarity={item.rarity} thumbnail={item.thumbnail} key={index} />
                     ))
                  ) : null
               }
            </div>
         </div>
      </div>
   )
}