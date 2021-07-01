"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _util = require("./util");

require("./calendar.css");

var _arrow = _interopRequireDefault(require("../public/arrow.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var isBetween = require('dayjs/plugin/isBetween');

var isSameOrBefore = require('dayjs/plugin/isSameOrBefore');

var isSameOrAfter = require('dayjs/plugin/isSameOrAfter');

_dayjs.default.extend(isBetween);

_dayjs.default.extend(isSameOrBefore);

_dayjs.default.extend(isSameOrAfter);

var head = ['日', '一', '二', '三', '四', '五', '六'];

var MonthView = /*#__PURE__*/function (_PureComponent) {
  _inherits(MonthView, _PureComponent);

  var _super = _createSuper(MonthView);

  function MonthView(props) {
    var _this;

    _classCallCheck(this, MonthView);

    _this = _super.call(this, props);
    _this.handleTouchMove = (0, _util.throttle)(function (e) {
      e.stopPropagation();
      var disableWeekView = _this.props.disableWeekView;
      var moveX = e.touches[0].clientX - _this.touchStartPositionX;
      var moveY = e.touches[0].clientY - _this.touchStartPositionY;
      var calendarWidth = _this.calendarRef.current.offsetWidth;
      var calendarHeight = _this.calendarRef.current.offsetHeight;

      if (Math.abs(moveX) > Math.abs(moveY)) {
        // 左右滑动
        _this.setState({
          touch: {
            x: moveX / calendarWidth,
            y: 0
          }
        });
      } else if (!disableWeekView) {
        _this.setState({
          touch: {
            x: 0,
            y: moveY / calendarHeight
          }
        });
      }

      _this.props.onTouchMove(e);
    }, 25);

    _this.handleTouchStart = function (e) {
      e.stopPropagation();
      _this.touchStartPositionX = e.touches[0].clientX;
      _this.touchStartPositionY = e.touches[0].clientY; // this.isTouching = true

      _this.props.onTouchStart(e);
    };

    _this.handleTouchEnd = function (e) {
      e.stopPropagation();
      var showType = _this.state.showType;
      var disableWeekView = _this.props.disableWeekView;
      var calendarHeight = _this.calendarRef.current.offsetHeight;
      var _this$state = _this.state,
          touch = _this$state.touch,
          translateIndex = _this$state.translateIndex,
          currentMonthFirstDay = _this$state.currentMonthFirstDay,
          currenWeekFirstDay = _this$state.currenWeekFirstDay;
      _this.f = false;
      _this.isTouching = false;
      var absTouchX = Math.abs(touch.x);
      var absTouchY = Math.abs(touch.y);

      if (absTouchX > absTouchY && absTouchX > 0.15) {
        var isMonthView = showType === 'month';
        var newTranslateIndex = touch.x > 0 ? translateIndex + 1 : translateIndex - 1;

        if (isMonthView) {
          // 月视图
          var nextMonthFirstDay = currentMonthFirstDay[touch.x > 0 ? 'subtract' : 'add'](1, 'month');
          var nextMonthStartDay = nextMonthFirstDay.startOf('week');
          var nextMonthEndDay = nextMonthStartDay.add(35, 'day');

          _this.setState(_objectSpread({
            translateIndex: newTranslateIndex
          }, (0, _util.formatMonthData)(nextMonthFirstDay)), _this.props.onTouchEnd(nextMonthStartDay.valueOf(), nextMonthEndDay.valueOf()));
        } else {
          // 周视图
          var nextWeekFirstDay = currenWeekFirstDay[touch.x > 0 ? 'subtract' : 'add'](1, 'week');
          var nextWeekLastDay = nextWeekFirstDay.add(7, 'day');

          _this.setState(_objectSpread({
            translateIndex: newTranslateIndex
          }, (0, _util.formatWeekData)(nextWeekFirstDay)), _this.props.onTouchEnd(nextWeekFirstDay.valueOf(), nextWeekLastDay.valueOf()));
        }
      } else if (absTouchY > absTouchX && Math.abs(touch.y * calendarHeight) > 50) {
        if (disableWeekView) {// 禁用周视图
        } else if (touch.y > 0 && showType === 'week') {
          _this.setState({
            showType: 'month'
          }, function () {
            var dataArray = _this.state.monthDates[1];

            _this.props.onToggleShowType({
              showType: _this.state.showType,
              startTime: dataArray[0].valueOf(),
              endTime: dataArray[dataArray.length - 1].add(1, 'day').valueOf()
            });
          });
        } else if (touch.y < 0 && showType === 'month') {
          _this.setState({
            showType: 'week'
          }, function () {
            var dataArray = _this.state.weekDates[1];

            _this.props.onToggleShowType({
              showType: _this.state.showType,
              startTime: dataArray[0].valueOf(),
              endTime: dataArray[dataArray.length - 1].add(1, 'day').valueOf()
            });
          });
        }
      }

      _this.setState({
        touch: {
          x: 0,
          y: 0
        }
      });
    };

    _this.getCurrentDate = function () {
      var _this$state2 = _this.state,
          showType = _this$state2.showType,
          monthDates = _this$state2.monthDates;
      var isMonthView = showType === 'month';
      var showDateInfo = {};
      var dataArray = monthDates[1];

      if (isMonthView) {
        showDateInfo = {
          fromDate: dataArray[0].format('YYYY-MM-DD'),
          toDate: dataArray[dataArray.length - 1].format('YYYY-MM-DD')
        };
      }

      return showDateInfo;
    };

    _this.handleMonthToggle = function (type) {
      var handleMonthToggleClick = _this.props.handleMonthToggleClick;
      var _this$state3 = _this.state,
          currentMonthFirstDay = _this$state3.currentMonthFirstDay,
          currenWeekFirstDay = _this$state3.currenWeekFirstDay,
          showType = _this$state3.showType,
          monthDates = _this$state3.monthDates,
          weekDates = _this$state3.weekDates;
      var isMonthView = showType === 'month';
      var isPrev = type === 'prev';
      var formatFun = isMonthView ? _util.formatMonthData : _util.formatWeekData;
      var operateDate = isMonthView ? currentMonthFirstDay : currenWeekFirstDay;
      var updateStateData = formatFun(operateDate[isPrev ? 'subtract' : 'add'](1, isMonthView ? 'month' : 'week'));

      _this.setState(updateStateData, function () {
        var dataArray = updateStateData[isMonthView ? 'monthDates' : 'weekDates'][1];

        _this.props.onTouchEnd(dataArray[0].valueOf(), dataArray[dataArray.length - 1].add(1, 'day').valueOf());

        var showDateInfo = {};

        if (isMonthView) {
          showDateInfo = {
            fromDate: dataArray[0].format('YYYY-MM-DD'),
            toDate: dataArray[dataArray.length - 1].format('YYYY-MM-DD')
          };
        }

        handleMonthToggleClick(_objectSpread({
          type: type
        }, showDateInfo));
      });
    };

    _this.handleDayClick = function (date) {
      var clickDate = _this.state.clickDate;
      var flag = (0, _dayjs.default)((0, _dayjs.default)(date).format('YYYY-MM-DD')).isSame(clickDate, 'day');

      _this.setState({
        clickDate: flag ? '' : date
      });

      _this.props.onDateClick(date);
    };

    _this.state = {
      currentMonthFirstDay: null,
      monthDates: [],
      // 月日历需要展示的日期 包括前一月 当月 下一月
      currenWeekFirstDay: null,
      weekDates: [],
      // 周日李需要展示的日期  包括前一周 当周 下一周
      currentDate: '',
      touch: {
        x: 0,
        y: 0
      },
      translateIndex: 0,
      calendarY: 0,
      // 于Y轴的位置
      showType: props.showType,
      clickDate: ''
    };
    _this.isTouching = false;
    _this.calendarRef = /*#__PURE__*/(0, _react.createRef)(null);
    return _this;
  }

  _createClass(MonthView, [{
    key: "handleBottomOperate",
    value: function handleBottomOperate() {}
  }, {
    key: "getActivityDateLabel",
    value: function getActivityDateLabel() {
      var activityDates = this.props.activityDates;
      var monthDates = this.state.monthDates;
      var currentShowDate = monthDates[1] || [];

      if (currentShowDate.length && activityDates.length) {
        var showDateStart = (0, _dayjs.default)(currentShowDate[0]).format('YYYY-MM-DD');
        var showDateEnd = (0, _dayjs.default)(currentShowDate[currentShowDate.length - 1]).format('YYYY-MM-DD');
        return /*#__PURE__*/_react.default.createElement("div", null, activityDates.map(function (elem, index) {
          var startTime = elem.formDate;
          var endTime = elem.toDate;
          var flag = false; // 活动不限到不限

          if (+startTime === -1 && +endTime === -1) {
            flag = true;
          } // 活动不限到限


          if (+startTime === -1 && +endTime !== -1) {
            flag = (0, _dayjs.default)((0, _dayjs.default)(showDateStart).format('YYYY-MM-DD')).isSameOrBefore(endTime, 'day');
            flag = flag || (0, _dayjs.default)((0, _dayjs.default)(showDateEnd).format('YYYY-MM-DD')).isSameOrBefore(endTime, 'day');
          } // 活动限到不限


          if (+startTime !== -1 && +endTime === -1) {
            flag = (0, _dayjs.default)((0, _dayjs.default)(showDateStart).format('YYYY-MM-DD')).isSameOrAfter(startTime, 'day');
            flag = flag || (0, _dayjs.default)((0, _dayjs.default)(showDateEnd).format('YYYY-MM-DD')).isSameOrAfter(startTime, 'day');
          } // 活动限到限


          if (+startTime !== -1 && +endTime !== -1) {
            var start = (0, _dayjs.default)(startTime).isBetween(showDateStart, showDateEnd, null, '[]');
            var end = (0, _dayjs.default)(endTime).isBetween(showDateStart, showDateEnd, null, '[]');
            flag = start || end;
          }

          if (flag) {
            return /*#__PURE__*/_react.default.createElement("div", {
              key: "activity_".concat(index)
            }, /*#__PURE__*/_react.default.createElement("span", {
              className: "activity-dot inline-block",
              style: {
                background: elem.color
              }
            }), /*#__PURE__*/_react.default.createElement("span", {
              className: "inline-block"
            }, elem.name));
          }

          return '';
        }));
      }

      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          monthDates = _this$state4.monthDates,
          weekDates = _this$state4.weekDates,
          touch = _this$state4.touch,
          translateIndex = _this$state4.translateIndex,
          calendarY = _this$state4.calendarY,
          currentMonthFirstDay = _this$state4.currentMonthFirstDay,
          currenWeekFirstDay = _this$state4.currenWeekFirstDay,
          showType = _this$state4.showType,
          clickDate = _this$state4.clickDate;
      var _this$props = this.props,
          currentDate = _this$props.currentDate,
          transitionDuration = _this$props.transitionDuration,
          markDates = _this$props.markDates,
          markType = _this$props.markType,
          disableWeekView = _this$props.disableWeekView,
          activityDates = _this$props.activityDates,
          pc = _this$props.pc,
          showCurrentDay = _this$props.showCurrentDay,
          className = _this$props.className;
      var isMonthView = showType === 'month';
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(className, " react-h5-calendar ").concat(pc ? 'pc' : '')
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "calendar-operate"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "icon left-icon def-cur",
        onClick: this.handleMonthToggle.bind(this, 'prev')
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _arrow.default
      })), /*#__PURE__*/_react.default.createElement("div", null, (isMonthView ? currentMonthFirstDay : currenWeekFirstDay).format('YYYY年MM月')), /*#__PURE__*/_react.default.createElement("div", {
        className: "icon right-icon def-cur",
        onClick: this.handleMonthToggle.bind(this, 'next')
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _arrow.default
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "calendar-head"
      }, head.map(function (i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "head-cell",
          key: i
        }, i);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "calendar-body ".concat(isMonthView ? '' : 'week-mode'),
        ref: this.calendarRef,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          transform: "translate3d(".concat(-translateIndex * 100, "%, 0, 0)")
        }
      }, (isMonthView ? monthDates : weekDates).map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "month-cell",
          key: "month-cell-".concat(index),
          style: {
            transform: "translate3d(".concat((index - 1 + translateIndex + (_this2.isTouching ? touch.x : 0)) * 100, "%, ").concat(calendarY, "px, 0)"),
            transitionDuration: "".concat(_this2.isTouching ? 0 : transitionDuration, "s")
          }
        }, item.map(function (date, itemIndex) {
          var isCurrentDay = date.isSame(currentDate, 'day') && showCurrentDay;
          var isOtherMonthDay = showType === 'week' ? false : !date.isSame(currentMonthFirstDay, 'month');
          var isMarkDate = markDates.find(function (i) {
            return date.isSame(i.date, 'day');
          });
          var resetMarkType = isMarkDate && isMarkDate.markType || markType;
          var showDotMark = isCurrentDay ? false : isMarkDate && resetMarkType === 'dot';
          var showCircleMark = isCurrentDay ? false : isMarkDate && resetMarkType === 'circle';
          var solid = isMarkDate && resetMarkType === 'solid';
          isCurrentDay = isCurrentDay || solid;
          var isActivityDay = activityDates.find(function (i) {
            // 没有不限日期
            if (+i.formDate !== -1 && +i.toDate !== -1) {
              return (0, _dayjs.default)((0, _dayjs.default)(date).format('YYYY-MM-DD')).isBetween(i.formDate, i.toDate, null, '[]');
            }

            if (+i.formDate === -1 && +i.toDate === -1) {
              return true;
            } // 开始不限


            if (+i.formDate === -1) {
              return (0, _dayjs.default)((0, _dayjs.default)(date).format('YYYY-MM-DD')).isSameOrBefore(i.toDate, 'day');
            } // 结束不限


            if (+i.toDate === -1) {
              return (0, _dayjs.default)((0, _dayjs.default)(date).format('YYYY-MM-DD')).isSameOrAfter(i.formDate, 'day');
            }

            return false;
          });
          var dotColor = isActivityDay ? isActivityDay.color : isMarkDate ? isMarkDate.color : '';
          var markStyle = {};

          if (showCircleMark) {
            markStyle.borderColor = isMarkDate.color || '#fa9a5d';
          }

          if (solid) {
            markStyle.background = isMarkDate.color || '#fa9a5d';
          } // pc端 点击高亮


          if (pc) {
            isCurrentDay = clickDate ? date.isSame(clickDate, 'day') : false;
            markStyle.background = isCurrentDay ? markStyle.background : 'none';

            if (showCircleMark) {
              markStyle.borderColor = isCurrentDay ? '#fa9a5d' : isMarkDate.color;
            }
          } // 当天日期圈出来


          var isToday = date.isSame((0, _dayjs.default)().format('YYYY-MM-DD'), 'day');

          if (isToday) {
            showCircleMark = !isCurrentDay;
            markStyle.borderColor = 'red';
          }

          return /*#__PURE__*/_react.default.createElement("div", {
            key: itemIndex,
            className: "day-cell ".concat(isOtherMonthDay ? 'is-other-month-day' : ''),
            onClick: _this2.handleDayClick.bind(_this2, date)
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "day-text ".concat(isCurrentDay ? 'current-day' : '', " ").concat(showCircleMark ? 'circle-mark' : ''),
            style: markStyle
          }, date.format('DD')), (showDotMark || isActivityDay) && /*#__PURE__*/_react.default.createElement("div", {
            className: isMarkDate || isActivityDay ? 'dot-mark' : '',
            style: isMarkDate && solid ? {
              background: dotColor || '#4378be'
            } : {
              background: '#999'
            }
          }));
        }));
      }))), this.getActivityDateLabel());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var currentDate = nextProps.currentDate;

      if (currentDate !== prevState.currentDate) {
        var dayjsDate = (0, _dayjs.default)(currentDate);
        return _objectSpread(_objectSpread(_objectSpread({}, (0, _util.formatMonthData)(dayjsDate)), (0, _util.formatWeekData)(dayjsDate)), {}, {
          currentDate: currentDate
        });
      }

      return null;
    }
  }]);

  return MonthView;
}(_react.PureComponent);

