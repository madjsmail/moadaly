
    // les modules

    // Semstre 1 

    var module_se   = new Module("SE",   3, 5, [60,20,20], "Systèmes d'exploitation");
    var module_comp = new Module("Comp", 3, 5, [60,20,20], "Compilation");
    
    var module_gl =  new Module("GL2", 3, 5, [60,20,20], "Génie Logiciel");
    var module_ihm = new Module("IHM", 3, 5, [60,20,20], "IHM");
    
    var module_pl =    new Module("PL",    2, 4, [60,40,0], "Programmation linéaire");
    var module_proba = new Module("Proba", 2, 4, [60,40,0], "Probabilités");
    
    var module_econum = new Module("Econum", 1, 2, [00,100,0], "Economie numérique et veille stratégique");
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_se, module_comp], "Fondamentale1");
    var unite_uef2_s1 = new Unite("U2_S1",[module_gl, module_ihm],  "Fondamentale2");
    var unite_uem_s1 = new Unite("U3_S1",[module_pl, module_proba],  "Méthodologique");
    var unite_ued_s1 = new Unite("U4_S1",[module_econum], "Découverte");
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1]);

    // Semstre 2 

    var module_mobile   = new Module("mobile",   3, 5, [60,0,40], "Applications Mobile");
    var module_securite = new Module("secu", 3, 5, [60,40,0], "Sécurité Informatique");
    
    var module_ia =  new Module("IA", 3, 5, [60,0,40], "Intelligenece Artificielle");
    var module_dss = new Module("DSS", 3, 5, [60,0,40], "Données semi structurées");
    
    var module_projet =    new Module("projet",    3, 6, [100, 0,0], "Projet");
    var module_redaction = new Module("redaction", 1, 2, [0, 100,0], "Rédaction Scientifique");
    
    var module_startup = new Module("startup", 1, 2, [100,0,0]," Créer une startup");
    

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_mobile, module_securite], "Fondamental1");
    var unite_uef2_s2 = new Unite("U2_S2",[module_ia, module_dss], "Fondamentale2");
    var unite_uem_s2 = new Unite("U3_S2",[module_projet, module_redaction], "Méthodologique");
    var unite_ued_s2 = new Unite("U4_S2",[module_startup], "Découverte");
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2, unite_uef2_s2, unite_uem_s2,unite_ued_s2]);
    // Year 
    var annee = new Year("L3SI", semestre1, semestre2);
    annee.create_canevas();
    create_menu("L3SI");

function main() {     
    // Calcul et traitement
    // calcul unit moy and credits
    annee.display_results();

}



$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
