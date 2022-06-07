import { ToggleTheme } from "./ToggleTheme";


export function Body(){


  return<>
    <header className="flex justify-between lg:justify-around surface-secundary">
      <div id="logo">
        
      </div>
      <ul id="nav">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ToggleTheme id="theme" store="themeToggle"/>
    </header>

    
  </>
}