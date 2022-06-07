import sun from '../assets/sun-tt.png'
import moon from '../assets/moon-tt.png'

interface ToggleThemeProps{
    id: string
    store?: string
}

export function ToggleTheme({id,store}:ToggleThemeProps){ 

    function changeThemeLocalStorage(){
        let get = JSON.parse(localStorage.getItem('themeToggle')!)||false
        let store = get == true

        renderTheme(!store)
        localStorage.setItem('themeToggle',JSON.stringify(!store))
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

    return(
        //trocar cores para seguir paleta de cores
        <div className="py-4">
            <label htmlFor={id} className="inline-flex relative items-center cursor-pointer select-none"/* defaultChecked={JSON.parse(localStorage.getItem(store||'')!)||false} onLoad={JSON.parse(localStorage.getItem('themeToggle')!)||false}*/>
                <span className="mx-1"><img src={sun} alt="sun" className='w-5' /></span>
                <input type="checkbox" value="" id={id} className="sr-only peer" onChange={changeThemeLocalStorage} defaultChecked={JSON.parse(localStorage.getItem(store||'')!)||false} />
                <div className="w-11 h-6 bg-brand-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-100 dark:peer-focus:ring-brand-200 rounded-full peer dark:bg-brand-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[30px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-500"></div>
                <span className="mx-1"><img src={moon} alt="moon" className='w-5' /></span>
            </label>
        </div>
    )
}