import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "./Loading";


interface ScreenshotButtonProps{
    screenshot:string|null;
    onScreenshotTook: (screenshot:string|null)=>void
}

export function ScreenshotButton({ onScreenshotTook, screenshot }:ScreenshotButtonProps){

    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64 = canvas.toDataURL('image/png')

        onScreenshotTook(base64)

        setIsTakingScreenshot(false)
    }

    if(screenshot){
        return(
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end dark:text-zinc-400 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
                style={{
                    backgroundImage: `url(${screenshot})`,

                    //há de remover as duas linhas considerando que não há conteúdo suficiente no site para preview
                    backgroundPosition: 'right bottom', 
                    backgroundSize:180,
                }}
                onClick={()=>onScreenshotTook(null)}
            >
                <Trash weight="fill" />
            </button>
        )
    }

    return(
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 dark:bg-zinc-800 bg-zinc-100 rounded-md border-transparent hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
            {isTakingScreenshot?<Loading/>:<Camera className="w-6 h-6 dark:text-zinc-100 text-zinc-800"/>}
        </button>
    )
}