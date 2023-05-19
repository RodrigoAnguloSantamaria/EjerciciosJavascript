const allItems$$ = document.querySelectorAll(".fn-remove-me");
for (let index = 0; index < allItems$$.length; index++) {
    const element = allItems$$[index];
    element.remove();
    
}
console.log(allItems$$)