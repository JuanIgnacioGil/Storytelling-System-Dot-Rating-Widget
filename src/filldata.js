(function ($) {
    "use strict";

    var data = {
      "name": "Adolfo Trigonegro",
      "player": "Quinta",
      "chronicle": "Firenze, 1923",

    }

    $(function fillData() {

        document.getElementById("name").innerHTML = "<em>Nombre: " + data["name"] + "</em>";
        document.getElementById("player").innerHTML = "<em>Player: " + data["player"] + "</em>";
        document.getElementById("chronicle").innerHTML = "<em>Chronicle: " + data["chronicle"] + "</em>";
      })

      // After the page finished loading, detect and
      // initialize all dot rating components.
      $(document).onload(function () {
          fillData()
      });

    })(window.jQuery);
