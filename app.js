// console.log("here we go");

// const form = document.querySelector("#giphyForm"); 
// const inputData = document.querySelector("#inputText"); 
// const searchBtn = document.querySelector("#searchButton"); 
// const deleteBtn = document.querySelector("#deleteButton"); 
// const canvas = document.querySelector("#giphyCanvas");

// console.log(form);


// form.addEventListener('submit', function(e){
//     e.preventDefault(); 


async function getGiphy(){
const response = await axios.get("http://https://api.giphy.com/v1/gifs/search", {
    params: { 
        q: searchTerm,
        api_key: 3eCGl81JpKBAiSF1mKwAcCDzKkZvLstt,
    }
},
    console.log(results)
)