    // les modules

    // Semstre 1 

    var module_archi   = new Module("archi", 3, 5, [60,20,20],  "Architecture des ordinateurs ");
    var module_asd = new Module("ASD",     3, 6, [60, 20 , 20], "Algorithmique et structure de données 3");
    
    var module_si =  new Module("SI", 3, 5, [60,20,20], "Systèmes d�information");
    var module_tg = new Module("TG", 2, 4, [60,40, 0], "Théorie des graphes");
    
    var module_mn =    new Module("MN",    2, 4, [60,0,40], "Méthodes numériques");
    var module_lm = new Module("LM", 2, 4, [60,40,0], "Logique mathématique ");
    
    var module_ang2 = new Module("Ang2", 1, 2, [100,0,0], "Anglais 3");
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_archi, module_asd], "Fondamentale1");
    var unite_uef2_s1 = new Unite("U2_S1",[module_si, module_tg], "Fondamentale2");
    var unite_uem_s1 = new Unite("U3_S1",[module_mn, module_lm], "Méthodologique");
    var unite_ued_s1 = new Unite("U4_S1",[module_ang2], "Découverte");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1]);

    // Semstre 2 

    var module_thl   = new Module("RI",   2, 5,     [60, 20,20], "Théorie des langages");
    var module_se1 = new Module("SE1", 3, 5, [60,20,20], "Système d'exploitation 1");
    
    var module_bd = new Module("BD", 3, 5, [60,20,20], "Bases de données");
    var module_res =  new Module("Res", 3, 5, [60,20,20], " Réseaux");
    
    
    var module_poo =    new Module("POO",    2, 4, [60, 0,40], "Programmation orienté objet ");
    var module_web =     new Module("Web", 2, 4, [60,0,40], "Developpement d'applications Web");

    var module_ang3 = new Module("Ang3", 1, 2, [100,0,0], "Anglais 3");

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_thl, module_se1], "Fondamentale1");
    var unite_uef2_s2 = new Unite("U2_S2",[module_bd, module_res], "Fondamentale2");
    var unite_uem_s2 = new Unite("U3_S2",[module_poo, module_web], "Méthodologique");
    var unite_ued_s2 = new Unite("U4_S2",[module_ang3], "Découverte");
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2, unite_uef2_s2, unite_uem_s2,unite_ued_s2]);
   // create_canevas(semestre1);
   create_menu();
create_canevas(semestre1);
create_canevas(semestre2);
function main() {     
    // Calcul et traitement
    // calcul unit moy and credits
    display_results(semestre1, semestre2);

}

$("document").ready(function() {
    $('input').val(0);
});

$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
