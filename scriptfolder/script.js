const BASE_URL = `https://api.noroff.dev/api/v1`
const ALL_ENDPOINT = `/square-eyes`
const product_grid = document.querySelector(".product_grid")

async function fetchData() {
    const response = await fetch(BASE_URL + ALL_ENDPOINT);
    
    const data = await response.json()
    console.log({data})
    return data;
 
}

fetchData()




async function renderMovieHTML() {

    const product_list = await fetchData();
    console.log({product_list})
    product_grid.innerHTML = "";
    product_list.forEach(function(element,index) {
    product_grid.innerHTML += `
                                    <a href=><img src=${element.image}></a>   
                                    <div class="card__content">
                                    <h2 class="card__title">${element.title}</h2>
                                    <p class="card__price">${element.price}</p> 
                                    <p class="card_description">${element.genre}</p>
                                    </div>   
                                </div> `;


    })

    
}
    
renderMovieHTML() 

