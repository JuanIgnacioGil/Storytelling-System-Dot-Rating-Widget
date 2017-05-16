(function ($) {
    "use strict";

    var data = {
      "Name": "Adolfo Trigonegro",
      "Player": "Quinta",
      "Chronicle": "Firenze, 1923"
    }

    $(function fillData() {

        $.each(data, function(key, value) {
          $(#description1).append("<div>" + key +": " + value "</div>");
        });
      })

      // After the page finished loading, detect and
      // initialize all dot rating components.
      $(document).onload(function () {
          fillData()
      });

    })(window.jQuery);
