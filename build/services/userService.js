"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _axios = _interopRequireDefault(require("axios"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _bodyParser = require("body-parser");
var _sequelize = require("sequelize");
var _emailService = _interopRequireDefault(require("./emailService"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();
var MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
var saltRounds = 10;
var salt = _bcryptjs["default"].genSaltSync(saltRounds);
var handleUserLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email, password) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              var UserData, EmailIsExits, PasswordIsExits;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    UserData = {};
                    _context.next = 4;
                    return checkUserEmail(email);
                  case 4:
                    EmailIsExits = _context.sent;
                    _context.next = 7;
                    return checkUserPassword(email, password);
                  case 7:
                    PasswordIsExits = _context.sent;
                    if (EmailIsExits && PasswordIsExits) {
                      UserData.errCode = 0;
                      UserData.errMessage = "Ok";
                      UserData.user = EmailIsExits;
                      resolve(UserData);
                    } else {
                      UserData.errCode = 1;
                      UserData.errMessage = "Email or password not correct !!!!!";
                      UserData.user = {};
                      resolve(UserData);
                    }
                    _context.next = 14;
                    break;
                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](0);
                    reject(_context.t0);
                  case 14:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 11]]);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function handleUserLogin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var checkUserEmail = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(email) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
              var user;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return _index["default"].User.findOne({
                      where: {
                        email: email
                      },
                      raw: true,
                      attributes: {
                        exclude: ["password", "createdAt", "updatedAt"]
                      }
                    });
                  case 3:
                    user = _context3.sent;
                    if (user) {
                      resolve(user);
                    } else {
                      resolve(false);
                    }
                    _context3.next = 10;
                    break;
                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);
                    reject(_context3.t0);
                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[0, 7]]);
            }));
            return function (_x6, _x7) {
              return _ref4.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function checkUserEmail(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
var checkUserPassword = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(email, password) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
              var user, check;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return _index["default"].User.findOne({
                      where: {
                        email: email
                      },
                      raw: true
                    });
                  case 3:
                    user = _context5.sent;
                    if (user) {
                      check = _bcryptjs["default"].compareSync(password, user.password);
                      if (check) {
                        resolve(user);
                      } else {
                        resolve(false);
                      }
                    } else {
                      resolve(false);
                    }
                    _context5.next = 10;
                    break;
                  case 7:
                    _context5.prev = 7;
                    _context5.t0 = _context5["catch"](0);
                    reject(_context5.t0);
                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, null, [[0, 7]]);
            }));
            return function (_x10, _x11) {
              return _ref6.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function checkUserPassword(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
var handleGetAllUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(userId) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
              var users, data, _data;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    users = "";
                    if (!(userId === "ALL" || userId === "all")) {
                      _context7.next = 9;
                      break;
                    }
                    _context7.next = 5;
                    return _index["default"].User.findAll({
                      raw: true,
                      attributes: {
                        exclude: ["password"]
                      }
                    });
                  case 5:
                    data = _context7.sent;
                    if (data && data.length > 0) {
                      users = data;
                      resolve({
                        errCode: 0,
                        errMessage: "Found all user",
                        users: users
                      });
                    } else {
                      resolve({
                        errCode: 1,
                        errMessage: "Not found any user",
                        users: users
                      });
                    }
                    _context7.next = 13;
                    break;
                  case 9:
                    _context7.next = 11;
                    return _index["default"].User.findAll({
                      raw: true,
                      where: {
                        id: userId
                      },
                      attributes: {
                        exclude: ["password"]
                      }
                    });
                  case 11:
                    _data = _context7.sent;
                    if (_data && _data.length > 0) {
                      users = _data;
                      resolve({
                        errCode: 0,
                        errMessage: "Found user with id " + userId,
                        users: users
                      });
                    } else {
                      resolve({
                        errCode: 1,
                        errMessage: "Not found any user",
                        users: users
                      });
                    }
                  case 13:
                    _context7.next = 18;
                    break;
                  case 15:
                    _context7.prev = 15;
                    _context7.t0 = _context7["catch"](0);
                    reject(_context7.t0);
                  case 18:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, null, [[0, 15]]);
            }));
            return function (_x13, _x14) {
              return _ref8.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function handleGetAllUser(_x12) {
    return _ref7.apply(this, arguments);
  };
}();
var hashUserPassword = function hashUserPassword(password) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var hash;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _bcryptjs["default"].hashSync(password, salt);
          case 3:
            hash = _context9.sent;
            resolve(hash);
            _context9.next = 10;
            break;
          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 10:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 7]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var handleCreateNewUser = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(data) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          return _context11.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
              var hashPassword, checkUserEmailIsExist, user;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    if (!data) {
                      resolve({
                        errCode: 2,
                        errMessage: "Server need data to create user"
                      });
                    }
                    _context10.next = 4;
                    return hashUserPassword(data.password);
                  case 4:
                    hashPassword = _context10.sent;
                    _context10.next = 7;
                    return checkUserEmail(data.email);
                  case 7:
                    checkUserEmailIsExist = _context10.sent;
                    if (checkUserEmailIsExist) {
                      _context10.next = 15;
                      break;
                    }
                    _context10.next = 11;
                    return _index["default"].User.create({
                      email: data.email,
                      password: hashPassword,
                      firstName: data.firstName,
                      lastName: data.lastName,
                      address: data.address,
                      phoneNumber: data.phoneNumber,
                      gender: data.gender,
                      roleId: data.roleId,
                      positionId: data.positionId,
                      image: data.image
                    });
                  case 11:
                    user = _context10.sent;
                    if (!user) {
                      resolve({
                        errCode: 1,
                        errMessage: "Cannot create user, something happened"
                      });
                    } else {
                      resolve({
                        errCode: 0,
                        errMessage: "User created"
                      });
                    }
                    _context10.next = 16;
                    break;
                  case 15:
                    resolve({
                      errCode: 3,
                      errMessage: "Email is exist"
                    });
                  case 16:
                    _context10.next = 21;
                    break;
                  case 18:
                    _context10.prev = 18;
                    _context10.t0 = _context10["catch"](0);
                    reject(_context10.t0);
                  case 21:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, null, [[0, 18]]);
            }));
            return function (_x18, _x19) {
              return _ref11.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function handleCreateNewUser(_x17) {
    return _ref10.apply(this, arguments);
  };
}();
var handleUpdateAUser = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(data) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          return _context13.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
              var user;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.prev = 0;
                    if (!data.id) {
                      resolve({
                        errCode: 1,
                        errMessage: "Missing id"
                      });
                    }
                    _context12.next = 4;
                    return _index["default"].User.findOne({
                      where: {
                        id: data.id
                      }
                    });
                  case 4:
                    user = _context12.sent;
                    if (user) {
                      _context12.next = 9;
                      break;
                    }
                    resolve({
                      errCode: 2,
                      errMessage: "Not found user with id:" + data.id
                    });
                    _context12.next = 20;
                    break;
                  case 9:
                    user.firstName = data.firstName;
                    user.lastName = data.lastName;
                    user.address = data.address;
                    user.phoneNumber = data.phoneNumber;
                    user.gender = data.gender;
                    user.positionId = data.positionId;
                    user.roleId = data.roleId;
                    if (data.image) {
                      user.image = data.image;
                    }
                    _context12.next = 19;
                    return user.save();
                  case 19:
                    resolve({
                      errCode: 0,
                      errMessage: "Update user complete"
                    });
                  case 20:
                    _context12.next = 25;
                    break;
                  case 22:
                    _context12.prev = 22;
                    _context12.t0 = _context12["catch"](0);
                    reject(_context12.t0);
                  case 25:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, null, [[0, 22]]);
            }));
            return function (_x21, _x22) {
              return _ref13.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function handleUpdateAUser(_x20) {
    return _ref12.apply(this, arguments);
  };
}();
var handleDeleteAUser = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(userId) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          return _context15.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
              var user;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.prev = 0;
                    if (!userId) {
                      resolve({
                        errCode: 1,
                        errMessage: "Missing userId"
                      });
                    }
                    _context14.next = 4;
                    return _index["default"].User.findOne({
                      where: {
                        id: userId
                      }
                    });
                  case 4:
                    user = _context14.sent;
                    if (user) {
                      _context14.next = 9;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Not found user with id:" + userId
                    });
                    _context14.next = 12;
                    break;
                  case 9:
                    _context14.next = 11;
                    return user.destroy();
                  case 11:
                    resolve({
                      errCode: 0,
                      errMessage: "Delete user complete"
                    });
                  case 12:
                    _context14.next = 17;
                    break;
                  case 14:
                    _context14.prev = 14;
                    _context14.t0 = _context14["catch"](0);
                    reject(_context14.t0);
                  case 17:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, null, [[0, 14]]);
            }));
            return function (_x24, _x25) {
              return _ref15.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function handleDeleteAUser(_x23) {
    return _ref14.apply(this, arguments);
  };
}();
var getAllCodeService = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(type) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          return _context17.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
              var data, result;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.prev = 0;
                    if (type) {
                      _context16.next = 5;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Missing required parameter"
                    });
                    _context16.next = 11;
                    break;
                  case 5:
                    data = {};
                    _context16.next = 8;
                    return _index["default"].AllCode.findAll({
                      raw: true,
                      where: {
                        type: type
                      },
                      attributes: {
                        exclude: ["createdAt", "updatedAt"]
                      }
                    });
                  case 8:
                    result = _context16.sent;
                    // console.log("result", result);
                    if (result) {
                      data.errCode = 0;
                      data.errMessage = "Get all code success";
                      data.data = result;
                    } else {
                      data.errCode = 1;
                      data.errMessage = "Get all code failed";
                    }
                    resolve(data);
                  case 11:
                    _context16.next = 16;
                    break;
                  case 13:
                    _context16.prev = 13;
                    _context16.t0 = _context16["catch"](0);
                    reject(_context16.t0);
                  case 16:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16, null, [[0, 13]]);
            }));
            return function (_x27, _x28) {
              return _ref17.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function getAllCodeService(_x26) {
    return _ref16.apply(this, arguments);
  };
}();
var getDoctor = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          return _context19.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(resolve, reject) {
              var result, data;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.prev = 0;
                    result = {};
                    _context18.next = 4;
                    return _index["default"].User.findAll({
                      where: {
                        roleId: "R2"
                      },
                      limit: 10,
                      raw: true,
                      nest: true,
                      attributes: {
                        exclude: ["password"]
                      },
                      order: [["createdAt", "ASC"]],
                      include: [{
                        model: _index["default"].AllCode,
                        as: "positionData",
                        attributes: ["valueEn", "valueVi"]
                      }, {
                        model: _index["default"].AllCode,
                        as: "genderData",
                        attributes: ["valueEn", "valueVi"]
                      }]
                    });
                  case 4:
                    data = _context18.sent;
                    if (data && data.length > 0) {
                      result.errCode = 0;
                      result.errMessage = "Ok";
                      result.listDoctor = data;
                    }
                    resolve(result);
                    _context18.next = 12;
                    break;
                  case 9:
                    _context18.prev = 9;
                    _context18.t0 = _context18["catch"](0);
                    reject(_context18.t0);
                  case 12:
                  case "end":
                    return _context18.stop();
                }
              }, _callee18, null, [[0, 9]]);
            }));
            return function (_x29, _x30) {
              return _ref19.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function getDoctor() {
    return _ref18.apply(this, arguments);
  };
}();
var getAllDoctor = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          return _context21.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(resolve, reject) {
              var result, data;
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.prev = 0;
                    result = {};
                    _context20.next = 4;
                    return _index["default"].User.findAll({
                      where: {
                        roleId: "R2"
                      },
                      raw: true,
                      nest: true,
                      attributes: {
                        exclude: ["password", "image", "createdAt", "updatedAt"]
                      },
                      order: [["id", "ASC"]],
                      include: [{
                        model: _index["default"].AllCode,
                        as: "positionData",
                        attributes: ["valueEn", "valueVi"]
                      }, {
                        model: _index["default"].AllCode,
                        as: "genderData",
                        attributes: ["valueEn", "valueVi"]
                      }]
                    });
                  case 4:
                    data = _context20.sent;
                    if (data && data.length > 0) {
                      result.errCode = 0;
                      result.errMessage = "Ok";
                      result.listDoctor = data;
                    }
                    resolve(result);
                    _context20.next = 12;
                    break;
                  case 9:
                    _context20.prev = 9;
                    _context20.t0 = _context20["catch"](0);
                    reject(_context20.t0);
                  case 12:
                  case "end":
                    return _context20.stop();
                }
              }, _callee20, null, [[0, 9]]);
            }));
            return function (_x31, _x32) {
              return _ref21.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function getAllDoctor() {
    return _ref20.apply(this, arguments);
  };
}();
var saveInfoDoctor = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(data) {
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          return _context23.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(resolve, reject) {
              var result, dataDoctorInfo, checkMarkdown, checkDoctorInfo, markdown, doctorInfo;
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) switch (_context22.prev = _context22.next) {
                  case 0:
                    _context22.prev = 0;
                    if (data.id) {
                      _context22.next = 5;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Missing id"
                    });
                    _context22.next = 45;
                    break;
                  case 5:
                    _context22.next = 7;
                    return _index["default"].Markdown.findOne({
                      where: {
                        doctorId: data.id.value
                      }
                    });
                  case 7:
                    result = _context22.sent;
                    _context22.next = 10;
                    return _index["default"].Doctor_info.findOne({
                      where: {
                        doctorId: data.id.value
                      }
                    });
                  case 10:
                    dataDoctorInfo = _context22.sent;
                    checkMarkdown = true;
                    checkDoctorInfo = true;
                    if (result) {
                      _context22.next = 20;
                      break;
                    }
                    _context22.next = 16;
                    return _index["default"].Markdown.create({
                      doctorId: data.id.value,
                      contentHTML: data.htmlMarkdown,
                      contentMarkdown: data.textMarkdown,
                      description: data.introduce
                    });
                  case 16:
                    markdown = _context22.sent;
                    if (markdown) {
                      checkMarkdown = true;
                    } else {
                      checkMarkdown = false;
                    }
                    _context22.next = 26;
                    break;
                  case 20:
                    result.doctorId = data.id.value;
                    result.contentHTML = data.htmlMarkdown;
                    result.contentMarkdown = data.textMarkdown;
                    result.description = data.introduce;
                    _context22.next = 26;
                    return result.save();
                  case 26:
                    if (dataDoctorInfo) {
                      _context22.next = 33;
                      break;
                    }
                    _context22.next = 29;
                    return _index["default"].Doctor_info.create({
                      doctorId: data.id.value,
                      priceId: data.priceId.value,
                      paymentId: data.paymentId.value,
                      provinceId: data.provinceId.value,
                      specialtyId: data.specialtyId.value,
                      clinicId: data.clinicId.value,
                      addressClinic: data.addressClinic,
                      nameClinic: data.nameClinic,
                      note: data.note,
                      count: 0
                    });
                  case 29:
                    doctorInfo = _context22.sent;
                    if (doctorInfo) {
                      checkDoctorInfo = true;
                    } else {
                      checkDoctorInfo = false;
                    }
                    _context22.next = 44;
                    break;
                  case 33:
                    dataDoctorInfo.doctorId = data.id.value;
                    dataDoctorInfo.priceId = data.priceId.value;
                    dataDoctorInfo.paymentId = data.paymentId.value;
                    dataDoctorInfo.provinceId = data.provinceId.value;
                    dataDoctorInfo.specialtyId = data.specialtyId.value;
                    dataDoctorInfo.clinicId = data.clinicId.value;
                    dataDoctorInfo.addressClinic = data.addressClinic;
                    dataDoctorInfo.nameClinic = data.nameClinic;
                    dataDoctorInfo.note = data.note;
                    _context22.next = 44;
                    return dataDoctorInfo.save();
                  case 44:
                    if (checkMarkdown && checkDoctorInfo) {
                      resolve({
                        errCode: 0,
                        errMessage: "Done!!!!!!!!!!!!!"
                      });
                    } else {
                      resolve({
                        errCode: -1,
                        errMessage: "Something wrong"
                      });
                    }
                  case 45:
                    _context22.next = 50;
                    break;
                  case 47:
                    _context22.prev = 47;
                    _context22.t0 = _context22["catch"](0);
                    reject(_context22.t0);
                  case 50:
                  case "end":
                    return _context22.stop();
                }
              }, _callee22, null, [[0, 47]]);
            }));
            return function (_x34, _x35) {
              return _ref23.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function saveInfoDoctor(_x33) {
    return _ref22.apply(this, arguments);
  };
}();
var getDetailDoctor = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(id) {
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          return _context25.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(resolve, reject) {
              var data, dataDoctor;
              return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                while (1) switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.prev = 0;
                    if (id) {
                      _context24.next = 5;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Missing id"
                    });
                    _context24.next = 12;
                    break;
                  case 5:
                    _context24.next = 7;
                    return _index["default"].User.findOne({
                      where: {
                        id: id
                      },
                      raw: true,
                      nest: true,
                      attributes: {
                        exclude: ["password", "createdAt", "updatedAt"]
                      },
                      include: [{
                        model: _index["default"].Markdown,
                        attributes: ["contentHTML", "contentMarkdown", "description"]
                      }, {
                        model: _index["default"].AllCode,
                        as: "positionData",
                        attributes: ["valueVi", "valueEn"]
                      }, {
                        model: _index["default"].Doctor_info,
                        attributes: ["priceId", "paymentId", "provinceId", "addressClinic", "specialtyId", "clinicId", "nameClinic", "note"]
                      }]
                    });
                  case 7:
                    data = _context24.sent;
                    _context24.next = 10;
                    return _index["default"].Doctor_info.findOne({
                      where: {
                        doctorId: id
                      },
                      raw: true,
                      nest: true,
                      attributes: {
                        exclude: ["password", "createdAt", "updatedAt", "id"]
                      },
                      include: [{
                        model: _index["default"].AllCode,
                        as: "priceTypeData",
                        attributes: ["valueEn", "valueVi"]
                      }, {
                        model: _index["default"].AllCode,
                        as: "provinceTypeData",
                        attributes: ["valueEn", "valueVi"]
                      }, {
                        model: _index["default"].AllCode,
                        as: "paymentTypeData",
                        attributes: ["valueEn", "valueVi"]
                      }, {
                        model: _index["default"].specialty,
                        as: "specialtyData",
                        attributes: ["name"]
                      }, {
                        model: _index["default"].Clinic,
                        as: "clinicData",
                        attributes: ["name"]
                      }]
                    });
                  case 10:
                    dataDoctor = _context24.sent;
                    if (!data) {
                      resolve({
                        errCode: 2,
                        errMessage: "Not found user",
                        data: {}
                      });
                    } else {
                      if (data.image) {
                        data.image = new Buffer(data.image, "base64").toString("binary");
                      }
                      if (dataDoctor && dataDoctor.priceTypeData && dataDoctor.provinceTypeData && dataDoctor.paymentTypeData && dataDoctor.specialtyData && dataDoctor.clinicData) {
                        data.Doctor_detail_price = dataDoctor.priceTypeData;
                        data.Doctor_detail_province = dataDoctor.provinceTypeData;
                        data.Doctor_detail_payment = dataDoctor.paymentTypeData;
                        data.Doctor_detail_specialty = dataDoctor.specialtyData;
                        data.Doctor_detail_clinic = dataDoctor.clinicData;
                      }
                      resolve({
                        errCode: 0,
                        errMessage: "Found a user",
                        data: data
                      });
                    }
                  case 12:
                    _context24.next = 17;
                    break;
                  case 14:
                    _context24.prev = 14;
                    _context24.t0 = _context24["catch"](0);
                    reject(_context24.t0);
                  case 17:
                  case "end":
                    return _context24.stop();
                }
              }, _callee24, null, [[0, 14]]);
            }));
            return function (_x37, _x38) {
              return _ref25.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function getDetailDoctor(_x36) {
    return _ref24.apply(this, arguments);
  };
}();
var saveSchedule = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(data) {
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          return _context28.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(resolve, reject) {
              var schedule, res, check;
              return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                while (1) switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.prev = 0;
                    if (!(!data && !data.schedule)) {
                      _context27.next = 5;
                      break;
                    }
                    resolve({
                      errCode: -1,
                      errMessage: "Missing data"
                    });
                    _context27.next = 21;
                    break;
                  case 5:
                    schedule = data.arrSchedule;
                    if (schedule && schedule.length > 0) {
                      schedule = schedule.map(function (item) {
                        item.maxNumber = +MAX_NUMBER_SCHEDULE;
                        return item;
                      });
                    }
                    _context27.next = 9;
                    return _index["default"].Schedule.findAll({
                      where: {
                        doctorId: schedule[0].doctorId,
                        date: schedule[0].date
                      },
                      raw: true,
                      nest: true,
                      attributes: {
                        exclude: ["createdAt", "updatedAt", "id", "currentNumber"]
                      }
                    });
                  case 9:
                    res = _context27.sent;
                    if (!(res.length === 0)) {
                      _context27.next = 15;
                      break;
                    }
                    _context27.next = 13;
                    return _index["default"].Schedule.bulkCreate(schedule);
                  case 13:
                    _context27.next = 20;
                    break;
                  case 15:
                    //compare
                    Array.prototype.equals = function (array) {
                      var _this = this;
                      if (!Array.isArray(array)) {
                        throw new Error("Tham số truyền vào phải là một mảng.");
                      }
                      var differences = {
                        toAdd: [],
                        toRemove: []
                      };
                      differences.toAdd = array.filter(function (item2) {
                        return !_this.some(function (item1) {
                          return JSON.stringify(item1) === JSON.stringify(item2);
                        });
                      });
                      differences.toRemove = this.filter(function (item1) {
                        return !array.some(function (item2) {
                          return JSON.stringify(item1) === JSON.stringify(item2);
                        });
                      });
                      return differences;
                    };
                    check = res.equals(data.arrSchedule);
                    _context27.next = 19;
                    return _index["default"].Schedule.bulkCreate(check.toAdd);
                  case 19:
                    if (check.toRemove.length > 0) {
                      check.toRemove.map(/*#__PURE__*/function () {
                        var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(item) {
                          return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                            while (1) switch (_context26.prev = _context26.next) {
                              case 0:
                                _context26.next = 2;
                                return _index["default"].Schedule.destroy({
                                  where: {
                                    doctorId: item.doctorId,
                                    date: item.date,
                                    timeType: item.timeType
                                  }
                                });
                              case 2:
                              case "end":
                                return _context26.stop();
                            }
                          }, _callee26);
                        }));
                        return function (_x42) {
                          return _ref28.apply(this, arguments);
                        };
                      }());
                    }

                    // await db.Schedule.destroy(check.toRemove);
                  case 20:
                    resolve({
                      errCode: 0,
                      errMessage: "Done"
                    });
                  case 21:
                    _context27.next = 26;
                    break;
                  case 23:
                    _context27.prev = 23;
                    _context27.t0 = _context27["catch"](0);
                    reject(_context27.t0);
                  case 26:
                  case "end":
                    return _context27.stop();
                }
              }, _callee27, null, [[0, 23]]);
            }));
            return function (_x40, _x41) {
              return _ref27.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return function saveSchedule(_x39) {
    return _ref26.apply(this, arguments);
  };
}();
var getAllScheduleByDay = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(doctorId, date) {
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          return _context30.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref30 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(resolve, reject) {
              var data;
              return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                while (1) switch (_context29.prev = _context29.next) {
                  case 0:
                    _context29.prev = 0;
                    if (!(!doctorId || !date)) {
                      _context29.next = 5;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Missing data required"
                    });
                    _context29.next = 9;
                    break;
                  case 5:
                    _context29.next = 7;
                    return _index["default"].Schedule.findAll({
                      where: {
                        doctorId: doctorId,
                        date: date
                      },
                      raw: true,
                      nest: true,
                      attributes: {
                        exclude: ["createdAt", "updatedAt", "currentNumber"]
                      },
                      include: [{
                        model: _index["default"].AllCode,
                        as: "timeTypeData",
                        attributes: ["valueEn", "valueVi"]
                      }, {
                        model: _index["default"].User,
                        as: "doctorIdData",
                        attributes: ["firstName", "lastName"]
                      }]
                    });
                  case 7:
                    data = _context29.sent;
                    if (!data) {
                      resolve({
                        errCode: 1,
                        errMessage: "not found anything",
                        data: []
                      });
                    } else {
                      resolve({
                        errCode: 0,
                        errMessage: "done",
                        data: data
                      });
                    }
                  case 9:
                    _context29.next = 14;
                    break;
                  case 11:
                    _context29.prev = 11;
                    _context29.t0 = _context29["catch"](0);
                    reject(_context29.t0);
                  case 14:
                  case "end":
                    return _context29.stop();
                }
              }, _callee29, null, [[0, 11]]);
            }));
            return function (_x45, _x46) {
              return _ref30.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return function getAllScheduleByDay(_x43, _x44) {
    return _ref29.apply(this, arguments);
  };
}();
var CreateNewSpecialty = function CreateNewSpecialty(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref31 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee31$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            if (!(!data.name || !data.descriptionHTML || !data.descriptionMarkdown)) {
              _context31.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing something"
            });
            _context31.next = 9;
            break;
          case 5:
            _context31.next = 7;
            return _index["default"].specialty.create({
              name: data.name,
              descriptionHTML: data.descriptionHTML,
              descriptionMarkdown: data.descriptionMarkdown,
              image: data.image
            });
          case 7:
            user = _context31.sent;
            if (!user) {
              resolve({
                errCode: -1,
                errMessage: "Create not complete"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "Complete"
              });
            }
          case 9:
            _context31.next = 14;
            break;
          case 11:
            _context31.prev = 11;
            _context31.t0 = _context31["catch"](0);
            reject(_context31.t0);
          case 14:
          case "end":
            return _context31.stop();
        }
      }, _callee31, null, [[0, 11]]);
    }));
    return function (_x47, _x48) {
      return _ref31.apply(this, arguments);
    };
  }());
};
var GetAllSpecialty = function GetAllSpecialty(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(resolve, reject) {
      var _data2;
      return _regeneratorRuntime().wrap(function _callee32$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            _context32.prev = 0;
            _context32.next = 3;
            return _index["default"].specialty.findAll({
              limit: 10,
              raw: true,
              nest: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            });
          case 3:
            _data2 = _context32.sent;
            if (!_data2 || _data2.length <= 0) {
              resolve({
                errCode: -1,
                errMessage: "Create not complete",
                data: []
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "Complete",
                data: _data2
              });
            }
            _context32.next = 10;
            break;
          case 7:
            _context32.prev = 7;
            _context32.t0 = _context32["catch"](0);
            reject(_context32.t0);
          case 10:
          case "end":
            return _context32.stop();
        }
      }, _callee32, null, [[0, 7]]);
    }));
    return function (_x49, _x50) {
      return _ref32.apply(this, arguments);
    };
  }());
};
var GetAllDoctorBySpecialty = function GetAllDoctorBySpecialty(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref33 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee33$(_context33) {
        while (1) switch (_context33.prev = _context33.next) {
          case 0:
            _context33.prev = 0;
            if (id) {
              _context33.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing parameter"
            });
            _context33.next = 9;
            break;
          case 5:
            _context33.next = 7;
            return _index["default"].Doctor_info.findAll({
              where: {
                specialtyId: id
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            });
          case 7:
            data = _context33.sent;
            if (!data || data.length < 0) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data: data
              });
            }
          case 9:
            _context33.next = 14;
            break;
          case 11:
            _context33.prev = 11;
            _context33.t0 = _context33["catch"](0);
            reject(_context33.t0);
          case 14:
          case "end":
            return _context33.stop();
        }
      }, _callee33, null, [[0, 11]]);
    }));
    return function (_x51, _x52) {
      return _ref33.apply(this, arguments);
    };
  }());
};
var GetDetailSpecialty = function GetDetailSpecialty(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref34 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee34$(_context34) {
        while (1) switch (_context34.prev = _context34.next) {
          case 0:
            _context34.prev = 0;
            if (id) {
              _context34.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing parameter"
            });
            _context34.next = 9;
            break;
          case 5:
            _context34.next = 7;
            return _index["default"].specialty.findOne({
              where: {
                id: id
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt", "image"]
              }
            });
          case 7:
            data = _context34.sent;
            if (!data) {
              resolve({
                errCode: 1,
                errMessage: "Not found any specialty"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data: data
              });
            }
          case 9:
            _context34.next = 14;
            break;
          case 11:
            _context34.prev = 11;
            _context34.t0 = _context34["catch"](0);
            reject(_context34.t0);
          case 14:
          case "end":
            return _context34.stop();
        }
      }, _callee34, null, [[0, 11]]);
    }));
    return function (_x53, _x54) {
      return _ref34.apply(this, arguments);
    };
  }());
};
var GetDoctorByProvince = function GetDoctorByProvince(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref35 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(resolve, reject) {
      var data, _data3, _data4, _data5;
      return _regeneratorRuntime().wrap(function _callee35$(_context35) {
        while (1) switch (_context35.prev = _context35.next) {
          case 0:
            _context35.prev = 0;
            if (id) {
              _context35.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing parameter"
            });
            _context35.next = 31;
            break;
          case 5:
            if (!(id.actionId === "specialty")) {
              _context35.next = 19;
              break;
            }
            if (!(id.provinceId === "all" || id.provinceId === "ALL" || id.provinceId === "All")) {
              _context35.next = 13;
              break;
            }
            _context35.next = 9;
            return _index["default"].Doctor_info.findAll({
              where: {
                specialtyId: id.specialtyId
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            });
          case 9:
            data = _context35.sent;
            if (!data) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data: data
              });
            }
            _context35.next = 17;
            break;
          case 13:
            _context35.next = 15;
            return _index["default"].Doctor_info.findAll({
              where: {
                provinceID: id.provinceId,
                specialtyId: id.specialtyId
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            });
          case 15:
            _data3 = _context35.sent;
            if (!_data3) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data: _data3
              });
            }
          case 17:
            _context35.next = 31;
            break;
          case 19:
            if (!(id.actionId === "clinic")) {
              _context35.next = 31;
              break;
            }
            if (!(id.provinceId === "all" || id.provinceId === "ALL" || id.provinceId === "All")) {
              _context35.next = 27;
              break;
            }
            _context35.next = 23;
            return _index["default"].Doctor_info.findAll({
              where: {
                clinicId: id.specialtyId
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            });
          case 23:
            _data4 = _context35.sent;
            if (!_data4) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data: _data4
              });
            }
            _context35.next = 31;
            break;
          case 27:
            _context35.next = 29;
            return _index["default"].Doctor_info.findAll({
              where: {
                provinceID: id.provinceId,
                clinicId: id.specialtyId
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            });
          case 29:
            _data5 = _context35.sent;
            if (!_data5) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data: _data5
              });
            }
          case 31:
            _context35.next = 36;
            break;
          case 33:
            _context35.prev = 33;
            _context35.t0 = _context35["catch"](0);
            reject(_context35.t0);
          case 36:
          case "end":
            return _context35.stop();
        }
      }, _callee35, null, [[0, 33]]);
    }));
    return function (_x55, _x56) {
      return _ref35.apply(this, arguments);
    };
  }());
};
var CreateNewClinic = function CreateNewClinic(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref36 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee36$(_context36) {
        while (1) switch (_context36.prev = _context36.next) {
          case 0:
            _context36.prev = 0;
            if (!(!data.name || !data.descriptionHTML || !data.descriptionMarkdown)) {
              _context36.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing something"
            });
            _context36.next = 9;
            break;
          case 5:
            _context36.next = 7;
            return _index["default"].Clinic.create({
              name: data.name,
              descriptionHTML: data.descriptionHTML,
              descriptionMarkdown: data.descriptionMarkdown,
              image: data.image
            });
          case 7:
            user = _context36.sent;
            if (!user) {
              resolve({
                errCode: -1,
                errMessage: "Create not complete"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "Complete"
              });
            }
          case 9:
            _context36.next = 14;
            break;
          case 11:
            _context36.prev = 11;
            _context36.t0 = _context36["catch"](0);
            reject(_context36.t0);
          case 14:
          case "end":
            return _context36.stop();
        }
      }, _callee36, null, [[0, 11]]);
    }));
    return function (_x57, _x58) {
      return _ref36.apply(this, arguments);
    };
  }());
};
var GetAllClinic = function GetAllClinic(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref37 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(resolve, reject) {
      var _data6;
      return _regeneratorRuntime().wrap(function _callee37$(_context37) {
        while (1) switch (_context37.prev = _context37.next) {
          case 0:
            _context37.prev = 0;
            _context37.next = 3;
            return _index["default"].Clinic.findAll({
              limit: 10,
              raw: true,
              nest: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            });
          case 3:
            _data6 = _context37.sent;
            if (!_data6 || _data6.length <= 0) {
              resolve({
                errCode: -1,
                errMessage: "Not found",
                data: []
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "Complete",
                data: _data6
              });
            }
            _context37.next = 10;
            break;
          case 7:
            _context37.prev = 7;
            _context37.t0 = _context37["catch"](0);
            reject(_context37.t0);
          case 10:
          case "end":
            return _context37.stop();
        }
      }, _callee37, null, [[0, 7]]);
    }));
    return function (_x59, _x60) {
      return _ref37.apply(this, arguments);
    };
  }());
};
var GetAllDoctorByClinic = function GetAllDoctorByClinic(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref38 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee38$(_context38) {
        while (1) switch (_context38.prev = _context38.next) {
          case 0:
            _context38.prev = 0;
            if (id) {
              _context38.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing parameter"
            });
            _context38.next = 9;
            break;
          case 5:
            _context38.next = 7;
            return _index["default"].Doctor_info.findAll({
              where: {
                clinicId: id
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt"]
              }
            });
          case 7:
            data = _context38.sent;
            if (!data || data.length < 0) {
              resolve({
                errCode: 1,
                errMessage: "Not found any doctor"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data: data
              });
            }
          case 9:
            _context38.next = 14;
            break;
          case 11:
            _context38.prev = 11;
            _context38.t0 = _context38["catch"](0);
            reject(_context38.t0);
          case 14:
          case "end":
            return _context38.stop();
        }
      }, _callee38, null, [[0, 11]]);
    }));
    return function (_x61, _x62) {
      return _ref38.apply(this, arguments);
    };
  }());
};
var GetDetailClinic = function GetDetailClinic(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref39 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee39$(_context39) {
        while (1) switch (_context39.prev = _context39.next) {
          case 0:
            _context39.prev = 0;
            if (id) {
              _context39.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing parameter"
            });
            _context39.next = 9;
            break;
          case 5:
            _context39.next = 7;
            return _index["default"].Clinic.findOne({
              where: {
                id: id
              },
              raw: true,
              attributes: {
                exclude: ["createdAt", "updatedAt", "image"]
              }
            });
          case 7:
            data = _context39.sent;
            if (!data) {
              resolve({
                errCode: 1,
                errMessage: "Not found any clinic"
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: "complete",
                data: data
              });
            }
          case 9:
            _context39.next = 14;
            break;
          case 11:
            _context39.prev = 11;
            _context39.t0 = _context39["catch"](0);
            reject(_context39.t0);
          case 14:
          case "end":
            return _context39.stop();
        }
      }, _callee39, null, [[0, 11]]);
    }));
    return function (_x63, _x64) {
      return _ref39.apply(this, arguments);
    };
  }());
};
var SendRemedy = function SendRemedy(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref40 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40(resolve, reject) {
      var res;
      return _regeneratorRuntime().wrap(function _callee40$(_context40) {
        while (1) switch (_context40.prev = _context40.next) {
          case 0:
            _context40.prev = 0;
            if (data) {
              _context40.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing input required"
            });
            _context40.next = 15;
            break;
          case 5:
            _context40.next = 7;
            return _index["default"].Booking.findOne({
              where: {
                doctorId: data.doctorId,
                patientId: data.patientId,
                timeType: data.timeType,
                statusId: "S2"
              }
            });
          case 7:
            res = _context40.sent;
            if (!res) {
              _context40.next = 15;
              break;
            }
            res.statusId = "S3";
            _context40.next = 12;
            return res.save();
          case 12:
            _context40.next = 14;
            return _emailService["default"].sendEmailAttach(data);
          case 14:
            resolve({
              errCode: 0,
              errMessage: "Complete"
            });
          case 15:
            _context40.next = 20;
            break;
          case 17:
            _context40.prev = 17;
            _context40.t0 = _context40["catch"](0);
            reject(_context40.t0);
          case 20:
          case "end":
            return _context40.stop();
        }
      }, _callee40, null, [[0, 17]]);
    }));
    return function (_x65, _x66) {
      return _ref40.apply(this, arguments);
    };
  }());
};
module.exports = {
  handleUserLogin: handleUserLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser: handleCreateNewUser,
  handleUpdateAUser: handleUpdateAUser,
  handleDeleteAUser: handleDeleteAUser,
  getAllCodeService: getAllCodeService,
  getDoctor: getDoctor,
  getAllDoctor: getAllDoctor,
  saveInfoDoctor: saveInfoDoctor,
  getDetailDoctor: getDetailDoctor,
  saveSchedule: saveSchedule,
  getAllScheduleByDay: getAllScheduleByDay,
  CreateNewSpecialty: CreateNewSpecialty,
  GetAllSpecialty: GetAllSpecialty,
  GetAllDoctorBySpecialty: GetAllDoctorBySpecialty,
  GetDetailSpecialty: GetDetailSpecialty,
  GetDoctorByProvince: GetDoctorByProvince,
  CreateNewClinic: CreateNewClinic,
  GetAllClinic: GetAllClinic,
  GetAllDoctorByClinic: GetAllDoctorByClinic,
  GetDetailClinic: GetDetailClinic,
  SendRemedy: SendRemedy
};