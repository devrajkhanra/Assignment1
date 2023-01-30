/* 
dependencies 
*/
// destructring required functions from helper object
const { fetchUrl, splitData, countWords, topFrequentWords } = require('./lib/helper')

/*
url
*/
const API_URL = 'http://norvig.com/big.txt'


const execHelpers = async () => {
    const data = await fetchUrl(API_URL)
    const splitWords = splitData(data)
    const wordFrequency = countWords(splitWords)
    const topFrequency = topFrequentWords(wordFrequency)

    /* 
    display as json objects from an array
    */
    const newArray = []
    for (const [key, value] of topFrequency) {
        newArray.push(Object.assign({ 'word': key, 'count': value })) // create JSON objects from Array and push every object to the newArray
    }

    console.log(newArray)
}

execHelpers()