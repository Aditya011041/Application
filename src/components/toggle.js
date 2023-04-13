.App {
    text-align: center;
   display: flex;
   margin-top: 10px;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .toggle{
    height: 100px;
    width: 200px;
    border-radius: 50px;
    margin: auto;
    margin-top: 20px;
    background-image: linear-gradient(aqua , skyblue);
    position: relative;
    cursor: pointer;
}
.toggle.night{
    background-image: linear-gradient(midnightblue , rebeccapurple);
    position: relative;
}

.notch{
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background: yellow;
    position: absolute;
    top: 5px;
    left: 5px;
    box-shadow: 0 0 8px yellow;
    z-index: 1;
    transition: all 0.4s ease;
    
}
.notch > .crater{
    background: burlywood;
    border-radius: 50%;
position: absolute;
box-shadow: 0 5px 5px rgba(0,0,0,0.5) inset;
opacity: 0;
}
.night .crater{
    opacity: 0.4;
}
.crater:first-child{
    left: 5px;
    top: 15px;
    height: 15px;
    width: 40px;
    transform: rotate(-45deg);
}
.crater:last-child{
    right: 10px;
    top: 15px;
    height: 15px;
    width: 25px;
    
    transform: rotate(45deg);

}
.toggle.night > .notch{
    background: whitesmoke;
    box-shadow: 0 0 8px whitesmoke;
    transform: translate(100px,0);

}
.shape{

    position: absolute;
    background: whitesmoke;
    border-radius: 50%;
    transition: all 0.3s ease;

}

.shape.sm{
    height: 5px;
    width: 50px;
    top: 50%;
    left: 60%;

}
.shape.sm{
    height: 4px;
    width: 47px;
    top: 50%;
    left: 60%;

}
.shape.md{
    height: 10px;
    width: 75px;
    top: 25%;
    left: 25%;
    z-index: 2;
}

.shape.lg{
    height: 15px;
    width: 100px;
    bottom: 20px;
    left: 25%;

}
.toggle.night .shape{
    background: lightgray;
    box-shadow: 0 0 10px 2px violet;
}

.toggle.night .shape.sm{
    height: 5px;
    width: 5px;
    transform: translate(-40px , 0);
}

.toggle.night .shape.sm:first-of-type{
    height: 5px;
    width: 5px;
    transform: translate(-80px , -10px);
}

.toggle.night .shape.md{
    height: 10px;
    width: 10px;
    transform: translate(10px , 0);

}
.toggle.night .shape.lg{
    height: 15px;
    width: 15px;
    transform: translate(-10px , 0);

}

import React from "react";

import "./style.css";

export default function Toggle({toggled , onClick}) {
return( 
<div onClick={onClick} className={`toggle ${toggled ? 'night' : ''}`} >

<div className="notch">
    <div className="crater" />
    <div className="crater" />
</div>
<div>
<div className="shape sm "  />
<div className="shape sm "  />
<div className="shape md"  />
<div className="shape lg"  />

</div>


</div>
)

}
  export default .toggle ;