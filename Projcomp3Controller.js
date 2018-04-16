({
    doInitState : function(component, event, helper) {
        var action = component.get("c.getPickListValues");
        
        action.setParams({
            'obj': 'lakshmikanth__Passenger__c',
            'str': 'lakshmikanth__State__c'
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var ret = response.getReturnValue();
            if(state=='SUCCESS'){
                component.set("v.state", ret);
            }
        });
        $A.enqueueAction(action);
    },
    doInitseat : function(component, event, helper){
        var action = component.get("c.getPickListValues");
        
        action.setParams({
            'obj': 'lakshmikanth__Flight__c',
            'str': 'lakshmikanth__Seat_selection__c'
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var ret = response.getReturnValue();
            if(state=='SUCCESS'){
                component.set("v.selectseat", ret);
            }
        });
        $A.enqueueAction(action); 
    },
    goback : function(component,event,helper){
      var back = $A.get("e.lakshmikanth:ProjEvent2");
        back.setParams({
            "back2":'secondComp'
        });
        back.fire();
    },
    
    checkout : function(component,event,helper){
        component.find('seat').showHelpMessageIfInvalid();
        var insertSeat = component.find('seat').get("v.value");
        var action = component.get("c.insertseat");
        action.setParams({
            "confirmseat": insertSeat,
            "presentid": component.get("v.getbookingid")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state=="SUCCESS"){
            }
        });
        $A.enqueueAction(action);
        
        var getpdetails = component.get("v.passInfo");
        console.log(JSON.stringify(getpdetails));
        var act = component.get("c.setpassinfo");
        act.setParams({
            "objpass": getpdetails,
            "presentid": component.get("v.getbookingid")
        });
        act.setCallback(this,function(response){
            var state = response.getState();
           component.set("v.passConfirmation", response.getReturnValue());
            var show = component.get("v.passConfirmation");
             var cmpEvent = $A.get("e.lakshmikanth:ProjEvent");
             cmpEvent.setParams({
            "passconfo" : component.get("v.passConfirmation"),
            "bookingconfo": component.get("v.getbookingid"),
             "nav": 'fourthComp' 

        });
        cmpEvent.fire();
            
        });
        $A.enqueueAction(act);
                
       
    }
    
})