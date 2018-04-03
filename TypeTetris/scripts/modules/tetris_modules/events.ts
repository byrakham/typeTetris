export interface IEvent<T> {
    add(handler: { (data?: T): void }): void;
    remove(handler: { (data?: T): void }): void;
}

export class Event<T> implements IEvent<T> {
    private handlers: { (data?: T): void; }[] = [];

    public add(handler: { (data?: T): void }): void {
        this.handlers.push(handler);
        
    }

    public remove(handler: { (data?: T): void }): void {
        //this.handlers = this.handlers.filter(h => h !== handler);
        let handlerIndex = this.handlers.indexOf(handler, 0);
        if (handlerIndex > -1) {
            this.handlers.splice(handlerIndex, 1);
        }
    }

    public raise(data?: T) {
        this.handlers.slice(0).forEach(h => h(data));
    }
       
}