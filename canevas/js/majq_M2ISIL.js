    // les modules

    // Semstre 1 

    var module_osw   = new Module("OSW",  2, 4, [67, 33, 0],  "Ontologie et sémantique web");
    var module_sic = new Module("SIC",    2, 4, [67, 0, 33], "Systèmes d’Information Coopératifs");
    
    var module_sded =  new Module("SDED", 3, 6, [67,16.5, 16.5], "Systèmes décisionnels et entrepôt de données");
    var module_rc = new Module("RC" , 2, 4, [67,33, 0], "Représentation des connaissances");
    
    var module_mob =    new Module("Mob",    3, 5, [67, 16.5, 16.5], "Concepts fondamentaux de l'informatique cognitive");
    var module_erp = new Module("ERP", 2, 4, [67,0, 33], "Introduction aux ERP");
    
    var module_bigd = new Module("BigD", 2, 2, [67,0, 33], "Programmation pour le  Big data ");
    
    var module_dtic = new Module("DTIC", 1, 1, [100,0, 0], "Droit des nouvelles technologies de l'information et de la communication");
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_osw, module_sic], "Fondamentale1");
    var unite_uef2_s1 = new Unite("U2_S1",[module_sded, module_rc], "Fondamentale2");
    var unite_uem_s1 = new Unite("U3_S1",[module_mob, module_erp], "Méthodologie");
    var unite_ued_s1 = new Unite("U4_S1",[module_bigd], "Découverte");
    var unite_uet_s1 = new Unite("U5_S1",[module_dtic], "Transversale");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1, unite_uet_s1,]);

    // Semstre 2 

    var module_projet   = new Module("Projet",   1, 30,     [100, 0, 0], "Stage en Entreprise");

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_projet], "Fondamentale1");
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2]);
    create_canevas(semestre1);
    create_canevas(semestre2);
    create_menu();
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
