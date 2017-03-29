(function () {
    console.log('before click comment');


    $('.addComments').click(function(x){
        console.log('add comment');
        console.log(x);
       
        $(event.target).next().show();
    });

    $('.commentForm').submit(function(data){
        console.log('in submit', data);
        data.preventDefault();
      // let submitedId = $(event.target);
      // console.log("submited", submitedId.val());
      $(this).parent().hide();
        let formInoutArray = $( this ).serializeArray(),
            dataObject = {};

        formInoutArray.forEach(function(input){
            dataObject[input.name] = input.value;
        });
        console.log('dataobject', dataObject);
       $.post('/insertcomment', dataObject);
       
    });

    
}());