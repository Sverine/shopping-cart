$( document ).ready( displayDiscountPercent() );

   $('.payment-methods-container input[type=radio]').click(function () {
    //check if checkbox is checked
        if ($(this).is(':checked')) {
            $('.buttons-container .submit').removeAttr('disabled');

        } else {
            $('.buttons-container .submit').attr('disabled', true);
        }
    });

    $('.buttons-container .submit').click(function () {
        $('.spinner-box').show();
        setTimeout(() => { 
                $('.spinner-box').hide();
                $('.buttons-container .validation-message').show();
            }, 3000);
        });



    function validateFormOnSubmit(){
        $('.error-message').show();
        return false;
    };

    function displayDiscountPercent(){


        var reducedPrice = parseFloat($('td .price').text());
        var initialPrice = parseFloat($('td .price-strike').text());

        var percent = (reducedPrice*100)/initialPrice;
        var finalPercent= percent - 100;
        var discountAmount = (initialPrice*finalPercent.toFixed(0))/100;

        $('.discount-percent p').text(finalPercent.toFixed(0))
    
        $('.total-price p:last-child span').text(discountAmount.toFixed(0)* -1);

    }

    function onKonamiCode(cb) {
        var input = '';
        var key = '38384040373937396665';
        document.addEventListener('keydown', function (e) {
          input += ("" + e.keyCode);
          if (input === key) {
            return cb();
          }
          if (!key.indexOf(input)) return;
          input = ("" + e.keyCode);
        });
      }
      
      onKonamiCode(function () {
          $('#konami-container').show();
          setTimeout(()=>{
            $('#konami-container').hide();
          }, 6550);

        });









