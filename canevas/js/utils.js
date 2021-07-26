// Global variable
// used in development 
var CHECK_CANVAS = true;
//~ var CHECK_CANVAS = false;

class Year{
  constructor(name, semestre1, semestre2)
    {
        this.name = name;
        this.semestre1 = semestre1;
        this.semestre2 = semestre2;
        this.moy = 0;
    } 
display_results()
{
    
    // calcul S1
    this.semestre1.calcul_semestre_unites_moy();
    this.semestre1.calcul_moy();

    // calcul unit moy and credits
    this.semestre2.calcul_semestre_unites_moy()    
    this.semestre2.calcul_moy();

    // display moyenne S2
    $("#moyenneS1").html(+this.semestre1.moy.toFixed(2));
    $("#moyenneS2").html(+this.semestre2.moy.toFixed(2));
    
    var cred_s1 = this.semestre1.set_credits(this.semestre1.moy)
    $("#creditS1").html(+cred_s1);
    
    var cred_s2 = this.semestre2.set_credits(this.semestre2.moy)
    $("#creditS2").html(+cred_s2);
    

    // Moyenne generale
    var moyenne_genral = (this.semestre1.moy * this.semestre1.coef + this.semestre2.moy * this.semestre2.coef) / (this.semestre1.coef + this.semestre2.coef);
    $("#moyenneGen").html(+moyenne_genral.toFixed(2))

    if (moyenne_genral >= 10) {
        var CredGen = 60;
        $("#creditGen").html(+CredGen);

    } else {
        var CredGen = cred_s2 + cred_s1;
        $("#creditGen").html(+CredGen);
    }
    
     this.semestre1.rattraper_all(moyenne_genral);
     this.semestre2.rattraper_all(moyenne_genral);    
}  

create_canevas()  
{
    // itiialize the checking point to test canvas
    if(CHECK_CANVAS) create_initial_checkpoint()
    // create a canvacs for each semester
    this.semestre1.create_canevas();
    this.semestre2.create_canevas();
}
}

class Semestre{
  constructor(name, unites)
    {
        this.name = name;
        this.unites = unites;
        this.moy = 0;
        this.coef = 0;
        this.credits_origine = 0;
        for(let i =0; i < this.unites.length;i++)
        {
            this.coef += this.unites[i].coef;
            this.credits_origine += this.unites[i].credits_origine;
        }
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
    
    rattraper_all(moy_annuel)
    {
    for(let unite_x of this.unites)
        {
        // calcul every unite
        unite_x.rattraper2( this, moy_annuel);

        }
    }
// calcul unit moy and credits
 calcul_semestre_unites_moy()
    {
    for(let unite_x of this.unites)
        {
            // calcul every module
            for( let module_x of unite_x.modules)
                //~ moyennemodule2(module_x);
                module_x.moyennemodule2();
        unite_x.moyenneUnites();
        unite_x.credUnites(); 
        }
    }

create_canevas()
{
    // create dynamique canevas
    for(let i=0; i< this.unites.length; i++)
    {
        // create first case
        this.unites[i].create_dynamique_unite(this);
        this.unites[i].create_check_unite(this)
    } 
    this.create_check_semestre()    
}
create_check_semestre()
{
    // create dynamique canevas
    var row_name = `<td class="noneed"> <h6>Semestre ${this.name}</h6></td>`;
    var row_coef = `<td class="noneed"> <h6>${this.coef}</h6></td>`;
    var row_cred = `<td class="noneed"> <h6>${this.credits_origine}</h6></td>`;

    
    var new_unite = document.createElement("tr");
    new_unite.innerHTML = row_name +  row_coef +  row_cred;

    if(this.name == "S1")
        $("#checkplace1").append(new_unite);
    else
        $("#checkplace2").append(new_unite);    
   
}
}

class Unite{
  constructor(name, modules, title)
    {
        this.name = name;
        this.title = title;
        this.modules = modules;
        this.coef = 0;
        this.credit = 0;
        this.credits_origine = 0;
        this.moy = 0;
        for(let i =0; i < this.modules.length;i++)
        {
            this.coef += this.modules[i].coef;
            this.credits_origine += this.modules[i].credit;
        }
    } 
    calcul_moy()
    {
        var moy = 0;
        var total_notes = 0;
        var total_coef = 0;
        for(let i =0; i < this.modules.length;i++)
        {
            total_notes += this.modules[i].calcul_moy()*this.modules[i].coef;
        }
        moy = total_notes / this.coef;
        this.moy = moy;
    return moy;
    }
    set_credits(moy)
    {
        // if moy is up to 10, get all credits
        var total_credits = 0;

        for(let i =0; i < this.modules.length;i++)
        {

            var moy_module = this.modules[i].moy;

            // setup credit for the module if the unit moy is up to 10, or the module moy is up to 10
            this.modules[i].set_credit(Math.max(moy, moy_module));
            
            // sum credits
            if((moy >= 10) || (moy_module >= 10))
            total_credits += this.modules[i].credit;
        }

        this.credit = total_credits;
        return total_credits;
    }
    moyenneUnites() {
    
    var moyenneU = this.calcul_moy();
    $("#Moy"+this.name).html(+moyenneU.toFixed(2));
    return moyenneU;
}


