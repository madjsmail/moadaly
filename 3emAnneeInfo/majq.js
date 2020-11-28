function moyennemodule(td, tp, exam, momodule, crmodule, Credmodule) {
    var cred = $(Credmodule).html();
    $(exam).css("background-color", "#0000");
    $(td).css("background-color", "#0000");
    $(tp).css("background-color", "#0000");
    if (($(exam).val() > 20) || ($(exam).val() < 0)) {
        $(exam).css("background-color", "red");
        $(exam).val(0);
    };
    if (($(td).val() > 20) || ($(td).val() < 0)) {
        $(td).css("background-color", "red");
        $(td).val(0);
    };
    if (($(tp).val() > 20) || ($(tp).val() < 0)) {
        $(tp).css("background-color", "red");
        $(tp).val(0);
    };



    if (td !== "undefined" && tp !== "undefined") {
        var note_td = $(td).val();
        var note_tp = $(tp).val();
        var note_exam = $(exam).val();
        var moyenne =note_td/4 + note_tp/4 + note_exam * 0.5;
        if (moyenne >= 10) $(crmodule).html(+cred)
        else $(crmodule).html("0");
        $(momodule).html(+moyenne.toFixed(2));
        return moyenne.toFixed(2);

    }
    if (td == "undefined" && tp == "undefined") {

        var note_exam = $(exam).val();
        var moyenne = note_exam;
        if (moyenne >= 10) $(crmodule).html($(Credmodule).html());
        else $(crmodule).html("0");
        $(momodule).html(+moyenne);
        return moyenne;

    }
    if (td !== "undefined" && tp == "undefined") {
        var note_td = $(td).val();

        var note_exam = $(exam).val();
        var moyenne = note_td * 0.5 + note_exam * 0.5;
        if (moyenne >= 10) $(crmodule).html(+cred)
        else $(crmodule).html("0");
        $(momodule).html(+moyenne.toFixed(2));
        return moyenne.toFixed(2);

    }
    if (td == "undefined" && tp !== "undefined") {
        var note_tp = $(tp).val();
        var note_exam = $(exam).val();
        var moyenne = note_tp * 0.5 + note_exam * 0.5;
        if (moyenne >= 10) $(crmodule).html(+cred)
        else $(crmodule).html("0");
        $(momodule).html(+moyenne.toFixed(2));
        return moyenne.toFixed(2);

    }





}



function moyenneUnites(moyenne_module1, moyenne_module2, moyenne_module3, Coef1, Coef2, Coef3, MoynneU) {
    if (moyenne_module1 !== "undefined" && moyenne_module2 !== "undefined" && moyenne_module3 !== "undefined") {
        var Cof1 = parseInt($(Coef1).html());
        var Cof2 = parseInt($(Coef2).html());
        var Cof3 = parseInt($(Coef3).html());
        var cof = Cof1 + Cof2 + Cof3;
        var module = parseInt(moyenne_module1 * Cof1 + moyenne_module2 * Cof2 + moyenne_module3 * Cof3).toFixed(2);
        var moyenneU = module / cof;
        $(MoynneU).html(+moyenneU.toFixed(2));
        return moyenneU;
    }
    if (moyenne_module1 !== "undefined" && moyenne_module2 !== "undefined" && moyenne_module3 == "undefined") {
        var Cof1 = parseInt($(Coef1).html());
        var Cof2 = parseInt($(Coef2).html());
        var cof = Cof1 + Cof2;
        var module = parseInt(moyenne_module1 * Cof1 + moyenne_module2 * Cof2).toFixed(2);
        var moyenneU = module / cof;
        $(MoynneU).html(+moyenneU.toFixed(2));
        return moyenneU;

    }
    if (moyenne_module1 !== "undefined" && moyenne_module2 == "undefined" && moyenne_module3 == "undefined") {
        var Cof1 = parseInt($(Coef1).html());

        var moyenneU = parseInt(moyenne_module1).toFixed(2);
        $(MoynneU).html(+moyenneU);

        return moyenneU;

    }
}

