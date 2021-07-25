class Module{
    constructor(name, coef, cred, poids)
    {
        // nom du module
        this.name = name;
        // coef
        this.coef = coef;
        // credit de la matière max
        this.credit = cred;
        // poids des controle [numerique : cours, td, tp]
        // permet de configurer le module et son formule de CC
    // poids est un array de trois valeurs entre 0 et 100; represente
    // le pourcentage des Exam, TD, TP
    // par example : 
    // [100, 0, 0] => module avec examen 100%
    // [60, 20, 20] => module avec examen 60% et TD + TP
    // [60, 0, 40] => module avec exame 60% et un TP
        this.poids = poids;
        this.poids_tp = poids[2]/100;
        this.poids_td = poids[1]/100;
        this.poids_exam = poids[0]/100;
        // notes
        //~ this.note_tp = 0;
        //~ this.note_td = 0;
        //~ this.note_exam = 0;
        this.moy = 0;
    }
    calcul_moy(){
     var moy = 0;  
    if(this.poids_tp >  0)
        moy += this.get_note("tp") * this.poids_tp; 
    if(this.poids_td >  0)
        moy += this.get_note("td") * this.poids_td; 
    if(this.poids_exam >  0)
        moy += this.get_note("exam")* this.poids_exam; 
    
   return moy;
    }
    // return the given note
    get_note(kind)
    { // get the value from html element
     if((kind =="tp") && (this.poids_tp > 0))
          return $("#tp"+this.name).val();
     if((kind =="td") && (this.poids_td > 0))
          return $("#td"+this.name).val();
     if((kind =="exam") && (this.poids_exam > 0))
          return $("#ex"+this.name).val();
    }
    
    // set the credit
    set_credit(moy)
    {
        // if the moyen is up to 10 set up the credit
    if (moy >= 10) 
        $("#cr"+this.name).html(+this.credit)
    else $("#cr"+this.name).html("0"); 
    }
    // set the moyenne
    set_moy(moy)
    {
        // display moy
        $("#mo"+this.name).html(+moy.toFixed(2))
    }
    
}

