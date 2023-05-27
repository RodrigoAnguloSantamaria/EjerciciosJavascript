// FUNCTION TO DO THE QUERY AN URL

const query = async()=>{
    const call= await fetch("http://localhost:3000/movies");
    const myJson = await call.json();
    return myJson
}

const movies = async ()=>{
    // CALL TO QUERY TO OBTAIN DATA
    const moviesData= await query();

    // LOOP THE DATA TO PRINT EACH ONE
    moviesData.forEach(movie => {
        // SECTION NODE ACTS AS CONTAINER OF EACH MOVIE
        const section$$=document.createElement("section");
        section$$.style="border:1px solid gray; margin:10px;width:90%;padding:10px"
        section$$.innerHTML=`<h3>TITULO: ${movie.title}</h3>
        <h5>DESCRIPTION: ${movie.description}</h5>
        <h6>DATE: ${movie.date}</h6>
        <img src="./public/${movie.img}" style="width:150px;height:150px">
        <br>
        <h6>RATING: ${movie.rating}</h6>`;

        // CREATE BUTTON TO DELETE ITEM
        const deleteButton$$=document.createElement("button");
        deleteButton$$.textContent="BORRAR";
        // EVENT CLICK IN BUTTON PASSES PARENT NODE SECTION$$ FOR REMOVE
        deleteButton$$.addEventListener("click",function(){removeSection(section$$)});
        section$$.appendChild(deleteButton$$);
        // ADD EACH SECTION CONTAINER TO THE BODY 
        document.body.appendChild(section$$);
    });

    // DELETE FUNCTION
    const removeSection=(section$$)=>{
        section$$.remove();
    }

}
// STARTS THE APP
movies();