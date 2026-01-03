import getStockData from "./StockAPI.js"

setInterval(function () {
    const stockData = getStockData()
    renderStrockTicker(stockData)
}, 1500)




function renderStrockTicker(stockData) {

    const stockDisplayName = document.getElementById("name")
    const stockDisplaySymbol = document.getElementById("symbol")
    const stockDisplayPrice = document.getElementById("price")
    // const stockDisplayPriceIcon = document.getAnimations("price-icon")
    const stockDisplayTime = document.getElementById("price-icon")

    const { name, sym, price, time } = stockData

    stockDisplayName.textContent = name
    stockDisplaySymbol.textContent = sym
    stockDisplayPrice.textContent = price
    // stockDisplayPriceIcon =
    stockDisplayTime.textContent = time
    

}

