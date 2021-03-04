//BILD PROJEKTE EINBLENDEN

var BildListe = new Array();

BildListe[0] = "images/chris-8.jpg";
BildListe[1] = "images/wirewire/vorschau.png";
BildListe[2] = "images/hugefancy/lampe/lampe-23.jpg";
BildListe[3] = "images/hugefancy/testzylinder/testzylinder-13.jpg";
BildListe[4] = "images/futurium/Futurium_Besuchertag/futurium_unicorn-11.jpg";
BildListe[5] = "images/memo/memo-1.jpg";
BildListe[6] = "images/kybernit/kybernit-1.jpg";
BildListe[7] = "images/spaceship_one/spaceship_one-6.jpg";
BildListe[8] = "images/bomeo/sitzsack-6.jpg";
BildListe[9] = "images/gurke/gurke-5.jpg";
BildListe[10] = "images/po/po-5.jpg";
BildListe[11] = "images/albert/maker_faire_berlin/maker_faire_berlin-5.jpg";
BildListe[12] = "images/alberta/pudding/alberta_pudding-8.jpg";
BildListe[13] = "images/albert/albert_oli-3.jpg";
BildListe[14] = "images/theinternet/theinternet.jpg";
BildListe[15] = "images/unicorn/unicorn_museum_2.jpg";
BildListe[16] = "images/sitzen_stehend_leute/burgbib/burg_bib-6.jpg";
BildListe[17] = "images/lustig/lustig_2.jpg";
BildListe[18] = "images/paper_robot/paper_robot.jpg";
BildListe[19] = "images/archiv/archiv2_klein.png";
BildListe[20] = "images/givebox/givebox_neu_klein.jpg";
BildListe[21] = "images/abgesessen/abgesessen_3.jpg";
BildListe[22] = "images/printed_porcelain/printed_porcelain_2.jpg";
BildListe[23] = "images/theo/theo_1.jpg";
BildListe[24] = "images/faltporzellan/faltporzellan-1.jpg";
BildListe[25] = "images/porcelain_studies/porzellan-1.jpg";
BildListe[26] = "images/in_case/in_case_1.jpg";
BildListe[27] = "images/case_no_content/no_content-6.jpg";
BildListe[28] = "images/abcdarium/abcdarium_2.jpg";

var i

