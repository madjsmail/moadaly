function main() {

    // les modules

    // Semstre 1 

    var module_se   = new Module("SE",   3, 5, [60,20,20]);
    var module_comp = new Module("Comp", 3, 5, [60,20,20]);
    
    var module_gl =  new Module("GL2", 3, 5, [60,20,20]);
    var module_ihm = new Module("IHM", 3, 5, [60,20,20]);
    
    var module_pl =    new Module("PL",    2, 4, [60,40,0]);
    var module_proba = new Module("Proba", 2, 4, [60,40,0]);
    
    var module_econum = new Module("Econum", 1, 2, [00,100,0]);
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_se, module_comp]);
    var unite_uef2_s1 = new Unite("U2_S1",[module_gl, module_ihm]);
    var unite_uem_s1 = new Unite("U3_S1",[module_pl, module_proba]);
    var unite_ued_s1 = new Unite("U4_S1",[module_econum]);
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1]);

    // Semstre 2 

    var module_mobile   = new Module("mobile",   3, 5, [60,0,40]);
    var module_securite = new Module("secu", 3, 5, [60,40,0]);
    
    var module_ia =  new Module("IA", 3, 5, [60,0,40]);
    var module_dss = new Module("DSS", 3, 5, [60,0,40]);
    
    var module_projet =    new Module("projet",    2, 4, [100, 0,0]);
    var module_redaction = new Module("redaction", 2, 4, [0, 100,0]);
    
    var module_startup = new Module("startup", 1, 2, [100,0,0]);
    

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_mobile, module_securite]);
    var unite_uef2_s2 = new Unite("U2_S2",[module_ia, module_dss]);
    var unite_uem_s2 = new Unite("U3_S2",[module_projet, module_redaction]);
    var unite_ued_s2 = new Unite("U4_S2",[module_startup]);
    
    

    //Semstre2

    var semestre2 = new Semestre("S2", [unite_uef1_s2, unite_uef2_s2, unite_uem_s2,unite_ued_s2]);
    
    // Calcul et traitement
    // calcul unit moy and credits
   
    display_results(semestre1, semestre2);

}


$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
