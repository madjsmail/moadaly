


$("document").ready(function() {
    $('input').val(0);
    
});
















function main() {









    // Semstre 1 
    //~ var moyenne_SE = moyennemodule("#tdSE", "#tpSE", "#exSE", "#moSE", "#crSE", "#CredSE");
    // 
    var module_se   = new Module("SE",   3, 5, [60,20,20]);
    var module_comp = new Module("Comp", 3, 5, [60,20,20]);
    
    var module_gl =  new Module("GL2", 3, 5, [60,20,20]);
    var module_ihm = new Module("IHM", 3, 5, [60,20,20]);
    
    var module_pl =    new Module("PL",    2, 4, [60,40,0]);
    var module_proba = new Module("Proba", 2, 4, [60,40,0]);
    
    var module_econum = new Module("Econum", 1, 2, [00,100,0]);
    
    var moyenne_SE = moyennemodule2(module_se);
    
    //~ var moyenne_Comp = moyennemodule("#tdComp", "undefined", "#exComp", "#moComp", "#crComp", "#CredComp");
    //~ //var moyenne_prolog = moyennemodule("undefined", "#tpprolog", "#exprolog", "#moprolog", "#undefined", "#undefined");
    //~ var moyenne_GL2 = moyennemodule("#tdGL2", "#tpGL2", "#exGL2", "#moGL2", "#crGL2", "#CredGL2");
    //~ var moyenne_IHM = moyennemodule("undefined", "#tpIHM", "#exIHM", "#moIHM", "#crIHM", "#CredIHM");
    //~ var moyenne_PL = moyennemodule("#tdPL", "undefined", "#exPL", "#moPL", "#crPL", "#CredPL");
    //~ var moyenne_Proba = moyennemodule("#tdProba", "undefined", "#exProba", "#moProba", "#crProba", "#CredProba");
    //~ var moyenne_ang = moyennemodule("undefined", "undefined", "#tdEconum", "#moEconum", "#crEconum", "#CredEconum");
    
    var moyenne_Comp =  moyennemodule2(module_comp);
    var moyenne_GL2 =   moyennemodule2(module_gl);
    var moyenne_IHM =   moyennemodule2(module_ihm);
    var moyenne_PL =    moyennemodule2(module_pl);
    var moyenne_Proba = moyennemodule2(module_proba);
    var moyenne_ang =   moyennemodule2(module_econum);

    // unites
    var unite_uef1_s1 = new Unite("U1",[module_se, module_comp]);
    var unite_uef2_s1 = new Unite("U2",[module_gl, module_ihm]);
    var unite_uem_s1 = new Unite("U3",[module_pl, module_proba]);
    var unite_ued_s1 = new Unite("U4",[module_econum]);
    
    
    var moyenne_Unites_fondamentale1_S1 = moyenneUnites2(unite_uef1_s1);
    var Cred_Unites_fondamentale1_S1    = credUnites2(unite_uef1_s1);
    
    var moyenne_Unites_fondamentale2_S1 = moyenneUnites2(unite_uef2_s1);
    var Cred_Unites_fondamentale2_S1    = credUnites2(unite_uef2_s1, moyenne_Unites_fondamentale2_S1);
    
    var moyenne_Unites_Méthodologie1 = moyenneUnites2(unite_uem_s1);
    var Cred_Unites_Méthodologie1 = credUnites2(unite_uem_s1, moyenne_Unites_Méthodologie1);

    var moyenne_Unites_Découverte1 = moyenneUnites2(unite_ued_s1);
    var Cred_Unites_Découverte1 = credUnites2(unite_ued_s1, moyenne_Unites_Découverte1);


    //~ var moyenne_Unites_Méthodologie1 = moyenneUnites(moyenne_Proba, moyenne_PL, "undefined", "#CoefProba", "#CoefPL", "undefined", "#MU3");
    //~ var moyenne_Unites_Découverte1 = moyenneUnites(moyenne_ang, "undefined", "undefined", "#CoefEconum", "undefined", "undefined", "#MU4");
    
    //~ var Cred_Unites_fondamentale1_S1 = credUnites(moyenne_Unites_fondamentale1_S1, "#CredSE", "#CredComp", "#undefined", "#crSE", "#crComp", "#undefined", "#CU1");
    //~ var Cred_Unites_fondamentale2_S1 = credUnites(moyenne_Unites_fondamentale2_S1, "#CredIHM", "#CredGL2", "undefined", "#crIHM", "#crGL2", "undefined", "#CU2");
    //~ var Cred_Unites_Méthodologie1 = credUnites(moyenne_Unites_Méthodologie1, "#CredProba", "#CredPL", "undefined", "#crProba", "#crPL", "undefined", "#CU3");
    //~ var Cred_Unites_Découverte1 = credUnites(moyenne_Unites_Découverte1, "#CredEconum", "undefined", "undefined", "#crEconum", "undefined", "undefined", "#CU4");
    
    // Semstre 2 
    var moyenne_mobile = moyennemodule("#tdmobile", "#tpmobile", "#exmobile", "#momobile", "#crmobile", "#Credmobile");
    var moyenne_secu = moyennemodule("#tdsecu", "undefined", "#exsecu", "#mosecu", "#crsecu", "#Credsecu");
    var moyenne_ABD = moyennemodule("#tdABD", "undefined", "#exABD", "#moABD", "#crABD", "#CredABD");
    var moyenne_Crypto = moyennemodule("#tdCrypto", "undefined", "#exCrypto", "#moCrypto", "#crCrypto", "#CredCrypto");
    var moyenne_redaction = moyennemodule("undefined", "undefined", "#exredaction", "#moredaction", "#crredaction", "#Credredaction");
    var moyenne_projet = moyennemodule("undefined", "undefined", "#exprojet", "#moprojet", "#crprojet", "#Credprojet");
    
    var moyenne_Unites_fondamentale1_S2 = moyenneUnites(moyenne_mobile, moyenne_secu, "undefined", "#Coefmobile", "#Coefsecu", "undefined", "#MoynneU1S2");
    var moyenne_Unites_fondamentale2_S2 = moyenneUnites(moyenne_ABD, moyenne_Crypto, "undefined", "#CoefABD", "#CoefCrypto", "undefined", "#MoynneU2S2");
    var moyenne_Unites_Méthodologie2 = moyenneUnites(moyenne_redaction, "undefined", "undefined", "#Coefredaction", "undefined", "undefined", "#MoynneU3S2");
    var moyenne_Unites_Découverte2 = moyenneUnites(moyenne_projet, "undefined", "undefined", "#Coefprojet", "undefined", "undefined", "#MoynneU4S2");
    
    var Cred_Unites_fondamentale1_S2 = credUnites(moyenne_Unites_fondamentale1_S2, "#Credmobile", "#Credsecu", "undefined", "#crmobile", "#crsecu", "undefined", "#CU1_S2");
    var Cred_Unites_fondamentale2_S2 = credUnites(moyenne_Unites_fondamentale2_S2, "#CredABD", "#CredCrypto", "undefined", "#crABD", "#crCrypto", "undefined", "#CU2_S2");
    var Cred_Unites_Méthodologie2 = credUnites(moyenne_Unites_Méthodologie2, "#Credredaction", "undefined", "undefined", "#crredaction", "undefined", "undefined", "#CU3_S2");
    var Cred_Unites_Découverte2 = credUnites(moyenne_Unites_Découverte2, "#Credprojet", "undefined", "undefined", "#crprojet", "undefined", "undefined", "#CU4_S2");
    //Genral 
    //-----------------------
    //Semstre1
    var semestre1 = new Semestre("S1", [unite_uef1_s1, unite_uef2_s1, unite_uem_s1,unite_ued_s1]);
    var moy_sem1 = semestre1.calcul_moy();
    console.log("moy S1 "+ moy_sem1);
    var moyenne_Semstre1 = moy_sem1;
    // display moyenne S1
    $("#moyenneS1").html(+moy_sem1.toFixed(2));
    var cred_s1 = semestre1.set_credits(moy_sem1)
    $("#creditS1").html(+cred_s1);
    var CredS1 = cred_s1;
    //~ if (moyenne_Semstre1 >= 10) {
        //~ var CredS1 = 30;
        //~ $("#creditS1").html(+CredS1);

    //~ } else {
        //~ var CredS1 = parseInt($('#crSE').html()) + parseInt($('#crComp').html()) + parseInt($('#crGL2').html()) + parseInt($('#undefined').html()) + parseInt($('#crIHM').html()) + parseInt($('#crPL').html()) + parseInt($('#crProba').html());

        //~ $("#creditS1").html(+CredS1);
    //~ }
    //Semstre2
    var lasomme_des_moyennemodule_S2 = moyenne_mobile * parseInt($('#Coefmobile').html()) + moyenne_secu * parseInt($('#Coefsecu').html()) + moyenne_Crypto * parseInt($('#CoefCrypto').html()) + moyenne_ABD * parseInt($('#CoefABD').html()) + moyenne_redaction * parseInt($('#Coefredaction').html())  + moyenne_projet * parseInt($('#Coefprojet').html()) ;
    var lasomme_des_Coef_S2 = parseInt($('#Coefmobile').html()) + parseInt($('#Coefsecu').html()) + parseInt($('#CoefCrypto').html()) + parseInt($('#CoefABD').html()) + parseInt($('#Coefredaction').html())  + parseInt($('#Coefprojet').html()) ;
    var moyenne_Semstre2 = lasomme_des_moyennemodule_S2 / lasomme_des_Coef_S2;
    $("#moyenneS2").html(+moyenne_Semstre2.toFixed(2));


    if (moyenne_Semstre2 >= 10) {
        var CredS2 = 30;
        $("#creditS2").html(+CredS2);

    } else {
        var CredS2 = parseInt($('#crmobile').html()) + parseInt($('#crsecu').html()) + parseInt($('#crCrypto').html()) + parseInt($('#crABD').html()) + parseInt($('#crredaction').html())  + parseInt($('#crprojet').html());

        $("#creditS2").html(+CredS2);;
    }
    //------------------------------------------------------
    var moyenne_genral = (moyenne_Semstre1 + moyenne_Semstre2) / 2;
    $("#moyenneGen").html(+moyenne_genral.toFixed(2))
    if (moyenne_genral >= 10) {
        var CredGen = 60;
        $("#creditGen").html(+CredGen);

    } else {
        var CredGen = CredS2 + CredS1;
        $("#creditGen").html(+CredGen);

    }




     //~ rattraper2(unite_uef1_s1,moyenne_Unites_fondamentale1_S1, moyenne_Semstre1, moyenne_genral);
     rattraper("#SE", "#Comp", "undefined", moyenne_SE, moyenne_Comp, "undefined", moyenne_Unites_fondamentale1_S1, moyenne_Semstre1, moyenne_genral);
     //~ rattraper("#IHM", "#GL2", "undefined", moyenne_IHM, moyenne_GL2, "undefined", moyenne_Unites_fondamentale2_S1, moyenne_Semstre1, moyenne_genral);
    rattraper2(unite_uef2_s1,moyenne_Unites_fondamentale2_S1, moyenne_Semstre1, moyenne_genral);

     rattraper("#PL", "#Proba", "undefined", moyenne_PL, moyenne_Proba, "undefined", moyenne_Unites_Méthodologie1, moyenne_Semstre1, moyenne_genral);
     rattraper("#Econum", "undefined", "undefined", moyenne_ang, "undefined", "undefined", moyenne_Unites_Découverte1, moyenne_Semstre1, moyenne_genral);

     rattraper("#mobile", "#secu", "undefined", moyenne_mobile, moyenne_secu, "undefined", moyenne_Unites_fondamentale1_S2, moyenne_Semstre2, moyenne_genral);
     rattraper("#ABD", "#Crypto", "undefined", moyenne_ABD, moyenne_Crypto, "undefined", moyenne_Unites_fondamentale2_S2, moyenne_Semstre2, moyenne_genral);
     rattraper("#redaction", "undefined", "undefined", moyenne_redaction, "undefined", "undefined", moyenne_Unites_Méthodologie2, moyenne_Semstre2, moyenne_genral);
     rattraper("#projet", "undefined", "undefined", moyenne_projet, "undefined", "undefined", moyenne_Unites_Découverte2, moyenne_Semstre2, moyenne_genral);







}





$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
