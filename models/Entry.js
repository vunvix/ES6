class Entry
{
    constructor(id, component, message)
    {
        this.component = component;
        this.message = message;
        this.id=id;
        //this.id = Math.floor(Math.random() * 10000);
    }
    
    setSeverity(severity)
    {
        this.severity=severity;
    }
    
    setTimestamp(timestamp)
    {
       this.timestamp = timestamp;
    }
    
    setForwardLink(forwardLink)
    {
       this.forwardLink= forwardLink;
    }
    
    setBackwardLink(backwardLink)
    {
       this.backwardLink = backwardLink;
    }
    
    getIdentifier()
    {
        return this.id;
    }
    
    getComponent()
    {
        return this.component;
    }
    
    getMessage()
    {
        return this.message;
    }
    
    toString()
    {
        return `timestamp= ${this.timestamp}, component=${this.component}, message = ${this.message}, severity = ${this.severity}, forwardLink = ${this.forwardLink}, backwardLink = ${this.backwardLink}`;
    }
}

console.log("Entry ok");