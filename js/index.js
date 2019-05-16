// Animation de scrolling via la barre de navigation
$('header nav a').on('click', function(e){
    e.preventDefault();

    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 750, function(){
        window.location.hash = hash;
    });
    
    $(".navbar-collapse").collapse("hide");
    
    /* Correctif de la navigation pour petits écrans
    Dans le cas des petits écran, aucune rubrique n'est active lorsque l'on est en haut de la page
    De plus, la classe active ne persiste pas sur la presentation même si on l'y ajoute...
    D'ou le choix de l'ajouter à la marque */
    if(e.target.id == "linkToTop")
    {
        $('#linkToTop').addClass("active");
    }
    else
    {
        $('#linkToTop').removeClass("active");
    }
});


// Switch de rubrique via les boutons de navigation
$("#navigator-up").on('click', function(e){
    if($('#linkToContact').hasClass("active"))
    {
        $('#linkToPassions').click();
    }
    else if($('#linkToPassions').hasClass("active"))
    {
        $('#linkToCompetences').click();
    }
    else if($('#linkToCompetences').hasClass("active"))
    {
        $('#linkToParcours').click();
    }
    else if($('#linkToParcours').hasClass("active"))
    {
        $('#linkToExperiences').click();
    }
    else if($('#linkToExperiences').hasClass("active"))
    {
        $('#linkToPresentation').click();
    }
    else if($('#linkToPresentation').hasClass("active"))
    {
        $('#linkToTop').click();
    }
    else if($('#linkToTop').hasClass("active"))
    {
        // On est déjà en haut donc on ne fait rien
    }
    else
    {
        // On doit avoir atteint le haut de page (ou presque) en scrollant manuellement
        $('#linkToTop').click();
    }
});

$("#navigator-down").on('click', function(e){
    if($('#linkToPresentation').hasClass("active"))
    {
        $('#linkToExperiences').click();
    }
    else if($('#linkToExperiences').hasClass("active"))
    {
        $('#linkToParcours').click();
    }
    else if($('#linkToParcours').hasClass("active"))
    {
        $('#linkToCompetences').click();
    }
    else if($('#linkToCompetences').hasClass("active"))
    {
        $('#linkToPassions').click();
    }
    else if($('#linkToPassions').hasClass("active"))
    {
        $('#linkToContact').click();
    }
    else if($('#linkToContact').hasClass("active"))
    {
        // On est en bas donc on ne faire rien (pour l'instant)
    }
    else if($('#linkToTop').hasClass("active"))
    {
        $('#linkToPresentation').click();
    }
    else
    {
        // On doit avoir atteint le haut de page (ou presque) en scrollant manuellement
        $('#linkToPresentation').click();
    }
});

/* Correctif de la navigation pour petits écrans
   Dans le cas des petits écran, aucune rubrique n'est active lorsque qu'on accède au site via son adresse de base ou l'adresse du haut de page */
$(window).on('load', function(e){
    var url = new RegExp('#');
    var urlBis = new RegExp('#page-top');
    if(!url.test(window.location) || urlBis.test(window.location))
    {
        $('#linkToTop').addClass("active");
    }
});


// Animation de remplissage des compétences
var skillsLoaded = false;

function loadSkills()
{
    $(".progress-bar").each(function(){
        var bar = this;
        var width = 0;
        var max = bar.style.maxWidth.split('%')[0];
        var id = setInterval(frame, 5);

        function frame()
        {
            if (width >= max)
            {
                clearInterval(id);
            }
            else
            {
                width += 2;
                bar.style.width = width + '%';
            }
        }
    });
        
    skillsLoaded = true;
}

function unloadSkills()
{
    $(".progress-bar").each(function(){
        this.style.width = '0%';
    });
        
    skillsLoaded = false;
}

$(window).on('load', function(e){
    if($('[href="#competences"]').hasClass("active") && !skillsLoaded)
    {
        loadSkills();
    }
});


$('[href="#competences"]').on('click', function(e){
    if(!skillsLoaded)
    {
        loadSkills();
    }
});

$(window).on('scroll', function(e){
    if($('[href="#competences"]').hasClass("active") && !skillsLoaded)
    {
        loadSkills();
    }
    else if(!$('[href="#competences"]').hasClass("active") && skillsLoaded)
    {
        unloadSkills();
    }
});