    credUnites() {
    // if unit average is up to 10 then all modules set up their credits
    // else make sum of existing modules crédits
    var credit = this.set_credits(this.moy);
    //~ var credit = 7;
    $("#Crd"+this.name).html(+credit);
    }
    
 rattraper2(semestre_x, annee_moy) {
    
        
      for (var i=0; i < this.modules.length; i++)
       {
           var module1 = "#"+this.modules[i].name;
           if ((annee_moy < 10) && (semestre_x.moy < 10) && (this.moy < 10)
             && (this.modules[i].moy < 10))
           {
                $('span', module1).removeClass('hidden');
            }
            else
            $('span', module1).addClass('hidden');
       }  

}

create_dynamique_unite(semestre_x)
{
    // create dynamique canevas

    for(let i=0; i< this.modules.length; i++)
    {
        // create first case
        this.modules[i].create_one_module(i==0, this, semestre_x);
    }
}
create_check_unite(semestre_x)
{
    // create dynamique canevas
    var unite_name = `<td class="noneed"> ${this.title} [${this.name}]</td>`;
    var unite_coef = `<td class="noneed"> ${this.coef}</td>`;
    var unite_cred = `<td class="noneed"> ${this.credits_origine}</td>`;

    
    var new_unite = document.createElement("tr");
    new_unite.innerHTML = unite_name +  unite_coef +  unite_cred;

    if(semestre_x.name == "S1")
        $("#checkplace1").append(new_unite);
    else
        $("#checkplace2").append(new_unite);    
   
}

}

class Module{
    constructor(name, coef, cred, poids, title)
    {
        // nom du module
        this.name = name;
        this.title = title;
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
    //~ console.log("module:set_credit:"+this.name+" " +moy );
    if (moy >= 10) 
    {
        $("#cr"+this.name).html(+this.credit);
    }
    else $("#cr"+this.name).html("0"); 
    }

    // set the moyenne
    set_moy(moy)
    {
        // display moy
        $("#mo"+this.name).html(+moy.toFixed(2))
    }
    
