params.location = $("#chatLocation").val();
params.url = window.top.location.href;
params.apikey = $("#apikey").val();
params.uniqueness = Date.now() + Math.floor(Math.random() * 10) + 1;

function submitInfo() {
    localStorage.setItem("tulipBotAction", true);
    $.ajax({
        type: 'POST',
        url: $("#baseUrl").val() + "/api/leads/save",
        data: {
            action: "update_leads",
            params
        },
        success: function(resultData) {}
    });
}

function playSound(time = 0) {
    setTimeout(function() {
        //        const audio = new Audio($("#baseUrl").val() + "/chatbot/assets/chat.mp3");
        if (chatSound) {
            chatSound.muted = false;
            chatSound.play();
        }
        $('.botui-container').scrollTop($('.botui-container')[0].scrollHeight);
        setTimeout(function() {
            $('.botui-container').scrollTop($('.botui-container')[0].scrollHeight);
        }, 500)
    }, time)
}

function disableEnter(time = 0) {
    setTimeout(function() {
        $('.botui-actions-text-input').keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
            }
        });
    }, time)
}


$(".chat-footer").click(function() {
    restartChat();
})


function restartChat() {
    params.uniqueness = Date.now() + Math.floor(Math.random() * 10) + 1;
    $(".chat-footer").hide();
    $(".botui-messages-container").html('');
    proceed = false;
    init();
}