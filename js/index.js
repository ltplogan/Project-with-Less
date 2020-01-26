(function() {
    // var header = new Headroom(document.querySelector("#header"), {
    //     tolerance: 5,
    //     offset : 205,
    //     classes: {
    //       initial: "animated",
    //       pinned: "flipInX",
    //       unpinned: "flipOutX"
    //     }
    // });
    // header.init();

    var headroom = new Headroom(document.querySelector("#header"), {
        tolerance: 5,
        offset : 190,
        classes: {
          initial: "animated",
          pinned: "slideInDown",
          unpinned: "slideOutUp"
        }
    });
    headroom.init();

    var bttHeadroom = new Headroom(document.getElementById("btt"), {
        tolerance : 1,
        offset : 90,
        classes : {
          initial: "animated",
          pinned: "slideOutUp",
          unpinned: "slideInDown"
        }
    });
    bttHeadroom.init();

    $(".btn--").addClass("btn--plain");

}());

headroom.destroy();



