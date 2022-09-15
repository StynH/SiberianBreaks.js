import { IElementFactory } from "./interfaces/elementfactory";

export class SBElement implements IElementFactory{
    private inner: JQuery<HTMLElement> | undefined;

    constructor(tag: string) {
        this.inner = $(`<${tag}></${tag}>`);
    }

    build(): JQuery<HTMLElement> {
        const final = this.inner;
        this.inner = undefined;
        return final!;
    }

    on(eventType: EventType, callback: (event: JQuery.Event) => any): IElementFactory {
        this.inner?.on(eventType, callback);
        return this;
    }

    with(attr: string, value: string): IElementFactory {
        this.inner?.attr(attr, value);
        return this;
    }

    withClass(...classNames: string[]): IElementFactory {
        classNames.forEach((className: string) => {
            this.inner?.addClass(className);
        });
        return this;
    }

    withId(id: string): IElementFactory {
        this.with("id", id);
        return this;
    }

    withStyle(style: string): IElementFactory {
        this.with("style", style);
        return this;
    }

}
