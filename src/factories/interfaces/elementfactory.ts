import { EventType } from "../../types/types";

export interface IElementFactory{
    withClass(...classNames: string[]): IElementFactory;
    withId(id: string): IElementFactory;
    withStyle(style: string): IElementFactory;
    with(attr: string, value: string): IElementFactory;
    on(eventType: EventType, callback: (event: JQuery.Event) => any): IElementFactory;
    build(): JQuery<HTMLElement>;
}
