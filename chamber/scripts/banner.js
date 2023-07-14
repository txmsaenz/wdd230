function showBanner() {
    var currentDate = new Date();
    var currentDay = currentDate.getDay(); 

    if (currentDay >= 1 && currentDay <= 7) {
        let banner = document.createElement("div");
        banner.className = "banner";
        banner.innerText = "Join us at the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.";

        banner.appendChild(banner);
    }
}

showBanner();