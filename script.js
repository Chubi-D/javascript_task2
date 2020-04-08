//array of object called data

let data= [
  {principal: 2500, time: 1.8},
  {principal:1000, time:5},
  {principal: 3000, time: 1},
  {principal: 2000, time: 3}
];

console.log(data);

/*console.log(Object.keys(data));*/

//function called interestCalculator that takes array as an argument

function interestCalculator(x){
  interestData = [];
  for(i=0; i<x.length ;i++) {
    //condition to determine if the rate is 3
    if (x[i].principal >= 2500 && x[i].time > 1 && x[i].time < 3){
      x[i].rate= 3;
    }
    // condition to determine if the rate is 4
    else if( x[i].principal >= 2500 && x[i].time >=3){
      x[i].rate= 4;
    }
    // condition to determine if the rate is 2
    else if (x[i].principal <2000 || x[i].time<= 1){
      x[i].rate = 2;
    }
    // condition to determine if the rate 1
    else {
      x[i].rate= 1;
    }
    x[i]. interest= (x[i].principal * x[i].time *x[i].rate)/ 100;
    interestData.push("principal: " +x[i].principal+ " , time: " +x[i].time+ ", rate: " +x[i].rate+ ", interest: "  +x[i].interest);
    console.log(interestData);
    return interestData

  }

}


interestCalculator(data);