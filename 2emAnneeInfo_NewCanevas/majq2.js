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
        var moyenne = (note_td * 0.2 + note_tp * 0.2 + note_exam * 0.6);
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

        var moyenne = (note_td * 0.4) + (note_exam * 0.6);
        if (moyenne >= 10) $(crmodule).html(+cred)
        else $(crmodule).html("0");
        $(momodule).html(+moyenne.toFixed(2));
        return moyenne.toFixed(2);

    }
    if (td == "undefined" && tp !== "undefined") {
        var note_tp = $(tp).val();

        var note_exam = $(exam).val();
        var moyenne = (note_tp * 0.4) + (note_exam * 0.6);
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

    if (moyenneGen < 10) {
        console.log('moyenne gen');
        if (moyennesemstre < 10) {
            console.log('moyenne semstre');
            if (moyenne_unit < 10) {
                console.log('moyenne UNitese');
                if (moyenne_module1 < 10) $('span', module1).removeClass('hidden');
                else $('span', module1).addClass('hidden');
                if (moyenne_module2 < 10) $('span', module2).removeClass('hidden');
                else $('span', module2).addClass('hidden');
                if (moyenne_module3 < 10) $('span', module3).removeClass('hidden');
                else $('span', module3).addClass('hidden');
            } else {
                $('span', module1).addClass('hidden');
                $('span', module2).addClass('hidden');
                $('span', module3).addClass('hidden');
            }
        } else {
            $('span', module1).addClass('hidden');
            $('span', module2).addClass('hidden');
            $('span', module3).addClass('hidden');


        } // moyenne semstre


    } else {

        $('span').addClass('hidden');
    } // moyenne genral



}




