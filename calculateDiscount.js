
function calculateDiscount(price, member) {
    if (member) {
        return price * 0.9;
    }

    return price;
}

module.exports = calculateDiscount;
