/* 
dependencies
*/
const axios = require('axios');

// container
const helpers = {}

/* 
fetch data from url
required data: url
return: response data from url
*/
helpers.fetchUrl = async (url) => {
    try {
        // get response
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


/* 
split words from the array, count occurences, sort the data, splice the data
required data: response data from url
return: splitData
*/
helpers.splitData = (responseDataArray) => {
    // Split the document into an array of words
    const words = responseDataArray.toLowerCase().split(/\W+/) // convert every letter to lowercase and split every word
    return words
}


/* 
frequency of each word,
required data: splitData, i.e; array of words
return: frequency
*/
helpers.countWords = (wordArray) => {
    /*
    frequency of each word in the array
    store it in frequency object
    */
    const frequency = {}
    wordArray.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1 // add frequency of every word in frequency object
    })
    return frequency
}


/* 
sort the data, splice the data
required data: frequency, i.e; countWords Object
return: topData
*/
helpers.topFrequentWords = (frequencyArray) => {
    const topData = Object.entries(frequencyArray) // returns an array with keys and values
        .sort((a, b) => b[1] - a[1]) // sort the array where second item is greater than the first item
        .slice(0, 10) // slicing top 10 records from the array
    return topData
}

module.exports = helpers
