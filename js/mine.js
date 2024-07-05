

if(localStorage.getItem("cColor") != null){
    $(":root").css("--mainColor" , localStorage.getItem("cColor"));

}

// =========color ==============
$(".changeBoxTask li").eq(0).css("backgroundColor" , "tomato")

$(".changeBoxTask li").eq(1).css("backgroundColor" , "#09c")

$(".changeBoxTask li").eq(2).css("backgroundColor" , "lightgreen")

$(".changeBoxTask li").eq(3).css("backgroundColor" , "tan")

$(".changeBoxTask li").eq(4).css("backgroundColor" , "yellow")

$(".changeBoxTask li").click(function(){
    
    let x = $ (this).css("backgroundColor");
    
    localStorage.setItem("cColor", x );
    
    $(":root").css("--mainColor" , x);
})

$(".fa-circle-arrow-up").click(function()
{
    // $(window).scrollTop(0)
    $("html,body").animate({scrollTop :"0"},2000)
})

$(".navbar a[href^='#'").click(function(){

    var sectionId = $(this).attr("href")
    $("html,body").animate({scrollTop : $(sectionId).offset().top}),5000
})