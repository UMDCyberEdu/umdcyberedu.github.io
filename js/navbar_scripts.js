var menuToggled= false;

function toggleNavOnMobile(){

    if(menuToggled){
        console.log("a hamburger should appear");
        $('#nav-toggle').removeClass('is-active');
        $('#nav-menu').removeClass('is-active');
    }else{
        console.log("an X should appear");
        $('#nav-toggle').addClass('is-active');
        $('#nav-menu').addClass('is-active');
    }

    menuToggled= !menuToggled;

}
