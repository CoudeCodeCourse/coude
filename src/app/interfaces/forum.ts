export interface ITopic {
    _id: number,
    name: string,
    price: number,
    tag: string,
    user_id: number,
    user_name: string,
    user_avt: "blue_man.png",
    replies: number,
    views: number,
    likes: number,
    date: any,
    marked: boolean,
    title: string,
    content: string,
    reply: [{
        reply_content: string,
        user_name: string,
        user_avt: "blue_man.png"
    }]
}