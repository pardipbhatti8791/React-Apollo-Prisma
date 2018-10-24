const users = [
    {
        id: 33,
        name: 'Gagan',
        email: 'gugu@gmail.com',
        age: 25
    },
    {
        id: 23,
        name: 'Pardip',
        email: 'pardip@gmail.com'
    },
    {
        id: 32,
        name: 'Sam',
        email: 'sam@gmail.com'
    }
]

const posts = [
    {
        id: 1,
        title: 'Hello World',
        body: 'Hi, this is hello world post from gagan',
        published: true,
        author: 33
    },
    {
        id: 2,
        title: 'My first post',
        body: 'Hi, Redux is global state management',
        published: false,
        author: 23
    }
]

const comments = [
    {
        id: 51,
        text: 'Very helpful post',
        author: 33,
        post: 1
    },
    {
        id: 52,
        text: 'I really like the concept',
        author: 1,
        post: 23
    },
    {
        id: 53,
        text: 'There some errors',
        author: 23,
        post: 2
    },
    {
        id: 54,
        text: 'I got it worked',
        author: 32,
        post: 2
    }
]

const db = {
    users,
    posts,
    comments
}

export { db as default }