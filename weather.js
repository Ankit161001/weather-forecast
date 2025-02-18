//Complete the Weather API Backend part using openweathermap api
let city = 'Rourkela'
async function fetchWeather() {
    try {
        let city = document.getElementById('text').value
        let res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=8413513bd38dc8bb492337423fc92def')
        // console.log(res.json())
        let res2 = await res.json()
        console.log(res2)
        console.log(res2.name)
        console.log(res2.sys.country)
        console.log(res2.main.temp)
        console.log(res2.main.temp_max)
        console.log(res2.main.temp_min)
        console.log(res2.weather[0].description)
        let city_long = res2.name + ', ' + res2.sys.country
        document.getElementById('city').innerText = city_long
        let temp = (res2.main.temp - 273.15).toFixed(2)
        document.getElementById('temp').innerText = temp + '°c'
        let weather = res2.weather[0].description
        document.getElementById('weather').innerText = weather
        let hilow = (res2.main.temp_max - 273.15).toFixed(2) + '°c' + ' / ' + (res2.main.temp_min - 273.15).toFixed(2) + '°c'
        document.getElementById('hi-low').innerText = hilow

        var currentdate = new Date();
        console.log(currentdate.getDate())
        console.log(currentdate.getMonth())
        console.log(currentdate.getFullYear())

        let date = currentdate.getDate()
        let month = currentdate.getMonth()
        let year = currentdate.getFullYear()

        let month2 = ''
        if (month === 1) {month2 = 'January'}
        if (month === 2) {month2 = 'February'}
        if (month === 3) {month2 = 'March'}
        if (month === 4) {month2 = 'April'}
        if (month === 5) {month2 = 'May'}
        if (month === 6) {month2 = 'June'}
        if (month === 7) {month2 = 'July'}
        if (month === 8) {month2 = 'August'}
        if (month === 9) {month2 = 'September'}
        if (month === 10) {month2 = 'October'}
        if (month === 11) {month2 = 'November'}
        if (month === 12) {month2 = 'December'}

        let newdate = date + ' ' + month2 + ', ' + year
        document.getElementById('date').innerText = newdate

    } catch (error) {
        
    }
}
// fetchWeather()