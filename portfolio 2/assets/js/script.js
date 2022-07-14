$(function(){
    // ハンバーガーメニュー
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });

    // ヘッダーリンクスクロール
    $('a[href^="#"]').click(function(){
        var adjust = 0;
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });

    //topに戻る
    var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });

    // aboutセクション 画像がフェードインでループする
    $(".hobbyContents:not(:first-child)").hide();
    setInterval(function() {
      $(".hobbyContents:first-child").fadeOut("slow").next(".hobbyContents").fadeIn("slow").end().appendTo(".hobbyContentsFlex");
    },5000);
    
    // skillsセクション スクロールフェードイン処理
  jQuery(window).scroll(function (){
    jQuery(".fade").each(function(){
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi){
        jQuery(this).addClass("fadein");
      } else {
    //　スクロールで画面上部に戻った際に要素を非表示
        jQuery(this).removeClass("fadein");
      }
    });
   });

   // Worksセクション モーダル
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    }); 


})