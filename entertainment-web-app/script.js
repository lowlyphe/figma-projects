const fs = require('fs')

const $trendingContainer = $('.trending-container')
const $trending = $('.trending')

$(document).ready(() => {
    $trendingContainer.empty()
    fs.readFile('data.json', 'utf-8', (data) => {
        console.log(JSON.parse(data))
    })
})

