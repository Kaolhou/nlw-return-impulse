import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackServiceRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService{

    constructor(
        private feedbacksRepository:FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ){}

    async execute(request: SubmitFeedbackServiceRequest){
        const { type, comment, screenshot } = request  
        
        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format.')
        }
        if(!type) throw new Error('type cannot be empty')
        if(!comment) throw new Error('comment cannot be empty')


        await this.feedbacksRepository.create({
            type, comment, screenshot
        })

        await this.mailAdapter.sendMail({
            subject: type,
            body:[
                '<div style="font-family: Arial, sans-serif; color: #111;">',
                `<p>Tipo do Feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" />` : ``,
                '</div>'
            ].join('')
        })
    }
}