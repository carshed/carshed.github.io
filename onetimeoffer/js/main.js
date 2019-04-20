//Slider    
    function pageOne(){
		setTimeout("$('.comment-display-page2').fadeOut();", 0);
        setTimeout("$('.comment-display-page1').fadeIn();", 500);
        $("#commentPageOne").css({"color":"#ff9900", "transition":"0.4s"});
        $("#commentPageTwo").css({"color":"#000000", "transition":"0.4s"});
	}
	function pageTwo(){
		setTimeout("$('.comment-display-page1').fadeOut();", 0);
        setTimeout("$('.comment-display-page2').fadeIn();", 500);
        $("#commentPageTwo").css({"color":"#ff9900", "transition":"0.4s"});
        $("#commentPageOne").css({"color":"#000000", "transition":"0.4s"});
	}
//Gallery
    $(".galleryN1").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });
    $(".galleryN2").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });
    $(".galleryN3").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });
    $(".galleryN4").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });
    $(".galleryN5").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });
    $(".galleryN6").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });
    $(".galleryN7").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });
    $(".galleryN8").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });
    $(".galleryN9").click(function() {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        $("#vv_img").attr("src", bg);
        $("#view_gallery").click();
    });

//QA
      function qaN1(){
        $(".qaN1").css({"height":"auto"});
        $("#qaN1font").text("-");
        $(".qaN1").attr('onclick', 'qaN1close()');
      }
      function qaN1close(){
        $(".qaN1").css({"height":"71px"});
        $("#qaN1font").text("+");
        $(".qaN1").attr('onclick', 'qaN1()');
      }
      function qaN2(){
        $(".qaN2").css({"height":"auto"});
        $("#qaN2font").text("-");
        $(".qaN2").attr('onclick', 'qaN2close()');
      }
      function qaN2close(){
        $(".qaN2").css({"height":"71px"});
        $("#qaN2font").text("+");
        $(".qaN2").attr('onclick', 'qaN2()');
      }
      function qaN3(){
        $(".qaN3").css({"height":"auto"});
        $("#qaN3font").text("-");
        $(".qaN3").attr('onclick', 'qaN3close()');
      }
      function qaN3close(){
        $(".qaN3").css({"height":"71px"});
        $("#qaN3font").text("+");
        $(".qaN3").attr('onclick', 'qaN3()');
      }
      function qaN4(){
        $(".qaN4").css({"height":"auto"});
        $("#qaN4font").text("-");
        $(".qaN4").attr('onclick', 'qaN4close()');
      }
      function qaN4close(){
        $(".qaN4").css({"height":"71px"});
        $("#qaN4font").text("+");
        $(".qaN4").attr('onclick', 'qaN4()');
      }
      function qaN5(){
        $(".qaN5").css({"height":"auto"});
        $("#qaN5font").text("-");
        $(".qaN5").attr('onclick', 'qaN5close()');
      }
      function qaN5close(){
        $(".qaN5").css({"height":"71px"});
        $("#qaN5font").text("+");
        $(".qaN5").attr('onclick', 'qaN5()');
      }

      //Menu
      $("#open_menu").click(function() {
       $("#menu-resp").fadeIn();
       $("#open_menu").attr("id", "close_menu");
      });
      $("#close_menu").click(function() {
       $("#menu-resp").fadeOut();
       $("#close_menu").attr("id", "open_menu");
      });

     function open_menu(){
        $("#menu-resp").fadeIn();
        $("#responsive-bar").attr("onclick","close_menu()");
     }
     function close_menu(){
        $("#menu-resp").fadeOut();
        $("#responsive-bar").attr("onclick","open_menu()");
     }