const input = document.getElementById('input')
function addingEventListener() {
    //make the alertclick function
   const alertCLick =  () => alert('I was clicked')
     // add and event to the input, in this case when its click, alert with the log; 'I was clicked'
     input.addEventListener('click', alertCLick)
}
// call the addEventListener()
addingEventListener()