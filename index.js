function onload() {
    input_nodes = document.getElementsByTagName("input");

    for (var i=0; i < input_nodes.length; i++) {
        if(input_nodes[i].type === "number") {
            input_nodes[i].oninput = inputChange;
        }
    }
}

function inputChange() {

    if(!parseFloat(this.value)){
        return;
    }

    switch(this.id) {
        case "inr_cost" :
            if (usdCost()) {
                setUsdInrExchange(this.value / usdCost());
            }
            break;
        case "usd_cost" :
            if (usdInrExchange()) {
                setInrCost(this.value * usdInrExchange());
            }
            break;
        case "usd_inr_exchange" :
            if (usdCost()) {
                setInrCost(this.value * usdCost());
            }
            break;
        // case "btc_amount":
        //     break;
        // case "eth_amount":
        //     break;
        // case "ltc_amount":
        //     break;
        // case "btc_sell_price":
        //     break;
        // case "eth_sell_price":
        //     break;
        // case "ltc_sell_price":
        //     break;
    }

    if(inrCost()) {
        if (btcAmount() && btcSellPrice()) {
            setBtcProfit();
        }
        if (ethAmount() && ethSellPrice()) {
            setEthProfit();
        }
        if (ltcAmount() && ltcSellPrice()) {
            setLtcProfit();
        }
    }
}

function inrCost(){
    return parseFloat(document.getElementById("inr_cost").value);
}
function usdCost(){
    return parseFloat(document.getElementById("usd_cost").value);
}
function usdInrExchange(){
    return parseFloat(document.getElementById("usd_inr_exchange").value);
}
function btcAmount(){
    return parseFloat(document.getElementById("btc_amount").value);
}
function ethAmount(){
    return parseFloat(document.getElementById("eth_amount").value);
}
function ltcAmount(){
    return parseFloat(document.getElementById("ltc_amount").value);
}
function btcSellPrice(){
    return parseFloat(document.getElementById("btc_sell_price").value);
}
function ethSellPrice(){
    return parseFloat(document.getElementById("eth_sell_price").value);
}
function ltcSellPrice(){
    return parseFloat(document.getElementById("ltc_sell_price").value);
}

function setInrCost(value){
    document.getElementById("inr_cost").value = value;
}
function setUsdCost(value){
    document.getElementById("usd_cost").value = value;
}
function setUsdInrExchange(value){
    document.getElementById("usd_inr_exchange").value = value;
}
function setBtcAmount(value){
    document.getElementById("btc_amount").value = value;
}
function setEthAmount(value){
    document.getElementById("eth_amount").value = value
}
function setLtcAmount(value){
    document.getElementById("ltc_amount").value = value
}
function setBtcSelPrice(value){
    document.getElementById("btc_sell_price").value = value;
}
function setEthSellPrice(value){
    document.getElementById("eth_sell_price").value = value;
}
function setLtcSellPrice(value){
    document.getElementById("ltc_sell_price").value = value;
}

function setBtcProfit(){
    document.getElementById("btc_profit").text = (btcSellPrice() - inrCost()/btcAmount()) * btcAmount() ;
}
function setEthProfit(){
    document.getElementById("eth_profit").text = (ethSellPrice() - inrCost()/ethAmount()) * ethAmount() ;
}
function setLtcProfit(){
    document.getElementById("ltc_profit").text = (ltcSellPrice() - inrCost()/ltcAmount()) * ltcAmount()
}
