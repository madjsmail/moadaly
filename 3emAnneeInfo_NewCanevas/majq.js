
class Semestre{
  constructor(name, unites)
    {
        this.name = name;
        this.unites = unites;
    } 
    calcul_moy()
    {
        var moy = 0;
        var total_notes = 0;
        var total_coef = 0;
        for(let i =0; i < this.unites.length;i++)
        {
            //console.log(this.modules[i].name);
            total_coef += this.unites[i].coef;
            total_notes += this.unites[i].calcul_moy()*this.unites[i].coef;
        }
        moy = total_notes / total_coef;
        //console.log(moy);
    return moy;
    }
    set_credits(moy)
    {
        // if moy is up to 10, get all credits
        var total_credits = 0;

        for(let i =0; i < this.unites.length;i++)
        {

            var moy_unite = this.unites[i].moy;

            // setup credit for the module if the unit moy is up to 10, or the module moy is up to 10
            this.unites[i].set_credits(Math.max(moy, moy_unite));
            
            // sum credits
            if((moy >= 10) || (moy_unite >= 10))
            total_credits += this.unites[i].credit;
        }
       // console.log(this.name + " , moy = "+moy+" credit: " +total_credits);

        return total_credits;
    }
}

class Unite{
  constructor(name, modules)
    {
        this.name = name;
        this.modules = modules;
        this.coef = 0;
        this.credit = 0;
        this.moy = 0;
    } 
    calcul_moy()
    {
        var moy = 0;
        var total_notes = 0;
        var total_coef = 0;
        for(let i =0; i < this.modules.length;i++)
        {
            //console.log(this.modules[i].name);
            total_coef += this.modules[i].coef;
            total_notes += this.modules[i].calcul_moy()*this.modules[i].coef;
        }
        moy = total_notes / total_coef;
        this.coef = total_coef;
        //console.log(moy);
        this.moy = moy;
    return moy;
    }
    set_credits(moy)
    {
        // if moy is up to 10, get all credits
        var total_credits = 0;

        for(let i =0; i < this.modules.length;i++)
        {

            var moy_module = this.modules[i].get_note("moyen");

            // setup credit for the module if the unit moy is up to 10, or the module moy is up to 10
            this.modules[i].set_credit(Math.max(moy, moy_module));
            
            // sum credits
            if((moy >= 10) || (moy_module >= 10))
            total_credits += this.modules[i].credit;
        }
        console.log(this.name + " , moy = "+moy+" credit: " +total_credits);

        this.credit = total_credits;
        return total_credits;
    }
}

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
    this.moy = moy;
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
     if (kind =="moyen")
          return $("#mo"+this.name).val();
     return 0;
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
    //~ var poids = module_obj.poids;
    // html items' IDs
    var exam = "#ex"+module;
    var tp = "#tp"+module;
    var td = "#td"+module;
    
    // initialize items
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

    // calcul moyen
    var moy = module_obj.calcul_moy();
    // set credits
    module_obj.set_credit(moy);
    // set moyen
    module_obj.set_moy(moy);
    return moy.toFixed(2);


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



function moyenneUnites2(unite_x) {
    
    var moyenneU = unite_x.calcul_moy();
    $("#M"+unite_x.name).html(+moyenneU.toFixed(2));
    return moyenneU;
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

function credUnites2(unite_x, unite_moy) {
    // if unit average is up to 10 then all modules set up their credits
    // else make sum of existing modules crédits
    var credit = unite_x.set_credits(unite_moy);
    //~ var credit = 7;
    console.log("credit output "+credit);
    $("#C"+unite_x.name).html(+credit);
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


function rattraper2(unite_x, unite_moy, semestre_moy, annee_moy) {
    console.log("rapptraper2-begin");
    if( (annee_moy < 10) && (semestre_moy < 10) && (unite_moy < 10))
    {
        
      for (var i=0; i < unite_x.modules.length; i++)
       {
           var module1 = "#"+unite_x.modules[i].name;
          console.log("Rattrapge2: "+ module1 +": "+unite_x.modules[i].moy );
          //~ $('span', unite_x.modules[i].name).addClass('hidden');
           if(unite_x.modules[i].moy < 10)
           {
                $('span', module1).removeClass('hidden');
                console.log("Rattrapge: "+module1 +": "+unite_x.modules[i].moy );
            }
            else
            $('span', module1).addClass('hidden');
       }  
       console.log("rapptraper2-end");
    }


}

function rattraper(module1, module2, module3, moyenne_module1, moyenne_module2, moyenne_module3, moyenne_unit, moyennesemstre, moyenneGen) {

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
