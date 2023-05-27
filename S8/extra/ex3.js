const query=async(url)=>{
    const call = await fetch(url);
    const myJson = await call.json();
    return myJson;
}

const ordersList = async ()=>{
    const ordersData = await query("http://localhost:3000/orders");
    const productsData = await query("http://localhost:3000/products");
    const ordersSorted = ordersData.sort((a,b)=>new Date(a.date) - new Date(b.date));
    //console.log(ordersSorted);
    ordersSorted.forEach(order => {
        const container$$ = document.createElement("div");
        container$$.style="border:1px solid gray;margin:20px;padding:10px";
        container$$.innerHTML=`<h3>Fecha: ${order.date}</h3>`;
        //console.log(order.date)
        order.products.forEach(product=>{
            
    
            //  ------------------------------------------------------
            //       THIS FOR RETURNS THE NAME OF THE PRODUCT  
            //     TO MY VARIABLE PRODUCTNAME
            //  ------------------------------------------------------
            let productName = "";
            for (let index =0; index<productsData.length; index++){
                //console.log(productsData[index].id)
                if (productsData[index].id === product.productId){
                    productName=productsData[index].name;
                }
            }


            //  ------------------------------------------------------
            //       THIS FILTER FUNCTION RETURNS THE ARRAY WHERE
            //   THE IF CONDITIONAL APPLIES, SO LATER PRODUCTNAME VARIABLE
            //   HAS TO BE USED AS AN ARRAY TO GET THE NAME OF
            //                   THE PRODUCT
            //  ------------------------------------------------------
            // const productName= productsData.filter(productData=>{
            //     if (productData.id === product.productId){
            //         //console.log(productData.name)
            //         return productData.name;
            //     }
            // })
            //console.log(productName[0].name)


            
            const orderItem$$=document.createElement("p");
            orderItem$$.innerHTML=`Cantidad: ${product.quantity}  |
            Articulo: ${productName}`;
            container$$.appendChild(orderItem$$);
        })
        document.body.appendChild(container$$);
    })
};
    
   
    // const orderDate=document.createElement("")



ordersList();