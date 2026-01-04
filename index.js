import getStockData from "./StockAPI"

setInterval(function(){
    const stockdata = getStockData
    StockTicker(stockdata)
})


function StockTicker(stockdata){
    const name = document.getElementById("name")
    const symbol = document.getElementById("sym")
    const price = document.getElementById("price")
    const price_icon = document.getElementById("price-icon")
    const time = document.getElementById("time")
}