function Vorladen() {
    for (i = 0; i < BildListe.length; i++) {
        var Bild = new Image();
        Bild.src = BildListe[i];
    }
}
Vorladen();

 
$(document).ready(function () {

    $(".wirewire").mouseenter(function () {
        $(".vorschaubild_wirewire").attr("src", "images/wirewire/vorschau.png");
        $(".vorschaubild_container_wirewire").fadeIn(110);
    });
    $(".wirewire").mouseleave(function () {
        $(".vorschaubild_container_wirewire").delay(150).fadeOut(100);
    });
    $(".wirewire").click(function () {
        $(".vorschaubild_container_wirewire").fadeOut(0);
    });


    $(".leuchte").mouseenter(function () {
        $(".vorschaubild_leuchte").attr("src", "images/hugefancy/lampe/lampe-23.jpg");
        $(".vorschaubild_container_leuchte").fadeIn(110);
    });
    $(".leuchte").mouseleave(function () {
        $(".vorschaubild_container_leuchte").delay(150).fadeOut(100);
    });
    $(".leuchte").click(function () {
        $(".vorschaubild_container_leuchte").fadeOut(0);
    });


    $(".hugefancy").mouseenter(function () {
        $(".vorschaubild_hugefancy").attr("src", "images/hugefancy/testzylinder/testzylinder-13.jpg");
        $(".vorschaubild_container_hugefancy").fadeIn(110);
    });
    $(".hugefancy").mouseleave(function () {
        $(".vorschaubild_container_hugefancy").delay(150).fadeOut(100);
    });
    $(".hugefancy").click(function () {
        $(".vorschaubild_container_hugefancy").fadeOut(0);
    });




    $(".futurium").mouseenter(function () {
        $(".vorschaubild_futurium").attr("src", "images/futurium/Futurium_Besuchertag/futurium_unicorn-11.jpg");
        $(".vorschaubild_container_futurium").fadeIn(110);
    });
    $(".futurium").mouseleave(function () {
        $(".vorschaubild_container_futurium").delay(150).fadeOut(100);
    });
    $(".futurium").click(function () {
        $(".vorschaubild_container_futurium").fadeOut(0);
    });




    $(".memo").mouseenter(function () {
        $(".vorschaubild_memo").attr("src", "images/memo/memo-1.jpg");
        $(".vorschaubild_container_memo").fadeIn(110);
    });
    $(".memo").mouseleave(function () {
        $(".vorschaubild_container_memo").delay(150).fadeOut(100);
    });
    $(".memo").click(function () {
        $(".vorschaubild_container_memo").fadeOut(0);
    });






    $(".kybernit").mouseenter(function () {
        $(".vorschaubild_kybernit").attr("src", "images/kybernit/kybernit-1.jpg");
        $(".vorschaubild_container_kybernit").fadeIn(110);
    });
    $(".kybernit").mouseleave(function () {
        $(".vorschaubild_container_kybernit").delay(150).fadeOut(100);
    });
    $(".kybernit").click(function () {
        $(".vorschaubild_container_kybernit").fadeOut(0);
    });


    $(".spaceship_one").mouseenter(function () {
        $(".vorschaubild_spaceship_one").attr("src", "images/spaceship_one/spaceship_one-6.jpg");
        $(".vorschaubild_container_spaceship_one").fadeIn(110);
    });
    $(".spaceship_one").mouseleave(function () {
        $(".vorschaubild_container_spaceship_one").delay(150).fadeOut(100);
    });
    $(".spaceship_one").click(function () {
        $(".vorschaubild_container_spaceship_one").fadeOut(0);
    });


    $(".bomeo").mouseenter(function () {
        $(".vorschaubild_bomeo").attr("src", "images/bomeo/sitzsack-6.jpg");
        $(".vorschaubild_container_bomeo").fadeIn(110);
    });
    $(".bomeo").mouseleave(function () {
        $(".vorschaubild_container_bomeo").delay(150).fadeOut(100);
    });
    $(".bomeo").click(function () {
        $(".vorschaubild_container_bomeo").fadeOut(0);
    });



    $(".gurke").mouseenter(function () {
        $(".vorschaubild_gurke").attr("src", "images/gurke/gurke-5.jpg");
        $(".vorschaubild_container_gurke").fadeIn(110);
    });
    $(".gurke").mouseleave(function () {
        $(".vorschaubild_container_gurke").delay(150).fadeOut(100);
    });
    $(".gurke").click(function () {
        $(".vorschaubild_container_gurke").fadeOut(0);
    });


    $(".po").mouseenter(function () {
        $(".vorschaubild_po").attr("src", "images/po/po-5.jpg");
        $(".vorschaubild_container_po").fadeIn(110);
    });
    $(".po").mouseleave(function () {
        $(".vorschaubild_container_po").delay(150).fadeOut(100);
    });
    $(".po").click(function () {
        $(".vorschaubild_container_po").fadeOut(0);
    });


    $(".parasit").mouseenter(function () {
        $(".vorschaubild_parasit").attr("src", "images/albert/maker_faire_berlin/maker_faire_berlin-5.jpg");
        $(".vorschaubild_container_parasit").fadeIn(110);
    });
    $(".parasit").mouseleave(function () {
        $(".vorschaubild_container_parasit").delay(150).fadeOut(100);
    });
    $(".parasit").click(function () {
        $(".vorschaubild_container_parasit").fadeOut(0);
    });


    $(".alberta").mouseenter(function () {
        $(".vorschaubild_alberta").attr("src", "images/alberta/pudding/alberta_pudding-8.jpg");
        $(".vorschaubild_container_alberta").fadeIn(110);
    });
    $(".alberta").mouseleave(function () {
        $(".vorschaubild_container_alberta").delay(150).fadeOut(100);
    });
    $(".alberta").click(function () {
        $(".vorschaubild_container_alberta").fadeOut(0);
    });


    $(".albert").mouseenter(function () {
        $(".vorschaubild_albert").attr("src", "images/albert/albert_oli-3.jpg");
        $(".vorschaubild_container_albert").fadeIn(110);
    });
    $(".albert").mouseleave(function () {
        $(".vorschaubild_container_albert").delay(150).fadeOut(100);
    });
    $(".albert").click(function () {
        $(".vorschaubild_container_albert").fadeOut(0);
    });


    $(".internet").mouseenter(function () {
        $(".vorschaubild_internet").attr("src", "images/theinternet/theinternet.jpg");
        $(".vorschaubild_container_internet").fadeIn(110);
    });
    $(".internet").mouseleave(function () {
        $(".vorschaubild_container_internet").delay(150).fadeOut(100);
    });
    $(".internet").click(function () {
        $(".vorschaubild_container_internet").fadeOut(0);
    });


    $(".unicorn").mouseenter(function () {
        $(".vorschaubild_unicorn").attr("src", "images/unicorn/unicorn_museum_2.jpg");
        $(".vorschaubild_container_unicorn").fadeIn(110);
    });
    $(".unicorn").mouseleave(function () {
        $(".vorschaubild_container_unicorn").delay(150).fadeOut(100);
    });
    $(".unicorn").click(function () {
        $(".vorschaubild_container_unicorn").fadeOut(0);
    });


    $(".sitzen_stehend_leute").mouseenter(function () {
        $(".vorschaubild_sitzen_stehend_leute").attr("src", "images/sitzen_stehend_leute/burgbib/burg_bib-6.jpg");
        $(".vorschaubild_container_sitzen_stehend_leute").fadeIn(110);
    });
    $(".sitzen_stehend_leute").mouseleave(function () {
        $(".vorschaubild_container_sitzen_stehend_leute").delay(150).fadeOut(100);
    });
    $(".sitzen_stehend_leute").click(function () {
        $(".vorschaubild_container_sitzen_stehend_leute").fadeOut(0);
    });


    $(".funny").mouseenter(function () {
        $(".vorschaubild_funny").attr("src", "images/lustig/lustig_2.jpg");
        $(".vorschaubild_container_funny").fadeIn(110);
    });
    $(".funny").mouseleave(function () {
        $(".vorschaubild_container_funny").delay(150).fadeOut(100);
    });
    $(".funny").click(function () {
        $(".vorschaubild_container_funny").fadeOut(0);
    });


    $(".paper_robot").mouseenter(function () {
        $(".vorschaubild_paper_robot").attr("src", "images/paper_robot/paper_robot.jpg");
        $(".vorschaubild_container_paper_robot").fadeIn(110);
    });
    $(".paper_robot").mouseleave(function () {
        $(".vorschaubild_container_paper_robot").delay(150).fadeOut(100);
    });
    $(".paper_robot").click(function () {
        $(".vorschaubild_container_paper_robot").fadeOut(0);
    });


    $(".archiv").mouseenter(function () {
        $(".vorschaubild_archiv").attr("src", "images/archiv/archiv2_klein.png");
        $(".vorschaubild_container_archiv").fadeIn(110);
    });
    $(".archiv").mouseleave(function () {
        $(".vorschaubild_container_archiv").delay(150).fadeOut(100);
    });
    $(".archiv").click(function () {
        $(".vorschaubild_container_archiv").fadeOut(0);
    });


    $(".givebox").mouseenter(function () {
        $(".vorschaubild_givebox").attr("src", "images/givebox/givebox_neu_klein.jpg");
        $(".vorschaubild_container_givebox").fadeIn(110);
    });
    $(".givebox").mouseleave(function () {
        $(".vorschaubild_container_givebox").delay(150).fadeOut(100);
    });
    $(".givebox").click(function () {
        $(".vorschaubild_container_givebox").fadeOut(0);
    });


    $(".abgesessen").mouseenter(function () {
        $(".vorschaubild_abgesessen").attr("src", "images/abgesessen/abgesessen_3.jpg");
        $(".vorschaubild_container_abgesessen").fadeIn(110);
    });
    $(".abgesessen").mouseleave(function () {
        $(".vorschaubild_container_abgesessen").delay(150).fadeOut(100);
    });
    $(".abgesessen").click(function () {
        $(".vorschaubild_container_abgesessen").fadeOut(0);
    });


    $(".printed_porcelain").mouseenter(function () {
        $(".vorschaubild_printed_porcelain").attr("src", "images/printed_porcelain/printed_porcelain_2.jpg");
        $(".vorschaubild_container_printed_porcelain").fadeIn(110);
    });
    $(".printed_porcelain").mouseleave(function () {
        $(".vorschaubild_container_printed_porcelain").delay(150).fadeOut(100);
    });
    $(".printed_porcelain").click(function () {
        $(".vorschaubild_container_printed_porcelain").fadeOut(0);
    });


    $(".theo").mouseenter(function () {
        $(".vorschaubild_theo").attr("src", "images/theo/theo_1.jpg");
        $(".vorschaubild_container_theo").fadeIn(110);
    });
    $(".theo").mouseleave(function () {
        $(".vorschaubild_container_theo").delay(150).fadeOut(100);
    });
    $(".theo").click(function () {
        $(".vorschaubild_container_theo").fadeOut(0);
    });


    $(".faltporzellan").mouseenter(function () {
        $(".vorschaubild_faltporzellan").attr("src", "images/faltporzellan/faltporzellan-1.jpg");
        $(".vorschaubild_container_faltporzellan").fadeIn(110);
    });
    $(".faltporzellan").mouseleave(function () {
        $(".vorschaubild_container_faltporzellan").delay(150).fadeOut(100);
    });
    $(".faltporzellan").click(function () {
        $(".vorschaubild_container_faltporzellan").fadeOut(0);
    });


    $(".porcelain_studies").mouseenter(function () {
        $(".vorschaubild_porcelain_studies").attr("src", "images/porcelain_studies/porzellan-1.jpg");
        $(".vorschaubild_container_porcelain_studies").fadeIn(110);
    });
    $(".porcelain_studies").mouseleave(function () {
        $(".vorschaubild_container_porcelain_studies").delay(150).fadeOut(100);
    });
    $(".porcelain_studies").click(function () {
        $(".vorschaubild_container_porcelain_studies").fadeOut(0);
    });


    $(".in_case").mouseenter(function () {
        $(".vorschaubild_in_case").attr("src", "images/in_case/in_case_1.jpg");
        $(".vorschaubild_container_in_case").fadeIn(110);
    });
    $(".in_case").mouseleave(function () {
        $(".vorschaubild_container_in_case").delay(150).fadeOut(100);
    });
    $(".in_case").click(function () {
        $(".vorschaubild_container_in_case").fadeOut(0);
    });


    $(".in_case_no_content").mouseenter(function () {
        $(".vorschaubild_in_case_no_content").attr("src", "images/case_no_content/no_content-6.jpg");
        $(".vorschaubild_container_in_case_no_content").fadeIn(110);
    });
    $(".in_case_no_content").mouseleave(function () {
        $(".vorschaubild_container_in_case_no_content").delay(150).fadeOut(100);
    });
    $(".in_case_no_content").click(function () {
        $(".vorschaubild_container_in_case_no_content").fadeOut(0);
    });


    $(".abcdarium").mouseenter(function () {
        $(".vorschaubild_abcdarium").attr("src", "images/abcdarium/abcdarium_2.jpg");
        $(".vorschaubild_container_abcdarium").fadeIn(110);
    });
    $(".abcdarium").mouseleave(function () {
        $(".vorschaubild_container_abcdarium").delay(150).fadeOut(100);
    });
    $(".abcdarium").click(function () {
        $(".vorschaubild_container_abcdarium").fadeOut(0);
    });


    $(".about").mouseenter(function () {
        $(".vorschaubild_about").attr("src", "images/chris-8.jpg");
        $(".vorschaubild_container_about").fadeIn(110);
    });
    $(".about").mouseleave(function () {
        $(".vorschaubild_container_about").delay(150).fadeOut(100);
    });
    $(".about").click(function () {
        $(".vorschaubild_container_about").fadeOut(0);
    });
});
