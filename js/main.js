$(".nav-link").click(function() {
    var targetId = $(this).attr("href");
    var targetOffset = $(targetId).offset().top - $(".navbar").height() - 25; // 額外的偏移量
    $('html, body').animate({
        scrollTop: targetOffset
    }, 100);
    return false;
});
  