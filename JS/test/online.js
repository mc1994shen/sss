window.addEventListener('offline', () => {
  document.querySelector('div').innerHTML("断网了")
})


window.addEventListener('load', function () {
  var div = document.querySelector("div");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    div.innerHTML = condition.toUpperCase();
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});