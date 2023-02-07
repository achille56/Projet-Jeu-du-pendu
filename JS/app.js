const verification = document.getElementById("verif");
const dessinPendu = document.getElementById("dessindupendu");
const dessine = dessinPendu.getContext("2d");

let propLettre = document.getElementById("lettre");
let vie = 8;
let trouve = 0;

// on demande le mot à deviner
let choixDuMot = prompt("Choisissez le mot à trouver");

// on compte la longueur du mot
let tailleMot = choixDuMot.length;

// on crée une boucle avec les espaces à remplir
for (let i = 0; i<tailleMot; i++) {
    document.write("<span id=lettre"+i+">_ </span>");
}

// colorie la feuille en blanc
dessine.fillStyle = "white";
dessine.fillRect(0,0, dessindupendu.width, dessindupendu.height);

// proposition & verification de la proposition pour gagner

verification.addEventListener("click", function() {

// valeur de l'input
    let recherche = propLettre.value;

// conditionnelle si la lettre est existante
    let checklet = choixDuMot.indexOf(recherche);
    if(checklet === -1)
    {

// perte de vie
        vie --;

        switch (vie)
        {
            case 7:

                // tracer le sol
                dessine.strokeStyle = "green";
                dessine.lineWidth = 50;
                dessine.beginPath();
                dessine.moveTo(0,280);
                dessine.lineTo(300,280);
                dessine.stroke();
                break;

            case 6:

                // tracer le mat du pendu
                dessine.strokeStyle = "brown";
                dessine.lineWidth = 20;
                dessine.beginPath();
                dessine.moveTo(50,50);
                dessine.lineTo(50,270);
                dessine.stroke();
                break;

            case 5:

                // tracer la poutre
                dessine.strokeStyle = "brown";
                dessine.lineWidth = 20;
                dessine.beginPath();
                dessine.moveTo(40,50);
                dessine.lineTo(230,50);
                dessine.stroke();
                break;

            case 4:

                // tracer la barre de soutien
                dessine.strokeStyle = "brown";
                dessine.lineWidth = 20;
                dessine.beginPath();
                dessine.moveTo(47,120);
                dessine.lineTo(120,47);
                dessine.stroke();
                break;

            case 3:

                // corde du pendu
                dessine.strokeStyle = "blue";
                dessine.lineWidth = 10;
                dessine.beginPath();
                dessine.moveTo(225,60);
                dessine.lineTo(225,90);
                dessine.stroke();

                // tête du pendu
                dessine.strokeStyle = "blue";
                dessine.lineWidth = 10;
                dessine.beginPath();
                dessine.arc(225, 105, 15, 0, 2*Math.PI);
                dessine.stroke();
                break;

            case 2:

                // corps du pendu
                dessine.strokeStyle = "blue";
                dessine.lineWidth = 10;
                dessine.beginPath();
                dessine.moveTo(225,120);
                dessine.lineTo(225,160);
                dessine.stroke();

                // bras gauche
                dessine.strokeStyle = "blue";
                dessine.lineWidth = 10;
                dessine.beginPath();
                dessine.moveTo(225,120);
                dessine.lineTo(200,150);
                dessine.stroke();

                //bras droit
                dessine.strokeStyle = "blue";
                dessine.lineWidth = 10;
                dessine.beginPath();
                dessine.moveTo(225,120);
                dessine.lineTo(250,150);
                dessine.stroke();
                break;

            case 1:

                // pied gauche
                dessine.strokeStyle = "blue";
                dessine.lineWidth = 10;
                dessine.beginPath();
                dessine.moveTo(225,160);
                dessine.lineTo(200,190);
                dessine.stroke();

                // pied droit
                dessine.strokeStyle = "blue";
                dessine.lineWidth = 10;
                dessine.beginPath();
                dessine.moveTo(225,160);
                dessine.lineTo(250,190);
                dessine.stroke();
                break;

        }

        // termine la partie lorsqu'il n'y a plus de vie
        if(vie === 0) {
            alert("vous avez perdu !");

        // désactive le bouton
            document.getElementById("verif").disabled = true;
        }
    }
    else
    {
        // va passer en revue toutes les lettres de la chaîne de caractère et indiquer l'emplacement de la lettre si la
        // lettre est dans la chaîne
        for (let i = 0; i < tailleMot; i++) {
            if(choixDuMot[i] === recherche)
            {

            // permet de compter les lettres trouvées à chaque proposition
                trouve++;

            // on récupère l'élément HTML correspondant à la lettre trouvée
                let ecriture = document.getElementById("lettre"+ i);

            // on remplace la lettre par la valeur de la variable recherchée
                ecriture.textContent = recherche;
            }

            // vérifie si le mot a été trouvé en entier sinon la partie continue
            if (trouve === tailleMot) {
            // désactive le bouton
                document.getElementById("verif").disabled = true;
                alert("vous avez gagné");
            }
        }
    }
});