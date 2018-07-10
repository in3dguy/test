OnLoad(function()
{
  // find all elements that have a href of #topmenu
  var menuExpanders = document.querySelectorAll("[href='#topmenu']");

  // loop each menu expander
  ForEach(menuExpanders, function(item)
  {
    // listen on the click event
    item.addEventListener("click", function(e)
    {
      // cancel navagation
      e.preventDefault();

      // add the class to all top menu
      var topMenus = document.querySelectorAll("[data-topmenu-class]");

      // for each menu
      ForEach(topMenus, function(menu)
      {
        // get the value of the data-topmenu attribute
        var menuClass = menu.getAttribute("data-topmenu-class");

        // add/remove the class to this item
        menu.classList.toggle(menuClass);
      });
    });
  });
});