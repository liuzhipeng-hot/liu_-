$(function () {
    $('#rec').on('click', function () {
        $('.denglu').hide()
        $('.zhuce').show()
    })

    $('#login').on('click', function () {
        $('.denglu').show()
        $('.zhuce').hide()
    })
})