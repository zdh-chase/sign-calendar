"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatWeekData = exports.formatMonthData = exports.throttle = void 0;

var _this = void 0;

var throttle = function throttle(fun, delay) {
  var last = 0;
  return function () {
    var now = +new Date();

    if (now - last > delay) {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      fun.apply(_this, params);
      last = now;
    }
  };
};
/**
 *
 * @param {*} dayjsDate dayjs对象
 */


exports.throttle = throttle;

var formatMonthData = function formatMonthData(dayjsDate) {
  var currentMonthFirstDay = dayjsDate.startOf('month'); // 然后当前日历的第一天就应该是月份第一天的当周周一

  var currentMonthStartDay = currentMonthFirstDay.startOf('week');
  var prevMonthFirstDay = currentMonthFirstDay.subtract(1, 'month');
  var prevMonthStartDay = prevMonthFirstDay.startOf('week');
  var nextMonthFirstDay = currentMonthFirstDay.add(1, 'month');
  var nextMonthStartDay = nextMonthFirstDay.startOf('week');
  return {
    currentMonthFirstDay: currentMonthFirstDay,
    monthDates: [new Array(42).fill('').map(function (_, index) {
      return prevMonthStartDay.add(index, 'day');
    }), new Array(42).fill('').map(function (_, index) {
      return currentMonthStartDay.add(index, 'day');
    }), new Array(42).fill('').map(function (_, index) {
      return nextMonthStartDay.add(index, 'day');
    })]
  };
};
/**
 *
 * @param {*} dayjsDate dayjs对象
 */


exports.formatMonthData = formatMonthData;

var formatWeekData = function formatWeekData(dayjsDate) {
  var currenWeekStartDay = dayjsDate.startOf('week');
  var prevWeekStartDay = currenWeekStartDay.subtract(1, 'week');
  var nextWeekStartDay = currenWeekStartDay.add(1, 'week');
  return {
    currenWeekFirstDay: currenWeekStartDay,
    weekDates: [new Array(7).fill('').map(function (_, index) {
      return prevWeekStartDay.add(index, 'day');
    }), new Array(7).fill('').map(function (_, index) {
      return currenWeekStartDay.add(index, 'day');
    }), new Array(7).fill('').map(function (_, index) {
      return nextWeekStartDay.add(index, 'day');
    })]
  };
};

exports.formatWeekData = formatWeekData;