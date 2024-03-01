let startTime, endTime;
let imageSize = "";
let image = new Image();

let speedResult = document.getElementById("speed");

let imageLink = "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

image.onload = async function () {
    endTime = new Date().getTime();

    await fetch(imageLink).then((response) => {
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    });
};

function calculateSpeed() {
    let timeDuration = (endTime - startTime) / 1000;

    let loadedBits = imageSize * 8;
    let speedInBps = (loadedBits / timeDuration).toFixed(2);
    let speedInMbps = (speedInBps / (1024 * 1024)).toFixed(2);

    speedResult.innerHTML = `${speedInMbps} MB/s`;
}

const buttonClicked = async () => {
    startTime = new Date().getTime();
    image.src = imageLink;
    speedResult.innerHTML = `calculating...`;
}