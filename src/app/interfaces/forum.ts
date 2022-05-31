export interface ITopic {
    tag: string,
    title: string,
    content: string,
    user_id: any,
    user_name: string,
    user_avt: any,
    replies: number,
    views: number,
    likes: number,
    createdAt: Date,
    updatedAt: Date,
    marked: boolean,
    reply: [{
        reply_content: string,
        user_name: string,
        user_avt: string,
        likes: number,
    }]
}