function main() {









    // Semstre 1 
    var moyenne_Archi = moyennemodule("#tdArchi", "#tpArchi", "#exArchi", "#moArchi", "#crArchi", "#CredArchi");
    var moyenne_Asd = moyennemodule("#tdAsd", "#tpAsd", "#exAsd", "#moAsd", "#crAsd", "#CredAsd");
    var moyenne_Tg = moyennemodule("#tdTg", "undefined", "#exTg", "#moTg", "#crTg", "#CredTg");
    var moyenne_Si = moyennemodule("#tdSi", "#tpSi", "#exSi", "#moSi", "#crSi", "#CredSi");

    var moyenne_Mn = moyennemodule("#tdMn", "undefined", "#exMn", "#moMn", "#crMn", "#CredMn");
    var moyenne_Log = moyennemodule("#tdLog", "undefined", "#exLog", "#moLog", "#crLog", "#CredLog");
    var moyenne_Ang1 = moyennemodule("undefined", "undefined", "#exAng1", "#moAng1", "#crAng1", "#CredAng1");
    var moyenne_Unites_fondamentale1_S1 = moyenneUnites(moyenne_Archi, moyenne_Asd, "undefined", "#CoefArchi", "#CoefAsd", "undefined", "#MoynneU1");
    var moyenne_Unites_fondamentale2_S1 = moyenneUnites(moyenne_Si, moyenne_Tg, "undefined", "#CoefSi", "#CoefTg", "undefined", "#MoynneU2");
    var moyenne_Unites_Méthodologie1 = moyenneUnites(moyenne_Mn, moyenne_Log, "undefined", "#CoefMn", "#CoefLog", "undefined", "#MoynneU3");
    var moyenne_Unites_Transversale = moyenneUnites(moyenne_Ang1, "undefined", "undefined", "#CoefAng1", "undefined", "undefined", "#MU3");
    var Cred_Unites_fondamentale1_S1 = credUnites(moyenne_Unites_fondamentale1_S1, "#CredArchi", "#CredAsd", "undefined", "#crArchi", "#crAsd", "undefined", "#CU1");
    var Cred_Unites_fondamentale2_S1 = credUnites(moyenne_Unites_fondamentale2_S1, "#CredSi", "#CredTg", "undefined", "#crSi", "#crTg", "undefined", "#CU2");
    var Cred_Unites_Méthodologie1 = credUnites(moyenne_Unites_Méthodologie1, "#CredMn", "#CredLog", "undefined", "#crMn", "#crLog", "undefined", "#CU3");

    var Cred_Unites_Transversale1 = credUnites(moyenne_Unites_Méthodologie1, "#CredAng1", "undefined", "undefined", "#crAng1", "undefined", "undefined", "#CU4");




    // Semstre 2 
    var moyenne_BDD = moyennemodule("#tdBDD", "#tpBDD", "#exBDD", "#moBDD", "#crBDD", "#CredBDD");
    var moyenne_Poo = moyennemodule("undefined", "#tpPoo", "#exPoo", "#moPoo", "#crPoo", "#CredPoo");
    var moyenne_Se = moyennemodule("#tdSe", "#tpSe", "#exSe", "#moSe", "#crSe", "#CredSe");
    var moyenne_Thl = moyennemodule("#tdThl", "#tpThl", "#exThl", "#moThl", "#crThl", "#CredThl");
    var moyenne_Res = moyennemodule("#tdRes", "#tpRes", "#exRes", "#moRes", "#crRes", "#CredRes");
    var moyenne_Web = moyennemodule("undefined", "#tpWeb", "#exWeb", "#moWeb", "#crWeb", "#CredWeb");
    var moyenne_Ang2 = moyennemodule("undefined", "undefined", "#exAng2", "#moAng2", "#crAng2", "#CredAng2");

    var moyenne_Unites_fondamentale2_S2 = moyenneUnites(moyenne_Thl, moyenne_Se, "undefined", "#CoefThl", "#CoefSe", "undefined", "#MoynneU1S2");
    var moyenne_Unites_fondamentale1_S2 = moyenneUnites(moyenne_BDD, moyenne_Res, "undefined", "#CoefBDD", "#CoefRes", "undefined", "#MoynneU2S2");
    var moyenne_Unites_Méthodologie2 = moyenneUnites(moyenne_Poo, moyenne_Web, "undefined", "#CoefPoo", "#CoefWeb", "undefined", "#MU3S2");
    var moyenne_Unites_Transversale2 = moyenneUnites(moyenne_Ang2, "undefined", "undefined", "#CoefAng2", "undefined", "undefined", "#MU4S2");

    var Cred_Unites_fondamentale1_S2 = credUnites(moyenne_Unites_fondamentale1_S2, "#CredBDD", "#CredRes", "undefined", "#crBDD", "#crRes", "undefined", "#CU1_S2");
    var Cred_Unites_fondamentale2_S2 = credUnites(moyenne_Unites_fondamentale2_S2, "#CredThl", "#CredSe", "undefined", "#crThl", "#crSe", "undefined", "#CU2_S2");
    var Cred_Unites_Méthodologie2 = credUnites(moyenne_Unites_Méthodologie2, "#CredPoo", "#CredWeb", "undefined", "#crPoo", "#crWeb", "undefined", "#CU3_S2");
    var Cred_Unites_Transversale2 = credUnites(moyenne_Unites_Transversale2, "#CredAng2", "undefined", "undefined", "#crAng2", "undefined", "undefined", "#CU4_S2");


    //Genral 
    //-----------------------
    //Semstre1
    var lasomme_des_moyennemodule_S1 = moyenne_Archi * parseInt($('#CoefArchi').html()) + moyenne_Asd * parseInt($('#CoefAsd').html()) + moyenne_Si * parseInt($('#CoefSi').html()) + moyenne_Log * parseInt($('#CoefLog').html()) + moyenne_Ang1 * parseInt($('#CoefAng1').html()) +
        moyenne_Tg * parseInt($('#CoefTg').html()) + moyenne_Mn * parseInt($('#CoefMn').html());
    var lasomme_des_Coef_S1 = parseInt($('#CoefArchi').html()) + parseInt($('#CoefAsd').html()) + parseInt($('#CoefLog').html()) + parseInt($('#CoefSi').html()) + parseInt($('#CoefAng1').html()) + parseInt($('#CoefMn').html()) + parseInt($('#CoefTg').html());
    var moyenne_Semstre1 = lasomme_des_moyennemodule_S1 / lasomme_des_Coef_S1;
    $("#moyenneS1").html(+moyenne_Semstre1.toFixed(2));


    if (moyenne_Semstre1 >= 10) {
        var CredS1 = 30;
        $("#creditS1").html(+CredS1);

    } else {
        var CredS1 = parseInt($('#crArchi').html()) + parseInt($('#crAsd').html()) + parseInt($('#crLog').html()) + parseInt($('#crSi').html()) + parseInt($('#crAng1').html()) + parseInt($('#crMn').html()) + parseInt($('#crTg').html());
        $("#creditS1").html(+CredS1);;
    }

    //Semstre2
    var lasomme_des_moyennemodule_S2 = moyenne_BDD * parseInt($('#CoefBDD').html()) + moyenne_Se * parseInt($('#CoefSe').html()) + moyenne_Res * parseInt($('#CoefRes').html()) + moyenne_Web * parseInt($('#CoefWeb').html()) + moyenne_Ang2 * parseInt($('#CoefAng2').html()) + moyenne_Thl * parseInt($('#CoefThl').html()) + moyenne_Poo * parseInt($('#CoefPoo').html());
    var lasomme_des_Coef_S2 = parseInt($('#CoefBDD').html()) + parseInt($('#CoefSe').html()) + parseInt($('#CoefRes').html()) + parseInt($('#CoefWeb').html()) + parseInt($('#CoefAng2').html()) + parseInt($('#CoefThl').html()) + parseInt($('#CoefPoo').html())
    var moyenne_Semstre2 = lasomme_des_moyennemodule_S2 / lasomme_des_Coef_S2;
    $("#moyenneS2").html(+moyenne_Semstre2.toFixed(2));


    if (moyenne_Semstre2 >= 10) {
        var CredS2 = 30;
        $("#creditS2").html(+CredS2);

    } else {
        var CredS2 = parseInt($('#crBDD').html()) + parseInt($('#crSe').html()) + parseInt($('#crRes').html()) + parseInt($('#crWeb').html()) + parseInt($('#crAng2').html()) + parseInt($('#crThl').html()) + parseInt($('#crPoo').html());

        $("#creditS2").html(+CredS2);;
    }
    //------------------------------------------------------

    var moyenne_genral = (moyenne_Semstre1 + moyenne_Semstre2) / 2;
    $("#moyenneGen").html(+moyenne_genral.toFixed(2));
    if (moyenne_genral >= 10) {
        var CredGen = 60;
        $("#creditGen").html(+CredGen);

    } else {
        var CredGen = CredS2 + CredS1;
        $("#creditGen").html(+CredGen);

    }
    ratraper("#Archi", "#Asd", "undefined", moyenne_Archi, moyenne_Asd, "undefined", moyenne_Unites_fondamentale1_S1, moyenne_Semstre1, moyenne_genral);
    ratraper("#Tg", "#Si", "undefined", moyenne_Tg, moyenne_Si, "undefined", moyenne_Unites_fondamentale2_S1, moyenne_Semstre1, moyenne_genral);
    ratraper("#Mn", "#Log", "undefined", moyenne_Mn, moyenne_Log, "undefined", moyenne_Unites_Méthodologie1, moyenne_Semstre1, moyenne_genral);
    ratraper("#Ang1", "undefined", "undefined", moyenne_Ang1, "undefined", "undefined", moyenne_Unites_Transversale, moyenne_Semstre1, moyenne_genral);

    ratraper("#Thl", "#Se", "undefined", moyenne_Thl, moyenne_Se, "undefined", moyenne_Unites_fondamentale2_S2, moyenne_Semstre2, moyenne_genral);
    ratraper("#Bdd", "#Res", "undefined", moyenne_BDD, moyenne_Res, "undefined", moyenne_Unites_fondamentale1_S2, moyenne_Semstre2, moyenne_genral);
    ratraper("#Poo", "#Web", "undefined", moyenne_Poo, moyenne_Web, "undefined", moyenne_Unites_Méthodologie2, moyenne_Semstre2, moyenne_genral);
    ratraper("#Ang2", "undefined", "undefined", moyenne_Ang2, "undefined", "undefined", moyenne_Unites_Transversale2, moyenne_Semstre2, moyenne_genral);



};

$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});