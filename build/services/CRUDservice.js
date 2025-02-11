"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _bodyParser = require("body-parser");
var _axios = _interopRequireDefault(require("axios"));
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator["return"] &&
          ((r.method = "return"),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method"
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type)
      return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction"
    )),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          "next" === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
require("dotenv").config();
var saltRounds = 10;
var salt = _bcryptjs["default"].genSaltSync(saltRounds);
var publicKey = process.env.publicKey;
var privateKey = process.env.privateKey;
var ts = Date.now().toString();
var hash = _cryptoJs["default"].MD5(ts + privateKey + publicKey).toString();
var params = {
  ts: ts,
  apikey: publicKey,
  hash: hash,
  limit: 1,
};
var hashUserPassword = function hashUserPassword(password) {
  return new Promise(
    /*#__PURE__*/ (function () {
      var _ref = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(
          resolve,
          reject
        ) {
          var _hash;
          return _regeneratorRuntime().wrap(
            function _callee$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _bcryptjs["default"].hashSync(password, salt);
                  case 3:
                    _hash = _context.sent;
                    resolve(_hash);
                    _context.next = 10;
                    break;
                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    reject(_context.t0);
                  case 10:
                  case "end":
                    return _context.stop();
                }
            },
            _callee,
            null,
            [[0, 7]]
          );
        })
      );
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    })()
  );
};
var comparePassword = function comparePassword(password, hashPassword) {
  return new Promise(
    /*#__PURE__*/ (function () {
      var _ref2 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(
          resolve,
          reject
        ) {
          var result;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1)
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  try {
                    result = _bcryptjs["default"].compareSync(
                      password,
                      hashPassword
                    );
                    resolve(result);
                  } catch (error) {
                    reject(error);
                  }
                case 1:
                case "end":
                  return _context2.stop();
              }
          }, _callee2);
        })
      );
      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    })()
  );
};
var createNewUser = /*#__PURE__*/ (function () {
  var _ref3 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(data) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1)
          switch ((_context4.prev = _context4.next)) {
            case 0:
              return _context4.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref4 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee3(resolve, reject) {
                          var hashPassword, user;
                          return _regeneratorRuntime().wrap(
                            function _callee3$(_context3) {
                              while (1)
                                switch ((_context3.prev = _context3.next)) {
                                  case 0:
                                    _context3.prev = 0;
                                    if (!data) {
                                      reject("User info is required");
                                    }
                                    _context3.next = 4;
                                    return hashUserPassword(data.password);
                                  case 4:
                                    hashPassword = _context3.sent;
                                    _context3.next = 7;
                                    return _index["default"].User.create({
                                      email: data.email,
                                      password: hashPassword,
                                      firstName: data.firstName,
                                      lastName: data.lastName,
                                      address: data.address,
                                      phoneNumber: data.phoneNumber,
                                      gender:
                                        data.gender === "1" ? true : false,
                                      roleId: data.roleId,
                                    });
                                  case 7:
                                    user = _context3.sent;
                                    if (!user) {
                                      reject("Error when creating user");
                                    } else {
                                      resolve("user created");
                                    }
                                    _context3.next = 14;
                                    break;
                                  case 11:
                                    _context3.prev = 11;
                                    _context3.t0 = _context3["catch"](0);
                                    reject(_context3.t0);
                                  case 14:
                                  case "end":
                                    return _context3.stop();
                                }
                            },
                            _callee3,
                            null,
                            [[0, 11]]
                          );
                        }
                      )
                    );
                    return function (_x6, _x7) {
                      return _ref4.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context4.stop();
          }
      }, _callee4);
    })
  );
  return function createNewUser(_x5) {
    return _ref3.apply(this, arguments);
  };
})();
var getAllUsers = /*#__PURE__*/ (function () {
  var _ref5 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1)
          switch ((_context6.prev = _context6.next)) {
            case 0:
              return _context6.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref6 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee5(resolve, reject) {
                          var users;
                          return _regeneratorRuntime().wrap(
                            function _callee5$(_context5) {
                              while (1)
                                switch ((_context5.prev = _context5.next)) {
                                  case 0:
                                    _context5.prev = 0;
                                    _context5.next = 3;
                                    return _index["default"].User.findAll({
                                      raw: true,
                                    });
                                  case 3:
                                    users = _context5.sent;
                                    if (!users) {
                                      reject("Error when getting all users");
                                    } else {
                                      resolve(users);
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
                            },
                            _callee5,
                            null,
                            [[0, 7]]
                          );
                        }
                      )
                    );
                    return function (_x8, _x9) {
                      return _ref6.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context6.stop();
          }
      }, _callee6);
    })
  );
  return function getAllUsers() {
    return _ref5.apply(this, arguments);
  };
})();
var getInfoUserById = /*#__PURE__*/ (function () {
  var _ref7 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8(userId) {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1)
          switch ((_context8.prev = _context8.next)) {
            case 0:
              return _context8.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref8 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee7(resolve, reject) {
                          var user;
                          return _regeneratorRuntime().wrap(
                            function _callee7$(_context7) {
                              while (1)
                                switch ((_context7.prev = _context7.next)) {
                                  case 0:
                                    _context7.prev = 0;
                                    if (!userId) {
                                      reject("User id is required");
                                    }
                                    _context7.next = 4;
                                    return _index["default"].User.findOne({
                                      where: {
                                        id: userId,
                                      },
                                      raw: true,
                                    });
                                  case 4:
                                    user = _context7.sent;
                                    if (!user) {
                                      reject("User not found");
                                    } else {
                                      resolve(user);
                                    }
                                    _context7.next = 11;
                                    break;
                                  case 8:
                                    _context7.prev = 8;
                                    _context7.t0 = _context7["catch"](0);
                                    reject(_context7.t0);
                                  case 11:
                                  case "end":
                                    return _context7.stop();
                                }
                            },
                            _callee7,
                            null,
                            [[0, 8]]
                          );
                        }
                      )
                    );
                    return function (_x11, _x12) {
                      return _ref8.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context8.stop();
          }
      }, _callee8);
    })
  );
  return function getInfoUserById(_x10) {
    return _ref7.apply(this, arguments);
  };
})();
var updateUserData = /*#__PURE__*/ (function () {
  var _ref9 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee10(data) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1)
          switch ((_context10.prev = _context10.next)) {
            case 0:
              return _context10.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref10 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee9(resolve, reject) {
                          var user, listUser;
                          return _regeneratorRuntime().wrap(
                            function _callee9$(_context9) {
                              while (1)
                                switch ((_context9.prev = _context9.next)) {
                                  case 0:
                                    _context9.prev = 0;
                                    if (!data.id) {
                                      reject("User id is required");
                                    }
                                    _context9.next = 4;
                                    return _index["default"].User.findOne({
                                      where: {
                                        id: data.id,
                                      },
                                    });
                                  case 4:
                                    user = _context9.sent;
                                    if (!user) {
                                      reject("User not found");
                                    }
                                    user.firstName = data.firstName;
                                    user.lastName = data.lastName;
                                    user.address = data.address;
                                    user.phoneNumber = data.phoneNumber;
                                    _context9.next = 12;
                                    return user.save();
                                  case 12:
                                    _context9.next = 14;
                                    return _index["default"].User.findAll({
                                      raw: true,
                                    });
                                  case 14:
                                    listUser = _context9.sent;
                                    resolve(listUser);
                                    _context9.next = 21;
                                    break;
                                  case 18:
                                    _context9.prev = 18;
                                    _context9.t0 = _context9["catch"](0);
                                    reject(_context9.t0);
                                  case 21:
                                  case "end":
                                    return _context9.stop();
                                }
                            },
                            _callee9,
                            null,
                            [[0, 18]]
                          );
                        }
                      )
                    );
                    return function (_x14, _x15) {
                      return _ref10.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context10.stop();
          }
      }, _callee10);
    })
  );
  return function updateUserData(_x13) {
    return _ref9.apply(this, arguments);
  };
})();
var deleteUserById = /*#__PURE__*/ (function () {
  var _ref11 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee12(userId) {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1)
          switch ((_context12.prev = _context12.next)) {
            case 0:
              return _context12.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref12 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee11(resolve, reject) {
                          var user, listUser;
                          return _regeneratorRuntime().wrap(
                            function _callee11$(_context11) {
                              while (1)
                                switch ((_context11.prev = _context11.next)) {
                                  case 0:
                                    _context11.prev = 0;
                                    if (!userId) {
                                      reject("User id is required");
                                    }
                                    _context11.next = 4;
                                    return _index["default"].User.findOne({
                                      where: {
                                        id: userId,
                                      },
                                    });
                                  case 4:
                                    user = _context11.sent;
                                    if (!user) {
                                      reject("User not found");
                                    }
                                    _context11.next = 8;
                                    return user.destroy();
                                  case 8:
                                    _context11.next = 10;
                                    return _index["default"].User.findAll({
                                      raw: true,
                                    });
                                  case 10:
                                    listUser = _context11.sent;
                                    resolve(listUser);
                                    _context11.next = 17;
                                    break;
                                  case 14:
                                    _context11.prev = 14;
                                    _context11.t0 = _context11["catch"](0);
                                    reject(_context11.t0);
                                  case 17:
                                  case "end":
                                    return _context11.stop();
                                }
                            },
                            _callee11,
                            null,
                            [[0, 14]]
                          );
                        }
                      )
                    );
                    return function (_x17, _x18) {
                      return _ref12.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context12.stop();
          }
      }, _callee12);
    })
  );
  return function deleteUserById(_x16) {
    return _ref11.apply(this, arguments);
  };
})();
var getInformation = /*#__PURE__*/ (function () {
  var _ref13 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee14() {
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1)
          switch ((_context14.prev = _context14.next)) {
            case 0:
              return _context14.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref14 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee13(resolve, reject) {
                          var response;
                          return _regeneratorRuntime().wrap(
                            function _callee13$(_context13) {
                              while (1)
                                switch ((_context13.prev = _context13.next)) {
                                  case 0:
                                    _context13.prev = 0;
                                    _context13.next = 3;
                                    return _axios["default"]
                                      .get(
                                        "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Dark Magician"
                                      )
                                      .then(function (response) {
                                        resolve(response.data);
                                      });
                                  case 3:
                                    response = _context13.sent;
                                    _context13.next = 9;
                                    break;
                                  case 6:
                                    _context13.prev = 6;
                                    _context13.t0 = _context13["catch"](0);
                                    console.error("Lỗi:", _context13.t0);
                                  case 9:
                                  case "end":
                                    return _context13.stop();
                                }
                            },
                            _callee13,
                            null,
                            [[0, 6]]
                          );
                        }
                      )
                    );
                    return function (_x19, _x20) {
                      return _ref14.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context14.stop();
          }
      }, _callee14);
    })
  );
  return function getInformation() {
    return _ref13.apply(this, arguments);
  };
})();
var getInformationSearch = /*#__PURE__*/ (function () {
  var _ref15 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee16(data) {
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1)
          switch ((_context16.prev = _context16.next)) {
            case 0:
              return _context16.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref16 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee15(resolve, reject) {
                          var response;
                          return _regeneratorRuntime().wrap(
                            function _callee15$(_context15) {
                              while (1)
                                switch ((_context15.prev = _context15.next)) {
                                  case 0:
                                    _context15.prev = 0;
                                    // https://db.ygoprodeck.com/api/v7/cardsets.php
                                    // https://db.ygoprodeck.com/api/v7/archetypes.php
                                    // https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Dark Magician
                                    console.log("data", data);
                                    _context15.next = 4;
                                    return _axios["default"]
                                      .get(
                                        "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=".concat(
                                          data
                                        )
                                      )
                                      .then(function (response) {
                                        resolve(response.data);
                                      });
                                  case 4:
                                    response = _context15.sent;
                                    _context15.next = 10;
                                    break;
                                  case 7:
                                    _context15.prev = 7;
                                    _context15.t0 = _context15["catch"](0);
                                    console.error("Lỗi:", _context15.t0);
                                  case 10:
                                  case "end":
                                    return _context15.stop();
                                }
                            },
                            _callee15,
                            null,
                            [[0, 7]]
                          );
                        }
                      )
                    );
                    return function (_x22, _x23) {
                      return _ref16.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context16.stop();
          }
      }, _callee16);
    })
  );
  return function getInformationSearch(_x21) {
    return _ref15.apply(this, arguments);
  };
})();
var getInformationById = /*#__PURE__*/ (function () {
  var _ref17 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee18(data) {
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1)
          switch ((_context18.prev = _context18.next)) {
            case 0:
              return _context18.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref18 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee17(resolve, reject) {
                          var response;
                          return _regeneratorRuntime().wrap(
                            function _callee17$(_context17) {
                              while (1)
                                switch ((_context17.prev = _context17.next)) {
                                  case 0:
                                    _context17.prev = 0;
                                    // https://db.ygoprodeck.com/api/v7/cardsets.php
                                    // https://db.ygoprodeck.com/api/v7/archetypes.php
                                    // https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Dark Magician
                                    console.log("data", data);
                                    _context17.next = 4;
                                    return _axios["default"]
                                      .get(
                                        "https://db.ygoprodeck.com/api/v7/cardinfo.php?id=".concat(
                                          data
                                        )
                                      )
                                      .then(function (response) {
                                        resolve(response.data);
                                      });
                                  case 4:
                                    response = _context17.sent;
                                    _context17.next = 10;
                                    break;
                                  case 7:
                                    _context17.prev = 7;
                                    _context17.t0 = _context17["catch"](0);
                                    console.error("Lỗi:", _context17.t0);
                                  case 10:
                                  case "end":
                                    return _context17.stop();
                                }
                            },
                            _callee17,
                            null,
                            [[0, 7]]
                          );
                        }
                      )
                    );
                    return function (_x25, _x26) {
                      return _ref18.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context18.stop();
          }
      }, _callee18);
    })
  );
  return function getInformationById(_x24) {
    return _ref17.apply(this, arguments);
  };
})();
var getCharacterMarvel = /*#__PURE__*/ (function () {
  var _ref19 = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee20() {
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1)
          switch ((_context20.prev = _context20.next)) {
            case 0:
              return _context20.abrupt(
                "return",
                new Promise(
                  /*#__PURE__*/ (function () {
                    var _ref20 = _asyncToGenerator(
                      /*#__PURE__*/ _regeneratorRuntime().mark(
                        function _callee19(resolve, reject) {
                          return _regeneratorRuntime().wrap(function _callee19$(
                            _context19
                          ) {
                            while (1)
                              switch ((_context19.prev = _context19.next)) {
                                case 0:
                                  _axios["default"]
                                    .get(
                                      "https://gateway.marvel.com/v1/public/characters",
                                      {
                                        params: params,
                                      }
                                    )
                                    .then(function (response) {
                                      // console.log("res", response.data.data);
                                      //   id: 1011334,
                                      // name: '3-D Man',
                                      // description: '',
                                      // modified: '2014-04-29T14:18:17-0400',
                                      // thumbnail: [Object],
                                      // resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
                                      // comics: [Object],
                                      // series: [Object],
                                      // stories: [Object],
                                      // events: [Object],
                                      // urls: [Array]
                                      var characters =
                                        response.data.data.results;

                                      if (characters && characters.length > 0) {
                                        resolve(characters);
                                      }
                                      // characters.map((item, index) => {
                                      //   console.log("Character:", item.id);
                                      //   console.log("Character:", item.name);
                                      // });
                                    })
                                    ["catch"](function (error) {
                                      return console.error("Error:", error);
                                    });
                                case 1:
                                case "end":
                                  return _context19.stop();
                              }
                          },
                          _callee19);
                        }
                      )
                    );
                    return function (_x27, _x28) {
                      return _ref20.apply(this, arguments);
                    };
                  })()
                )
              );
            case 1:
            case "end":
              return _context20.stop();
          }
      }, _callee20);
    })
  );
  return function getCharacterMarvel() {
    return _ref19.apply(this, arguments);
  };
})();
module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
  updateUserData: updateUserData,
  getInfoUserById: getInfoUserById,
  deleteUserById: deleteUserById,
  getInformation: getInformation,
  getInformationSearch: getInformationSearch,
  getInformationById: getInformationById,
  getCharacterMarvel: getCharacterMarvel,
};
