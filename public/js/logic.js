console.log("Logic js is reading");
$("#login").on("click", function (e) {
    e.preventDefault();
    var email = $("#login-email").val();
    var password = $("#login-password").val();
    console.log(email, password);
    axios.post("/auth/login", {
        email: email,
        password: password
    })
        .then(function (resp) {
            console.log(resp);
            window.localStorage.setItem("token", resp.data.token);
            document.cookie = "token=" + resp.data.token;
            $(".login").hide();
            $(".redirect").show();
            window.setTimeout(function () {
                window.location.assign("/profile")
            }, 2000)
        })
        .catch(function (err) {
            console.error(err);
        })
})

$("#signup").on("click", function (e) {
    e.preventDefault();
        window.location.assign("/create_account")

});


$("#create-submit").on("click", function (e) {
    e.preventDefault();
    var name = $("#create-username").val();
    var email = $("#create-email").val();
    var password = $("#create-password").val();
    var zip = $("#create-zip").val();
    console.log(name, email, password, zip);
    axios.post("/auth/register", {
        name: name,
        email: email,
        password: password, 
        zip: zip
    })
        .then(function (resp) {
            console.log(resp);
            window.setTimeout(function () {
                window.location.assign("/profile")
            }, 2000)
        })
        .catch(function (err) {
            console.error(err);
        })
})

function previewFile() {
    var preview = document.querySelector('img'); //selects the query named img
    var file = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}
previewFile();  //calls the function named previewFile()
