let adElement;
let closeButton = document.querySelector("#adDialogClose");

function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: [0],
    };
    function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                runFullscreenAd();
            }
        });
    }

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(adElement);
}

runFullscreenAd = () => {
    document.querySelector("dialog").classList.add("open");
    adElement = document.querySelector("#ad_observer");
    adVideo = document.querySelector("#adVideo");
    closeButton = document.querySelector("#adDialogClose");
    adDialog = document.querySelector("#adDialog");

    document.querySelector("body").style.overflow = "hidden";

    adVideo.play();
    let timeoutRange = 15;
    closeButton.style.cursor = "default";
    adInterval = setInterval(() => {
        if (timeoutRange > 0) {
            closeButton.querySelector(
                "#adCounter"
            ).innerHTML = `${timeoutRange} сек.`;
            timeoutRange--;
        } else {
            oldButtoninnerHTML = closeButton.innerHTML;
            closeButton.innerHTML = `Закрыть`;
            closeButton.style.cursor = "pointer";

            closeButton.addEventListener("click", (event) => {
                adDialog.classList.remove("open");
                document.querySelector("body").style.overflow = "";
                localStorage.setItem("isAdSeen", true);
                closeButton.innerHTML = oldButtoninnerHTML;
            });
            clearInterval(adInterval);
        }
    }, 1000);
    // setTimeout(() => {
    //     oldButtoninnerHTML = closeButton.innerHTML;
    //     closeButton.innerHTML = `Закрыть`;
    //     closeButton.style.cursor = "pointer";

    //     closeButton.addEventListener("click", (event) => {
    //         adDialog.classList.remove("open");
    //         document.querySelector("body").style.overflow = "";
    //         localStorage.setItem("isAdSeen", true);
    //         closeButton.innerHTML = oldButtoninnerHTML;
    //     });
    //     clearInterval(adInterval);
    // }, timeoutRange * 1000);
};

window.addEventListener(
    "load",
    (event) => {
        if (!localStorage.getItem("isAdSeen")) {
            createObserver();
        }
    },
    false
);
