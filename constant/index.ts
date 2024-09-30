

export interface devsDataType {
    title : string,
    name : string,
    ability : string[],
    description : string,
    img : string
}

export const devsData : devsDataType[] = [
    {
        title : 'engineer',
        name : 'Amirali shadi',
        ability : ['back-end' , 'devops' , 'network & security'],
        description : 'project manager of Pishgaman',
        img : "/images/shadi.jpg"
    },
    {
        title : 'developer',
        name : 'Hamed khosravi',
        ability : ['back-end'],
        description : 'back-end developer of Achareh',
        img : "/images/hamed.jpg"
    },
    {
        title : 'developer',
        name : 'Amir moslemi',
        ability : ['front-end'],
        description : 'technical coordination of Pishgaman',
        img : "/images/khodam.jpg"
    }
]