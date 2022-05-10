$(()=>{
    window.addEventListener("message", (event)=>{
        let e = event.data


        if (e.action === "UpdateHud") {
            $("#healthBar").css({"width": Math.round(e.health) + "%"});
            $("#hungerBar").css({"width": Math.round(e.hunger) + "%"});
            $("#thirstBar").css({"width": Math.round(e.thirst) + "%"});
            $("#armourBar").css({"width": Math.round(e.armour) + "%"});
            $('#civilid').text (e.civilid);
        }


        if (Math.round(e.health) >= 100) {
            $("#healthBar").css({"background-color": "rgb(27, 170, 189)"})
            $(".fa-heart").css({"color": "rgb(27, 170, 189)"})               
        } else if (Math.round(e.health) >= 50) {
            $("#healthBar").css({"background-color": "yellow"})
            $(".fa-heart").css({"color": "yellow"})   
        } else if (Math.round(e.health) >= 25) {
            $("#healthBar").css({"background-color": "red"})
            $(".fa-heart").css({"color": "red"})
            $('.fa-heart').fadeOut(100).fadeIn(100)             
        }

        if (Math.round(e.armour) >= 100) {
            $("#armourBar").css({"background-color": "rgb(27, 170, 189)"})
            $(".fa-shield").css({"color": "rgb(27, 170, 189)"})
            $("#armour").show(300)
            $("#iconarmour").show(300)                
        } else if (Math.round(e.armour) >= 50) {
            $("#armourBar").css({"background-color": "yellow"})
            $(".fa-shield").css({"color": "yellow"})   
        } else if (Math.round(e.armour) >= 25) {
            $("#armourBar").css({"background-color": "red"})
            $(".fa-shield").css({"color": "red"})
            $('.fa-shield').fadeOut(100).fadeIn(100)             
        } else if (Math.round(e.armour) <= 25) {
            $("#armour").hide(300)
            $("#iconarmour").hide(300)      
        }

        if (Math.round(e.hunger) >= 100) {
            $("#hungerBar").css({"background-color": "rgb(27, 170, 189)"})
            $(".fa-utensils").css({"color": "rgb(27, 170, 189)"})               
        } else if (Math.round(e.hunger) >= 50) {
            $("#hungerBar").css({"background-color": "yellow"})
            $(".fa-utensils").css({"color": "yellow"})   
        } else if (Math.round(e.hunger) >= 25) {
            $("#hungerBar").css({"background-color": "red"})
            $(".fa-utensils").css({"color": "red"})
            $('.fa-utensils').fadeOut(100).fadeIn(100)             
        }

        if (Math.round(e.thirst) >= 100) {
            $("#thirstBar").css({"background-color": "rgb(27, 170, 189)"})
            $(".fa-wine-glass").css({"color": "rgb(27, 170, 189)"})               
        } else if (Math.round(e.thirst) >= 50) {
            $("#thirstBar").css({"background-color": "yellow"})
            $(".fa-wine-glass").css({"color": "yellow"})   
        } else if (Math.round(e.thirst) >= 25) {
            $("#thirstBar").css({"background-color": "red"})
            $(".fa-wine-glass").css({"color": "red"})
            $('.fa-wine-glass').fadeOut(100).fadeIn(100)             
        }

    })    
})