import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){
    return(
        <Popover.Button className='top-5 right-5 absolute dark:text-zinc-100 text-zinc-800 hover:text-secundary transition-colors' title="Fechar formulário de feedback" >
            <X weight="bold" className="w-4 h-4" />
        </Popover.Button>
    )
}