    moyennemodule2() {
    // list of ids
    var module = this.name;
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
    var moy = this.calcul_moy();
    // set credits
    this.set_credit(moy);
    // set moyen
    this.set_moy(moy);
    return moy.toFixed(2);


}

create_one_module(first_case_boolean, unite_x, semestre_x)
{
    // create dynamique canevas
    var mod_name = this.name;
    var mod_title = this.title;
    var mod_coef = this.coef;
    var mod_cred = this.credit;
    var unite_name = unite_x.name;
    var unite_title = unite_x.title;
    var semestre_name = semestre_x.name;

    var new_module_name = (first_case_boolean) ? `<td>${unite_title}</td>` : `<td/>` ;    
 
    new_module_name += `<td class="light" id="${mod_name}">
                                    <h6>${mod_title}<span class="badge badge-danger hidden ">Rattrapage</span> </h6>
                    </td>`;

    var hidden_exam = (this.poids_exam != 0) ? "" : "hidden";
    var hidden_tp   = (this.poids_tp != 0) ? "" : "hidden";
    var hidden_td   = (this.poids_td != 0) ? "" : "hidden";
    
    var module_parts = `<td class="light">
                                    <div class="input-group flex-nowrap">
                                        <input type="text" class="form-control" placeholder="TD" aria-label="TD" aria-describedby="addon-wrapping" name="td${mod_name}" id="td${mod_name}" ${hidden_td}>
                                        <input type="text" class="form-control" placeholder="TP" aria-label="TP" aria-describedby="addon-wrapping" name="tp${mod_name}" id="tp${mod_name}" ${hidden_tp}>
                                        <input type="text" class="form-control" placeholder="EXAM" aria-label="Username" aria-describedby="addon-wrapping" name="ex${mod_name}" id="ex${mod_name}" ${hidden_exam}>
                                    </div>
                                </td>
                        `;
                        
    // verify if total poids is not 100%
    //~ var check_poids = "";
    if(this.poids_exam+this.poids_td+this.poids_tp != 1)
        //~ check_poids = `<span class="badge badge-danger">Poids Error [${this.poids_exam}, ${this.poids_exam}, ${this.poids_exam}]</span>`;
        module_parts = `<td class="light">
            <span class="badge badge-danger">Poids Error [${this.poids_exam}, ${this.poids_td}, ${this.poids_tp}]</span>
         </td>`;
    
    var module_coef = `<td class="noneed"> <h6 id="Coef${mod_name}">${mod_coef}</h6></td>`;
    var module_cred = `<td class="noneed"> <h6 id="Cred${mod_name}">${mod_cred}</h6></td>`;
    var module_moy = `<td class="light"> <h6 id="mo${mod_name}">0</h6></td>`;
    var module_cr = `<td> <h6 id="cr${mod_name}">0</h6></td>`;
    
    // prepare unite moy and credits
    var module_moy_unit = ``;
    var module_cred_unit = ``;
  
    if(first_case_boolean)
    {
    module_moy_unit = `<td class="light" rowspan="2"> <h6 id="Moy${unite_name}">0</h6></td>`;
    module_cred_unit = `<td rowspan="2"> <h6 id="Crd${unite_name}">0</h6></td>`;
    }
    
    
    var new_module = document.createElement("tr");
    new_module.innerHTML =new_module_name+module_parts+ module_coef+ module_cred+ module_moy+ module_cr+ module_moy_unit+ module_cred_unit ;

    if(semestre_name == "S1")
        $("#table1").append(new_module);
    else
        $("#table2").append(new_module);    
}

}



function create_menu()
{
    var list  =  ["L2Info", "L3SI", "L3ISIL", "M1ISIL", "M1GSI", "M2ISIL", "M2GSI"];
    var link = "";
    for( let title of list)
    {
    var menu_item = `<li id="3em" class="nav-item">
                            <a class="nav-link" href="./index${title}.html">${title}</a>
                        </li> 
                    `;
    $("#navbarTextList").append(menu_item);
    }
}
function create_initial_checkpoint()
{
    var checkpoint = `            <div id="checkplaces">
             <h2> Check point for canvas</h2>                         
             <h3> Semestre2</h3>                         
             <table id="checkplace1" class="table-striped  mb-5">
           
                <thead> 
                <th> Unité </th><th> Coef </th><th>Credit</th>  
                </thead> 
              <tbody>    
            </tbody>     
             </table>
             <h3> Semestre2</h3>
             <table id="checkplace2" class="table-striped  mb-5">
            
                <thead> 
                <th> Unité </th><th> Coef </th><th>Credit</th>  
                </thead> 
             <tbody>    
            </tbody>     
             </table>

                
 </div>`;
    $("#tables").append(checkpoint); 
}
