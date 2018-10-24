import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://gphost:4466/default/default',
})

export { prisma as default }

// prisma.query, prisma.mutation, prisma.subscription, prisma.exists
 
// createPostForUser("cjnjtytwn000g0973b4i4pb62", { 
//     title: "New books from gugu",
//     body: "You guys should get gugu's book",
//     published: true
//  }).then((user) => {
//      console.log(JSON.stringify(user, undefined, 4))
//  }).catch((error) => {
//      console.log(error.message)
//  })

// const updatePostForUser = async (postId, data) => {
//     const postExist = await prisma.exists.Post({id: postId})
//     if(!postExist) {
//         throw new Error('Post not found')
//     }

//     const post = await prisma.mutation.updatePost({
//         where: {
//             id: postId
//         },
//         data
//     }, '{ author { id name email posts { id title body published } } }')
    
//     return post
// }

// updatePostForUser("cjnjwzegn00100969zkxgntqfs", {
//     title: "GpCoders Books",
//     body: "This is the best book for javascript developments",
//     published: false
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 4))
// }).catch((error) => {
//     console.log(error.message)
// })




// prisma.query.comments(null,  '{ id text author { id name } }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 8))
// })

// prisma.mutation.createUser({
//     data: {
//         name: "Sam Bhatti",
//         email: "sam@gmail.com",
//         age: 29
//     }
// }, '{ id name email }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 4))
// })


// prisma.mutation.updatePost({
//     where: {
//         id: "cjnju3dg2000p0973x1hg48dq"
//     },
//     data: {
//         body: "This update is done by mutation",
//         published: true
//     }
// }, '{ id }').then((data) => {
//     return prisma.query.posts(null, '{ id title body published }')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 5))
// })