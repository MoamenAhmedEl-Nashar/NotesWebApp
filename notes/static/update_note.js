// get csrf token to make the post request
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');


var title = "";
var content = "";
var id;
var url;
    
    
$(".card-title > input").change(function(){
    console.log("title changes");
    id = $(this).attr("id");
    url = "/update_note_title/" + id + "/";
    console.log(id);

    title = $(this).val();
    console.log(title);
    

    $.ajax({
        async: 'true',
        type: 'POST',
        url: url,
        data: {'title': title, 
               'csrfmiddlewaretoken': csrftoken},
        success: function(data){
            console.log("work");
            
    }});

});

$(".card-text").change(function(){

    id = $(this).attr("id");
    url = "/update_note_content/" + id + "/";
    console.log(id);

    content = $(this).val();
    console.log(content);
    

    $.ajax({
        async: 'true',
        type: 'POST',
        url: url,
        data: { 'content': content,
               'csrfmiddlewaretoken': csrftoken},
        success: function(data){
            console.log("work");
            
    }});

});

