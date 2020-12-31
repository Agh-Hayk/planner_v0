let nor_width = 304;
let nor_height = 314;
let hin_width = 304;
let hin_height = 314;

$('.delete').click(function(){$('.posr').css('display','none');});

function checkErrors(){
    $("#tun,.balon,.car,.car_drag,.el,.el1,.new_signature,.kalod").each(
        function (index,value) {
            if(!value.style.border || value.style.border === 'none'){
               $('.znak_error').removeClass('animation_one');
                $('.planner_top_text').text('Congratulations! You have found the right place.').css('color','#000');
            }else if(value.style.border ==='1px solid red'){
                $('.znak_error').addClass('animation_one');
                $('.planner_top_text').text('Too close').css('color','red');
                return false;
            }
        }
    )
}
let rotation = 0;
let rotation_sec = 0;
$('#tun').dblclick(function(){
    rotation+=90;
    $(this).css('transform','rotate(' + rotation + 'deg)');
    if (rotation === 360){
        rotation=0;
    }
});
$('#tun').draggable({
    scroll: false,
    cursor:'move',
    containment: ".item_1",

    start: function( event, ui ) {
        $(this).css({
            'border': 'none'
        })
    },
    drag: function(event, ui) {},
    stop: function( event, ui ) {
        let left_minus = $('#tun').position().left - $('.balon').position().left;
        let top_minus = $('#tun').position().top - $('.balon').position().top;
        let true_left_space_sec = left_minus - (hin_width - nor_width);
        let true_top_space_sec = top_minus - (hin_height - nor_height);
        if(true_top_space_sec > 0){
            true_top_space_sec = top_minus + (hin_height - nor_height);
        }
        if(true_left_space_sec > 0){
            true_left_space_sec = left_minus + (hin_width - nor_width);
        }
        if(left_minus < 200 && true_left_space_sec > -400 && top_minus < 120 && true_top_space_sec > -400){
            $('.posr').css('display','block');
            $('#tun').css({'border':'1px solid red'});

        }
        else{
            $('#tun').css({'border':'none'});
        }
        checkErrors();
    }
});
$('#balon').draggable({
    scroll: false,
    cursor:'move',
    containment: ".item_1",
    start: function( event, ui ) {
      
        $(this).css({
            'border': 'none'
        })
    },
    drag: function(event, ui) {},
    stop: function( event, ui ) {
        let left_minus = $('#tun').position().left - $('.balon').position().left;
        let top_minus = $('#tun').position().top - $('.balon').position().top;
        let left_minus1 = $('.balon').position().left - $('.el1').position().left;
        let top_minus1 = $('.balon').position().top - $('.el1').position().top;
        let left_minus2 = $('.balon').position().left - $('.el').position().left;
        let top_minus2 = $('.balon').position().top - $('.el').position().top;
        let left_minus3 = $('.balon').position().left - $('.kalod').position().left;
        let top_minus3 = $('.balon').position().top - $('.kalod').position().top;

        let true_left_space = left_minus - (hin_width - nor_width);
        let true_top_space = top_minus - (hin_height - nor_height);
        if(true_top_space > 0){
            true_top_space = top_minus + (hin_height - nor_height);
        }
        if(true_left_space > 0){
            true_left_space = left_minus + (hin_width - nor_width);
        }
        if(left_minus < 250 && true_left_space > -400 && top_minus < 150 && true_top_space > -400){
            $('.posr').css('display','block');
            $('.balon').css({'border':'1px solid red'});
        }else {
            $('.balon').css({'border':'none'});
        }
        if(left_minus1 < 250 && left_minus1 > -250 && top_minus1 < 120 && top_minus1 > -120){
            $('.posr').css('display','block');
            $('.el1').css({'border':'1px solid red'});
        }else {
            $('.el1').css({'border':'none'});
        }
        if(left_minus2 < 250 && left_minus2 > -250 && top_minus2 < 120 && top_minus2 > -120){
            $('.posr').css('display','block');
            $('.el').css({'border':'1px solid red'});
        }else {
            $('.el').css({'border':'none'});
        }
        if(left_minus3 < 180 && left_minus3 > -230 && top_minus3 < 150 && top_minus3 > -130){
            $('.posr').css('display','block');
            $('.kalod').css({'border':'1px solid red'});
        }else {
            $('.kalod').css({'border':'none'});
        }
        checkErrors()
    }
});
$('#balon').droppable({
    accept: "*",
    tolerance:'touch',
    over:function (e) {
        $(this).css({
            'border': '1px solid red',
        });
    },
    out:function(){
        $(this).css({
            'border': 'none'
        });
    },
});
$('.car').draggable({
    scroll: false,
    cursor:'move',
    containment: ".item_1",
    // grid:[20,20],
    start: function( event, ui ) {
        $(this).css({
            'border': 'none'
        })
    },
    drag: function(event, ui) {},
});
$('.car_drag').draggable({
    scroll: false,
    cursor:'move',
    helper:'clone',
    start: function( event, ui ) {
        $(this).css({
            'border': 'none'
        })
    },
});
$('.car_drag').droppable({
    accept:false,
    scroll: false,
    helper:'clone',
});
$('.car').droppable({
    accept: "*",
    tolerance:'touch',
    drop: function( event, ui ) {},
    over:function (e) {
       
        $(this).css({
            'border': '1px solid red'
        });
    },
    out:function(){
      
        $(this).css({
            'border': 'none'
        });
    },
});
$('#tun').droppable({
    accept: "*",
    tolerance:'touch',
    over:function (e) {
       
        $(this).css({
            'border': '1px solid red'
        });
    },
    out:function(){
      
        $(this).css({
            'border': 'none'
        });
    },
});
$('.kalod').draggable({
    scroll: false,
    cursor:'move',
    revert:'invalid',
    start: function( event, ui ) {
        $(this).css({
            'border': 'none'
        })
    },

});
$('.kalod,.el,.el1').droppable({
    accept: false,
    tolerance:'touch',
    over:function (e) {
       
        $(this).css({
            'border': '1px solid red'
        });
    },
    out:function(){
      
        $(this).css({
            'border': 'none'
        })
    },
});
$('.el').draggable({
    scroll: false,
    cursor:'move',
    revert:'invalid',
    start: function( event, ui ) {
        $(this).css({
            'border': 'none'
        })
    },
});
$('.el1').draggable({
    scroll: false,
    cursor:'move',
    revert:'invalid',
    start: function( event, ui ) {
        $(this).css({
            'border': 'none'
        })
    },
});

