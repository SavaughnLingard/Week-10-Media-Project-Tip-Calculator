function setup() {
   
    // Create the Canvas
    createCanvas(innerWidth, innerHeight);
    background('blue');
    
    textSize(35);
    text('Tip calculator: ', 20, 35);
    
    input = createInput();
    input.position(20, 65);
    


    button = createButton('10%');
    button.position(input.x + input.width + 5, 65);
    button.mousePressed(tenTip);

    button = createButton('15%');
    button.position(input.x + input.width + 55, 65);
    button.mousePressed(fifteenTip);

    button = createButton('20%');
    button.position(input.x + input.width + 105, 65);
    button.mousePressed(twentyTip);

    button = createButton('25%');
    button.position(input.x + input.width + 155, 65);
    button.mousePressed(twentyfiveTip);

 


}

 

function tenTip(){
    let number = input.value();
    if(number>-1000000)
    {
         let tipAmount = number * 0.1;
         text('The 10% tip is $' + tipAmount, 10,130);
        }
    else{
        text('Please input a number 10, 130');
    }
    
}
function fifteenTip(){
    let number = input.value();
    if(number>-1000000)
    {
            let tipAmount = number * 0.15;
            text('The 15% tip is $' + tipAmount, 10,175);
        }
    else{
        text('Please input a number 10, 130');
    }
    
}
function twentyTip(){
    let number = input.value();
    if(number>-1000000)
    {
            let tipAmount = number * 0.20;
            text('The 10% is $' + tipAmount, 10,220);
        }
    else{
        text('Please input a number 10, 130');
    }
    
}
function twentyfiveTip(){
    let number = input.value();
    if(number>-1000000)
    {
            let tipAmount = number * 0.25;
            text('The 25% tip is $' + tipAmount, 10,265);
        }
    else{
        text('Please input a number 10, 130');
    }
    
}