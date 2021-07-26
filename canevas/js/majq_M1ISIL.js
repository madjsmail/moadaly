    // les modules

    // Semstre 1 

    var module_algoav   = new Module("AlgoAv", 2, 4, [67, 33, 0],  "Algorithmique avancé et complexité");
    var module_sda = new Module("SDA",   3, 6, [67,16.5 ,16.5], "Structures de données avancées");
    
    var module_aabd =  new Module("AABD", 2, 4, [67,0, 33], "Architecture et administration des bases de données");
    var module_sri = new Module("SRI", 2, 4, [67,33, 0], "Systèmes de recherche d’informations");
    
    var module_aos =    new Module("AOS",    3, 5, [67,16.5, 16.5], "Introduction aux Architectures Orientées Services");
    var module_idm = new Module("IDM", 2, 4, [67,0, 33], "Ingénierie Dirigée par les Modèle");
    
    var module_fia = new Module("FIA", 2, 2, [67,0, 33], "Fondements de l’intelligence artificielle");
    
    var module_cloud = new Module("cloud", 1, 1, [100,0, 0], "Introduction au CloudComputing");
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_algoav, module_sda], "Fondamentale1");
    var unite_uef2_s1 = new Unite("U2_S1",[module_aabd, module_sri], "Fondamentale2");
    var unite_uem_s1 = new Unite("U3_S1",[module_aos, module_idm], "Méthodologie");
    var unite_ued_s1 = new Unite("U4_S1",[module_fia], "Découverte");
    var unite_uet_s1 = new Unite("U5_S1",[module_cloud], "Transversale");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1, unite_uet_s1,]);

    // Semstre 2 

    var module_bda   = new Module("BDA",   3, 6,     [67, 16.5, 16.5], "Bases de données avancées");
    var module_mal = new Module("MAL", 2, 4,  [67, 33, 0], "Modélisation et architectures logicielles");
    
    var module_urba = new Module("urba", 2, 4, [67,33, 0], "Urbanisation des Systèmes d’Information");
    var module_mse =  new Module("MSE", 2, 4, [67, 33, 0], "Management stratégique des entreprises");
    
    
    var module_fdd=    new Module("FDD",    3, 5, [67, 16.5, 16.5], "Fouille de données ");
    var module_tal=   new Module("TAL",    2, 4, [67, 0, 33], "Introduction au traitement automatique des langues naturelles");

    var module_se = new Module("SE", 2, 2, [67, 33, 0], "Système d’exploitation");
    
    var module_sm = new Module("SM", 1, 1, [100, 0, 0], " Système multimédia");

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_bda, module_mal], "Fondamentale1");
    var unite_uef2_s2 = new Unite("U2_S2",[module_urba, module_mse], "Fondamentale2");
    var unite_uem_s2 = new Unite("U3_S2",[module_fdd, module_tal], "Méthodologique");
    var unite_ued_s2 = new Unite("U4_S2",[module_se], "Découverte");
    var unite_uet_s2 = new Unite("U4_S2",[module_sm], "Transversale");
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2, unite_uef2_s2, unite_uem_s2, unite_ued_s2, unite_uet_s2]);
    // Year 
    var annee = new Year("M2GSI", semestre1, semestre2);
    annee.create_canevas();
    create_menu();

function main() {     
    // Calcul et traitement
    // calcul unit moy and credits
    annee.display_results();

}
$("document").ready(function() {
    $('input').val(0);
});

$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
