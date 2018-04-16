({
    Seathandle : function(component, event, helper) {
        var action = component.get("c.getPickListValues");
        action.setParams({
            'obj': 'lakshmikanth__Flight__c',
            'str': 'lakshmikanth__Seat_selection__c'
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var ret = response.getReturnValue();
            if(state=='SUCCESS'){
                component.set("v.selseat", ret);
            }
        });
        $A.enqueueAction(action);
    },
   
    goback: function (component,event,helper){
      var back =   $A.get("e.lakshmikanth:ProjEvent2"); 
        back.setParams({
            "back": 'firstComp'
        });
        back.fire();
    },
    handleClick: function(component,event,helper){        
        var ctarget = event.currentTarget;
        var id_str = ctarget.dataset.value;    
        var cmpEvent = $A.get("e.lakshmikanth:ProjEvent");     
        cmpEvent.setParams({
            "bookingid" : id_str,
             "nav": 'thirdComp' 
        });
        cmpEvent.fire();       
    },
})