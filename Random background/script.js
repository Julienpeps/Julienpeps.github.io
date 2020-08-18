function buttonClicked(){
    const red = Math.floor(Math.random * 250);
    const green = Math.floor(Math.random * 250);
    const blue = Math.floor(Math.random * 250);

    const background = document.getElementById('background');

    document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ');';

    console.log(background);
}