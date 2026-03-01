const searchBox = document.getElementById('search-box');
const filterbuttons = document.querySelectorAll('.filter-btn');
const recipeCards = document.querySelectorAll('.recipe-card'); 

function searchRecipes(){

    const searchquery = searchBox.value.toLowerCase();

    recipeCards.forEach(function(card) {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.recipe-description').textContent.toLowerCase();

        if (title.includes(searchquery) || description.includes(searchquery)){
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';

        }
    });
}

function filterRecipes(category){
    recipeCards.forEach(function(card){

        const recipeCategory = card.querySelector('.recipe-category').textContent;

        if (category === 'All' ){
            card.style.display = 'block';
        }
        else if ( recipeCategory === category ) {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
    });
}

filterbuttons.forEach(function(button){
    button.addEventListener('click', function(){
        filterbuttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const category = this.getAttribute('data-category')|| this.textContent;
        filterRecipes(category);
    });
});











