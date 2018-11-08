function setpage( path, id )
{
//alert( "setpage(" + path + "," + id + ")" );
parent.frames[1].location.href = path;
parent.frames[1].focus();
jselec2 = id;
menuwrite2();
}

function setlang( s )
{
//alert( "setlang(" + s + "), " + "jlanguage=" + jlanguage );
if( jlanguage != s ) { 
  jlanguage = s; 
  //alert( "jlanguage=" + jlanguage );
  menuwrite2();
}
}

function setmenu( i )
{
//if( jselect != i ) { jselect = i; jselec2 = 0; menuwrite2(); }
jselect = i; 
jselec2 = 0; 
menuwrite2();
}

function isEnglish()
{
return "eng" == jlanguage;
}

function langprompt()
{
return "<table style='margin-bottom:20pt'>"
  + "<a href=\"javascript:setlang('" 
    + (isEnglish() ? "deu" : "eng")
    + "')\" style='font-size:12pt;color:grey;text-decoration:none'>"
  + (isEnglish() ? "anzeige auf" : "display in")
  + "<br><font style='font-size:16pt'>"
  + (isEnglish() ? "deutsch" : "english")
  + "</font>";
  + "</a></table>";
}

function menuhead( id, headtext, isactive )
{
return "<tr><td>"
  + "<a class='menuhead' href='javascript:setmenu(" + id + ")' "
    + "style='color:" + (isactive ? "black" : "grey") + "'>"
  + headtext
  + "</a></td></tr>";
}

function menuitem( itemtext, path, myid )
{
var isactive = (myid == jselec2);
return "<tr><td>"
  + "<a class='menuitem' href='javascript:setpage(\"" + path + "\"," + myid + ")'"
    + "style='color:" + (isactive ? "black" : "grey") + "'>"
  + itemtext
  + "</a></td></tr>";
}

function menuwrite2()
{
//alert( "menuwrite2" );
//alert( "jlanguage=" + jlanguage );

var rootLang = isEnglish() ? jrootEng : jroot + "deu/";

if( 0 == jselect ) {
  parent.frames[1].location.href = rootLang + "doc/intro.htm";
  jselec2 = 0;
}
if( 1 == jselect ) {
  parent.frames[1].location.href = rootLang + "doc/cv.htm";
  jselec2 = 0;
}
if( 2 == jselect ) {
  parent.frames[1].location.href = rootLang + "doc/exp.htm";
  jselec2 = 0;
}
if( 3 == jselect ) {
  if( 0 == jselec2 ) {
    parent.frames[1].location.href = rootLang + "doc/doc.htm";
  }
}
else if( 4 == jselect ) {
  if( 0 == jselec2 ) {
    parent.frames[1].location.href = rootLang + "doc/ref2.htm";
  }
}
else if( 5 == jselect ) {
  parent.frames[1].location.href = rootLang + "doc/download.htm";
  jselec2 = 0;
}

var menutext = langprompt() + "<table>"

  + "<table>"
  + menuhead( 0, (isEnglish() ? "intro" : "begr&uuml;ssung"), 0 == jselect )
  + "</table>"

  + "<table>"
  + menuhead( 1, (isEnglish() ? "c.v." : "lebenslauf"), 1 == jselect )
  + "</table>"

  + "<table>"
  + menuhead( 2, (isEnglish() ? "experience" : "berufserfahrung"), 2 == jselect )
  + "</table>"

  + "<table>"
  + menuhead( 3, (isEnglish() ? "background" : "hintergrund"), 3 == jselect )
  + (3 == jselect
    ? menuitem( (isEnglish() ? "referees" : "referenzen"), rootLang + "doc/ref.htm", 1 )
    + menuitem( (isEnglish() ? "employers" : "auftraggeber"), rootLang + "doc/employer.htm", 2 )
    + menuitem( (isEnglish() ? "language" : "sprache"), rootLang + "doc/lang.htm", 3 )
    + menuitem( (isEnglish() ? "university" : "studium"), rootLang + "doc/uni.htm", 4 )
    + menuitem( "software", rootLang + "doc/software.htm", 5 )
    + menuitem( (isEnglish() ? "expertise" : "vertieft"), rootLang + "doc/expert.htm", 6 )
    + menuitem( (isEnglish() ? "presentation" : "pr&auml;sentation"), rootLang + "doc/pres.htm", 7 )
    + menuitem( (isEnglish() ? "publication" : "publikation"), rootLang + "doc/pub.htm", 8 )
    + menuitem( "hobby", rootLang + "doc/hobby.htm", 9 )
    : "")
  + "</table>"

  + "<table>"
  + menuhead( 4, (isEnglish() ? "references" : "zeugnisse"), 4 == jselect )
  + (4 == jselect
    ? menuitem( (isEnglish() ? "profession" : "beruf"), rootLang + "doc/pro.htm", 1 )
    //+ menuitem( "consulting", jrootEng + "doc/consult.htm", 2 )
    + menuitem( (isEnglish() ? "education" : "ausbildung"), rootLang + "doc/edu.htm", 2 )
    + menuitem( "hobby", rootLang + "doc/hobbyref.htm", 3 )
    : "")
  + "</table>"

  + "<table>"
  + menuhead( 5, "download", 5 == jselect )
  + "</table>"

  + "</table>";

  //if( document.all ) {
  //  document.all.jdiv.innerHTML = menutext;
  //}
  //else 
  if( document.layers ) {
    document.jlayer.document.open();
    document.jlayer.document.write('<span>' + menutext + '</span>');
    document.jlayer.document.close();
  }
  else {
    var item = document.getElementById( "jdiv" );
    item.innerHTML = menutext;
  }
}
