$(function(){

    var negativeCount = 0;

    $('#urlsubmit').click(function(){
        
        var post_url = $('#url').val();
        
        if (post_url){
            var api_url = serverhost + '/sentiment?url=' + encodeURIComponent(post_url);
            console.log("API URL:", api_url);

            // Show the loading indicator
            $('#loading').show();

            fetch(api_url)
            .then(response => response.json())
            .then(response => {
                console.log("API response:", response);
                var result = response.sentiment;

                $('#result').text('The post has a ' + result + ' sentiment.');

                if (result === 'negative') {
                    negativeCount++;
                    if (negativeCount >= 3) {
                        $('#recommendation').text('You have viewed 3 negative posts. We recommend taking a break. Check out this link: [your_link_here]');
                    }
                } 

                // Hide the loading indicator
                $('#loading').hide();

            })
            .catch(error => {
                console.log(error);
                // Hide the loading indicator in case of an error
                $('#loading').hide();
            });
        }
            
        $('#url').val('');
    });
});

var serverhost = 'http://127.0.0.1:5000';
