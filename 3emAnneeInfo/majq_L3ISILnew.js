function main() {

    // les modules

    // Semstre 1 

    var module_sid   = new Module("SID",   4, 6, [60,20,20]);
    var module_sad = new Module("SAD",     2, 4, [60,0 ,40]);
    
    var module_gl =  new Module("GL2", 4, 6, [60,20,20]);
    var module_ihm = new Module("IHM", 2, 4, [60,20,20]);
    
    var module_asi =    new Module("ASI",    2, 4, [60,40,0]);
    var module_paw = new Module("PAW", 2, 4, [60,40,0]);
    
    var module_econum = new Module("Econum", 1, 2, [00,100,0]);
    

    // unites
    var unite_uef1_s1 = new Unite("U1_S1",[module_sid, module_sad]);
    var unite_uef2_s1 = new Unite("U2_S1",[module_gl, module_ihm]);
    var unite_uem_s1 = new Unite("U3_S1",[module_asi, module_paw]);
    var unite_ued_s1 = new Unite("U4_S1",[module_econum]);
    
    
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1]);

    // Semstre 2 

    var module_ri   = new Module("RI",   3, 5,     [60,40,0]);
    var module_securite = new Module("secu", 3, 5, [60,40,0]);
    
    var module_dss = new Module("DSS", 3, 5, [60,0,40]);
    var module_se =  new Module("SE2", 3, 5, [60,20,20]);
    
    
    var module_projet =    new Module("projet",    3, 6, [100, 0,0]);
    var module_bi =        new Module("BI", 1, 2, [0,100,0]);

    var module_redaction = new Module("redaction", 1, 2, [0, 100,0]);

    // unites
    var unite_uef1_s2 = new Unite("U1_S2",[module_ri, module_securite]);
    var unite_uef2_s2 = new Unite("U2_S2",[module_dss, module_se]);
    var unite_uem_s2 = new Unite("U3_S2",[module_projet, module_bi]);
    var unite_ued_s2 = new Unite("U4_S2",[module_redaction]);
    
    

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
