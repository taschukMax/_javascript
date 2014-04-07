/**
 * Created with IntelliJ IDEA.
 * User: maksym.tashchuk
 * Date: 4/7/14
 * Time: 10:45 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var pElements = document.getElementsByTagName("p"),
        lastPElement = pElements[pElements.length - 1];
})();

(function () {
    var doc = document,
        element = doc.createElement("span"),
        pFoo = doc.getElementById("foo"),
        html = element.innerHTML;
    html = "<strong>This is dynamically added content</strong>";
    element.innerHTML = html;
    element.id = "bar";
    pFoo.parentNode.replaceChild(element, pFoo);
    //pFoo.parentNode.insertBefore(element, pFoo);
    //pFoo.parentNode.appendChild(element);
    //doc.body.appendChild(element);
})();
