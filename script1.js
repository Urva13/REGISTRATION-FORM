var f_event = document.getElementById("firstname");
f_event.onblur = function f_name()
{
    var f_name = document.getElementById("firstname").value;
    var f_name_input = document.getElementById("firstname");
    f_icon = document.getElementById("f_warning");

    if(f_name == "")
    {
        f_name_input.style.border = "3px solid red";
        f_icon.style.display = "block";
    }
    f_name_input.onclick = function ()
    {
        f_name_input.style.border = "3px solid #CCC";
        f_icon.style.display = "none";

        f_name_input.onblur = function ()
        {
            f_icon.style.display = "none";
        }
    }
}

// start password validation

var pass_input = document.getElementById("password");
pass_input.onclick = function ()
{
    var pass_text = document.getElementById("pass_hint_text");
    var pass_hint_box = document.getElementById("password_hint");

    if(pass_input.value != "")
    {
        pass_hint_box.style.display = "none";
    }
    else
    {
        pass_hint_box.style.display = "block";
    }
    pass_hint_box.onclick = function ()
    {
        var new_pass = pass_text.innerHTML;
        pass_input.value = new_pass;
        pass_hint_box.style.display = "none";
    }
}
pass_input.oninput = function ()
{
    var pass_hint_box = document.getElementById("password_hint");
    pass_hint_box.style.display = "none";
}

var check_box = document.getElementById("check");
check_box.onclick = function ()
{
    var pass_input = document.getElementById("password");
    var text_pass = document.getElementById("s_pass");
    
    if(check_box.checked)
    {
        pass_input.type = "text";
        text_pass.innerHTML = "Hide password";
    }
    else
    {
        pass_input.type = "password";
        text_pass.innerHTML = "Show password";
    }
}

// submit coding start

var form = document.getElementById("frm");
form.onsubmit = function ()
{
    var fname = document.getElementById("firstname");
    var sname = document.getElementById("surname");
    var email = document.getElementById("email");
    var pass = document.getElementById("password");

    if(fname.value == "" || sname.value == "" || email.value == "" || pass.value =="")
    {
        fname.style.border = "2px solid red";
        sname.style.border = "2px solid red";
        email.style.border = "2px solid red";
        pass.style.border = "2px solid red";
        return false;
    }
    else
    {
        window.alert("Login Successfully")
    }
}