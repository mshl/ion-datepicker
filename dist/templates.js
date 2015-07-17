(function(module) {
try {
  module = angular.module('ionic-datepicker.templates');
} catch (e) {
  module = angular.module('ionic-datepicker.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('template.html',
    '<div class="bar bar-header bar-balanced"><div class=title>{{currentDate | date: \'EEEE\'}}</div></div><div class="row center balanced-light"><div class=col><div class=month ng-click="change(\'month\')">{{currentDate | date: \'MMM\' | uppercase}}</div><div class=day-of-month ng-click="change(\'date\')">{{currentDate | date: \'d\'}}</div><div class=year ng-click="change(\'year\')">{{currentDate | date: \'yyyy\'}}</div></div></div><div class=content ng-show="show(\'month\')"><div class="row center" ng-repeat="month in months track by $index"><div class=col ng-class="{ \'selected\': isSelectedMonth($index), \'current\': isCurrentMonth($index) }" ng-click=changeMonth($index)>{{month | limitTo: 3}}</div></div></div><div class=content ng-show="show(\'date\')"><div class="row col center">{{selectedDate | date: \'MMMM yyyy\'}}</div><div class="row center"><div class="col bold" ng-repeat="dayOfWeek in daysOfWeek track by $index">{{dayOfWeek}}</div></div><div class="row center" ng-repeat="row in rows track by $index"><div class="col no-padding" ng-repeat="col in cols track by $index" ng-class="{\'date-col\': (dateList[$parent.$index * numColumns + $index] != undefined), \'selected\': isSelectedDate(dateList[$parent.$index * numColumns + $index]), \'current\' : isToday(dateList[$parent.$index * numColumns + $index]) }"><div class=date-cell ng-click="selectDate(dateList[$parent.$index * numColumns + $index])">{{ dateList[$parent.$index * numColumns + $index] | date: \'d\' }}</div></div></div></div><div class=content ng-show="show(\'year\')"><div class="row center" ng-repeat="year in years track by $index"><div class=col ng-class="{ \'selected\': isSelectedYear(year), \'current\': isCurrentYear(year) }" ng-click=changeYear(year)>{{year}}</div></div></div>');
}]);
})();
