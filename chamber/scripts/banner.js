function showBanner() {
    let currentDate = new Date();
    let currentDay = currentDate.getDay(); 

    document.querySelector(".bannerClose").addEventListener('click', () => {
        document.querySelector('.banner').style.display="none";
    });
    
    if (currentDay == 0 || currentDay >= 4 && currentDay <= 7) {
        document.querySelector('.banner').style.display="none";
        };
    }


showBanner();
