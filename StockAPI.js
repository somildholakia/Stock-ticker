const now = new Date();
const hours = now.getHours();         
const minutes = now.getMinutes();       
const seconds = now.getSeconds();  

function getStockData(){
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        time: Date(`${hours} / ${minutes} / ${seconds}`)
    }
}