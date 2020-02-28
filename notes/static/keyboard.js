(function ($, undefined) {
    $.fn.getCursorPosition = function() {
        var el = $(this).get(0);
        var pos = 0;
        if('selectionStart' in el) {
            pos = el.selectionStart;
        } else if('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    }
})(jQuery);


(function ($, undefined) {
$.fn.setCursorPosition = function(position){
    if(this.length == 0) return this;
    return $(this).setSelection(position, position);
}
})(jQuery);

(function ($, undefined) {
$.fn.setSelection = function(selectionStart, selectionEnd) {
    if(this.length == 0) return this;
    var input = this[0];

    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }

    return this;
}
})(jQuery);

(function ($, undefined) {
$.fn.focusEnd = function(){
    this.setCursorPosition(this.val().length);
            return this;
}
})(jQuery);


$(".card-text").keyup(function(e) {
    console.log(e);
    var pos = $(this).getCursorPosition();
    var past_value = $(this).val();

    if (e.ctrlKey && e.code == 'Space') 
    {
      
      $(this).val(past_value.slice(0, pos) + "\t" + past_value.slice(pos));
      $(this).setCursorPosition(pos + "\t".length);

    } 
    else if (e.ctrlKey && e.code == 'Enter') 
    {
      $(this).val(past_value.slice(0, pos) + "\n\t" + past_value.slice(pos));
      $(this).setCursorPosition(pos + "\n\t".length);

    } 
    else if (e.shiftKey && e.code == 'Backspace') 
    {
      
      $(this).val(past_value.trimRight());
    }
    else if(e.ctrlKey && e.code == 'KeyB')
    {
        $(this).val(past_value.slice(0, pos) + '• ' + past_value.slice(pos));
        $(this).setCursorPosition(pos + '• '.length);
    }

  });