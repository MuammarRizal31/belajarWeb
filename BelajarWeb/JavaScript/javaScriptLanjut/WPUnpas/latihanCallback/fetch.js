// apa itu fetch ? Fetch itu adalah api pada javascript modern yang tugas nya untuk mengambil data secara asyncronous atau ajax

    //INI MENGGUNAKAN JQUERY
// $('.search-button').on('click',function(){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=41d03a10&s='+ $('.input-keyword').val(),
//         success : result => {
//             const movie = result.Search;
//             let cards = '';
//             movie.forEach(m => {
//                 cards += showCards(m);
//             }); 
//             $('.vidio').html(cards);
    
//             //ketika tombol detail diclick
//             $('.modal-detail-button').on('click',function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=41d03a10&i='+$(this).data('imdbid'),
//                     success: m => {
//                         console.log(m)          
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText)
//                     }
//                 })
//             })
//         },
//         error:  error =>{
//             //jika error
//             console.log(error.responseText)
//         }
//     })
// });

    //INI MENGGUNAKAN VANILLA JAVASCRIPT
//fetch
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click',function(){
    const inputKeyword = document.querySelector(".input-keyword");
    fetch("http://www.omdbapi.com/?apikey=41d03a10&s="+inputKeyword.value)
    .then(response => response.json())
    .then(response => {
        const movies = response.Search;
        let cards = '';
        movies.forEach(m => cards += showCards(m)); 
        const movieContainer = document.querySelector('.vidio');
        movieContainer.innerHTML = cards;   
    })
});

//ketika tombol di klick
const tombolClick = document.querySelectorAll('.btn-close');
tombolClick.forEach(m => {
    m.addEventListener('click',function(){
        console.log(this)
    })
})


function showCards(m){
    return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
          <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show detail</a>
        </div>
    </div>
</div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                <li class="list-group-item"><strong>Directors : </strong>${m.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong> <br>${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}