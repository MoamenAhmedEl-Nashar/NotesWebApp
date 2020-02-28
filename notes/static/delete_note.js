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

$(".delete_note").click(function(){
    
    var id = $(this).attr("id");
    var url = "/delete_note/" + id + "/";
    $.ajax({
        async: 'true',
        type: 'POST',
        url: url,
        data: {
               'csrfmiddlewaretoken': csrftoken},
        success: function(data){

            console.log("work");
           
            
            
    }});
    
    
    
});

