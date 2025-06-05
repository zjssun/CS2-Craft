import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "weapon_knife_push":"Shadow Daggers",
      "weapon_knife_tactical":"Huntsman Knife",
      "weapon_knife_falchion":"Falchion Knife",
      "weapon_knife_butterfly":"Butterfly Knife",
      "weapon_knife_survival_bowie":"Bowie Knife",
      "weapon_knife_widowmaker":"Talon Knife",
      "weapon_knife_stiletto":"Stiletto Knife",
      "weapon_knife_gypsy_jackknife":"Navaja Knife",
      "weapon_knife_ursus":"Ursus Knife",
      "weapon_knife_kukri":"Kukri Knife",
      "weapon_knife_skeleton":"Skeleton Knife",
      "weapon_knife_outdoor":"Nomad Knife",
      "weapon_knife_canis":"Survival Knife",
      "weapon_knife_cord":"Paracord Knife",
      "weapon_knife_css":"Classic Knife",
      "weapon_knife_karambit":"Karambit",
      "weapon_knife_m9_bayonet":"M9 Bayonet",
      "weapon_knife_gut":"Gut Knife",
      "weapon_knife_flip":"Flip Knife",
      "weapon_bayonet":"Bayonet",
    }
  },
  zh: {
    translation: {
      "Weapons":"主、副武器",
      "Select an option":"选择一个选项",
      "Knife":"匕首",
      "Gloves":"手套",
      "Agent":"探员",
      "Stickers":"贴纸",
      "Charms":"挂件",
      "Patches":"布章",
      "MusicKit":"音乐盒",
      "Pins,Cases,Medals,Etc":"胸章,武器箱,奖杯等...",
      "weapon_knife_push":"暗影匕首",
      "weapon_knife_tactical":"猎杀者匕首",
      "weapon_knife_falchion":"弯刀",
      "weapon_knife_butterfly":"蝴蝶刀",
      "weapon_knife_survival_bowie":"鲍伊猎刀",
      "weapon_knife_widowmaker":"锯齿爪刀",
      "weapon_knife_stiletto":"短剑",
      "weapon_knife_gypsy_jackknife":"折刀",
      "weapon_knife_ursus":"熊刀",
      "weapon_knife_kukri":"廓尔喀刀",
      "weapon_knife_skeleton":"骷髅匕首",
      "weapon_knife_outdoor":"流浪者匕首",
      "weapon_knife_canis":"求生者匕首",
      "weapon_knife_cord":"系绳匕首",
      "weapon_knife_css":"海豹短刀",
      "weapon_knife_karambit":"爪子刀",
      "weapon_knife_m9_bayonet":"M9刺刀",
      "weapon_knife_gut":"穿肠刀",
      "weapon_knife_flip":"折叠刀",
      "weapon_bayonet":"刺刀",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "zh",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;