function countShow(){
    const cat = document.querySelectorAll("li.item")
    console.log("Number of categories: " + cat.length)

    cat.forEach(category => {
        console.log("Category: " + category.querySelector("h2").textContent)
        console.log("Elements: " + category.querySelectorAll("li").length)
    }) 
};
countShow();
