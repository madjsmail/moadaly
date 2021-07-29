    // les modules

    // Semstre 1 

    var module_sid   = new Module("SID",4, 6, [60,20,20],  "Systemes d'information distribué");
    var module_sad = new Module("SAD",     2, 4, [60,0 ,40], "Systèmes d'aide à la décision");
    
    var module_gl =  new Module("GL2", 4, 6, [60,20,20], "Génie Logiciel");
    var module_ihm = new Module("IHM", 2, 4, [60,20,20], "IHM");
    
    var module_asi =    new Module("ASI",    2, 4, [60,40,0], "Administration des systèmes d'information");
    var module_paw = new Module("PAW", 2, 4, [60,40,0], "Programmation avancée pour le web");
    
    var module_econum = new Module("Econum", 1, 2, [00,100,0], "Econumie numérique et veille stratégique");
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_sid, module_sad], "Fondamentale1");
    var unite_uef2_s1 = new Unite("U2_S1",[module_gl, module_ihm], "Fondamentale2");
    var unite_uem_s1 = new Unite("U3_S1",[module_asi, module_paw], "Méthodologique");
    var unite_ued_s1 = new Unite("U4_S1",[module_econum], "Découverte");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1]);

    // Semstre 2 

    var module_ri   = new Module("RI",   3, 5,     [60,40,0], "Recherche dinformation");
    var module_securite = new Module("secu", 3, 5, [60,40,0], "Sécurité Informatique");
    
    var module_dss = new Module("DSS", 3, 5, [60,0,40], "Données semi structurées");
    var module_se =  new Module("SE2", 3, 5, [60,20,20], "Systèmes d'exploiatation2");
    
    
    var module_projet =    new Module("projet",    3, 6, [100, 0,0], "Projet");
    var module_bi =        new Module("BI", 1, 2, [0,100,0], "Business Intelligence");

    var module_redaction = new Module("redaction", 1, 2, [0, 100,0], "Rédaction Scientifiques");

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_ri, module_securite], "Fondamentale1");
    var unite_uef2_s2 = new Unite("U2_S2",[module_dss, module_se], "Fondamentale2");
    var unite_uem_s2 = new Unite("U3_S2",[module_projet, module_bi], "Méthodologique");
    var unite_ued_s2 = new Unite("U4_S2",[module_redaction], "Découverte");
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2, unite_uef2_s2, unite_uem_s2,unite_ued_s2]);
   // create_canevas(semestre1);
    // Year 
    var annee = new Year("M2GSI", semestre1, semestre2);
    annee.create_canevas();
    create_menu("L3ISIL");

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
