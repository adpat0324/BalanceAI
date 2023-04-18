
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

document.addEventListener('DOMContentLoaded', () => {
    var y = document.getElementById("index_link");
    y.addEventListener("click", openIndex);
 });
 
 function openIndex() {
   //each of these represents the recommendations for each user based on pre-survey
   const saheb = ["https://www.reddit.com/r/rolex/comments/12osipq/still_my_favorite_for_a_classic_man/", "https://www.reddit.com/gallery/121qewh?web_redirect=true", "https://www.reddit.com/r/NoStupidQuestions/comments/10dza4k/why_do_most_young_people_skew_left_politically/", "https://www.reddit.com/r/BMW/comments/12qv575/m5_heaven/", "https://www.reddit.com/r/MBA/comments/12m2hdd/discussion_taking_advantage_of_credit_cards_and/", "https://www.reddit.com/r/MBA/comments/12q3qh8/mckinsey_bain_delay_some_mba_start_dates_to_2024/", "https://www.reddit.com/r/onebag/comments/12r1k9o/first_time_onebag_kanken_classic_everyday/", "https://www.reddit.com/r/dataisbeautiful/comments/12p2uoa/oc_heatmap_of_breaking_bad_imdb_ratings_updated/", "https://www.reddit.com/r/apple/comments/125tuwg/apple_announces_wwdc_2023_event_taking_place_june/", "https://www.reddit.com/r/AskReddit/comments/12o8cq5/if_you_could_pick_between_100000_tomorrow_or/"]
   const taylor = ["https://www.reddit.com/r/AmItheAsshole/comments/12qyzfj/aita_for_assuming_my_friend_was_keeping_her/", "https://www.reddit.com/r/AmItheAsshole/comments/12qi1ut/aita_for_not_wanting_a_gifted_dog/", "https://www.reddit.com/r/BPD/comments/12qm80p/obsessive_thoughts_about_fp_ex_sexual_partners/", "https://www.reddit.com/r/lies/comments/10ka67n/i_am_a_popular_country_singer_ask_me_anything/"]
   const varun = ["https://www.reddit.com/r/nba/comments/11ememg/has_anyone_gone_to_high_school_with_an_nba_player/", "https://www.reddit.com/r/fantasyfootball/comments/12qkjuq/chris_olave_and_derek_carr_2023_fantasy_football/", "https://www.reddit.com/r/fantasyfootball/comments/12qjk0a/official_trade_tue_04182023/", "https://www.reddit.com/r/ACMilan/comments/12r56bj/rafa_leao_is_the_motm_tonight/"]
   let person = saheb //will change this depending who's taking it 
   const randomIndex = Math.floor(Math.random() * person.length);
   const item = person[randomIndex];
   chrome.tabs.create({active: true, url: item});
 }

