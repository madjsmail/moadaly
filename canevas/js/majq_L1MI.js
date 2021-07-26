    // les modules

    // Semstre 1 

    var module_ana1   = new Module("analyse1",   4, 6, [60, 40, 0],  "Analyse1");
    var module_algb1 = new Module("algebre1",    3, 5, [60, 40, 0], "Algèbre1");
    
    var module_algo1 =  new Module("Algo1", 4, 6, [60,20,20], "Algorithmique et structure de données 1");
    var module_strm1 = new Module("STRM1",  3, 5, [60,40, 0], " Structure machine 1");
    
    var module_term =    new Module("Term",    1, 2, [100, 0, 0], "Terminologie Scientifique et expression écrite");
    var module_ang1 = new Module("Ang1", 1, 2,  [100,0,0], "Langue Etrangère 1 ");
    
    var module_phys1 = new Module("Pḧys1", 2, 4, [60, 40,0], "Physique 1");
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_ana1, module_algb1], "Fondamentale1");
    var unite_uef2_s1 = new Unite("U2_S1",[module_algo1, module_strm1], "Fondamentale2");
    var unite_uem_s1 = new Unite("U3_S1",[module_term, module_ang1], "Méthodologique");
    var unite_ued_s1 = new Unite("U4_S1",[module_phys1], "Découverte");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1]);

    // Semstre 2 

    var module_ana2   = new Module("Analyse2",   4, 6,     [60, 40,0], "Analyse 2");
    var module_algb2 = new Module("Algb2", 2, 4, [60,40, 0], "Algèbre 2");
    
    var module_algo2 = new Module("Algo2", 4, 6, [60,20,20], "Algorithmique et structure de données 2");
    var module_strm2 =  new Module("STRM2", 2, 4, [60,40,0], "Structure machine 2");
    
    
    var module_proba =    new Module("Proba",    2, 3, [60, 40, 0], "Introduction aux probabilités et statistique descriptive ");
    var module_tic =     new Module("TIC", 1, 2, [100,0,0], "Technologie de l'Information et de la Communication ");
    var module_opm =   new Module("OPM", 1, 2, [60,0,40], "Outils de programmation pour les mathématiques ");
    
    var module_phys2 = new Module("Pḧys2", 2, 3, [60, 40,0], "Physique 2");

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_ana2, module_algb2], "Fondamentale1");
    var unite_uef2_s2 = new Unite("U2_S2",[module_algo2, module_strm2], "Fondamentale2");
    var unite_uem_s2 = new Unite("U3_S2",[module_proba, module_tic, module_opm], "Méthodologique");
    var unite_ued_s2 = new Unite("U4_S2",[module_phys2], "Découverte");
    
    

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
