const config = require('../config/config.js')
const connector = require('../config/gdrive.js')

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = config

module.exports = async (req, res) => {
    try {
        const { refreshToken } = await connector(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

        await refreshToken()

        return res.send({
            status: 200,
            message: 'success renew token'
        })

    } catch (err) {
        console.error(err.message)
        return res.send({
            status: 404,
            message: 'Server Failed',
            info: 'token not found'
        })
    }
}