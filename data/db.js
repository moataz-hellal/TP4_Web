export const db = {
    students : [
        {
            id: 1,
            name: 'Amélie',
            age: 21,
            gender: "F",
            classroom: 1
        },
        {
            id: 2,
            name: 'Bruno',
            age: 20,
            gender: "M",
            classroom: 2
        },
        {
            id: 3,
            name: 'Marco',
            age: 22,
            gender: "M",
            classroom: 3
        },
        {
            id: 4,
            name: 'Sasha',
            age: 22,
            gender: "F",
            classroom: 2
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL1'
        },{
            id: 2,
            designation: 'GL2'
        },{
            id: 3,
            designation: 'GL3'
        },
    ],
    todos : [
        {
            id: "1",
            name:"name1",
            content:"content1",
            status : "WAITING",
            user: "2"
        },
        {
            id: "2",
            name:"name2",
            content:"content2",
            status : "WAITING",
            user : "1"
        },
        {
            id: "3",
            name:"name3",
            content:"content3",
            status : "IN_PROGRESS",
            user: "1"
        }
    ],
    users : [
        {
            id: "1",
            name: "Marco",
            email: "Marcovicii@gmail.com",
            todos: ["1","2"]
        },
        {
            id: "2",
            name: "Sasha",
            email: "Sasha@yahoo.com",
            todos: ["1"]
        }
    ]
}
