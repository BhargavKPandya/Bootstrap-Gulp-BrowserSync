class productInfo {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

var productList = new Array();

$(document).ready(function () {
    $.getJSON("../dataFiles/product.json", function(json) {
        let teas = json.product.Tea;
        console.log(json.product); 
        for(let i=0; i<teas.length; i++){
            console.log("Name: " + teas[i].Name);
            console.log("Name: " + teas[i].image);
            productList.push(new productInfo(teas[i].Name, teas[i].Description, teas[i].image));
        }
        for(let i=0; i<productList.length; i++){
            console.log(productList[i].name);
            $("#imageSection").append(populateProductItem(i,productList[i]));

        }
        $('#imageSection .tea-item').click(function(e) {
            var index = $(this).attr("data-index");
            var product = productList[index];
            var title = $(this).attr("data-title");
            var description = $(this).attr("data-description");
            var image = $(this).attr("data-image");
            showModal(product.name,product.description,product.image);
            
         }); 
    });

//    $.ajax({
//        type: "GET",
//        url: "../dataFiles/product.json",
//        dataType: "json",
//        success: parseJSON
//    });

//     function parseJSON(json){
//         let teas = json.product.Tea;
//         console.log(json.product); 
//         for(let i=0; i<teas.length; i++){
//             console.log("Name: " + teas[i].Name);
//             console.log("Name: " + teas[i].image);
//             productList.push(new productInfo(teas[i].Name, teas[i].Description, teas[i].image));
//         }
//         for(let i=0; i<productList.length; i++){
//             console.log(productList[i].name);
//             $("#imageSection").append(populateProductItem(i,productList[i]));

//         }
//         $('#imageSection .tea-item').click(function(e) {
//             var index = $(this).attr("data-index");
//             var product = productList[index];
//             var title = $(this).attr("data-title");
//             var description = $(this).attr("data-description");
//             var image = $(this).attr("data-image");
//             showModal(product.name,product.description,product.image);
            
//          }); 
//     }


});

function populateProductItem (index,product){
    let content = `<div class="col-md-6 col-lg-4 col-xs-12 col-sm-12">
    <div class="tea-item d-block mx-auto my-3" data-index="${index}" data-title="${product.name}" data-description="${product.description}" data-image="${product.image}">
        <div class="tea-item-caption d-flex position-absolute h-100 w-100">
            <div class="tea-item-caption-content my-auto w-100 text-center text-white">
                <i class="fas fa-search-plus fa-3x" id="test1"></i>
            </div>
        </div>
        <img class="img-fluid" src="images/${product.image}" alt="Red Tea">
    </div>
</div>`;
return content;
}

function popuplateModalTemplate(title, description, image) { 
    var content =`<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="teamodal1">${title}</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
             </button>
        </div>
        <div class="container text-center modal-body tea-content">
            <div class="row">
             <div class="col-lg-8 mx-auto">
                <h2 class="text-secondary text-uppercase mb-0">${title}</h2>
                <hr class="mb-5">
                <img class="img-fluid mb-5" src="images/${image}">
                    <p class="mb-5">${description}</p>
            </div>
         </div>
        </div>
     <div class="modal-footer">
         <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
    </div>
</div>
</div>`;
return content;
}

function showModal(title,description,image) {
    var modalContent = $("#modal");
    
        var modalBody =  popuplateModalTemplate(title,description,image);
        $("#modal").html(modalBody);
        modalContent.modal();
    
}

