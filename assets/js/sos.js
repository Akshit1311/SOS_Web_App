var x = document.querySelector("#sos_msg");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.value = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.value =
    "Latitude: " +
    position.coords.latitude +
    " Longitude: " +
    position.coords.longitude;
}

$(".dismiss").click(() => {
  $(".sos-alert").fadeOut();
  $(".phone-num").fadeOut();
  $(".alert-container").fadeOut();
});

$(".alert-container").click(() => {
  $(".sos-alert").fadeOut();
  //   $(".phone-num").fadeOut();
  $(".alert-container").fadeOut();
});

$(".sos-btn").click(() => {
  $(".sos-alert").fadeIn();
  $(".alert-container").fadeIn();
  OTP();
});

$(".verify-btn").click(verifyOTP);

function verifyOTP() {
  if (document.getElementById("usr-otp").value == "768690") {
    // console.log("workss!");
    document.querySelector(".otp-verify-msg").innerHTML = "Verified!";
    document.querySelector(".otp-verify-msg").style.color = "green";
    $(".phone-num").delay(1000).fadeOut();
    $(".alert-container").delay(1000).fadeOut();
  } else {
    // console.log("worksssssssss!");

    document.querySelector(".otp-verify-msg").innerHTML = "OTP is incorrect!";
    document.querySelector(".otp-verify-msg").style.color = "red";
  }
}
