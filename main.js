let productHolder = document.getElementsByClassName("productHolder");
let orderedItems = document.getElementsByClassName("orderedItems")[0];
let totalPrice = 0;
let totalPriceNode = document.getElementsByClassName("total")[0];
let productClicked = new Array();

//console.log(productHolder[i].children[1]); //product Name
            //  console.log(productHolder[i].children[1].children[0].textContent); //product Name
            // console.log(productHolder[i].children[1].children[1].children[1].textContent); //product Price
            // console.log(productHolder[i].children[1].children[4].textContent); //product ID

for (let i = 0; i < productHolder.length; i++) {
    productHolder[i].addEventListener("click", function () {

        if (productClicked[i] !== true) {
            let itemHolder = document.createElement("div");
            itemHolder.className = "itemHolder";

                    //console.log(productHolder[i].children[1]); //product 
                    //  console.log(productHolder[i].children[1].children[0].textContent); //product Name
                    // console.log(productHolder[i].children[1].children[1].children[1].textContent); //product Price
                    // console.log(productHolder[i].children[1].children[4].textContent); //product ID

            let productName = document.createElement("h6");
            productName.className = "itemName";
            productName.innerHTML = productHolder[i].children[1].children[0].textContent;

            // let productID = document.createElement("h6");
            // productID.setAttribute("style", "display:none;");
            // productID.innerHTML = productHolder[i].children[1].children[4].textContent;

            let productPrice = document.createElement("h6");
            productPrice.className = "itemPrice";
            productPrice.innerHTML = productHolder[i].children[1].children[1].children[1].textContent;

            let plusBtn = document.createElement("button");
            plusBtn.innerHTML = "+";
            plusBtn.className = "plusitm";
            plusBtn.setAttribute("type", "button");

            let productQuantity = document.createElement("h6");
            productQuantity.className = "itemQuantity";
            productQuantity.innerHTML = 1;

            let minusBtn = document.createElement("button");
            minusBtn.setAttribute("type", "button");
            minusBtn.className = "minsitm";
            minusBtn.innerHTML = "-";

            let removeBtn = document.createElement("button");
            removeBtn.setAttribute("type", "button");
            removeBtn.className = "removeitm";
            removeBtn.innerHTML = "X";

            let hr = document.createElement("hr");  //contents
            hr.setAttribute("style", "display:contents;");

            itemHolder.appendChild(productName);
            
            itemHolder.appendChild(plusBtn);
            itemHolder.appendChild(productQuantity);
            itemHolder.appendChild(minusBtn);
            itemHolder.appendChild(productPrice);
            itemHolder.appendChild(removeBtn);

            itemHolder.appendChild(hr);
            // itemHolder.appendChild(productID);
            orderedItems.appendChild(itemHolder);
            productClicked[i] = true;

            plusBtn.addEventListener("click", function () {
                let itemQuantity = parseInt(productQuantity.innerHTML, 10);
                itemQuantity += 1;
                if (itemQuantity > 10) {
                    productQuantity.innerHTML = "10";
                    alert("You Cannot Order More Than 10 Cups");
                }
                else {
                    let itemPrice = parseFloat(productHolder[i].children[1].children[1].children[1].textContent);
                    totalPrice += itemPrice;
                    totalPriceNode.innerHTML = totalPrice;
                    itemPrice += parseFloat(productPrice.innerHTML);
                    productPrice.innerHTML = itemPrice;
                    productQuantity.innerHTML = itemQuantity;
                }
            });

            minusBtn.addEventListener("click", function () {
                let itemQuantity = parseInt(productQuantity.innerHTML, 10);
                itemQuantity -= 1;
                if (itemQuantity < 1) {
                    productQuantity.innerHTML = "1";
                    alert("You Cannot Order Less Than 1 Cups");
                }
                else {
                    let itemPrice = parseFloat(productHolder[i].children[1].children[1].children[1].textContent);
                    totalPrice -= itemPrice;
                    totalPriceNode.innerHTML = totalPrice;
                    itemPrice = parseFloat(productPrice.innerHTML) - itemPrice;
                    productPrice.innerHTML = itemPrice;
                    productQuantity.innerHTML = itemQuantity;
                }
            });

            removeBtn.addEventListener("click", function () {
                totalPrice -= (parseFloat(productPrice.innerHTML));
                totalPriceNode.innerHTML = totalPrice;
                productClicked[i] = false;
                orderedItems.removeChild(itemHolder);
            });
            totalPrice += parseFloat(productPrice.innerHTML) * parseInt(productQuantity.innerHTML);
            totalPriceNode.innerHTML = totalPrice;
        }
        else {
            alert("You Already Added this Item!");
        }

    });
}