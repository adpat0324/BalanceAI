

//potential recommendations
var saheb = ["https://www.reddit.com/r/rolex/comments/12osipq/still_my_favorite_for_a_classic_man/", "https://www.reddit.com/gallery/121qewh?web_redirect=true", "https://www.reddit.com/r/NoStupidQuestions/comments/10dza4k/why_do_most_young_people_skew_left_politically/", "https://www.reddit.com/r/BMW/comments/12qv575/m5_heaven/", "https://www.reddit.com/r/MBA/comments/12m2hdd/discussion_taking_advantage_of_credit_cards_and/", "https://www.reddit.com/r/MBA/comments/12q3qh8/mckinsey_bain_delay_some_mba_start_dates_to_2024/", "https://www.reddit.com/r/onebag/comments/12r1k9o/first_time_onebag_kanken_classic_everyday/", "https://www.reddit.com/r/dataisbeautiful/comments/12p2uoa/oc_heatmap_of_breaking_bad_imdb_ratings_updated/", "https://www.reddit.com/r/apple/comments/125tuwg/apple_announces_wwdc_2023_event_taking_place_june/", "https://www.reddit.com/r/AskReddit/comments/12o8cq5/if_you_could_pick_between_100000_tomorrow_or/"]
var taylor = ["https://www.reddit.com/r/midjourney/comments/1275ndl/if_bears_were_your_hiking_buddies_and_didnt_eat/","https://www.reddit.com/r/natureporn/comments/12vfso6/crater_lake_national_park920x720/","https://www.reddit.com/r/natureporn/comments/12wg0mt/dana_jordan/","https://www.reddit.com/r/AmItheAsshole/comments/12qyzfj/aita_for_assuming_my_friend_was_keeping_her/", "https://www.reddit.com/r/AmItheAsshole/comments/12qi1ut/aita_for_not_wanting_a_gifted_dog/", "https://www.reddit.com/r/EarthPorn/comments/12w5gmq/i_figured_i_would_miss_out_going_before_waterfall/", "https://www.reddit.com/r/EarthPorn/comments/12w0q4i/the_sun_breaking_through_the_clouds_over_a_rock/", "https://www.reddit.com/r/EarthPorn/comments/12wfycg/twister_falls_eagle_creek_oregon_3648x5472oc/", "https://www.reddit.com/r/natureporn/comments/12w5e8i/snapped_a_picture_of_the_sunrise_this_morning/", "https://www.reddit.com/r/natureporn/comments/12ug853/a_spring_version_of_the_autumnal_area_i_took_a/"]
var varun = ["https://www.reddit.com/r/BuyItForLife/comments/11cjkbq/recommendations_for_hiking_shoes/","https://www.reddit.com/r/nba/comments/11ememg/has_anyone_gone_to_high_school_with_an_nba_player/", "https://www.reddit.com/r/fantasyfootball/comments/12qkjuq/chris_olave_and_derek_carr_2023_fantasy_football/", "https://www.reddit.com/r/fantasyfootball/comments/12qjk0a/official_trade_tue_04182023/", "https://www.reddit.com/r/ACMilan/comments/12r56bj/rafa_leao_is_the_motm_tonight/", "https://www.reddit.com/r/nbadiscussion/comments/12vla4b/what_is_the_future_of_this_clippers_teams_get_my/", "https://www.reddit.com/r/ACMilan/comments/12wavub/our_lineup_against_lecce/", "https://www.reddit.com/r/ACMilan/comments/12wg544/milan_twitter_new_hair_color_for_theo_today/", "https://www.reddit.com/r/ACMilan/comments/12ve06q/those_of_you_who_were_teenagers_or_older_during/", "https://www.reddit.com/r/ACMilan/comments/12uhf1c/ac_milan_primavera_has_been_eliminated_in_the/"]
var nicole = ["https://www.reddit.com/r/glossier/comments/12hn08s/lip_gloss/", "https://www.reddit.com/r/AsianBeauty/comments/1139e6j/best_sunscreens_for_going_to_the_gymdoing/", "https://www.reddit.com/r/SkincareAddiction/comments/10kz3qn/product_request_beginner_retinols/","https://www.reddit.com/r/Residency/comments/z725pn/derm_residents_whats_a_good_skin_care_routine/", "https://www.reddit.com/r/Sephora/comments/12vwhmw/what_products_did_you_buy_during_the_sale_to_try/", "https://www.reddit.com/r/Sephora/comments/12w7f2n/recommendations_for_redness_reducing_product_for/","https://www.reddit.com/r/Sephora/comments/12wg8if/be_careful_with_supergoop_resetting_spray/", "https://www.reddit.com/r/SkincareAddiction/comments/12w7t63/product_request_looking_for_a_hydrating_serum_and/", "https://www.reddit.com/r/SkincareAddiction/comments/12wgeqg/routine_help_i_need_a_change_up_in_my_skin_routine/"]
var eric = ["https://www.reddit.com/r/food/comments/12uws0c/prochef_fruit_cheese_meat_flat_lay/", "https://www.reddit.com/r/chess/comments/12vd1xe/chesscom_percentiles_april_2023/", "https://www.reddit.com/r/chess/comments/12v42m5/mate_in_3_no_other_instruction_required/", "https://www.reddit.com/r/poker/comments/12w2can/with_this_trick_you_will_almost_never_lose_with_a/", "https://www.reddit.com/r/cats/comments/12w29jp/i_saw_this_peacefull_can_enjoying_spring/", "https://www.reddit.com/r/cats/comments/12wafjw/fudge_passed_22042023_just_want_to_share_my_sweet/", "https://www.reddit.com/r/food/comments/12w0fw8/prochef_lemon_tart_meringue/", "https://www.reddit.com/r/cats/comments/12wa22d/meet_toby_my_rescue_cat/", "https://www.reddit.com/r/cats/comments/12w4n94/recently_captured_this_adorable_pic_of_my_baby/", "https://www.reddit.com/r/chess/comments/12w6mwa/game_10_post_round_discussion_thread_fide_world/", "https://www.reddit.com/r/chess/comments/12w81uk/mate_in_6_i_missed_in_a_recent_game_white_to_play/", "https://www.reddit.com/user/TemporaryProperty108/"]


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
                        var conditional = document.getElementById("recommendation");
                        while(conditional.firstChild) {
                            conditional.removeChild(conditional.firstChild);
                         }
                        const node = document.createTextNode(" We've detected high levels of negativity in the content you're browsing");
                        conditional.appendChild(node);
                        var btn = document.createElement('button');
                        btn.setAttribute('id', 'index_link');
                        btn.innerText("Generate Recommended Threads");
                        let person = taylor //will change this depending who's taking it 
                        var randomIndex = Math.floor(Math.random() * person.length);
                        var item = person[randomIndex];
                        btn.setAttribute("href", item);
                        conditional.append(btn);   
                    }
                } 

                // Hide the loading indicator
                $('#loading').hide();

            })
            .catch(error => {
                // Hide the loading indicator in case of an error
                $('#loading').hide();
            });
        }
            
        $('#url').val('');
    });
});

var serverhost = 'http://127.0.0.1:5000';
