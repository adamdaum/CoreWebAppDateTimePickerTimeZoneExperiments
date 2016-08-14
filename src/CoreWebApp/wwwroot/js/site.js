// Write your Javascript code.

$(function () {
    $('#datetimepicker1').datetimepicker();

    $('#test').on('click', function () {

        var datetimeFromInput = $('#datetimeinput').val();
        var month = datetimeFromInput.substring(0, 2);
        var day = datetimeFromInput.substr(3, 2);
        var year = datetimeFromInput.substring(6, 10);
        var time = datetimeFromInput.substring(11, 19);
        var properDateTimeString = (year + '-' + month + '-' + day + ' ' + time);

        //alert(properDateTimeString);
        //var datetime = '2016-08-17 12:00 PM';
        var datetime = properDateTimeString;


        if (datetime) {
            var SanFran = moment.tz(datetime, 'YYYY-MM-DD hh:mm a', 'America/Los_Angeles');
            var NewYork = moment.tz(datetime, 'YYYY-MM-DD hh:mm a', 'America/New_York');
            
            //.format('MMMM Do YYYY, h:mm:ss a [,Offset from UTC: ] ZZ');

            var SanFranToNewYork = SanFran.clone().tz('America/New_York').format('ha z');
            var NewYorkToSanFran = NewYork.clone().tz('America/Los_Angeles').format('ha z');
            

            var output = $('.output-row');
            output.children().remove();

            var $div1 = $('<div role="alert"> Original DateTime: ' + datetime + '</div>').addClass('alert alert-success');
            var $div2 = $('<div role="alert"> San Fran DateTime: ' + SanFran.format('MMMM Do YYYY, h:mm:ss a [,Offset from UTC: ] ZZ')  + ' Converted to New York: ' + SanFranToNewYork + '</div>').addClass('alert alert-info');
            var $div3 = $('<div role="alert"> New York DateTime: ' + NewYork.format('MMMM Do YYYY, h:mm:ss a [,Offset from UTC: ] ZZ')  + ' Converted to San Fran: ' + NewYorkToSanFran + '</div>').addClass('alert alert-warning');

            output.append($div1, $div2, $div3);
        }
        


    });

});

