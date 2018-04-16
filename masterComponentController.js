({
	handleComp2 : function(component, event, helper) {
      var From = event.getParam("From");
        var To = event.getParam("To");
        var Depdate = event.getParam("Depdate");
        var Ardate = event.getParam("Ardate");
        var clas = event.getParam("class");
        var nav = event.getParam("nav");
        var action = component.get("c.filtervalues");
        action.setParams({
            "fromm": From, "to": To, "depdate": Depdate, "ardate": Ardate,"clas":clas
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            var ret = response.getReturnValue();
            if(state=='SUCCESS')
            {
                component.set("v.attrComp2",ret);
                component.set("v.showComp",nav);
            }
        });
        $A.enqueueAction(action); 
               
        var bknid = event.getParam("bookingid");
        var nav1 = event.getParam("nav");
        component.set("v.attrComp3",bknid);
        var action = component.get("c.getrecordFlight");
        action.setParams({
            "xyz": bknid
        });
        console.log("params set");
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log(state);
            var res = response.getReturnValue();
            console.log(JSON.stringify(res));
            if (state=='SUCCESS')
            {
                component.set("v.attrComp31",res);
                component.set("v.showComp",nav1);
            }
        });
        $A.enqueueAction(action); 
        
        var bknid1 = event.getParam("bookingconfo");
        var passid = event.getParam("passconfo");
        var nav2 = event.getParam("nav");
        component.set("v.attrCompbookn",bknid1);
        component.set("v.attrComppass",passid);
		var action = component.get("c.bookinfo");
        action.setParams({
            "bookObj": passid
        }),
            action.setCallback(this, function(response){
                var state = response.getState();
                var ret = response.getReturnValue();
                if(state=='SUCCESS'){
                    
                    component.set("v.attrCompfli",ret);
                    component.set("v.showComp",nav2);
                }
                
            }),
            $A.enqueueAction(action);
	},
    handleCompback : function(component,event,helper){
          var backto1 = event.getParam("back");
          component.set("v.showComp",backto1);
        
    }
  
     
})