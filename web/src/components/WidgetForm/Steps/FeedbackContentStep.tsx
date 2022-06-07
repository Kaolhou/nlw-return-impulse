import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { feedbackType, feedbackTypes } from ".."
import { api } from "../../../lib/api"
import { CloseButton } from "../../CloseButton"
import { Loading } from "../Loading"
import { ScreenshotButton } from "../ScreenshotButton"


interface feedbackTypeProps{
    feedbackType: feedbackType
    onFeedbackRestarted: ()=>void
    onFeedbackSent:()=>void
}

export function FeedbackContentStep({feedbackType, onFeedbackRestarted, onFeedbackSent}:feedbackTypeProps){

    const [screenshot,setScreenshot] = useState<string|null>(null)
    const [comment, setComment] = useState('')
    const [isSendingFeedback,setIsSendingFeedback] = useState(false)

    function handleSubmitFeedback(e:FormEvent){
        e.preventDefault()

        setIsSendingFeedback(true)

        api.post('/feedbacks',{
            type:feedbackType,
            comment,
            screenshot
        }).then(()=>{
            onFeedbackSent()
            setIsSendingFeedback(false)
        })

        
    }

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return(
        <>
            <header>
                    <button 
                        className="top-5 left-5 absolute dark:text-zinc-100 text-zinc-800 hover:text-secundary transition-colors"
                        onClick={onFeedbackRestarted}
                    >
                        <ArrowLeft weight="bold" className="w-4 h-4" />
                    </button>

                    <span className="text-xl leading-6 flex items-center gap-2 select-none">
                        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6 mx-auto" />
                        {feedbackTypeInfo.title}
                    </span>
                    <CloseButton />
            </header>

            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm dark:placeholder-zinc-400 placeholder-zinc-500 text-zinc-800 dark:text-zinc-100 dark:border-zinc-600 border-zinc-300 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={ e => setComment(e.target.value) }
                />
                <footer className="flex gap-2 mt-2">

                    <ScreenshotButton 
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    
                    <button
                        type="submit"
                        disabled={comment.length===0 || isSendingFeedback}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 focus:ring-brand-500 transition-all disabled:opacity-50 disabled:hover:bg-brand-500 text-white"
                    >
                        { isSendingFeedback ? <Loading /> : 'Enviar Feedback' }
                    </button>
                </footer>
            </form>

            
        </>
    )
}