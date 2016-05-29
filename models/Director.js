class Director
{
    constructor(request)
    {
        this.request = request;
        request.setIdentifier(0);
        request.setTrigger("UserRequest");
    }
    
    getLastElement()
    {
        if(this.lastElement)
        {
            return this.lastElement;
        }
        else
        {
            this.lastElement = request;
            return this.lastElement;   
        }
    }
    
    add(entry)
    {
        this.getLastElement().setForwardLink(entry);
        entry.setBackwardLink(this.lastElement);
        this.lastElement = entry;
    }
    
    walkthrough()
    {
        var jsonObject = {"nodes":[],"links":[]};
        var element = request;
        //var index = 0;
        while(element)
        {
            //data.splice(1, 0, {6: 'adipiscing'})
            var id = element.getIdentifier();
            jsonObject.nodes.push({"node":element.getIdentifier(), "name": element.getComponent()});  
            //jsonObject.nodes.splice(id, 0, {id: {"node":element.getIdentifier(), "name": element.getComponent()}}); 
                     
            if(element.forwardLink)
            {                
                jsonObject.links.push({"source":element.getIdentifier(), "target": element.forwardLink.getIdentifier(), "value":10+ 10 * element.getIdentifier(), "msg": element.getMessage()});
            }
            
            //console.log(element.getIdentifier());
            if((element.forwardLink) || (element.getIdentifier() == this.getLastElement().getIdentifier()))
            {
                element = element.forwardLink;
            }
            else
            {
                console.error( `invalid element = ${element.getIdentifier()}`);
                break;
            }
            //index++;
        }
        console.log(jsonObject);
        return jsonObject;
    }
}

console.log("Director ok");