var historyToggle = true;
var timelineToggle = true;

window.onload = function(){ 
    /* on attend que la page se charge 
    (sinon la méthode getElementByTagName vas s'executer avant 
    et n'arrivera pas à trouver les éléments)*/
    // ------------------- //



/* ------------- Mise en évidence de la page active -------------*/

    // liens de la section "accueil-top"
    const navLinks = document.getElementById('menu').getElementsByTagName("a");

    // url de la page actuelle
    const currentUrl = document.location.href;

    for (let i=0; i<navLinks.length; i++) {
        if (navLinks[i].href === currentUrl) {
            navLinks[i].style.background = "#1F365C" // on rajoute la class "active" au lien (voir CSS)
            break   // pas la peine de chercher plus loin
        }
    }


/* ------ Animation des puces quand on survole les liens d'"Histoire" ------*/
    const subLinks = document.getElementsByClassName("sub-link");

    for (let i=0; i<subLinks.length; i++) {
        subLinks[i].addEventListener("mouseover", ()=> {
            subLinks[i].id = "fleche";
        })

        subLinks[i].addEventListener("mouseout", ()=> {
            subLinks[i].id = null;
        })
    }

/* ------ Animation sous-liens quand on clique sur le bouton Histoire------*/
    const historyButton = document.getElementById('history');
    const subDiv = document.getElementsByClassName("sub")[0]

    historyButton.addEventListener("click", ()=> {
        if (historyToggle) {
            let opacity=0;
            subDiv.style.display = "block";
            
            var interval = setInterval(()=> {
                if (opacity>=1) {
                    clearInterval(interval)
                }
                opacity+=0.2;
                subDiv.style.opacity = opacity;
            },50)

        } else {
            let opacity=1;
            var interval = setInterval(()=> {
                if (opacity<=0) {
                    clearInterval(interval) /*clearInterval arrête l'intervale*/
                    subDiv.style.display = "none"; /*si on mettait ca en dessous, il s'executerait avant l'animation qu'on aurait plus le temps de voir*/
                }
                opacity-=0.2;
                subDiv.style.opacity = opacity;
            },50)
        }
        historyToggle = !historyToggle;
    })

/* ------ Apparition des éléments des timelines quand on clique sur leurs Titres ------*/
    const timelineContent = document.getElementsByClassName("content");
    var timelineTitles = [];
    var timelineImages = [];

    for (let i=0; i<timelineContent.length; i++) {
        timelineTitles.push(timelineContent[i].getElementsByTagName("h3")[0])
        timelineImages.push(timelineContent[i].getElementsByTagName("img")[0])
    }

    for (let i=0; i<timelineTitles.length; i++) {
        
        timelineTitles[i].addEventListener("click", ()=> {
            if (timelineToggle) {
                let opacity=0;
                timelineImages[i].style.display = "block";
                
                var interval = setInterval(()=> {
                    if (opacity>=1) {
                        clearInterval(interval)
                    }
                    opacity+=0.2;
                    timelineImages[i].style.opacity = opacity;
                },50)
                
            } else {
                let opacity=1;
                var interval = setInterval(()=> {
                    if (opacity<=0) {
                        clearInterval(interval) /*clearInterval arrête l'intervale*/
                        timelineImages[i].style.display = "none"; /*si on mettait ca en dessous, il s'executerait avant l'animation qu'on aurait plus le temps de voir*/
                    }
                    opacity-=0.2;
                    timelineImages[i].style.opacity = opacity;
                },50)
            }
            timelineToggle = !timelineToggle;
        })
    }
}
