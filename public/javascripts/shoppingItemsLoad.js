export function shoppingItemsLoad(obj) {
  let itemDiv = document.createElement("div");
  let shpItems = document.querySelector(".shoppingItems");
  itemDiv.setAttribute("id", "itemDiv");
  shpItems.appendChild(itemDiv);
  itemDiv.innerHTML = `
        <img id="shoePicS" src='${obj[0]}'/s>
        <div>
          <div id="itemNames">
            <h2>${obj[1]}</h2>
            <p class="itmPrice">${obj[2]}</p>
          </div>
          <div id="amountSelect"> 
            <div id="amount">
              <button id="dec">-</button>
              <p id="no">${obj[4]}</p>
              <button id="inc">+</button>
            </div>  
            <select>
              <option>6</option>
              <option>6.5</option>
              <option>7</option>
              <option>7.5</option>
              <option>8</option>
              <option>8.5</option>
              <option>9</option>
              <option>9.5</option>
              <option>10</option>
              <option>10.5</option>
              <option>11</option>
              <option>11.5</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
            </select>
          </div>  
        </div>
        <button id="remove">remove</button>
      `;
  itemDiv.querySelector("select").value = obj[3];
}
