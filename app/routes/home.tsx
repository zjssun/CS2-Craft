import type { Route } from "./+types/home";
import SkinInput from "../components/SkinInput";
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../css/home.css'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CS2 Craft" },
    { name: "description", content: "Welcome to CS2 Craft!" },
  ];
}



export default function Home() {
  const [themeCheck, setThemeCheck] = useState(false);
  const [lngCheck, setLngCheck] = useState(false);
  const {i18n} = useTranslation();
  
  //func in Header Component
  const ChangeTheme=()=>{
    setThemeCheck(!themeCheck);
    localStorage.setItem("theme",(!themeCheck).toString());
  }

  //func change language in Header Component
  const ChangeLng=()=>{
    setLngCheck(!lngCheck);
    if(!lngCheck){
      i18n.changeLanguage("en");
      localStorage.setItem('Language' ,'true');
    }else{
      i18n.changeLanguage("zh");
      localStorage.setItem('Language' ,'false');
    }
  }

  useEffect(()=>{
    // Check if Dark Mode is enabled in Local Storage
    const loaclTheme = localStorage.getItem("theme");
    if(loaclTheme){
      if(loaclTheme === "true"){
        setThemeCheck(true);
      }else{
        setThemeCheck(false);
      }
    }else{
      localStorage.setItem("theme","false");
    }

    //check is Language is en or zh
    const locallng = localStorage.getItem("Language");
    if(locallng){
      if(locallng==='false'){
        i18n.changeLanguage("zh");
        setLngCheck(false);
      }else{
        i18n.changeLanguage("en");
        setLngCheck(true);
      }
    }else{
      localStorage.setItem('Language','false');
    }
  },[])

  return (
    <div className={`home ${themeCheck ? "dark" : "light"}`}>
      <div className="body">
        <Header themeCheck={themeCheck} ChangeTheme={ChangeTheme} lngCheck={lngCheck} ChangeLng={ChangeLng}/>
        <MainContainer/>
      </div>
    </div>
  );
}
