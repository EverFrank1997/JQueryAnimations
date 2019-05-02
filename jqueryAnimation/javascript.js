$(document).ready(function(){
    
    $("label+input").prev().each(function(){
        $(this).css({
            "position":"relative",
            "left":10,
            "top":37,
            "z-index":"5",
            "cursor":"text"
        });

    });

    $("label+input").each(function(){
        $(this).on("focus", function(){
            $(this).prev().get(0).innerHTML = $(this).prev().get(0).innerHTML.split("|")[0];

            $(this).css({
                "border-color":$("input| [type='color']").get(2).value,
                "padding-left": 0
            })
            let label = $(this).prev();

            label.css({
                "color":$("input| [type='color']").get(2).value
            });

            label.animate({
                "top":0,
                "left":0,
                "font-size":"12px",
                "padding-left": 0
                
            },200);
        });

        $(this).on("blur",function(){
            
            if($(this).get(0).value != ""){
                let valueCSS = parseFloat($(this).prev().css("width"));
                $(this).css({
                    "padding-left": valueCSS+30
                });
                $(this).prev().get(0).innerHTML += "|";
            }else{
                $(this).css({
                    "padding-left": 0
                })
                $(this).prev().get(0).innerHTML = $(this).prev().get(0).innerHTML.split("|")[0];
            }
            
            $(this).css({
                "border-bottom":"1px solid "+$("input| [type='color']").get(1).value
            })

            $(this).prev().css({
                "color": $("input| [type='color']").get(1).value
            });

            $(this).prev().animate({
                "left":10,
                "top":37,
                "font-size":"14px"
            },200);
        });
    });

    $("input| [type='color']").each(function(index){

        switch(index){
            case 0:
                $(this).attr({
                    value:"#FFFFFF"
                });
                
            break;
            case 1:
                $(this).attr({
                    value:"#B6B4B4"
                });

                $("label+input").prev().css({
                    "color":$(this).get(0).value
                });
            break;
            case 2:
                $(this).attr({
                    value:"#FF0000"
                });
            break;
        }
        $(this).next().text(($(this).get(0).value).toUpperCase());
        
        

        $(this).change(function(){
           
            $(this).next().text(($(this).get(0).value).toUpperCase())
            console.log("index: ",index);
            
            switch(index){
                case 0:
                    $("label+input").css({
                        "background-color":$(this).get(0).value
                    });
                break;
                case 1:
                    $("label+input").css({
                        "border-bottom":"1px solid "+$(this).get(0).value
                    });
                    $("label+input").prev().css({
                        "color":$(this).get(0).value
                    });
                break;
            }
        });

    });
    
    



});