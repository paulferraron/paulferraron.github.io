// Animation de scrolling via la barre de navigation
$('header nav a').on('click', function(e){
    e.preventDefault();
    
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000, function(){
        window.location.hash = hash;
    });
});

// Animation d'accordéon pour le menu
$(".navbar .navbar-brand").on('click', function(e){
    $(".navbar-collapse").collapse("hide");
});


$(".navbar-nav .nav-link").on('click', function(e){
    $(".navbar-collapse").collapse("hide");
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
