$(document).ready(function () {

    var url='https://jsonplaceholder.typicode.com/posts';
        $.getJSON(url, function (r) {
            var tr = "";
            for (var i = 0; i < r.length; i++) {
                
                tr += "<tr id='display'>";
                tr += "<td>" + r[i].id + "</td>";
                tr += "<td>" + r[i].title + "</td>";
                tr += "<td>" + r[i].body + "</td>";
                tr += "<td><a href='javascript:void(0);' id='remove' class='material-icons'>&#xe872;</a></td></tr>";
                
            } 
            $("#jsondata").append(tr);
            
            /*$("#jsondata").on("click","#remove",function(){
                var inx = $("#remove").index(this);
                $("#display").eq(inx).remove();
            });*/

            $("#jsondata").on("click", "#remove", function () {
                $(this).closest("#display").remove();
            });
        });

});

