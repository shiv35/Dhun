import 'bootstrap/dist/css/bootstrap.min.css';
import "./Banner.css"
// import backgroundImage from "./resources/bg.png"
function Banner() {
    // console.log("backgroundImage");
    function ho()
{
    document.getElementById('ch').style=`background: none;
    color: #36e2ec`;
    document.getElementById('check').style=`background: #5adae0;
    color: #fff`
}

function ho1()
{
    document.getElementById('check').style=`background: none;
    color: #36e2ec`;
    document.getElementById('ch').style=`background: #5adae0;
    color: #fff`;
}
    return (
        <div class="content" >
            <div id="subcontent" >
                <h1>Alan Walker-Fade</h1>
                <p><b>You are the shadow of my light Did you feel us Another
                    start You fade Away afraid our aim of sight wanna see us Alive. . . .
                </b> </p>
                <div class="buttons">
                    <button id="ch" onMouseOver={ho1}>PLAY</button>
                    <button id="check" onMouseOver={ho}>FOLLOW</button>
                </div>
            </div>
            <div class="currentsong invisible" id="cs">
                <div id="imgcurrent"><img id="current" src="" alt=""></img></div>
                <div class="info"> <div id="current_title">On the Way
                    <div class="subtitle">Alan Walker</div>
                </div>
                </div>
            </div>
            <div id="resu" class="invisible"><h2>Results</h2></div>
            <div id="search_content" class="invisible">



            </div>
        </div>
    );
}
export default Banner;