module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10)
        return units[number];
    else if (number < 20)
        return teens[number - 10];
    else if (number < 100)
        return tens[Math.floor(number / 10)] + (number % 10 ? ' ' + units[number % 10] : '');
    else if (number < 1000)
        return units[Math.floor(number / 100)] + ' hundred' + (number % 100 ? ' ' + toReadable(number % 100) : '');
    else 
        return 'Number out of range';
}
