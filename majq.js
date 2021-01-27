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
        var moyenne = note_td * 0.2 + note_tp * 0.2 + note_exam * 0.6;
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
        var moyenne = note_td * 0.4 + note_exam * 0.6;
        if (moyenne >= 10) $(crmodule).html(+cred)
        else $(crmodule).html("0");
        $(momodule).html(+moyenne.toFixed(2));
        return moyenne.toFixed(2);

    }
    if (td == "undefined" && tp !== "undefined") {
        var note_tp = $(tp).val();
        var note_exam = $(exam).val();
        var moyenne = note_tp * 0.4 + note_exam * 0.6;
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
    var moyenne_Analyse1 = moyennemodule("#tdAnalyse1", "undefined", "#exAnalyse1", "#moAnalyse1", "#crAnalyse1", "#CredAnalyse1");
    var moyenne_Algebre1 = moyennemodule("#tdAlgebre1", "undefined", "#exAlgebre1", "#moAlgebre1", "#crAlgebre1", "#CredAlgebre1");
    var moyenne_Algo1 = moyennemodule("#tdAlgo1", "#tpAlgo1", "#exAlgo1", "#moAlgo1", "#crAlgo1", "#CredAlgo1");
    var moyenne_Strm1 = moyennemodule("#tdStrm1", "undefined", "#exStrm1", "#moStrm1", "#crStrm1", "#CredStrm1");
    var moyenne_Te = moyennemodule("undefined", "undefined", "#exTe", "#moTe", "#crTe", "#CredTe");
    var moyenne_Le = moyennemodule("undefined", "undefined", "#exLe", "#moLe", "#crLe", "#CredLe");
    var moyenne_Phy1 = moyennemodule("#tdPhy1", "undefined", "#exPhy1", "#moPhy1", "#crPhy1", "#CredPhy1");
    var moyenne_Unites_fondamentale1_S1 = moyenneUnites(moyenne_Analyse1, moyenne_Algebre1, "undefined", "#CoefAnalyse1", "#CoefAlgebre1", "undefined", "#MoynneU1");
    var moyenne_Unites_fondamentale2_S1 = moyenneUnites(moyenne_Algo1, moyenne_Strm1, "undefined", "#CoefAlgo1", "#CoefStrm1", "undefined", "#MoynneU2");
    var moyenne_Unites_Méthodologie1 = moyenneUnites(moyenne_Te, moyenne_Le, "undefined", "#CoefTe", "#CoefLe", "undefined", "#MU3");
    var moyenne_Unites_Découverte1 = moyenneUnites(moyenne_Phy1, "undefined", "undefined", "#CoefPhy1", "undefined", "undefined", "#MU4");
    var Cred_Unites_fondamentale1_S1 = credUnites(moyenne_Unites_fondamentale1_S1, "#CredAnalyse1", "#CredAlgebre1", "undefined", "#crAnalyse1", "#crAlgebre1", "undefined", "#CU1");
    var Cred_Unites_fondamentale2_S1 = credUnites(moyenne_Unites_fondamentale2_S1, "#CredAlgo1", "#CredStrm1", "undefined", "#crAlgo1", "#crStrm1", "undefined", "#CU2");
    var Cred_Unites_Méthodologie1 = credUnites(moyenne_Unites_Méthodologie1, "#CredTe", "#CredLe", "undefined", "#crTe", "#crLe", "undefined", "#CU3");
    var Cred_Unites_Découverte1 = credUnites(moyenne_Unites_Découverte1, "#CredPhy1", "undefined", "undefined", "#crPhy1", "undefined", "undefined", "#CU4");
    // Semstre 2 
    var moyenne_Analyse2 = moyennemodule("#tdAnalyse2", "undefined", "#exAnalyse2", "#moAnalyse2", "#crAnalyse2", "#CredAnalyse2");
    var moyenne_Algebre2 = moyennemodule("#tdAlgebre2", "undefined", "#exAlgebre2", "#moAlgebre2", "#crAlgebre2", "#CredAlgebre2");
    var moyenne_Algo2 = moyennemodule("#tdAlgo2", "#tpAlgo2", "#exAlgo2", "#moAlgo2", "#crAlgo2", "#CredAlgo2");
    var moyenne_Strm2 = moyennemodule("#tdStrm2", "undefined", "#exStrm2", "#moStrm2", "#crStrm2", "#CredStrm2");
    var moyenne_Proba = moyennemodule("#tdProba", "undefined", "#exProba", "#moProba", "#crProba", "#CredProba");
    var moyenne_Tic = moyennemodule("undefined", "undefined", "#exTic", "#moTic", "#crTic", "#CredTic");
    var moyenne_Opt = moyennemodule("undefined", "#tpOpt", "#exOpt", "#moOpt", "#crOpt", "#CredOpt");
    var moyenne_Phy2 = moyennemodule("#tdPhy2", "undefined", "#exPhy2", "#moPhy2", "#crPhy2", "#CredPhy2");
    var moyenne_Unites_fondamentale1_S2 = moyenneUnites(moyenne_Analyse2, moyenne_Algebre2, "undefined", "#CoefAnalyse2", "#CoefAlgebre2", "undefined", "#MoynneU1S2");
    var moyenne_Unites_fondamentale2_S2 = moyenneUnites(moyenne_Algo2, moyenne_Strm2, "undefined", "#CoefAlgo2", "#CoefStrm2", "undefined", "#MoynneU2S2");
    var moyenne_Unites_Méthodologie2 = moyenneUnites(moyenne_Proba, moyenne_Tic, moyenne_Opt, "#CoefProba", "#CoefTic", "#CoefOpt", "#MoynneU3S2");
    var moyenne_Unites_Découverte2 = moyenneUnites(moyenne_Phy2, "undefined", "undefined", "#CoefPhy2", "undefined", "undefined", "#MoynneU4S2");
    var Cred_Unites_fondamentale1_S2 = credUnites(moyenne_Unites_fondamentale1_S2, "#CredAnalyse2", "#CredAlgebre2", "undefined", "#crAnalyse2", "#crAlgebre2", "undefined", "#CU1_S2");
    var Cred_Unites_fondamentale2_S2 = credUnites(moyenne_Unites_fondamentale2_S2, "#CredAlgo2", "#CredStrm2", "undefined", "#crAlgo2", "#crStrm2", "undefined", "#CU2_S2");
    var Cred_Unites_Méthodologie2 = credUnites(moyenne_Unites_Méthodologie2, "#CredProba", "#CredTic", "#CredOpt", "#crProba", "#crTic", "#crOpt", "#CU3_S2");
    var Cred_Unites_Découverte2 = credUnites(moyenne_Unites_Découverte2, "#CredPhy2", "undefined", "undefined", "#crPhy2", "undefined", "undefined", "#CU4_S2");
    //Genral 
    //-----------------------
    //Semstre1
    var lasomme_des_moyennemodule_S1 = moyenne_Analyse1 * parseInt($('#CoefAnalyse1').html()) + moyenne_Algebre1 * parseInt($('#CoefAlgebre1').html()) + moyenne_Strm1 * parseInt($('#CoefStrm1').html()) + moyenne_Algo1 * parseInt($('#CoefAlgo1').html()) + moyenne_Te * parseInt($('#CoefTe').html()) + moyenne_Le * parseInt($('#CoefLe').html()) + moyenne_Phy1 * parseInt($('#CoefPhy1').html())
    var lasomme_des_Coef_S1 = parseInt($('#CoefAnalyse1').html()) + parseInt($('#CoefAlgebre1').html()) + parseInt($('#CoefStrm1').html()) + parseInt($('#CoefAlgo1').html()) + parseInt($('#CoefTe').html()) + parseInt($('#CoefLe').html()) + parseInt($('#CoefPhy1').html());
    var moyenne_Semstre1 = lasomme_des_moyennemodule_S1 / lasomme_des_Coef_S1;
    $("#moyenneS1").html(+moyenne_Semstre1.toFixed(2));


    if (moyenne_Semstre1 >= 10) {
        var CredS1 = 30;
        $("#creditS1").html(+CredS1);

    } else {
        var CredS1 = parseInt($('#crAnalyse1').html()) + parseInt($('#crAlgebre1').html()) + parseInt($('#crStrm1').html()) + parseInt($('#crAlgo1').html()) + parseInt($('#crTe').html()) + parseInt($('#crLe').html()) + parseInt($('#crPhy1').html());

        $("#creditS1").html(+CredS1);;
    }
    //Semstre2
    var lasomme_des_moyennemodule_S2 = moyenne_Analyse2 * parseInt($('#CoefAnalyse2').html()) + moyenne_Algebre2 * parseInt($('#CoefAlgebre2').html()) + moyenne_Strm2 * parseInt($('#CoefStrm2').html()) + moyenne_Algo2 * parseInt($('#CoefAlgo2').html()) + moyenne_Proba * parseInt($('#CoefProba').html()) + moyenne_Tic * parseInt($('#CoefTic').html()) + moyenne_Phy2 * parseInt($('#CoefPhy2').html()) + moyenne_Opt * parseInt($('#CoefOpt').html());
    var lasomme_des_Coef_S2 = parseInt($('#CoefAnalyse2').html()) + parseInt($('#CoefAlgebre2').html()) + parseInt($('#CoefStrm2').html()) + parseInt($('#CoefAlgo2').html()) + parseInt($('#CoefProba').html()) + parseInt($('#CoefTic').html()) + parseInt($('#CoefPhy2').html()) + parseInt($('#CoefOpt').html());
    var moyenne_Semstre2 = lasomme_des_moyennemodule_S2 / lasomme_des_Coef_S2;
    $("#moyenneS2").html(+moyenne_Semstre2.toFixed(2));


    if (moyenne_Semstre2 >= 10) {
        var CredS2 = 30;
        $("#creditS2").html(+CredS2);

    } else {
        var CredS2 = parseInt($('#crAnalyse2').html()) + parseInt($('#crAlgebre2').html()) + parseInt($('#crStrm2').html()) + parseInt($('#crAlgo2').html()) + parseInt($('#crProba').html()) + parseInt($('#crTic').html()) + parseInt($('#crOpt').html()) + parseInt($('#crPhy2').html());

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



    ratraper("#Analyse1", "#Algebre1", "undefined", moyenne_Analyse1, moyenne_Algebre1, "undefined", moyenne_Unites_fondamentale1_S1, moyenne_Semstre1, moyenne_genral);
    ratraper("#Algo1", "#Strm1", "undefined", moyenne_Algo1, moyenne_Strm1, "undefined", moyenne_Unites_fondamentale2_S1, moyenne_Semstre1, moyenne_genral);
    ratraper("#Te", "#Le", "undefined", moyenne_Te, moyenne_Le, "undefined", moyenne_Unites_Méthodologie1, moyenne_Semstre1, moyenne_genral);
    ratraper("#Phy1", "undefined", "undefined", moyenne_Phy1, "undefined", "undefined", moyenne_Unites_Découverte1, moyenne_Semstre1, moyenne_genral);

    ratraper("#Analyse2", "#Algebre2", "undefined", moyenne_Analyse2, moyenne_Algebre2, "undefined", moyenne_Unites_fondamentale1_S2, moyenne_Semstre2, moyenne_genral);
    ratraper("#Algo2", "#Strm2", "undefined", moyenne_Algo2, moyenne_Strm2, "undefined", moyenne_Unites_fondamentale2_S2, moyenne_Semstre2, moyenne_genral);
    ratraper("#Proba", "#Opm", "#Tic", moyenne_Proba, moyenne_Opt, moyenne_Tic, moyenne_Unites_Méthodologie2, moyenne_Semstre2, moyenne_genral);
    ratraper("#Phy2", "undefined", "undefined", moyenne_Phy2, "undefined", "undefined", moyenne_Unites_Découverte2, moyenne_Semstre2, moyenne_genral);







}





$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