//~ function moyennemodule2(module, poids) {
function moyennemodule2(module_obj) {
    // list of ids
    var module = module_obj.name;
    var poids = module_obj.poids;
    // html items' IDs
    var exam = "#ex"+module;
    var tp = "#tp"+module;
    var td = "#td"+module;
    var momodule = "#mo"+module;
    // crédit de la matière
    var crmodule = "#cr"+module; 
    // credit obtenu
    var Credmodule = "#Cred"+module; 
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

    // poids est un array de trois valeurs entre 0 et 100; represente
    // le pourcentage des Exam, TD, TP
    // par example : 
    // [100, 0, 0] => module avec examen 100%
    // [60, 20, 20] => module avec examen 60% et TD + TP
    // [60, 0, 40] => module avec exame 60% et un TP
    //~ var poids_tp = poids[2]/100;
    //~ var poids_td = poids[1]/100;
    //~ var poids_exam = poids[0]/100;
    //~ if(poids_tp >  0)
        //~ moy += $(tp).val() * poids_tp; 
    //~ if(poids_td >  0)
        //~ moy += $(td).val() * poids_td; 
    //~ if(poids_exam >  0)
        //~ moy += $(exam).val() * poids_exam; 
    //~ var moy = 0;
    //~ if(module_obj.poids_tp >  0)
        //~ moy += $(tp).val() * module_obj.poids_tp; 
    //~ if(module_obj.poids_td >  0)
        //~ moy += $(td).val() * module_obj.poids_td; 
    //~ if(module_obj.poids_exam >  0)
        //~ moy += $(exam).val() * module_obj.poids_exam; 
    
    var moy = module_obj.calcul_moy();
    //~ if (moy >= 10) 
        //~ $(crmodule).html(+cred)
    //~ else $(crmodule).html("0");
    module_obj.set_credit(moy);
    module_obj.set_moy(moy);
    //~ $(momodule).html(+moy.toFixed(2));
    return moy.toFixed(2);
    //~ // TD + TP + Examn
    //~ if (td !== "undefined" && tp !== "undefined") {
        //~ var note_td = $(td).val();
        //~ var note_tp = $(tp).val();
        //~ var note_exam = $(exam).val();
        //~ var moyenne = note_td*0.2 + note_tp*0.2 + note_exam * 0.6;
        //~ if (moyenne >= 10) $(crmodule).html(+cred)
        //~ else $(crmodule).html("0");
        //~ $(momodule).html(+moyenne.toFixed(2));
        //~ return moyenne.toFixed(2);

    //~ }
    //~ // Examn    
    //~ if (td == "undefined" && tp == "undefined") {

        //~ var note_exam = $(exam).val();
        //~ var moyenne = note_exam;
        //~ if (moyenne >= 10) $(crmodule).html($(Credmodule).html());
        //~ else $(crmodule).html("0");
        //~ $(momodule).html(+moyenne);
        //~ return moyenne;

    //~ }
    //~ // TD + Examn    
    //~ if (td !== "undefined" && tp == "undefined") {
        //~ var note_td = $(td).val();

        //~ var note_exam = $(exam).val();
        //~ var moyenne = note_td * 0.4 + note_exam * 0.6;
        //~ if (moyenne >= 10) $(crmodule).html(+cred)
        //~ else $(crmodule).html("0");
        //~ $(momodule).html(+moyenne.toFixed(2));
        //~ return moyenne.toFixed(2);

    //~ }
    //~ // TP + Examn     
    //~ if (td == "undefined" && tp !== "undefined") {
        //~ var note_tp = $(tp).val();
        //~ var note_exam = $(exam).val();
        //~ var moyenne = note_tp * 0.4 + note_exam * 0.6;
        //~ if (moyenne >= 10) $(crmodule).html(+cred)
        //~ else $(crmodule).html("0");
        //~ $(momodule).html(+moyenne.toFixed(2));
        //~ return moyenne.toFixed(2);

    //~ }

}

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


    // TD + TP + Examn
    if (td !== "undefined" && tp !== "undefined") {
        var note_td = $(td).val();
        var note_tp = $(tp).val();
        var note_exam = $(exam).val();
        var moyenne = note_td*0.2 + note_tp*0.2 + note_exam * 0.6;
        if (moyenne >= 10) $(crmodule).html(+cred)
        else $(crmodule).html("0");
        $(momodule).html(+moyenne.toFixed(2));
        return moyenne.toFixed(2);

    }
    // Examn    
    if (td == "undefined" && tp == "undefined") {

        var note_exam = $(exam).val();
        var moyenne = note_exam;
        if (moyenne >= 10) $(crmodule).html($(Credmodule).html());
        else $(crmodule).html("0");
        $(momodule).html(+moyenne);
        return moyenne;

    }
    // TD + Examn    
    if (td !== "undefined" && tp == "undefined") {
        var note_td = $(td).val();

        var note_exam = $(exam).val();
        var moyenne = note_td * 0.4 + note_exam * 0.6;
        if (moyenne >= 10) $(crmodule).html(+cred)
        else $(crmodule).html("0");
        $(momodule).html(+moyenne.toFixed(2));
        return moyenne.toFixed(2);

    }
    // TP + Examn     
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
        //~ crd4;

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
        //~ crd4;
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
        //~ crd4;
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
    //~ var moyenne_SE = moyennemodule("#tdSE", "#tpSE", "#exSE", "#moSE", "#crSE", "#CredSE");
    // 
    var module_se = new Module("SE", 3, 5, [60,20,20]);
    //~ var moyenne_SE = moyennemodule2("SE", [0,100,0]);
    //~ var moyenne_SE = moyennemodule2(module_se.name, module_se.poids);
    var moyenne_SE = moyennemodule2(module_se);
    var moyenne_Comp = moyennemodule("#tdComp", "undefined", "#exComp", "#moComp", "#crComp", "#CredComp");
    //var moyenne_prolog = moyennemodule("undefined", "#tpprolog", "#exprolog", "#moprolog", "#undefined", "#undefined");
    var moyenne_GL2 = moyennemodule("#tdGL2", "#tpGL2", "#exGL2", "#moGL2", "#crGL2", "#CredGL2");
    var moyenne_IHM = moyennemodule("undefined", "#tpIHM", "#exIHM", "#moIHM", "#crIHM", "#CredIHM");
    var moyenne_PL = moyennemodule("#tdPL", "undefined", "#exPL", "#moPL", "#crPL", "#CredPL");
    var moyenne_Proba = moyennemodule("#tdProba", "undefined", "#exProba", "#moProba", "#crProba", "#CredProba");
    var moyenne_ang = moyennemodule("undefined", "undefined", "#tdEconum", "#moEconum", "#crEconum", "#CredEconum");

    // unites
    var moyenne_Unites_fondamentale1_S1 = moyenneUnites(moyenne_SE, moyenne_Comp, "undefined","#CoefSE", "#CoefComp","undefined","#MoynneU1");
    
    var moyenne_Unites_fondamentale2_S1 = moyenneUnites(moyenne_IHM, moyenne_GL2, "undefined", "#CoefIHM", "#CoefGL2", "undefined", "#MoynneU2");
    var moyenne_Unites_Méthodologie1 = moyenneUnites(moyenne_Proba, moyenne_PL, "undefined", "#CoefProba", "#CoefPL", "undefined", "#MU3");
    var moyenne_Unites_Découverte1 = moyenneUnites(moyenne_ang, "undefined", "undefined", "#CoefEconum", "undefined", "undefined", "#MU4");
    
    var Cred_Unites_fondamentale1_S1 = credUnites(moyenne_Unites_fondamentale1_S1, "#CredSE", "#CredComp", "#undefined", "#crSE", "#crComp", "#undefined", "#CU1");
    var Cred_Unites_fondamentale2_S1 = credUnites(moyenne_Unites_fondamentale2_S1, "#CredIHM", "#CredGL2", "undefined", "#crIHM", "#crGL2", "undefined", "#CU2");
    var Cred_Unites_Méthodologie1 = credUnites(moyenne_Unites_Méthodologie1, "#CredProba", "#CredPL", "undefined", "#crProba", "#crPL", "undefined", "#CU3");
    var Cred_Unites_Découverte1 = credUnites(moyenne_Unites_Découverte1, "#CredEconum", "undefined", "undefined", "#crEconum", "undefined", "undefined", "#CU4");
    
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
    var lasomme_des_moyennemodule_S1 = moyenne_SE * parseInt($('#CoefSE').html()) + moyenne_Comp * parseInt($('#CoefComp').html()) + moyenne_GL2 * parseInt($('#CoefGL2').html()) +  moyenne_IHM * parseInt($('#CoefIHM').html()) + moyenne_PL * parseInt($('#CoefPL').html()) + moyenne_Proba * parseInt($('#CoefProba').html()) +moyenne_ang*parseInt($('#CoefEconum').html()) ;
    var lasomme_des_Coef_S1 = parseInt($('#CoefSE').html())  + parseInt($('#CoefComp').html()) + parseInt($('#CoefGL2').html())  + parseInt($('#Coefprolog').html()) + parseInt($('#CoefIHM').html()) + parseInt($('#CoefPL').html()) + parseInt($('#CoefProba').html()) +parseInt($('#CoefEconum').html()) ;
    var moyenne_Semstre1 = lasomme_des_moyennemodule_S1 / lasomme_des_Coef_S1;



    $("#moyenneS1").html(+moyenne_Semstre1.toFixed(2));


    if (moyenne_Semstre1 >= 10) {
        var CredS1 = 30;
        $("#creditS1").html(+CredS1);

    } else {
        var CredS1 = parseInt($('#crSE').html()) + parseInt($('#crComp').html()) + parseInt($('#crGL2').html()) + parseInt($('#undefined').html()) + parseInt($('#crIHM').html()) + parseInt($('#crPL').html()) + parseInt($('#crProba').html());

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



     ratraper("#SE", "#Comp", "undefined", moyenne_SE, moyenne_Comp, "undefined", moyenne_Unites_fondamentale1_S1, moyenne_Semstre1, moyenne_genral);
     ratraper("#IHM", "#GL2", "undefined", moyenne_IHM, moyenne_GL2, "undefined", moyenne_Unites_fondamentale2_S1, moyenne_Semstre1, moyenne_genral);
     ratraper("#PL", "#Proba", "undefined", moyenne_PL, moyenne_Proba, "undefined", moyenne_Unites_Méthodologie1, moyenne_Semstre1, moyenne_genral);
     ratraper("#Econum", "undefined", "undefined", moyenne_ang, "undefined", "undefined", moyenne_Unites_Découverte1, moyenne_Semstre1, moyenne_genral);

     ratraper("#mobile", "#secu", "undefined", moyenne_mobile, moyenne_secu, "undefined", moyenne_Unites_fondamentale1_S2, moyenne_Semstre2, moyenne_genral);
     ratraper("#ABD", "#Crypto", "undefined", moyenne_ABD, moyenne_Crypto, "undefined", moyenne_Unites_fondamentale2_S2, moyenne_Semstre2, moyenne_genral);
     ratraper("#redaction", "undefined", "undefined", moyenne_redaction, "undefined", "undefined", moyenne_Unites_Méthodologie2, moyenne_Semstre2, moyenne_genral);
     ratraper("#projet", "undefined", "undefined", moyenne_projet, "undefined", "undefined", moyenne_Unites_Découverte2, moyenne_Semstre2, moyenne_genral);







}





$(document).click(main);
$(document).keypress(function(e) {
    if (e.keyCode == 13) { main() }
});
