import footer from "./footer.js";
document.getElementById("footer").innerHTML=footer()
import navbar from "./navbar.js";
document.getElementById("shownavbar").innerHTML=navbar()

let ads = [
{img:"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-13June2022.gif"},
{img:"https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-10June2022.jpg"},
{img:""},
{img:""},
{img:""},
]

let i=0;
let append=document.getElementById("append_ad");
function ad()
{
     append.src=ads[0].img;
    setInterval(function(){
        if(i==ads.length)
        {
            i=0;
        }
        append.src=ads[i].img;
       i++
    }, 1500);
  
}

ad();