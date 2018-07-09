// an array of callbacks for when the page is loaded
var onLoadCallbacks = [];

// listen out for page content loaded event
document.addEventListener("DOMContentLoaded", function()
{
  // process anything that should happen once the page is loaded
  ProcessOnLoad();
});

// helper function to iterate over arrays
function ForEach(array, callback)
{
  // loop each item
  for (var i = 0; i < array.length; i++)
  {
    // pass the item back to the function
    callback(array[i]);
  }
}

// process any onload events
function ProcessOnLoad()
{
  // call the callback
  ForEach(onLoadCallbacks, function(item)
  {
    // invokes the callback
    item();
  });
}

// called to add a function to be invoked once the page loads
function OnLoad(callback)
{
  // add this callback to the list
  onLoadCallbacks.push(callback);
}

