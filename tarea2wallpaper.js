function wallpaper(l, w, h) {

    let roll = (10 * 0.52);

    let h2 = (h * 0.15) + h;

    let area = 2 *((l*h2) + (w*h2));

    let r = Math.ceil(area/roll); 

    let numeros = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

    if (r > 0 && r < 21) { 

    return numeros[r-1]; 

    } 
    
        else if (r === 0) {

            return "zero";

    } 
    
        else { 
            return r;
    }
  }
  console.log (wallpaper(4, 3.5, 3))