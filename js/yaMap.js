    ymaps.ready(init);
    function init(){  
        var office_1_map = new ymaps.Map("office_1", {
            center: [55.7684939,37.591283],
            zoom: 17
        });
        var office_2_map = new ymaps.Map("office_2", {
            center: [55.735999,37.6219206],
            zoom: 17
        });
        office_1_placemark = new ymaps.Placemark([55.7684939,37.591283] , {
            balloonContent: "Офис юристов",
            hintContent: 'Офис юристов'
            
        },{
            preset: 'islands#icon',
            iconColor: '#FF1010'
        });
        office_2_placemark2 = new ymaps.Placemark([55.735999,37.6219206] , {
            balloonContent: "Офис переводчиков",
            hintContent: 'Офис переводчиков'
        },{
            preset: 'islands#icon',
            iconColor: '#FF1010'
        });

        office_1_map.behaviors.disable('scrollZoom');
        office_1_map.geoObjects.add(office_1_placemark);       
        office_2_map.behaviors.disable('scrollZoom');
        office_2_map.geoObjects.add(office_2_placemark2);
    }