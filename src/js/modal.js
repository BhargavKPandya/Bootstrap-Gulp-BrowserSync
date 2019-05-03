
    function popupTemplate(title, description, image) { 
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
                        <img class="img-fluid mb-5" src="${image}">
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
    // $('#imageSection .tea-item').click(function(e) {
        
    //     var anchorID = this.id;
    //     displayModal(anchorID);
        
    //  }); 
    
     function displayModal(anchorID) {
        var modalContent = $("#modal");
        if(anchorID == 'redTea')
        { 
            var description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.';
            var modalBody =  popupTemplate('Red Tea',description,"images/red-tea-square.jpg");
            $("#modal").html(modalBody);
            modalContent.modal();
        }
        else
        {
            var description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.';
            var modalBody =  popupTemplate('Black Tea',description,"images/Black_Tea_1.jpg");
            $("#modal").html(modalBody);
            modalContent.modal();
        }
        if (anchorID == 'grrenTea')
        {
            var description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.';
            var modalBody =  popupTemplate('Green Tea',description,"images/Organic-Tulsi-Green-Tea-Tulsi-Green-Sensation.jpg");
            $("#modal").html(modalBody);
            modalContent.modal();
        }
    }
    


