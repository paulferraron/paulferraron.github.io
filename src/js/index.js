$('header nav a').on('click', function(e){
    e.preventDefault();
    
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000, function(){
        window.location.hash = hash;
    });
});

$('[href="#competences"]').on('click', function(e){
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
                ++width;
                bar.style.width = width + '%';
            }
        }
    });
});

$(window).on('scroll', function(e){
    if($('[href="#competences"]').hasClass("active"))
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
                    ++width;
                    bar.style.width = width + '%';
                }
            }
        });
    }
    else
    {
        $(".progress-bar").each(function(){
            this.style.width = '0%';
        });
    }
});

