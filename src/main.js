window.onload = function () {
    /*this.document.getElementById("button").onclick = function (evt) {
        sayHello();
    }*/
    const net = await posenet.load();

const pose = await net.estimateSinglePose(image, {
  flipHorizontal: false
});
}

function sayHello() {
    var messageDialog = new Windows.UI.Popups.MessageDialog("Hello, world!", "Alert");
    messageDialog.showAsync();
}