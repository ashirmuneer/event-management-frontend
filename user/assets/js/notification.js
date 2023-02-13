Pusher.logToConsole = true;

    var pusher = new Pusher('62f82c56f5ff3b333724', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {

        //  var result_json = JSON.stringify(data);
         if(data.message==localStorage.getItem("user_id")){

              var already = $(".notification-number").text();
  
                var total = parseInt(already)+1;

                $(".notification-number").html(total);

         }

        

     
     
       

    });