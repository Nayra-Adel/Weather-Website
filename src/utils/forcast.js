const request = require('request')

const forcast = (latitude, longitude, callback) => {

    const url  = 'http://api.weatherstack.com/current?access_key=5f16d0461214040cb4ebe31750bc6ca9&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json:true }, (error, { body } = {}) => {

        if(error) {
            callback("Unable to connect to weather service!", undefined)
        }else if (body.error) {
            callback("Please specify a valid location identifier using the query parameter.", undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + ", It's currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out")
        }
    })
}

module.exports = forcast