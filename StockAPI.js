const now = new Date();
const hours = now.getHours();         
const minutes = now.getMinutes();       
const seconds = now.getSeconds();  

function updatePrice(){
   setInterval(1500,(Math.random() * 3).toFixed(2)) 
}

function getStockData(){
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: updatePrice(),
        time: Date(`${hours} / ${minutes} / ${seconds}`)
    }
}