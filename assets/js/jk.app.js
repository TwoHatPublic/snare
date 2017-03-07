var App = (function ($) {
    // 2017
    // @jessekorzan
    //
	var jk = {};
	jk.config = {};
	jk.vars = {}
/* --------------------------------------------------	
-------------------------------------------------- */
    // start it up
    jk.init = function () {
        
    };
/* --------------------------------------------------	
-------------------------------------------------- */
    jk.services = {
        ninja : function (id, str) {
            SiftNinja.services.classify(str, "", function(_arr, _hashes, response){
                var _data = {
                    service: "Sift Ninja", 
                    status : true, 
                    hash : _hashes,
                    string : str
                }
                if (response.response == false) {
                    _data.status = false
                } else {
                    _data.hash = str;
                }
                //jk.views.cells(_data, id);
               
            });
        }
    jk.views = {

    }
     // ########################################
    // 
    // CONTROLLER
    //
    // ########################################
    jk.controller = {
        ui : function () {
            $("body").on("click", "[data-action]", function(e){
                e.preventDefault();
                e.stopPropagation();
                var _action = $(this).data().action,
                    _this = this;
                    
                console.log(_action);
                
                Utilities.pubSub.publish(_action, {
                    
                });
            });            
        },
        events : function() {            
            Utilities.pubSub.subscribe("action", function(obj){
                
                
            });

        }
    }
    return jk;
})(jQuery);
$(function () {
	App.init();
});