function credUnites(moyenUnites1, Cred1, Cred2, Cred3, cr1, cr2, cr3, creditmodule) {
    if (Cred1 !== "undefined" && Cred2 !== "undefined" && Cred3 !== "undefined" && cr1 !== "undefined" && cr2 !== "undefined" && cr3 !== "undefined") {

        var cred1 = parseInt($(Cred1).html());
        var cred2 = parseInt($(Cred2).html());
        var cred3 = parseInt($(Cred3).html());
        var cred4 = cred1 + cred2 + cred3;
        var crd1 = parseInt($(cr1).html());
        var crd2 = parseInt($(cr2).html());
        var crd3 = parseInt($(cr3).html());

        var crd4 = crd1 + crd2 + crd3;

        if (moyenUnites1 >= 10) {
            $(creditmodule).html(+cred4);
            return cred4;
        } else {}
        return $(creditmodule).html(+crd4);
        crd4;

    }
    if (Cred1 !== "undefined" && Cred2 !== "undefined" && Cred3 == "undefined" && cr1 !== "undefined" && cr2 !== "undefined" && cr3 == "undefined") {
        var cred1 = parseInt($(Cred1).html());
        var cred2 = parseInt($(Cred2).html());
        var cred4 = cred1 + cred2;
        var crd1 = parseInt($(cr1).html());
        var crd2 = parseInt($(cr2).html());
        var crd4 = crd1 + crd2;
        if (moyenUnites1 >= 10) {
            $(creditmodule).html(+cred4);
            return cred4;
        } else {}
        return $(creditmodule).html(+crd4);
        crd4;
    }
    if (Cred1 !== "undefined" && Cred2 == "undefined" && Cred3 == "undefined" && cr1 !== "undefined" && cr2 == "undefined" && cr3 == "undefined") {
        var cred1 = parseInt($(Cred1).html());

        var cred4 = cred1
        var crd1 = parseInt($(cr1).html());
        var crd4 = crd1;
        if (moyenUnites1 >= 10) {
            $(creditmodule).html(+cred4);
            return cred4;
        } else {}
        return $(creditmodule).html(+crd4);
        crd4;
    }


}

function ratraper(module1, module2, module3, moyenne_module1, moyenne_module2, moyenne_module3, moyenne_unit, moyennesemstre, moyenneGen) {

    if (moyennesemstre < 10) {

        if (module3 != "undefined") {

            if (moyenneGen < 10 && moyenne_unit < 10) {
                if (moyenne_module1 < 10) $('span', module1).removeClass('hidden');
                else $('span', module1).addClass('hidden');
                if (moyenne_module2 < 10) $('span', module2).removeClass('hidden');
                else $('span', module2).addClass('hidden');
                if (moyenne_module3 < 10) $('span', module3).removeClass('hidden');
                else $('span', module3).addClass('hidden');
            }
        } else {
            $('span', module1).addClass('hidden');
            $('span', module2).addClass('hidden');
            $('span', module3).addClass('hidden');

        }



        if (module3 == "undefined") {

            if (moyenne_unit < 10) {

                if (moyenne_module1 < 10) $('span', module1).removeClass('hidden');
                else $('span', module1).addClass('hidden');
                if (moyenne_module2 < 10) $('span', module2).removeClass('hidden');
                else $('span', module2).addClass('hidden');

            } else {
                $('span', module1).addClass('hidden');
                $('span', module2).addClass('hidden');
            }

        }
        if (module2 == "undefined") {
            if (moyenne_unit < 10) {
                if (moyenne_module1 < 10) $('span', module1).removeClass('hidden');
                else $('span', module1).addClass('hidden');


            }

        }




    } else {
        $('span').addClass('hidden');
    }




}


$("document").ready(function() {
    $('input').val(0);
    
});
















