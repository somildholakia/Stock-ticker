import { getStockData as stockData } from "./StockAPI"; 


const stockDisplayName = document.getElementById("name")
const stockDisplaySymbol = document.getElementById("symbol")
const stockDisplayPrice = document.getElementById("price")
// const stockDisplayPriceIcon = document.getAnimations("price-icon")
const stockDisplayTime = document.getElementById("price-icon")



function renderStrockTicker(stockData) {

    stockDisplayName = stockData.name
    stockDisplaySymbol = stockData.sym
    stockDisplayPrice = stockData.price 
    // stockDisplayPriceIcon =
    stockDisplayTime = stockData.time 

}

const call = setInterval(renderStrockTicker,3000)

console.log(call)