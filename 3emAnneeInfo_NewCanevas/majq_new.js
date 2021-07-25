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
    // calcul unit moy and credits
    calcul_semestre_unites_moy(semestre1);

    var moy_sem1 = semestre1.calcul_moy();
    // display moyenne S1
    $("#moyenneS1").html(+moy_sem1.toFixed(2));
    var cred_s1 = semestre1.set_credits(moy_sem1)
    $("#creditS1").html(+cred_s1);
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
    // calcul unit moy and credits
    calcul_semestre_unites_moy(semestre2)    

    var moy_sem2 = semestre2.calcul_moy();
    // display moyenne S2
    $("#moyenneS2").html(+moy_sem2.toFixed(2));
    var cred_s2 = semestre2.set_credits(moy_sem2)
    $("#creditS2").html(+cred_s2);

    // Moyenne generale
    var moyenne_genral = (moy_sem1 + moy_sem2) / 2;
    $("#moyenneGen").html(+moyenne_genral.toFixed(2))
    if (moyenne_genral >= 10) {
        var CredGen = 60;
        $("#creditGen").html(+CredGen);

    } else {
        var CredGen = cred_s2 + cred_s1;
        $("#creditGen").html(+CredGen);
    }



     rattraper_all(semestre1 , moyenne_genral);
     rattraper_all(semestre2 , moyenne_genral);
}


$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
