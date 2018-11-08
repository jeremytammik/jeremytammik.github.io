function showImage5( filename )
{
  var s = 'resizable=yes,scrollbars=yes,dependant=yes';
  win = open( "", "image", s );
  win.location.href = "../../img/" + filename;
  win.focus();
}

function szpickpos()
{
  var s = "width=400,height=300,scrollbars=yes,resizable=yes,dependant=yes"
    //+ ",left=" + window.event.screenX
    //+ ",top=" + (window.event.screenY + 20);
  return s;
}

function gloss( isEnglish, filename )
{
  var path = "../../" + (isEnglish ? "eng" : "deu") + "/gloss/" + filename + ".htm";
  var win = window.open( path, "glossar", szpickpos() );
  win.focus();
}

function addr( filename )
{
  var path = "../../addr/" + filename + ".htm";
  var win = window.open( path, "address", szpickpos() );
  win.focus();
}
