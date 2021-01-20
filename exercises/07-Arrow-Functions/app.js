const rapid = (str) => {
    capitalizedConso = []
    for (char of str)
        if (!char.match(/[aeiou]/gi))
            capitalizedConso.push(char.toUpperCase());
    return capitalizedConso.join("");
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));