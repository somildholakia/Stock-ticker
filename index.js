import getStockData from "./StockAPI.js"

setInterval(function () {
    const stockData = getStockData()
    renderStrockTicker(stockData)
}, 1500)


let previousPrice = null

function renderStrockTicker(stockData) {

    const stockDisplayName = document.getElementById("name")
    const stockDisplaySymbol = document.getElementById("symbol")
    const stockDisplayPrice = document.getElementById("price")
    const stockDisplayPriceIcon = document.getElementById("price-icon")
    const stockDisplayTime = document.getElementById("time")

    

    const { name, sym, price, time } = stockData
    const priceIcon = document.createElement("span")

    stockDisplayPriceIcon.innerHTML =""

    if(price > previousPrice){
        priceIcon.textContent = "priceTrend:" + "⬆️"
    } else if(previousPrice > price){
        priceIcon.textContent = "priceTrend:" + "⬇️"
    }else {
        priceIcon.textContent = "priceTrend:" + "➖"
    }
    stockDisplayName.textContent = "Name: " + name
    stockDisplaySymbol.textContent = "Symbol: " + sym
    stockDisplayPrice.textContent = "Price: " + price
    stockDisplayPriceIcon.appendChild(priceIcon)   
    stockDisplayTime.textContent = "Time: " + time
    
    previousPrice = price
}

