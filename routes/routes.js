exports.home = function(req, res) {
    res.render('home', {
        title: "I love my city",
        headline: "Welcome to 'I love my city'"
    });
}

exports.city = function(req, res) {
    var city_name = req.params.city;
    var header, ptitle;
    var img_count = 4;
    var img_count=[1,2];


    if(city_name === 'lofoten') {
        ptitle = "Lofoten";
        header = "Lofoten #1";
    } else if(city_name === 'kirkenes') {
        ptitle = "Kirkenes";
        header = "Kirkenes #2";
        img_count.push(3)
        img_count.push(4)
    } else if(city_name === 'tromso') {
        ptitle = "Tromsø";
        header = "Tromsø #3";
        img_count.push(3)
        img_count.push(4)
    } else if(city_name === 'bergen') {
        ptitle = "Bergen";
        header = "Bergen #4";
    } else {
        // Undefined city requested
        ptitle = "No city";
        header = "No such city on this site";
        img_count = 0;
    }
    
    res.render('city', {
        title: ptitle,
        city: city_name,
        headline: header,
        num_of_img: img_count
    });
}