$('.item_1').droppable({
    tolerance:'fit',
    drop:function (e,ui){
        if ($(ui.draggable)[0].classList.contains('car_drag')){
            var new_signature = $(ui.helper).clone().removeClass('car_drag');
            new_signature.draggable({});
            new_signature.addClass('new_signature');
            $(this).append(new_signature);
            $('.new_signature').draggable({
                scroll: false,
                cursor:'move',
                containment: ".item_1",
                start: function( event, ui ) {
                    $(this).css({
                        'border': 'none'
                    })
                },
            });
            $('.new_signature').droppable({
                accept: "*",
                tolerance:'touch',
                over:function (e) {
                   
                    $(this).css({
                        'border': '1px solid red'
                    })
                },
                out:function(){
                  
                    $(this).css({
                        'border': 'none'
                    })
                },
            });
        }
        else if ($(ui.draggable)[0].classList.contains('new_signature')){}
        else{
            if ($(ui.draggable)[0].classList.contains('kalod')){
                $('.kalod').draggable({revert:false,cursor:'move',});
                $('.kalod').droppable({accept:'*'});
                let left_minus = $('.balon').position().left - $('.kalod').position().left;
                let top_minus = $('.balon').position().top - $('.kalod').position().top;
                if(left_minus < 180 && left_minus > -230 && top_minus < 150 && top_minus > -130){
                    $('.posr').css('display','block');
                    $('.kalod').css({'border':'1px solid red'});
                }else $('.kalod').css({'border':'none'});
            }if($(ui.draggable)[0].classList.contains('el')){
                $('.el').draggable({
                    revert:false,
                    cursor:'move',
                });
                $('.el').droppable({accept:'*'});
                let left_minus = $('.balon').position().left - $('.el').position().left;
                let top_minus = $('.balon').position().top - $('.el').position().top;
                if(left_minus < 250 && left_minus > -250 && top_minus < 120 && top_minus > -120){
                    $('.posr').css('display','block');
                    $('.el').css({'border':'1px solid red'});
                }else $('.el').css({'border':'none'});

            }
            if($(ui.draggable)[0].classList.contains('el1')){
                $('.el1').draggable({revert:false,cursor:'move',});
                $('.el1').droppable({accept:'*'});
                let left_minus = $('.balon').position().left - $('.el1').position().left;
                let top_minus = $('.balon').position().top - $('.el1').position().top;
                if(left_minus < 250 && left_minus > -250 && top_minus < 120 && top_minus > -120){
                    $('.posr').css('display','block');
                    $('.el1').css({'border':'1px solid red'});
                }else $('.el1').css({'border':'none'});


            }
            let j = ui.draggable.init()[0].classList[0];
            $('.' + j).draggable({
                cursor:'move',
                containment: '.item_1'
            });
        }
        checkErrors()
    }
});
