$(document).ready(function () {
  closeAllAboutMeTabs();
  var cursor = true;
  setInterval(() => {
    if (cursor) {
      document.getElementById("blinker").style.opacity = 0;
      cursor = false;
    } else {
      document.getElementById("blinker").style.opacity = 1;
      cursor = true;
    }
  }, 300);
  setTimeout(() => {
    setName();
  }, 2000);

  //scroll effect
  $(window).scroll(function () {
    var scrollLength = $(window).scrollTop();
    if (scrollLength > 800) {
      $("#topArrow").removeClass("d-none");
    } else {
      $("#topArrow").addClass("d-none");
    }
  });

  //Custom accordion

  $(".card-header").click(function () {
    $(this)
      .parents(".card")
      .siblings(".card")
      .find(".card-body")
      .addClass("d-none");

    $(this)
      .parents(".card")
      .siblings(".card")
      .find(".arrow")
      .removeClass("tab-selected")
      .removeClass("bi-chevron-up")
      .addClass("bi-chevron-down");

    $(this)
      .parents(".card")
      .siblings(".card")
      .find(".card-header")
      .removeClass("tab-selected");

    if ($(this).find(".arrow").hasClass("bi-chevron-down")) {
      $(this)
        .find(".arrow")
        .removeClass("bi-chevron-down")
        .addClass("bi-chevron-up");
      $(this).addClass("tab-selected");
      if ($(this).siblings(".card-body").hasClass("d-none")) {
        $(this).siblings(".card-body").removeClass("d-none").slideDown();
      } else {
        $(this).siblings(".card-body").slideUp().addClass("d-none");
      }
    } else {
      $(this).removeClass("tab-selected");

      $(this)
        .find(".arrow")
        .removeClass("bi-chevron-up")
        .addClass("bi-chevron-down");
      if ($(this).siblings(".card-body").hasClass("d-none")) {
        $(this).siblings(".card-body").removeClass("d-none").slideDown();
      } else {
        $(this).siblings(".card-body").slideUp().addClass("d-none");
      }
    }
  });
});

const closeAllAboutMeTabs = () => {
  $("#educationTab").addClass("d-none");
  $("#experienceTab").addClass("d-none");
  $("#title").hide();
};
const setName = () => {
  let text = "My name is Jonathan Baraza";
  let length = text.length;
  let second = 0;

  $("#title").hide();
  const myInterval = setInterval(() => {
    second++;
    $("#name").html(text.slice(0, second));

    if (second > length) {
      clearInterval(myInterval);
      setTimeout(() => {
        let clearType = "name";
        clearName(text, clearType);
      }, 2000);
    }
  }, 100);
};

const setTitle = () => {
  let title = "I am a Software Engineer";
  let length = title.length;
  let second = 0;
  $("#title").show();
  const myTitleInterval = setInterval(() => {
    second++;
    $("#title").html(title.slice(0, second));

    if (second > length) {
      clearInterval(myTitleInterval);
      setTimeout(() => {
        let clearType = "title";
        clearName(title, clearType);
      }, 1000);
    }
  }, 100);
};

const clearName = (txt, theType) => {
  let length = txt.length;
  const myClearInterval = setInterval(() => {
    length--;
    $(`#${theType == "title" ? "title" : "name"}`).html(txt.slice(0, length));

    if (length == 0) {
      clearInterval(myClearInterval);
      setTimeout(() => {
        if (theType == "title") {
          setName();
        } else {
          setTitle();
        }
      }, 1500);
    }
  }, 50);
};
