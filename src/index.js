module.exports = function toReadable (number) {
   
    const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 

    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; 

    const getLowerThan20 = (n) => a[Number(n)];  
    const getGreaterThan20 = (n) => b[n[0]] + ' ' + a[n[1]]; 

    const num = Number(number); 
    if (isNaN(num)) return ''; 
    if (num === 0) return 'zero'; 

    const numStr = num.toString(); 

    if (num < 20) {
        return a[num];
    }

    if (numStr.length === 2) {
        if (numStr[1] == 0) {
            return b[numStr[0]];
        }
        return (b[numStr[0]] + ' ' + a[numStr[1]]);
    }

    if (numStr.length === 3) {
        if (numStr[1] == 0 && numStr[2] == 0) {
            return (a[numStr[0]] + ' hundred');
        } else if (Number(numStr[1] + numStr[2]) < 20) {
            let c = Number(numStr[1] + numStr[2]);
            return (a[numStr[0]] + ' hundred ' + a[c]);
        } else  if (numStr[2] == 0) { 
            return (a[numStr[0]] + ' hundred ' + b[numStr[1]]);
        } else {
            return (a[numStr[0]] + ' hundred ' + b[numStr[1]] + ' ' + a[numStr[2]]);
        }
    }
}