MonthView.propTypes = {
  currentDate: _propTypes.default.string,
  showType: _propTypes.default.oneOf(['week', 'month']),
  transitionDuration: _propTypes.default.number,
  onDateClick: _propTypes.default.func,
  onTouchStart: _propTypes.default.func,
  onTouchMove: _propTypes.default.func,
  onTouchEnd: _propTypes.default.func,
  onToggleShowType: _propTypes.default.func,
  markType: _propTypes.default.oneOf(['dot', 'circle']),
  markDates: _propTypes.default.array,
  disableWeekView: _propTypes.default.bool,
  activityDates: _propTypes.default.array,
  showCurrentDay: _propTypes.default.bool,
  pc: _propTypes.default.bool
};
MonthView.defaultProps = {
  className: '',
  currentDate: (0, _dayjs.default)().format('YYYY-MM-DD'),
  showType: 'month',
  transitionDuration: 0.3,
  onDateClick: function onDateClick() {},
  onTouchStart: function onTouchStart() {},
  onTouchMove: function onTouchMove() {},
  onTouchEnd: function onTouchEnd() {},
  onToggleShowType: function onToggleShowType() {},
  handleMonthToggleClick: function handleMonthToggleClick() {},
  markType: 'dot',
  markDates: [],
  disableWeekView: false,
  activityDates: [],
  showCurrentDay: false,
  pc: true
};
var _default = MonthView;
exports.default = _default;