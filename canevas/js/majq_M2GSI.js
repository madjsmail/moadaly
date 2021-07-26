    // les modules

    // Semstre 1 

    var module_soc   = new Module("SoC",3, 6, [67, 16.5, 16.5],  " Les SoC (System On Chip)");
    var module_sysemb = new Module("SysEmb",     2, 4, [67,0 ,33], "Systèmes embarqués");
    
    var module_vf =  new Module("VF", 2, 4, [67,33, 0], "Validation formelle de Systèmes Informatiques");
    var module_gi = new Module("GI" , 2, 4, [67,33, 0], "Gestion de l’Incertain");
    
    var module_ic =    new Module("IC",    2, 3, [67, 33, 0], "Concepts fondamentaux de l'informatique cognitive");
    var module_ci = new Module("CI", 3, 6, [67,16.5,16.5], "Computational Intelligence");
    
    var module_rm = new Module("RM", 2, 2, [67,0, 33], "Réseaux Mobiles");
    
    var module_dtic = new Module("DTIC", 1, 1, [100,0, 0], "Droit des nouvelles technologies de l'information et de la communication");
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_soc, module_sysemb], "Fondamentale1");
    var unite_uef2_s1 = new Unite("U2_S1",[module_vf, module_gi], "Fondamentale2");
    var unite_uem_s1 = new Unite("U3_S1",[module_ci, module_ci], "Méthodologie");
    var unite_ued_s1 = new Unite("U4_S1",[module_rm], "Découverte");
    var unite_uet_s1 = new Unite("U5_S1",[module_dtic], "Transversale");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1, unite_uet_s1,]);

    // Semstre 2 

    var module_projet   = new Module("Projet",   1, 30,     [100, 0, 0], "Stage en Entreprise");

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_projet], "Fondamentale1");
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2]);
    
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
