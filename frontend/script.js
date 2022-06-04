let inp = $("#inp");
let btn = $("#btn");

btn.click(function () {
    if (inp.val() != "") {
        let settings = {
            url: `http://localhost:8080/carwashes/city/${inp.val()}`,
            method: "get",
            success: (response) => {
                console.log(response);
            },
            error: () => {
                alert("error");
            }
        }

        $.ajax(settings);
    }

    else if (inp.val() == "") {
        let settings = {
            url: `http://localhost:8080/carwashes/`,
            method: "get",
            success: (response) => {
                console.log(response);
            },
            error: () => {
                alert("error");
            }
        }

        $.ajax(settings);
    }
});