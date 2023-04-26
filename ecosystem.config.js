module.exports = {
    apps: [
        {
            name: 'Atlantica',
            port: '3001',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}