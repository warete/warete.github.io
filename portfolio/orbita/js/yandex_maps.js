var Coords = [];
    Coords['msk'] = [55.616493, 37.209414];
    Coords['srtv'] = [51.489095, 46.123369];
    Coords['engls'] = [51.50258, 46.126199];
    Coords['nsk'] = [55.030199, 82.92043];
    ymaps.ready(init);
    var myMap,
        myPlacemark;
        
    $( ".map_gorod" ).click(function() {
        myMap.setCenter(Coords[$(this).attr("data-city")], 18);
        $(".map_gorod").removeClass("map_gorod_active");
        $(this).addClass("map_gorod_active");
    });
        
        
        $( "#map_right" ).click(function() {
        var next = $(".map_gorod_active").next(".map_gorod");
        if(next.length != 0){
            myMap.setCenter(Coords[next.attr("data-city")], 18);
            $(".map_gorod").removeClass("map_gorod_active");
            next.addClass("map_gorod_active");
        } else {            
            var citi = $( ".map_gorod" ).eq(0);
            myMap.setCenter(Coords[citi.attr("data-city")], 18);
            $(".map_gorod").removeClass("map_gorod_active");
            citi.addClass("map_gorod_active");
        }
        });
            
        $( "#map_left" ).click(function() {
        var prev = $(".map_gorod_active").prev(".map_gorod");
        if(prev.length != 0){
            myMap.setCenter(Coords[prev.attr("data-city")], 18);
            $(".map_gorod").removeClass("map_gorod_active");
            prev.addClass("map_gorod_active");
        } else {
            var cities = $( ".map_gorod" );
            var citi = $( ".map_gorod" ).eq(cities.length-1);
            myMap.setCenter(Coords[citi.attr("data-city")], 18);
            $(".map_gorod").removeClass("map_gorod_active");
            citi.addClass("map_gorod_active");
        }
        
    });

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.616493, 37.209414],
            zoom: 15
        });

        Moscow = new ymaps.Placemark([55.616493, 37.209414], { 
            hintContent: 'Москва', 
            balloonContent: 'Ул. Ленина 56/4, второй корпус, вход со двора',
            
        },
        {
            preset: 'islands#icon',
            iconColor: '#b60000'
        });
        
        Saratov = new ymaps.Placemark([51.489095, 46.123369], { 
            hintContent: 'Саратов', 
            balloonContent: 'Ул. Тельмана 25',
            
        },
        {
            preset: 'islands#icon',
            iconColor: '#b60000'
        });
        
        Engels = new ymaps.Placemark([51.50258, 46.126199], { 
            hintContent: 'Энгельс', 
            balloonContent: 'Набережная им. Рудченко дом 1а',
            
        },
        {
            preset: 'islands#icon',
            iconColor: '#b60000'
        });

        
        Novosibirsk = new ymaps.Placemark([55.030199, 82.92043], { 
            hintContent: 'Новосибирск', 
            balloonContent: 'Проспект Победы, 16 напротив аптеки',
            
        },
        {
            preset: 'islands#icon',
            iconColor: '#b60000'
        });



        myMap.geoObjects.add(Moscow);
        myMap.geoObjects.add(Saratov);
        myMap.geoObjects.add(Engels);
        myMap.geoObjects.add(Novosibirsk);
    }
function show_hide(el){
                        $(el).fadeOut(500);
                        $(el).fadeIn(500);
                   }
                   $( ".tovar_img_min_item" ).click(function() {                                               
                       $( ".tovar_img_min_item" ).removeClass("tovar_img_min_active");
                       var thisimg = $(this);
                       var thisimg_src = thisimg.find("img").attr('src');
                       $(".tovar_img_main").html('<img src="'+thisimg_src+'" alt="">');
                       thisimg.addClass("tovar_img_min_active");                        
                });
                   $(function(){
                       init();
                        if($('.tovar_table_har_block').is()) $('.tovar_table_har_block').jScrollPane();
                       var contact_modal = '<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">'+
                      '<div class="modal-dialog modal-sm">'+
                        '<div class="modal-content">'+
                          '<form class="form1" id="contactsform1" action="#" method="post">'+
                    '<input class="cont-form zakaz_form zakaz_name" type="text" name="name1" placeholder="Ваше имя *" required="">'+
                    '<input class="cont-form zakaz_form zakaz_tel" type="text" name="phone1" placeholder="Контактный телефон *" required="">'+
                    '<button type="submit" class="zakaz_form_btn2" value="Отправить заявку">Отправить заявку</button>'+
                '</form>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
                       $("body").append(contact_modal);
                       
                    });
