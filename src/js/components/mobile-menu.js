export const mobileMenu = (function () {
  const init = function () {
    var $mobileMenuToggle = $(".js-toggle-menu");

    if (!$mobileMenuToggle.length) {
      return;
    }

    var $html = $("html");
    var $body = $("body");

    $mobileMenuToggle.on("click", function () {
      $html.toggleClass("mobile-menu-active");
      $body.toggleClass("mobile-menu-active");
      $(this).toggleClass("is-active");
    });
  };

  return {
    init,
  };
})();
