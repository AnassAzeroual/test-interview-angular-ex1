function calculateChange() {
    var prices = document.getElementById("prices").value.split(",");
    var paid = document.getElementById("paid").value;

    var total = 0;
    for (var i = 0; i < prices.length; i++) {
      total += parseFloat(prices[i]);
    }

    var change = paid - total;

    var tens = Math.floor(change / 10);
    change -= tens * 10;
    document.getElementById("tens").innerHTML = tens + " Billets de 10€";

    var fives = Math.floor(change / 5);
    change -= fives * 5;
    document.getElementById("fives").innerHTML = fives + " Billets de 5€";

    var ones = Math.floor(change);
    document.getElementById("ones").innerHTML = ones + " Pièces de 1€";
}