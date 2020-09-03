$(function() {
    let reg = {
        "username": /^\w{1,19}$/,
        "password": /^.{6,16}$/,
        "email": /^\w{6,16}@[A-z0-9_-]{2,7}\.?[A-z]*$/,
        "phone": /^1[3-9]\d{9}$/
    };

    $('#myform>input:not([type="button"])').each(function(index, elm) {
        $(elm).on('input', function() {
            // if ($(elm).attr('id') == 'tiaokuan') {
            //     if ([$(elm).attr('checked')].values() == 'true') {
            //         $(this).attr('data-pass', true);
            //     } else {
            //         $(this).attr('data-pass', false);
            //     }
            // };
            if (reg[$(elm).attr('id')].test($(elm).val())) {
                $('span[class="' + $(elm).attr('id') + '"]').html('通过验证');
                $(this).attr('data-pass', true);
            } else {
                $('span[class="' + $(elm).attr('id') + '"]').html('未通过验证');
                $(this).attr('data-pass', false);
            }
            check();
        });
    });

    function check() {
        if ($('[data-pass=true]').length == 4) {
            $('#btn').removeAttr('disabled')
        } else {
            $('#btn').attr('disabled', 'disabled');
        }
    }
});