/**
 * User: maksym.tashchuk
 * Date: 4/10/14
 * Time: 10:43 AM
 */
var createObject = function (modelParam, seriesParam) {
    return {
        model: modelParam,
        series: seriesParam,
        info: function () {
            return this.model + " " + this.series;
        }
    }
};
var allObj = [];
var bwm = createObject("BMW", "550i");
allObj.push(bwm);
var bike = createObject("Honda", "Fireblade");
allObj.push(bike);
var aircraft = createObject("Raptor", "F-22");
allObj.push(aircraft);
document.write("<table border='1'><tr><th>Model</th><th>Series</th><th>Info</th></tr>");
for (var i = 0; i < allObj.length; i++) {
    document.write("<tr><td>" + allObj[i].model + "</td>");
    document.write("<td>" + allObj[i].series + "</td>");
    document.write("<td>" + allObj[i].info() + "</td></tr>");
}
document.write("</table>");
