import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
    return jwt.sign({ userId: userId}, 'myscrent', { expiresIn: '10 minutes' })
}

export { generateToken as default }