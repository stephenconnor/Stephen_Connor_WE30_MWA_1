//---------------------------------------------
//Program     :
//Written By  : Stephen Connor
//Date        :
//Decription  :
//Version     :
//---------------------------------------------

// ------------------ Home Page ------------------

// Function gets JSON data from homePage_List.json, then inserts into targets div. JSON file could be replaced for live feed
function ajax_get_json_home(){
    var hr = new XMLHttpRequest();
    hr.open("GET", "homePage_List.JSON", true);
    hr.setRequestHeader("Content-type", "application/json", true);
    hr.onreadystatechange = function() {
   if(hr.readyState == 4 && hr.status == 200) {
       var data = JSON.parse(hr.responseText);
       var homeMenu = document.getElementById("homeMenu");
       homeMenu.innerHTML = "";
       for(var obj in data){
            homeMenu.innerHTML += '<li><a href="'+ data[obj].HREF +'" data-transition="flow"><img src="'+ data[obj].ImgPath +'" alt="'+ data[obj].Name +'" class="image-responsive"><p>'+ data[obj].Name +'</p></a></li>';
            } 
       $("#homeMenu").listview ("refresh");
        }
    }
    
    hr.send(null);
    homeMenu.innerHTML = "retrieving data...";
}
// Ref: http://www.developphp.com/view.php?tid=1271 Tutorial, with thanks, from Adam Khoury


// ------------------ Motorbikes Page ------------------

// Function gets JSON data from Motorbikes_List.json, then inserts into targets divs. JSON file could be replaced for live feed
function ajax_get_json_motorbikes(){
    var hr1 = new XMLHttpRequest();
    hr1.open("GET", "Motorbikes_List.json", true);
    hr1.setRequestHeader("Content-type", "application/json", true);
    hr1.onreadystatechange = function() {
   if(hr1.readyState == 4 && hr1.status == 200) {
       var data1 = JSON.parse(hr1.responseText);
       var motor_bikes = document.getElementById("motor_bikes");
       motor_bikes.innerHTML = "";
       for(var obj in data1){
            motor_bikes.innerHTML += '<li><a href="'+data1[obj].HREF+'"><img src="'+data1[obj].ImgPath+'"><p><h2>'+data1[obj].Name+'</h2>'+data1[obj].TagLine+'</p></a></li>';
            }
       
       var motor_bikes2 = document.getElementById("motor_bikes2"); 
       motor_bikes2.innerHTML = "";
            motor_bikes2.innerHTML += '<h2>'+data1.Motorbike1.Name+'</h2><p><h3>'+data1.Motorbike1.TagLine+'</h3>'+data1.Motorbike1.Description+'</p><a href="'+data1.Motorbike1.Link+'" data-role="button" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini">Learn more</a><a href="#" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini" data-rel="back">Back</a></div>';
        
       var motor_bikes3 = document.getElementById("motor_bikes3"); 
       motor_bikes3.innerHTML = "";
            motor_bikes3.innerHTML += '<h2>'+data1.Motorbike2.Name+'</h2><p><h3>'+data1.Motorbike2.TagLine+'</h3>'+data1.Motorbike2.Description+'</p><a href="'+data1.Motorbike2.Link+'" data-role="button" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini">Learn more</a><a href="#" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini" data-rel="back">Back</a></div>';
        }
    }
    
    hr1.send(null);
    motor_bikes.innerHTML = "retrieving data...";
}
// Ref: http://www.developphp.com/view.php?tid=1271 Tutorial, with thanks, from Adam Khoury
    
    
// ------------------ Cyclocross Bikes Page ------------------

// Function gets JSON data from Bikes_List.json, then inserts into targets div. JSON file could be replaced for live feed
function ajax_get_json_bikes(){
    var hr = new XMLHttpRequest();
    hr.open("GET", "Bikes_List.json", true);
    hr.setRequestHeader("Content-type", "application/json", true);
    hr.onreadystatechange = function() {
   if(hr.readyState == 4 && hr.status == 200) {
       var data = JSON.parse(hr.responseText);
       var results = document.getElementById("results");
       results.innerHTML = "";
       for(var obj in data){
            results.innerHTML += '<div data-role="collapsible"><h3>'+data[obj].Name+'</h3><img src="'+data[obj].ImgPath+'"><br/><p>"'+data[obj].Description+'"<p/><a href="'+data[obj].Link+'">Learn More</a></div>';
            }    
        }
    }
    
    hr.send(null);
    results.innerHTML = "retrieving data...";
}
// Ref: http://www.developphp.com/view.php?tid=1271 Tutorial, with thanks, from Adam Khoury


// ------------------ Rugby  Page ------------------

// Function gets JSON data from Bikes_List.json, then inserts into targets divs. JSON file could be replaced for live feed
function ajax_get_json_rugby(){
    var hr2 = new XMLHttpRequest();
    hr2.open("GET", "provincialRugby_List.json", true);
    hr2.setRequestHeader("Content-type", "application/json", true);
    hr2.onreadystatechange = function() {
   if(hr2.readyState == 4 && hr2.status == 200) {
       var data2 = JSON.parse(hr2.responseText);
       var provincialRugby = document.getElementById("provincialRugby");
       provincialRugby.innerHTML = "";
       for(var obj in data2){
            provincialRugby.innerHTML +='<div class="'+data2[obj].UiBlock+'" ><a href='+data2[obj].HREF+' data-transition="flow"><img src="'+data2[obj].ImgPath+'" alt='+data2[obj].Name+' class="image-responsive" ><p>'+data2[obj].Name+'</p></a></div>';
            }
        
       var provincialRugby1 = document.getElementById("provincialRugby1");
       provincialRugby1.innerHTML = "";
            provincialRugby1.innerHTML += '<div><h3>'+data2.team1.Name+'</h3><p>'+data2.team1.Description+'</p><a href="'+data2.team1.Link+'" data-role="button" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini">Learn more</a><a href="#" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini" data-rel="back">Back</a></div>';
       
       var provincialRugby2 = document.getElementById("provincialRugby2");
       provincialRugby2.innerHTML = "";
            provincialRugby2.innerHTML += '<div><h3>'+data2.team2.Name+'</h3><p>'+data2.team2.Description+'</p><a href="'+data2.team2.Link+'" data-role="button" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini">Learn more</a><a href="#" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini" data-rel="back">Back</a></div>';
       
       var provincialRugby3 = document.getElementById("provincialRugby3");
       provincialRugby3.innerHTML = "";
            provincialRugby3.innerHTML += '<div><h3>'+data2.team3.Name+'</h3><p>'+data2.team3.Description+'</p><a href="'+data2.team3.Link+'" data-role="button" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini">Learn more</a><a href="#" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini" data-rel="back">Back</a></div>';
       
       var provincialRugby4 = document.getElementById("provincialRugby4");
       provincialRugby4.innerHTML = "";
            provincialRugby4.innerHTML += '<div><h3>'+data2.team4.Name+'</h3><p>'+data2.team4.Description+'</p><a href="'+data2.team4.Link+'" data-role="button" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini">Learn more</a><a href="#" class="ui-btn ui-btn-inline ui-shadow ui-corner-all ui-btn-inline ui-mini" data-rel="back">Back</a></div>';
        }
    }
    
    hr2.send(null);
    provincialRugby.innerHTML = "retrieving data...";
}
// Ref: http://www.developphp.com/view.php?tid=1271 Tutorial, with thanks, from Adam Khoury






