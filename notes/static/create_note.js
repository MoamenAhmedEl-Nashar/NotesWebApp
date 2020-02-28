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

$("a.create").click(function(){
    

    $("div.notes").append(`<div class="card w-25 draggable">
                               
                                <div id="divheader">&#128203;</div>
                                <div class="card-body create_form">
                                    <div class="card-title">
                                        <input class="form-control" type="text" placeholder="Note Title">
                                    </div>
                                    <textarea class="card-text form-control" type="text" rows="9"> </textarea>
                                </div>
                            </div>`);
    
    var url = "/create_note/";
    var title = "";
    var content = "";
    $(".create_form > .card-title > input").change(function(){
        title = $(".create_form").find(".card-title").find("input").val();
        console.log(title);
        if(title != "" && content!= "")
    {
        $.ajax({
            async: 'true',
            type: 'POST',
            url: url,
            data: {'title': title, 
                   'content': content,
                   'csrfmiddlewaretoken': csrftoken},
            success: function(data){
                $(this).removeClass("create_form");
                console.log("work");
                setTimeout(refresh, 2000 );
                
        }});
    }
    });
    $(".create_form > .card-text").change(function(){
        content = $(".create_form").find(".card-text").val();
        console.log(content);
        if(title != "" && content!= "")
    {
        $.ajax({
            async: 'true',
            type: 'POST',
            url: url,
            data: {'title': title, 
                   'content': content,
                   'csrfmiddlewaretoken': csrftoken},
            success: function(data){
                $(this).removeClass("create_form");
                console.log("work");

                
        }});
    }
    });
    
    
    
});

