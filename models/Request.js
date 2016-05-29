class Request extends Entry
{
   setIdentifier(id)
   {
       this.id=id;
   }
       
    setInParameters(p)
    {
        this.parametes = p;
    }
    
    setTrigger(trigger)
    {
        this.component = trigger;
    }
    
    getTrigger()
    {
        return this.component;
    }
    
    getParams()
    {
        return this.p;
    }
    
    getEntry()
    {
        return this.getIdentifier();    
    }
    
    getTimestamp()
    {
        return this.timestamp;
    }
}

console.log("Request ok");