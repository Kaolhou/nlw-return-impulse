import { ToggleTheme } from "./ToggleTheme";
//import { useState } from "react";


export function Body(){

    function changeThemeLocalStorage(){
        let get = JSON.parse(localStorage.getItem('themeToggle')!)||false
        let store = get == true

        renderTheme(!store)
        localStorage.setItem('themeToggle',JSON.stringify(!store))
        console.log(store)

    }

    function firstRenderTheme(){
        let get = JSON.parse(localStorage.getItem('themeToggle')!)||false
        let store = get == true

        renderTheme(store)
    }

    //change the theme when load the page
    function renderTheme(bool:boolean){
        const element = document.querySelector('html')
        var classes = element?.className
        if(bool){
            !classes?.includes('dark') && element?.classList.add('dark')
        }else{ 
            classes?.includes('dark') && element?.classList.remove('dark')
        }
    }

    firstRenderTheme()
  return<>
    <ToggleTheme id="theme" store="themeToggle" changeTheme={changeThemeLocalStorage} />
  </>
}