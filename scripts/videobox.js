// VIDEO ///////////////////////////////////////////////
// VIDEO ///////////////////////////////////////////////
// VIDEO ///////////////////////////////////////////////
// VIDEO ///////////////////////////////////////////////
// VIDEO ///////////////////////////////////////////////

// loads the IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// The API will call this function when the video player is ready.
function onPlayerReady(event) {}

/////////////// VIDEO hier einfügen | var und function beachten.
////////////////////////////////////////////////////////////////////////
// creates an <iframe> (and YouTube player) after the API code downloads
var video_hugefancyintro, video_albert, video_lustig, video_memo, video_leuchte, video_porzellan;

function onYouTubeIframeAPIReady() {

    video_hugefancyintro = new YT.Player('video_hugefancyintro', {
        height: '322',
        width: '590',
        videoId: 'REUUj4dfgVU',
        playerVars: {
            autoplay: 0,
            loop: 0,
            rel: 0,
            controls: 1,
            showinfo: 0,
            modestbranding: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    video_albert = new YT.Player('video_albert', {
        height: '322',
        width: '590',
        videoId: '8DV38O1jEA0',
        playerVars: {
            autoplay: 0,
            loop: 0,
            rel: 0,
            controls: 1,
            showinfo: 0,
            modestbranding: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    video_lustig = new YT.Player('video_lustig', {
        height: '322',
        width: '590',
        videoId: 'd4xPfuH53W4',
        playerVars: {
            autoplay: 0,
            loop: 0,
            rel: 0,
            controls: 1,
            showinfo: 0,
            modestbranding: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    video_leuchte = new YT.Player('video_leuchte', {
        height: '322',
        width: '590',
        videoId: 'TUrIiWPWF10',
        playerVars: {
            autoplay: 0,
            loop: 0,
            rel: 0,
            controls: 1,
            showinfo: 0,
            modestbranding: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    video_porzellan = new YT.Player('video_porzellan', {
        height: '322',
        width: '590',
        videoId: 'PBKoKKC-0mY',
        playerVars: {
            autoplay: 0,
            loop: 0,
            rel: 0,
            controls: 1,
            showinfo: 0,
            modestbranding: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    video_memo = new YT.Player('video_memo', {
        height: '322',
        width: '590',
        videoId: 'HUWDrCZGBXg',
        playerVars: {
            autoplay: 0,
            loop: 0,
            rel: 0,
            controls: 1,
            showinfo: 0,
            modestbranding: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });





    // VIDEO EMBED FENSTER WEG UND STARTEN | ALBERT
    $(".box_hugefancyintro").click(function () {
        video_hugefancyintro.playVideo();
        $(".box-video").addClass('open');
    });
    // VIDEO EMBED FENSTER WEG UND STARTEN | ALBERT
    $(".box_albert").click(function () {
        video_albert.playVideo();
        $(".box-video").addClass('open');
    });

    // VIDEO EMBED FENSTER WEG UND STARTEN | LEUCHTE
    $(".box_leuchte").click(function () {
        video_leuchte.playVideo();
        $(".box-video").addClass('open');
    });

    // VIDEO EMBED FENSTER WEG UND STARTEN | LACHEN
    $(".box_lustig").click(function () {
        video_lustig.playVideo();
        $(".box-video").addClass('open');
    });

    // VIDEO EMBED FENSTER WEG UND STARTEN | MEMO
    $(".box_memo").click(function () {
        video_memo.playVideo();
        $(".box-video").addClass('open');
    });

    // VIDEO EMBED FENSTER WEG UND STARTEN | PROZELLAN
    $(".box_porzellan").click(function () {
        video_porzellan.playVideo();
        $(".box-video").addClass('open');
    });


};


// ENDE DA, KLAPPE ZU
function onPlayerStateChange(event) {
    if (event.data === 0) {
        $(".box-video").removeClass('open');
    }
}