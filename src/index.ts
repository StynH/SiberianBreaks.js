import { SBElement } from "./factories/elementfactory";

$(window).on("load", () => {
    console.log("Test")
    const test = (new SBElement("test"))
        .with("test", "val1")
        .withClass("test1", "test2", "test3")
        .withId("id")
        .build();
    $("body").append(test);
});
