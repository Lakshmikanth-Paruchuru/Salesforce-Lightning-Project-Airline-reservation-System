({
    doInitFrom : function(component, event, helper) {
        var action = component.get("c.getPickListValues");
        
        action.setParams({
            'obj': 'lakshmikanth__Flight__c',
            'str': 'lakshmikanth__From__c'
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var ret = response.getReturnValue();
            if(state=='SUCCESS'){
                component.set("v.bkflightfrom", ret);
            }
        });
        $A.enqueueAction(action);
    },
    doInitTo : function(component, event, helper) {
        var action = component.get("c.getPickListValues");
        
        action.setParams({
            'obj': 'lakshmikanth__Flight__c',
            'str': 'lakshmikanth__To__c'
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var ret = response.getReturnValue();
            if(state=='SUCCESS'){
                component.set("v.bkflightto", ret);
            }
        });
        $A.enqueueAction(action);
    },
    
    doInitclass : function(component, event, helper) {
        var action = component.get("c.getPickListValues");
        
        action.setParams({
            'obj': 'lakshmikanth__Flight__c',
            'str': 'lakshmikanth__Traveller__c'
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var ret = response.getReturnValue();
            if(state=='SUCCESS'){
                component.set("v.bkflightclass", ret);
            }
        });
        $A.enqueueAction(action);
    },
    
    searchFlight : function(component,event,helper){
        component.find('from').showHelpMessageIfInvalid();
        component.find('to').showHelpMessageIfInvalid();
        component.find('ddate').showHelpMessageIfInvalid();
        component.find('adate').showHelpMessageIfInvalid();
        component.find('class').showHelpMessageIfInvalid();
        
        var from = component.find("from").get("v.value");
        var to = component.find("to").get("v.value");
        var ddate = component.find("ddate").get("v.value");
        var adate = component.find("adate").get("v.value");
        var clas = component.find("class").get("v.value");

        var cmpEvent = $A.get("e.lakshmikanth:ProjEvent");
        cmpEvent.setParams({
            "From": from,
            "To": to,
            "Depdate": ddate,
            "Ardate": adate,
            "class": clas,
            "nav" : 'secondComp' 
        });
       
        
        if(from!=to){
            cmpEvent.fire();
        }
        else
        {
            alert('Select unique airport for From/to');
        }
        
    }
})