DESCRIPTION:
// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

//prep
//parameter - mpg 
//return - the kpl or kilometers per liter based on mpg entered
//example - (converter(10), 3.54)


  function converter (mpg) {
    // 1 Mile = 1.609344 kilometres
    // 1 Imperial Gallon = 4.54609188 litres
    // 1 mpg = 1km / litr = 1.609344 / 4.54609188;
    return +(mpg * (1.609344 / 4.54609188)).toFixed(2);
  }