function main() {









    // Semstre 1 
    var moyenne_SE = moyennemodule("#tdSE", "#tpSE", "#exSE", "#moSE", "#crSE", "#CredSE");
    var moyenne_Comp = moyennemodule("#tdComp", "undefined", "#exComp", "#moComp", "#crComp", "#CredComp");
    var moyenne_prolog = moyennemodule("undefined", "#tpprolog", "#exprolog", "#moprolog", "#crprolog", "#Credprolog");
    var moyenne_GL2 = moyennemodule("#tdGL2", "#tpGL2", "#exGL2", "#moGL2", "#crGL2", "#CredGL2");
    var moyenne_IHM = moyennemodule("undefined", "#tpIHM", "#exIHM", "#moIHM", "#crIHM", "#CredIHM");
    var moyenne_PL = moyennemodule("#tdPL", "undefined", "#exPL", "#moPL", "#crPL", "#CredPL");
    var moyenne_IA = moyennemodule("#tdIA", "undefined", "#exIA", "#moIA", "#crIA", "#CredIA");
    var moyenne_ang = moyennemodule("undefined", "undefined", "#exAng", "#moAng", "#crAng", "#CredAng");
    var moyenne_Unites_fondamentale1_S1 = moyenneUnites(moyenne_SE, moyenne_Comp, moyenne_prolog, "#CoefSE", "#CoefComp", "#Coefprolog", "#MoynneU1");
    var moyenne_Unites_fondamentale2_S1 = moyenneUnites(moyenne_IHM, moyenne_GL2, "undefined", "#CoefIHM", "#CoefGL2", "undefined", "#MoynneU2");
    var moyenne_Unites_Méthodologie1 = moyenneUnites(moyenne_IA, moyenne_PL, "undefined", "#CoefIA", "#CoefPL", "undefined", "#MU3");
    var moyenne_Unites_Découverte1 = moyenneUnites(moyenne_ang, "undefined", "undefined", "#CoefAng", "undefined", "undefined", "#MU4");
    var Cred_Unites_fondamentale1_S1 = credUnites(moyenne_Unites_fondamentale1_S1, "#CredSE", "#CredComp", "#Credprolog", "#crSE", "#crComp", "#crprolog", "#CU1");
    var Cred_Unites_fondamentale2_S1 = credUnites(moyenne_Unites_fondamentale2_S1, "#CredIHM", "#CredGL2", "undefined", "#crIHM", "#crGL2", "undefined", "#CU2");
    var Cred_Unites_Méthodologie1 = credUnites(moyenne_Unites_Méthodologie1, "#CredIA", "#CredPL", "undefined", "#crIA", "#crPL", "undefined", "#CU3");
    var Cred_Unites_Découverte1 = credUnites(moyenne_Unites_Découverte1, "#CredAng", "undefined", "undefined", "#crAng", "undefined", "undefined", "#CU4");
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
    var lasomme_des_moyennemodule_S1 = moyenne_SE * parseInt($('#CoefSE').html()) + moyenne_Comp * parseInt($('#CoefComp').html()) + moyenne_GL2 * parseInt($('#CoefGL2').html()) + moyenne_prolog * parseInt($('#Coefprolog').html()) + moyenne_IHM * parseInt($('#CoefIHM').html()) + moyenne_PL * parseInt($('#CoefPL').html()) + moyenne_IA * parseInt($('#CoefIA').html()) +moyenne_ang*parseInt($('#CoefAng').html()) ;
    var lasomme_des_Coef_S1 = parseInt($('#CoefSE').html())  + parseInt($('#CoefComp').html()) + parseInt($('#CoefGL2').html())  + parseInt($('#Coefprolog').html()) + parseInt($('#CoefIHM').html()) + parseInt($('#CoefPL').html()) + parseInt($('#CoefIA').html()) +parseInt($('#CoefAng').html()) ;
    var moyenne_Semstre1 = lasomme_des_moyennemodule_S1 / lasomme_des_Coef_S1;



    $("#moyenneS1").html(+moyenne_Semstre1.toFixed(2));


    if (moyenne_Semstre1 >= 10) {
        var CredS1 = 30;
        $("#creditS1").html(+CredS1);

    } else {
        var CredS1 = parseInt($('#crSE').html()) + parseInt($('#crComp').html()) + parseInt($('#crGL2').html()) + parseInt($('#crprolog').html()) + parseInt($('#crIHM').html()) + parseInt($('#crPL').html()) + parseInt($('#crIA').html());

        $("#creditS1").html(+CredS1);;
    }
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



     ratraper("#SE", "#Comp", "#prolog", moyenne_SE, moyenne_Comp, moyenne_prolog, moyenne_Unites_fondamentale1_S1, moyenne_Semstre1, moyenne_genral);
     ratraper("#IHM", "#GL2", "undefined", moyenne_IHM, moyenne_GL2, "undefined", moyenne_Unites_fondamentale2_S1, moyenne_Semstre1, moyenne_genral);
     ratraper("#PL", "#IA", "undefined", moyenne_PL, moyenne_IA, "undefined", moyenne_Unites_Méthodologie1, moyenne_Semstre1, moyenne_genral);
     ratraper("#Ang", "undefined", "undefined", moyenne_ang, "undefined", "undefined", moyenne_Unites_Découverte1, moyenne_Semstre1, moyenne_genral);

     ratraper("#mobile", "#secu", "undefined", moyenne_mobile, moyenne_secu, "undefined", moyenne_Unites_fondamentale1_S2, moyenne_Semstre2, moyenne_genral);
     ratraper("#ABD", "#Crypto", "undefined", moyenne_ABD, moyenne_Crypto, "undefined", moyenne_Unites_fondamentale2_S2, moyenne_Semstre2, moyenne_genral);
     ratraper("#redaction", "undefined", "undefined", moyenne_redaction, "undefined", "undefined", moyenne_Unites_Méthodologie2, moyenne_Semstre2, moyenne_genral);
     ratraper("#projet", "undefined", "undefined", moyenne_projet, "undefined", "undefined", moyenne_Unites_Découverte2, moyenne_Semstre2, moyenne_genral);







}





$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
