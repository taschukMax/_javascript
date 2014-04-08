/**
 * Created with IntelliJ IDEA.
 * User: maksym.tashchuk
 * Date: 4/8/14
 * Time: 2:55 PM
 * To change this template use File | Settings | File Templates.
 */
var ONE_DAY = 1000 * 60 * 60 * 24;
var ONE_HOUR = 1000 * 60 * 60;
var ONE_MINUTE = 1000 * 60;
var weddingMonth = 8;
var date = new Date(2014, weddingMonth - 1, 17);
var currentDate = new Date();
document.write("Your wedding date is: " + date + "<br/>");
document.write("Today's date is: " + currentDate + "<br/>");
var remainingTime = date.getTime() - currentDate.getTime();
document.write("Remaining time is: " + Math.round(remainingTime/ONE_DAY) + "<br/>");
document.write("Remaining time is: " + Math.round(ONE_DAY/ONE_HOUR) + "<br/>");
document.write("Remaining time is: " + Math.round(ONE_HOUR/ONE_MINUTE) + "<br/>");

