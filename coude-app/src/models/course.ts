export class Course{
    _id!: any;
    title!: string;
    category!: any;
    admin_id!: any;
    status!: string;
    time?: string;
    level!: "Intermediate" | "Beginner";
    instructor?: string;
    user_avt?: any;
    instruc_descript!: string;
    languages?: string[];
    learners?: string[];
    fee!: number;
    atc!: string;
    hiw!: string;
    degree: any;
    feedbacks?: [
        user_id: any, 
        rate: number,
        content: string, 
        createdAt: Date
    ];
    lessons!: [
        {_id: any,
        name: string,
        thumbPath: string,
        date: Date}
    ]
    startdate?: Date
}