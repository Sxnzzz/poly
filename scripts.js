/* var declarations */
var tab_buttons = document.querySelectorAll(".tabclass .buttonclass button");
var tab_elements = document.querySelectorAll(".tabclass .tabelements");

/* so we can just call our function for each tab*/
function rendertab(idx, colorr)
{
    tab_buttons.forEach(function(node) {
        node.style.backgroundColor="";
        node.style.color="";
    });
    tab_buttons[idx].style.backgroundColor=colorr;
    tab_buttons[idx].style.color="white";

    tab_elements.forEach(function(node)
    {
        node.style.display="none";
    });

    tab_elements[idx].style.display="block";
    /*tab_elements[idx].style.backgroundColor=colorr;*/

}

/* im not sure yet */
rendertab(0, "#212F3C");