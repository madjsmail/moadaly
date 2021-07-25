
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
