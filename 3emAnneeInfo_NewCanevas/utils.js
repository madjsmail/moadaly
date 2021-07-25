
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



function moyenneUnites2(unite_x) {
    
    var moyenneU = unite_x.calcul_moy();
    $("#M"+unite_x.name).html(+moyenneU.toFixed(2));
    return moyenneU;
}


function credUnites2(unite_x, unite_moy) {
    // if unit average is up to 10 then all modules set up their credits
    // else make sum of existing modules crédits
    var credit = unite_x.set_credits(unite_moy);
    //~ var credit = 7;
    console.log("credit output "+credit);
    $("#C"+unite_x.name).html(+credit);
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
