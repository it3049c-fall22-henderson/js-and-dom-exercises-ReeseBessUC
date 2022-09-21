// 🤖: create 2 constants with references to the password input and the reveal button from the DOM

// 🤖: Create an Event Listener on the password reveal button
<div class="password">
    <form>
            <label for="pswd">Enter password: </label>
            <input type="password" id="pswd"/>
            <input type="button" id="myBtn" value="submit" onclick="checkPswd();" />
        </form>
    </div>
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
