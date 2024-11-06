function toggleAccordion(event) {
    const accordionTriggerElement = event.currentTarget;
    const accordionContentElement = accordionTriggerElement.nextElementSibling;
    const accordionContainerElement = accordionTriggerElement.parentElement;

    if (accordionContentElement.classList.contains("open")) {
        accordionContentElement.style.maxHeight = "";
    } else {
        accordionContentElement.style.maxHeight =
            accordionContainerElement.scrollHeight + "px";
    }

    accordionContentElement.classList.toggle("open");
    accordionTriggerElement.classList.toggle("selected");
}
