const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const changedNames=users.map(user => {
    //if ((user.name[0] === "A") || (user.name[0] === "a")){
    if (user.name[0].toLowerCase() === "a"){
        user.name="Anacleto";
    }
    return user.name

})
console.log(changedNames);