(function ($) {
    "use strict";

    var data = {
      "name": "Adolfo Trigonegro",
      "player": "Quinta",
      "children": [{
        "id":"0.9685","name":" contents:queue"},{
        "id":"0.79281","name":" contents:mqq_error"}]
    }

    $(function fillData() {

        document.getElementById("name").innerHTML = "<em>Nombre: " + data["name"] + "</em>";
        document.getElementById("player").innerHTML = "<em>Player: " + data["player"] + "</em>";
      })

      // After the page finished loading, detect and
      // initialize all dot rating components.
      $(document).onload(function () {
          fillData()
      });

    })(window.jQuery);
