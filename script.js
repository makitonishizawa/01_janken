// 最初にJSのファイルが動くかalertでチェック
// alert (124567890)


//ゲームスタート

//↓グローバル変数は外側で宣言する必要あり
var hantei
var hantei2
var kachi = 0
var make = 0


$("#janken").hide()
$("#acchimuite").hide()
$("#acchimuite2").hide()
$(".subtitle").hide()
$("#pon").hide()
$("#hoi").hide()

$(".reset").on('click', function(){
    kachi = 0
    make = 0
    $('#kachisu').hide()
    $('#makesu').hide()
})


$(".start").on('click', function(){
    $("#game").hide()
    $("#janken").hide()
    $("#acchimuite").hide()
    $("#acchimuite2").hide()
    $(".subtitle").hide()
    $("#mine").hide()
    $("#aite").hide()
    $("#hantei").hide()
    $("#hantei").css("color","black")
    $("#hantei").css("font-size","30px");
    $('body').css('background-color', 'rgb(182, 218, 241)')

    
    $("#game").delay(200).queue(function(next){
    $("#game").fadeIn()
    $("#game").html("じゃんけん♪");
    next();
    })
    $("#janken").delay(500).queue(function(next){
    $(this).fadeIn();
    next();
    })

})

$(".action-button").on('click', function(){ //じゃんけんの手を選択
$(".subtitle").show()
    if(hantei == "even"){
        $("#game").html("しょ！！")
    }else {
        $("#game").html("ぽん！！")
    }

// じゃんけん自分の手を表示    
    var name = $(this).data('name');

    $("#janken").hide()

    if (name === "btn_gu"){
        $("#mine").show();
        $("#mine").html('<img src= "img/gu.jpg">');
    }else if (name === "btn_cho"){ 
        $("#mine").show();
        $("#mine").html('<img src= "img/choki.jpg">');
    }else if (name === "btn_pa"){ 
        $("#mine").show();
        $("#mine").html('<img src= "img/pa.jpg", width=300px>');
    }

//じゃんけん相手の手を表示
    var random = Math.floor(Math.random() * 3);

    if (random === 0) {
        $("#aite").show();
        $("#aite").html('<img src= "img/gu.jpg">');
    }else if (random === 1) {
        $("#aite").show()
        $("#aite").html('<img src= "img/choki.jpg">')
    }else if (random === 2) {
        $("#aite").show();
        $("#aite").html('<img src= "img/pa.jpg", width=300px>');
    }

// じゃんけん判定

    if (name ==="btn_gu" && random === 0){
        hantei = "even"
        $("#hantei").show()
        $("#hantei").html('あいこ');
    }else if (name ==="btn_gu" && random === 1){
        hantei = "win"
        $("#hantei").show()
        $("#hantei").html('勝ち');
    }else if (name ==="btn_gu" && random === 2){
        hantei = "lose"
        $("#hantei").show()
        $("#hantei").html('負け');
    }else if (name ==="btn_cho" && random === 0){
        hantei = "lose"
        $("#hantei").show()
        $("#hantei").html('負け');
    }else if (name ==="btn_cho" && random === 1){
        hantei = "even"
        $("#hantei").show()
        $("#hantei").html('あいこ');
    }else if (name ==="btn_cho" && random === 2){
        hantei = "win"
        $("#hantei").show()
        $("#hantei").html('勝ち');
    }else if (name ==="btn_pa" && random === 0){
        hantei = "win"
        $("#hantei").show()
        $("#hantei").html('勝ち');
    }else if (name ==="btn_pa" && random === 1){
        hantei = "lose"
        $("#hantei").show()
        $("#hantei").html('負け');
    }else if (name ==="btn_pa" && random === 2){
        hantei = "even"
        $("#hantei").show()
        $("#hantei").html('あいこ');
    }

    //じゃんけんあいこの場合もう一回
    if (hantei === "even"){  //じゃんけんあいこの場合
    $("#game").delay(1500).queue(function(next){
    $("#game").hide();
    next();
    })
    $("#game").delay(0).queue(function(next){
    $("#game").html('あいこで♪');
    next();
    })
    $("#game").delay(0).queue(function(next){
    $("#game").fadeIn();
    next();
    })

    $(".subtitle").delay(1500).queue(function(next){
    $(".subtitle").hide();
    next();
    })
    $("#mine").delay(1500).queue(function(next){
    $("#mine").hide();
    next();
    })
    $("#aite").delay(1500).queue(function(next){
    $("#aite").hide();
    next();
    })        
    $("#hantei").delay(1500).queue(function(next){
    $("#hantei").hide();
    next();
    })
    $("#janken").delay(2000).queue(function(next){
    $("#janken").show();
    next();
    })


    }else {  //じゃんけん勝ち負けの場合あっちむいてに遷移
    $(".subtitle").delay(2000).queue(function(next){
    $(".subtitle").hide();
    next();
    })
    $("#mine").delay(2000).queue(function(next){
    $("#mine").hide();
    next();
    })
    $("#aite").delay(2000).queue(function(next){
    $("#aite").hide();
    next();
    })        
    $("#hantei").delay(2000).queue(function(next){
    $("#hantei").hide();
    next();
    })
    $("#janken").delay(2000).queue(function(next){
    $("#janken").hide();
    next();
    })
    $("#pon").delay(2000).queue(function(next){
    $("#pon").hide();
    next();
    })
    $("#game").delay(2000).queue(function(next){
    $("#game").html('あっちむいて♪');
    next();
    })
    
    if(hantei === "win"){
    
        $("#acchimuite").delay(2500).queue(function(next){
        $("#acchimuite").fadeIn();
        next();
        })
    }

    if(hantei === "lose"){
    
        $("#acchimuite2").delay(2500).queue(function(next){
        $("#acchimuite2").fadeIn();
        next();
        })
    }

    } //じゃんけん勝ち負けの場合ここまで
    })  //じゃんけんここまで

    //あっちむいてほいのボタンを押下
    $(".action-button2").on('click', function(){
    $(".subtitle").show()
    
    //あっちむいてほい自分の手を表示
    var name2 = $(this).data('name');

    $("#acchimuite").hide()
    $("#acchimuite2").hide()
    $("#game").show()
    $("#game").html("ほい！！")

    if(hantei === "win"){
        if (name2 === "btn_up"){
            $("#mine").show();
            $("#mine").html('<img src= "img/ue_yubi.jpg">');
        }else if (name2 === "btn_down"){ 
            $("#mine").show();
            $("#mine").html('<img src= "img/shita_yubi.jpg">');
        }else if (name2 === "btn_right"){ 
            $("#mine").show();
            $("#mine").html('<img src= "img/migi_yubi.jpg">');
        }else if (name2 === "btn_left"){ 
            $("#mine").show();
            $("#mine").html('<img src= "img/hidari_yubi.jpg">');
        }
    }
    if(hantei === "lose"){
        if (name2 === "btn_up"){
            $("#mine").show();
            $("#mine").html('<img src= "img/ue_kao.jpg">');
        }else if (name2 === "btn_down"){ 
            $("#mine").show();
            $("#mine").html('<img src= "img/shita_kao.jpg">');
        }else if (name2 === "btn_right"){ 
            $("#mine").show();
            $("#mine").html('<img src= "img/migi_kao.jpg">');
        }else if (name2 === "btn_left"){ 
            $("#mine").show();
            $("#mine").html('<img src= "img/hidari_kao.jpg">');
        }}


    //あっちむいてほい相手の手を表示
    var random2 = Math.floor(Math.random() * 4);
    
    if(hantei === "win"){
        if (random2 === 0) {
            $("#aite").show();
            $("#aite").html('<img src= "img/ue_kao.jpg">');
        }else if (random2 === 1) {
            $("#aite").show()
            $("#aite").html('<img src= "img/shita_kao.jpg">')
        }else if (random2 === 2) {
            $("#aite").show();
            $("#aite").html('<img src= "img/migi_kao.jpg">')
        }else if (random2 === 3) {
            $("#aite").show();
            $("#aite").html('<img src= "img/hidari_kao.jpg">')
        }
    }
    if(hantei === "lose"){
        if (random2 === 0) {
            $("#aite").show();
            $("#aite").html('<img src= "img/ue_yubi.jpg">');
        }else if (random2 === 1) {
            $("#aite").show()
            $("#aite").html('<img src= "img/shita_yubi.jpg">')
        }else if (random2 === 2) {
            $("#aite").show();
            $("#aite").html('<img src= "img/migi_yubi.jpg">')
        }else if (random2 === 3) {
            $("#aite").show();
            $("#aite").html('<img src= "img/hidari_yubi.jpg">')
        }
    }


    // あっちむいてほい判定
    if(hantei === "win" ){; //じゃんけん勝ちの場合
        if(name2 === "btn_up" && random2 === 0){
            hantei2 ="win2"
            $("#hantei").show();
            $("#hantei").html('☆かち☆');
            $("#hantei").css("color","red");
            $("#hantei").css("font-size","60px");
            $('body').css('background-color', 'yellow')
            kachi = kachi +1
            console.log(kachi)
            $('#kachisu').html(kachi + "勝")
            $('#kachisu').show()
        }else if(name2 === "btn_down" && random2 === 1){
            hantei2 ="win2"
            $("#hantei").show()
            $("#hantei").html('☆かち☆');
            $("#hantei").css("color","red");
            $("#hantei").css("font-size","60px");
            $('body').css('background-color', 'yellow')
            kachi = kachi +1
            console.log(kachi)
            $('#kachisu').html(kachi + "勝")
            $('#kachisu').show()
        }else if(name2 === "btn_right" && random2 === 2){
            hantei2 ="win2"
            $("#hantei").show()
            $("#hantei").html('☆かち☆');
            $("#hantei").css("color","red");
            $("#hantei").css("font-size","60px");
            $('body').css('background-color', 'yellow')
            kachi = kachi +1
            console.log(kachi)
            $('#kachisu').html(kachi + "勝")
            $('#kachisu').show()
        }else if(name2 === "btn_left" && random2 === 3){
            hantei2 ="win2"
            $("#hantei").show()
            $("#hantei").html('☆かち☆');
            $("#hantei").css("color","red");
            $("#hantei").css("font-size","60px");
            $('body').css('background-color', 'yellow')
            kachi = kachi +1
            console.log(kachi)
            $('#kachisu').html(kachi + "勝")
            $('#kachisu').show()
        }else{
            $("#hantei").show()
            $("#hantei").html('もう一回');
            $(".subtitle").delay(2000).queue(function(next){
            $(this).hide();
            next();
            })
            $("#mine").delay(2000).queue(function(next){
            $(this).hide();
            next();
            })
            $("#aite").delay(2000).queue(function(next){
            $(this).hide();
            next();        
            })
            $("#hantei").delay(2000).queue(function(next){
            $(this).hide();
            next();        
            })
            $("#game").delay(2000).queue(function(next){
            $(this).html('じゃんけん♪');
            next();
            })
            $("#janken").delay(2000).queue(function(next){
            $(this).fadeIn();
            next();
            })
            $("#acchimuite").delay(2000).queue(function(next){
            $(this).hide();
            next();
            })
            }
    }else if (hantei === "lose" ){;  //じゃんけん負けの場合
            if(name2 === "btn_up" && random2 === 0){
            hantei2 ="lose2"
            $("#hantei").show();
            $("#hantei").html('💀まけ💀');
            $("#hantei").css("color","blue");
            $("#hantei").css("font-size","60px");
            $('body').css('background-color', 'red')
            make = make +1
            console.log(make)
            $('#makesu').html(make + "敗")
            $('#makesu').show()
        }else if(name2 === "btn_down" && random2 === 1){
            hantei2 ="lose2"
            $("#hantei").show()
            $("#hantei").html('💀まけ💀');
            $("#hantei").css("color","blue");
            $("#hantei").css("font-size","60px");
            $('body').css('background-color', 'red')
            make = make +1
            console.log(make)
            $('#makesu').html(make + "敗")
            $('#makesu').show()
        }else if(name2 === "btn_right" && random2 === 2){
            hantei2 ="lose2"
            $("#hantei").show()
            $("#hantei").html('💀まけ💀');
            $("#hantei").css("color","blue");
            $("#hantei").css("font-size","60px");
            $('body').css('background-color', 'red')
            make = make +1
            console.log(make)
            $('#makesu').html(make + "敗")
            $('#makesu').show()
        }else if(name2 === "btn_left" && random2 === 3){
            var hantei2 ="lose2"
            $("#hantei").show()
            $("#hantei").html('💀まけ💀');
            $("#hantei").css("color","blue");
            $("#hantei").css("font-size","60px");
            $('body').css('background-color', 'red')
            make = make +1
            console.log(make)
            $('#makesu').html(make + "敗")
            $('#makesu').show()
        }else{
            $("#hantei").show()
            $("#hantei").html('もう一回');
            $(".subtitle").delay(2000).queue(function(next){
            $(this).hide();
            next();    
            })
            $("#mine").delay(2000).queue(function(next){
            $(this).hide();
            next();
            })
            $("#aite").delay(2000).queue(function(next){
            $(this).hide();
            next();        
            })
            $("#hantei").delay(2000).queue(function(next){
            $(this).hide();
            next();        
            })
            $("#game").delay(2000).queue(function(next){
            $(this).html('じゃんけん♪');
            next();
            })
            $("#janken").delay(2000).queue(function(next){
            $(this).fadeIn();
            next();
            })
            $("#acchimuite").delay(2000).queue(function(next){
            $(this).hide();
            next();
            })
            $("#acchimuite2").delay(2000).queue(function(next){
            $(this).hide();
            next();
            })
        }
    }

})  //あっちむいてほいここまで

    //じゃんけん勝ち負けの場合ここまで
   //じゃんけんボタンここまで