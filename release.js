var website = website || {};

website.controls = function() {
  //Cache DOM
  $home = $("#home");
  $aboutMe = $("#aboutMe");
  $aboutMe.hide();
  $portfolio = $("#portfolio");
  $portfolio.hide();
  $contact = $("#contact");
  $contact.hide();
  $wrapper = $("#page-content-wrapper");

  $headerButton = $("#headerContent");
  $homeButton = $("#homeButton");
  $aboutMeButton = $( "#aboutMeButton" );
  $portfolioButton = $("#portfolioButton");
  $contactButton = $("#contactButton");
  $menuButton = $("#menuButton");
  $menuContent = $("#menuContent");
  $selectedPage = $home;
  $selectedButton = $homeButton;
  $window = $(window)
  var mobileMenuHidden = true;
  var mobile = false;
  function openMenu() {
    $menuContent.slideDown(500);
  }
  function closeMenu(time) {
    var _time = time || 500;
    $menuContent.fadeOut(_time);
  }
  // Fix bug when menu was hidden after page resize
  function isMobile() {
    if($window.width() >= 1300 ){
      $menuContent.slideDown(0);
      mobile = false;
    } else {
      mobile = true;
    }
  }
  isMobile();
  $window.resize(function(){
    isMobile();
  });

  //Open menu when clicked on menu
  $menuButton.click(function() {
    if(mobileMenuHidden){
      openMenu();
    } else {
      closeMenu();
    }
    mobileMenuHidden = !mobileMenuHidden;
  });

  //Go to home page
  $homeButton.click(function() {
    changePage($home);
    changeButton($homeButton);
  });
  $headerButton.click(function() {
    changePage($home);
    changeButton($homeButton);
  });

  $aboutMeButton.click(function() {
    changePage( $aboutMe);
    changeButton($aboutMeButton);
  });

  $contactButton.click(function() {
    changePage( $contact);
    changeButton($contactButton);
  });

  $portfolioButton.click(function() {
    changePage( $portfolio);
    changeButton($portfolioButton);
  });

  function changePage(newPage) {
    $selectedPage.fadeOut(0, function() {
      $selectedPage = newPage;
      newPage.slideDown(500);
      if(mobile) {
        closeMenu(0);
        mobileMenuHidden = !mobileMenuHidden;
      }
    })}

    function changeButton(currentButton) {
      $selectedButton.css("color", "#ECF0F1");
      $selectedButton = currentButton;
      $selectedButton.css("color", "#E74C3C");
      }
      changeButton($homeButton);

}


website.php = function(){
  var frmvalidator  = new Validator("contact_form");
  frmvalidator.addValidation("name","req","Please provide your name");
  frmvalidator.addValidation("email","req","Please provide your email");
  frmvalidator.addValidation("email","email",
  "Please enter a valid email address");
}

website.init = function(){
  website.controls();
  website.php();

}

website.init();
