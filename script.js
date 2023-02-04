let goti = document.querySelector( "footer" );

let allDivs = document.querySelectorAll( "div:not(.grid)" );
let gotiImg = document.querySelector( "#goti" );
let diceImg = document.querySelector( "#dice" );
let SoLImg = document.querySelector( "#SoL" );


for ( let i = 1; i <= allDivs.length; i++ ) 
{
    allDivs[ i - 1 ].setAttribute( "id", `div${ i }` );
}


let h1 = document.querySelector( "h1" );
let h2 = document.querySelector( "h2" );
let button = document.querySelector( "button" );
let button2 = document.querySelectorAll( "button" )[ 1 ];


let iniDiv = document.querySelector( "#div1" );

let iniPos = iniDiv.getBoundingClientRect();

goti.style.left = iniPos.x - 100 + "px";
goti.style.top = iniPos.y - 20 + "px";


button2.addEventListener( "click", ( event ) =>
{
    location.reload();
} );


let currentLocation = 0;
let targetDiv;

document.querySelector( "button" ).addEventListener( "click", ( event ) =>
{
    h2.innerText = "";
    SoLImg.src = "";

    let diceOutput = Math.floor( Math.random() * 6 ) + 1;

    h1.innerText = `ta-daa! you got, ${ diceOutput }`;
    diceImg.src = `${ diceOutput }.png`;


    currentLocation = currentLocation + diceOutput;

    if ( currentLocation > 100 ) 
    {
        h2.innerText = "You are nearing the end!";
        currentLocation = currentLocation - diceOutput;

    }
    else if ( currentLocation === 100 )
    {
        button.disabled = true;
        targetDiv = document.querySelector( `#div${ currentLocation }` );
        h2.innerText = "You won!";
        let rect = targetDiv.getBoundingClientRect();

        goti.style.left = rect.x + 18 + "px";
        goti.style.top = rect.y + 18 + "px";


    }
    else if ( currentLocation < 100 )
    {
        targetDiv = document.querySelector( `#div${ currentLocation }` );
        let rect = targetDiv.getBoundingClientRect();
        goti.style.left = rect.x + 18 + "px";
        goti.style.top = rect.y + 18 + "px";

        switch ( currentLocation )
        {
            case 9:
                currentLocation = currentLocation - 3;
                h2.innerText = "snake got you 3 steps back";
                SoLImg.src = "snake.png";
                break;

            case 12:
                currentLocation = currentLocation - 7;
                h2.innerText = "snake got you 7 steps back";
                SoLImg.src = "snake.png";
                break;

            case 10:
                currentLocation = currentLocation + 6;
                h2.innerText = "ladder got you 6 steps forward";
                SoLImg.src = "ladder.png";
                break;

            case 15:
                currentLocation = currentLocation + 10;
                h2.innerText = "ladder got you 10 steps forward";
                SoLImg.src = "ladder.png";
                break;

            case 21:
                currentLocation = currentLocation + 12;
                h2.innerText = "ladder got you 12 steps forward";
                SoLImg.src = "ladder.png";
                break;

            case 23:
                currentLocation = currentLocation - 5;
                h2.innerText = "snake got you 5 steps back";
                SoLImg.src = "snake.png";
                break;

            case 30:
                currentLocation = currentLocation + 20;
                h2.innerText = "ladder got you 20 steps forward";
                SoLImg.src = "ladder.png";
                break;

            case 38:
                currentLocation = currentLocation - 12;
                h2.innerText = "snake got you 12 steps back";
                SoLImg.src = "snake.png";
                break;

            case 53:
                currentLocation = currentLocation + 21;
                h2.innerText = "ladder got you 21 steps forward";
                SoLImg.src = "ladder.png";

                break;

            case 64:
                currentLocation = currentLocation - 10;
                h2.innerText = "snake got you 10 steps back";
                SoLImg.src = "snake.png";
                break;

            case 84:
                currentLocation = currentLocation - 50;
                h2.innerText = "snake got you 50 steps back";
                SoLImg.src = "snake.png";
                break;

            case 92:
                currentLocation = currentLocation - 30;
                h2.innerText = "snake got you 30 steps back";
                SoLImg.src = "snake.png";
                break;

            case 99:
                currentLocation = currentLocation - 90;
                h2.innerText = "snake got you 90 steps back";
                SoLImg.src = "snake.png";
                break;


        }

        setTimeout( () =>
        {
            targetDiv = document.querySelector( `#div${ currentLocation }` );
            rect = targetDiv.getBoundingClientRect();
            goti.style.left = rect.x + 18 + "px";
            goti.style.top = rect.y + 18 + "px";
        }, 2000 );
    }


} );



