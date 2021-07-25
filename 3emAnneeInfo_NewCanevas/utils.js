
class Year{
  constructor(name, semestres)
    {
        this.name = name;
        this.semestres = semestres;
        this.moy = 0;
    } 
    calcul_moy()
    {
        var moy = 0;
        var total_notes = 0;
        var total_coef = 0;
        for(let i =0; i < this.semestres.length;i++)
        {
            total_coef  += this.semestres[i].coef;
            total_notes += this.semestres[i].moy*this.semestres[i].coef;
        }
        moy = total_notes / total_coef;
        this.moy = moy;
    return moy;
    }
    set_credits(moy)
    {
        // if moy is up to 10, get all credits
        var total_credits = 0;

        for(let i =0; i < this.semestres.length;i++)
        {

            var moy_semestre = this.semestres[i].moy;

            // setup credit for the module if the unit moy is up to 10, or the module moy is up to 10
            this.semestres[i].set_credits(Math.max(moy, moy_semestre));
            
            // sum credits
            if((moy >= 10) || (moy_semestre >= 10))
            total_credits += this.semestres[i].credit;
        }
        this.credits = total_credits;
        return total_credits;
    }
}

class Semestre{
  constructor(name, unites)
    {
        this.name = name;
        this.unites = unites;
        this.moy = 0;
        this.coef = 0;
    } 
    calcul_moy()
    {
        var moy = 0;
        var total_notes = 0;
        var total_coef = 0;
        for(let i =0; i < this.unites.length;i++)
        {
            total_coef += this.unites[i].coef;
            total_notes += this.unites[i].calcul_moy()*this.unites[i].coef;
        }
        moy = total_notes / total_coef;
        this.coef = total_coef;
        this.moy = moy;
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
        this.credits = total_credits;
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
            total_coef += this.modules[i].coef;
            total_notes += this.modules[i].calcul_moy()*this.modules[i].coef;
        }
        moy = total_notes / total_coef;
        this.coef = total_coef;
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



function moyenneUnites2(unite_x) {
    
    var moyenneU = unite_x.calcul_moy();
    $("#Moy"+unite_x.name).html(+moyenneU.toFixed(2));
    return moyenneU;
}


function credUnites2(unite_x) {
    // if unit average is up to 10 then all modules set up their credits
    // else make sum of existing modules crédits
    var credit = unite_x.set_credits(unite_x.moy);
    //~ var credit = 7;
    $("#Crd"+unite_x.name).html(+credit);
}

function display_results(semestre1, semestre2)
{
    
    // calcul S1
    calcul_semestre_unites_moy(semestre1);
    semestre1.calcul_moy();

    // calcul unit moy and credits
    calcul_semestre_unites_moy(semestre2)    
    semestre2.calcul_moy();

    // display moyenne S2
    $("#moyenneS1").html(+semestre1.moy.toFixed(2));
    $("#moyenneS2").html(+semestre2.moy.toFixed(2));
    
    var cred_s1 = semestre1.set_credits(semestre1.moy)
    $("#creditS1").html(+cred_s1);
    
    var cred_s2 = semestre2.set_credits(semestre2.moy)
    $("#creditS2").html(+cred_s2);
    

    // Moyenne generale
    var moyenne_genral = (semestre1.moy + semestre2.moy) / 2;
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


function rattraper2(unite_x, semestre_x, annee_moy) {
    if( (annee_moy < 10) && (semestre_x.moy < 10) && (unite_x.moy < 10))
    {
        
      for (var i=0; i < unite_x.modules.length; i++)
       {
           var module1 = "#"+unite_x.modules[i].name;
          //~ $('span', unite_x.modules[i].name).addClass('hidden');
           if(unite_x.modules[i].moy < 10)
           {
                $('span', module1).removeClass('hidden');
            }
            else
            $('span', module1).addClass('hidden');
       }  
    }


}

// calcul unit moy and credits
function calcul_semestre_unites_moy(semestre1)
    {
    for(let unite_x of semestre1.unites)
        {
            // calcul every module
            for( let module_x of unite_x.modules)
                moyennemodule2(module_x);
        moyenneUnites2(unite_x);
        credUnites2(unite_x); 
        }
    }
// calcul les modules à rattraper
function rattraper_all(semestre_x, moy_annuel)
    {
    for(let unite_x of semestre_x.unites)
        {
        // calcul every unite
        rattraper2(unite_x, semestre_x, moy_annuel);

        }
    }

$("document").ready(function() {
    $('input').val(0);
    
});
