    // les modules

    // Semstre 1 

    var module_mti   = new Module("MTI",3, 6, [67, 0, 33],  "Méthodes et Technologies d’Implémentation");
    var module_algoav = new Module("AlgoAv",     2, 4, [67,0 ,33], " Algorithmique avancée");
    
    var module_se =  new Module("SE", 2, 4, [67,33,0], "Système d’exploitation");
    var module_aasi = new Module("AASI", 2, 4, [67,0,33], "Architecture Avancée  des  Systèmes Informatiques");
    
    var module_rcp =    new Module("RCP",    2, 4, [67,0, 33], "Les réseaux de La couche Physique");
    var module_progres = new Module("Progres", 3, 5, [67,16.5,16.5], "Programmation réseaux");
    
    var module_scvv = new Module("scvv", 2, 2, [67,0, 33], "Systèmes de Communication  Vocaux et Vidéos");
    
    var module_cloud = new Module("cloud", 1, 1, [100,0, 0], "Les technologies du  Cloud Computing");
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_mti, module_algoav], "Fondamentale1");
    var unite_uef2_s1 = new Unite("U2_S1",[module_se, module_aasi], "Fondamentale2");
    var unite_uem_s1 = new Unite("U3_S1",[module_rcp, module_progres], "Méthodologie");
    var unite_ued_s1 = new Unite("U4_S1",[module_scvv], "Découverte");
    var unite_uet_s1 = new Unite("U5_S1",[module_cloud], "Transversale");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1, unite_uet_s1,]);

    // Semstre 2 

    var module_mw   = new Module("MW",   3, 6,     [67, 0, 33], "Les Technologies du Middleware");
    var module_assi = new Module("ASSI", 2, 4,  [67, 0, 33], "Approches de spécification des Systèmes Informatiques ");
    
    var module_infog = new Module("infog", 2, 4, [67,0,33], "Inforgraphie");
    var module_gdm =  new Module("GDM", 2, 4, [67,0,33], "Gestion de Données Multimédia");
    
    
    var module_rip=    new Module("RIP",    3, 6, [67, 16.5, 16.5], "Les réseaux IP");
    var module_rcl =   new Module("RCL",    2, 3, [67, 33,   0], "Les réseaux de niveau liaison");

    var module_bigd = new Module("BigD", 2, 2, [67, 0, 33], "La programmation pour le big data");
    
    var module_ssic = new Module("SSIC", 1, 1, [100, 0, 0], "Sécurité des Systèmes Informatiques et de communications");

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_mw, module_assi], "Fondamentale1");
    var unite_uef2_s2 = new Unite("U2_S2",[module_infog, module_gdm], "Fondamentale2");
    var unite_uem_s2 = new Unite("U3_S2",[module_rip, module_rcl], "Méthodologique");
    var unite_ued_s2 = new Unite("U4_S2",[module_bigd], "Découverte");
    var unite_uet_s2 = new Unite("U4_S2",[module_ssic], "Transversale");
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2, unite_uef2_s2, unite_uem_s2, unite_ued_s2, unite_uet_s2]);
    // Year 
    var annee = new Year("M2GSI", semestre1, semestre2);
    annee.create_canevas();
    create_menu("M1GSI");

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
