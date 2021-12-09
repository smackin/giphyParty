
const form = document.querySelector("#giphyForm"); 
const searchBar = document.querySelector("#searchBar"); 
const searchBtn = document.querySelector("#searchButton"); 
const deleteBtn = document.querySelector("#deleteButton"); 
const canvas = document.querySelector("#giphyCanvas");
const token = "3eCGl81JpKBAiSF1mKwAcCDzKkZvLstt"; 

// console.log(form);

form.addEventListener('submit', async function(e){
    e.preventDefault(); 
     const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: { 
            q: searchBar.value, 
            api_key: token,
            }
        });

        let giphyArr = response.data.data.length; 
        let random = Math.floor(Math.random() * giphyArr)
        let newRow = document.createElement("DIV");
            newRow.classList.add('col-6'); 
            canvas.append(newRow); 

        let giphImg = document.createElement('img'); 
        giphImg.src = response.data.data[`${random}`].images.original.url; 
        giphImg.classList.add('created');
        searchBar.value= '';
        newRow.append(giphImg);
         })

        deleteBtn.addEventListener('click', function(e){
            //let remove = document.getElementsByClassName('#created')
            canvas.innerHTML = ''; 
            
        })
