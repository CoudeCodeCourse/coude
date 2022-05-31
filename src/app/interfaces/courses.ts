export interface ICatalog{
    title: String,
    category: String,
    admin_id: String,
    status: String, 
    time: String,
    level: String,
    instructor: String,
    user_avt: String,
    instruc_descript: String,
    language: [String],
    learners: [],
    fee: Number,
    atc: String,
    hiw: String,
    degree: String,
    feedbacks: [
        {
        user_id: String,
        rate: Number,
        content: String, 
        createdAt: Date}
    ],
    start_date: Date,
    createdAt: Date,
    updatedAt: Date
}