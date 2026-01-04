import getStockData from "./StockAPI"

setInterval(function () {
    const stockData = getStockData
    stockTicker(stockData)
}, 1500)


function stockTicker(stockData) {
    const documentName = document.getElementById("name")
    const documentSymbol = document.getElementById("sym")
    const documentPrice = document.getElementById("price")
    // const documentPrice_icon = document.getElementById("price-icon")
    const documentTime = document.getElementById("time")

    const {name,sym,price,time} = stockData

    documentName.textContent = name 
    documentSymbol.textContent = sym
    documentPrice.textContent = price
    documentTime.textContent = time

}