(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target2) => (target2 = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target2, "default", { value: mod, enumerable: true }) : target2, mod));
  var __decorateClass = (decorators, target2, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target2, key) : target2;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target2, key, result);
    return result;
  };

  // node_modules/@esbuild-plugins/node-globals-polyfill/_virtual-process-polyfill_.js
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e2) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker2) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker2);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker2);
    }
    try {
      return cachedClearTimeout(marker2);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker2);
      } catch (e2) {
        return cachedClearTimeout.call(this, marker2);
      }
    }
  }
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        args[i2 - 1] = arguments[i2];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  }
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  function noop() {
  }
  function binding(name) {
    throw new Error("process.binding is not supported");
  }
  function cwd() {
    return "/";
  }
  function chdir(dir) {
    throw new Error("process.chdir is not supported");
  }
  function umask() {
    return 0;
  }
  function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds, nanoseconds];
  }
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1e3;
  }
  var cachedSetTimeout, cachedClearTimeout, queue, draining, currentQueue, queueIndex, title, platform, browser, env, argv, version, versions, release, config, on, addListener, once, off, removeListener, removeAllListeners, emit, performance, performanceNow, startTime, process, defines;
  var init_virtual_process_polyfill = __esm({
    "node_modules/@esbuild-plugins/node-globals-polyfill/_virtual-process-polyfill_.js"() {
      cachedSetTimeout = defaultSetTimout;
      cachedClearTimeout = defaultClearTimeout;
      if (typeof globalThis.setTimeout === "function") {
        cachedSetTimeout = setTimeout;
      }
      if (typeof globalThis.clearTimeout === "function") {
        cachedClearTimeout = clearTimeout;
      }
      queue = [];
      draining = false;
      queueIndex = -1;
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      title = "browser";
      platform = "browser";
      browser = true;
      env = {};
      argv = [];
      version = "";
      versions = {};
      release = {};
      config = {};
      on = noop;
      addListener = noop;
      once = noop;
      off = noop;
      removeListener = noop;
      removeAllListeners = noop;
      emit = noop;
      performance = globalThis.performance || {};
      performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
        return new Date().getTime();
      };
      startTime = new Date();
      process = {
        nextTick,
        title,
        browser,
        env,
        argv,
        version,
        versions,
        on,
        addListener,
        once,
        off,
        removeListener,
        removeAllListeners,
        emit,
        binding,
        cwd,
        chdir,
        umask,
        hrtime,
        platform,
        release,
        config,
        uptime
      };
      defines = {};
      Object.keys(defines).forEach((key) => {
        const segs = key.split(".");
        let target2 = process;
        for (let i2 = 0; i2 < segs.length; i2++) {
          const seg = segs[i2];
          if (i2 === segs.length - 1) {
            target2[seg] = defines[key];
          } else {
            target2 = target2[seg] || (target2[seg] = {});
          }
        }
      });
    }
  });

  // node_modules/@microsoft/fast-foundation/node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/@microsoft/fast-foundation/node_modules/tslib/tslib.js"(exports, module) {
      init_virtual_process_polyfill();
      var __extends3;
      var __assign3;
      var __rest3;
      var __decorate3;
      var __param3;
      var __metadata3;
      var __awaiter3;
      var __generator3;
      var __exportStar3;
      var __values3;
      var __read3;
      var __spread3;
      var __spreadArrays3;
      var __await3;
      var __asyncGenerator3;
      var __asyncDelegator3;
      var __asyncValues3;
      var __makeTemplateObject3;
      var __importStar3;
      var __importDefault3;
      var __classPrivateFieldGet3;
      var __classPrivateFieldSet3;
      var __createBinding3;
      (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v2) {
            return exports2[id] = previous ? previous(id, v2) : v2;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p2 in b2)
            if (b2.hasOwnProperty(p2))
              d2[p2] = b2[p2];
        };
        __extends3 = function(d2, b2) {
          extendStatics(d2, b2);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
        };
        __assign3 = Object.assign || function(t2) {
          for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
            s2 = arguments[i2];
            for (var p2 in s2)
              if (Object.prototype.hasOwnProperty.call(s2, p2))
                t2[p2] = s2[p2];
          }
          return t2;
        };
        __rest3 = function(s2, e) {
          var t2 = {};
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
              t2[p2] = s2[p2];
          if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
              if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
                t2[p2[i2]] = s2[p2[i2]];
            }
          return t2;
        };
        __decorate3 = function(decorators, target2, key, desc) {
          var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r2 = Reflect.decorate(decorators, target2, key, desc);
          else
            for (var i2 = decorators.length - 1; i2 >= 0; i2--)
              if (d2 = decorators[i2])
                r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
          return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
        };
        __param3 = function(paramIndex, decorator) {
          return function(target2, key) {
            decorator(target2, key, paramIndex);
          };
        };
        __metadata3 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter3 = function(thisArg, _arguments, P2, generator) {
          function adopt(value) {
            return value instanceof P2 ? value : new P2(function(resolve) {
              resolve(value);
            });
          }
          return new (P2 || (P2 = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator3 = function(thisArg, body) {
          var _2 = { label: 0, sent: function() {
            if (t2[0] & 1)
              throw t2[1];
            return t2[1];
          }, trys: [], ops: [] }, f2, y2, t2, g2;
          return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
            return this;
          }), g2;
          function verb(n2) {
            return function(v2) {
              return step([n2, v2]);
            };
          }
          function step(op) {
            if (f2)
              throw new TypeError("Generator is already executing.");
            while (_2)
              try {
                if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                  return t2;
                if (y2 = 0, t2)
                  op = [op[0] & 2, t2.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t2 = op;
                    break;
                  case 4:
                    _2.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _2.label++;
                    y2 = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _2.ops.pop();
                    _2.trys.pop();
                    continue;
                  default:
                    if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _2 = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                      _2.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _2.label < t2[1]) {
                      _2.label = t2[1];
                      t2 = op;
                      break;
                    }
                    if (t2 && _2.label < t2[2]) {
                      _2.label = t2[2];
                      _2.ops.push(op);
                      break;
                    }
                    if (t2[2])
                      _2.ops.pop();
                    _2.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _2);
              } catch (e) {
                op = [6, e];
                y2 = 0;
              } finally {
                f2 = t2 = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __createBinding3 = function(o2, m, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          o2[k22] = m[k2];
        };
        __exportStar3 = function(m, exports2) {
          for (var p2 in m)
            if (p2 !== "default" && !exports2.hasOwnProperty(p2))
              exports2[p2] = m[p2];
        };
        __values3 = function(o2) {
          var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o2[s2], i2 = 0;
          if (m)
            return m.call(o2);
          if (o2 && typeof o2.length === "number")
            return {
              next: function() {
                if (o2 && i2 >= o2.length)
                  o2 = void 0;
                return { value: o2 && o2[i2++], done: !o2 };
              }
            };
          throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read3 = function(o2, n2) {
          var m = typeof Symbol === "function" && o2[Symbol.iterator];
          if (!m)
            return o2;
          var i2 = m.call(o2), r2, ar = [], e;
          try {
            while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
              ar.push(r2.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r2 && !r2.done && (m = i2["return"]))
                m.call(i2);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread3 = function() {
          for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
            ar = ar.concat(__read3(arguments[i2]));
          return ar;
        };
        __spreadArrays3 = function() {
          for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
            s2 += arguments[i2].length;
          for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
            for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
              r2[k2] = a2[j2];
          return r2;
        };
        __await3 = function(v2) {
          return this instanceof __await3 ? (this.v = v2, this) : new __await3(v2);
        };
        __asyncGenerator3 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
          return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2;
          function verb(n2) {
            if (g2[n2])
              i2[n2] = function(v2) {
                return new Promise(function(a2, b2) {
                  q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
                });
              };
          }
          function resume(n2, v2) {
            try {
              step(g2[n2](v2));
            } catch (e) {
              settle(q2[0][3], e);
            }
          }
          function step(r2) {
            r2.value instanceof __await3 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f2, v2) {
            if (f2(v2), q2.shift(), q2.length)
              resume(q2[0][0], q2[0][1]);
          }
        };
        __asyncDelegator3 = function(o2) {
          var i2, p2;
          return i2 = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i2[Symbol.iterator] = function() {
            return this;
          }, i2;
          function verb(n2, f2) {
            i2[n2] = o2[n2] ? function(v2) {
              return (p2 = !p2) ? { value: __await3(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
            } : f2;
          }
        };
        __asyncValues3 = function(o2) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o2[Symbol.asyncIterator], i2;
          return m ? m.call(o2) : (o2 = typeof __values3 === "function" ? __values3(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2);
          function verb(n2) {
            i2[n2] = o2[n2] && function(v2) {
              return new Promise(function(resolve, reject) {
                v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
              });
            };
          }
          function settle(resolve, reject, d2, v2) {
            Promise.resolve(v2).then(function(v3) {
              resolve({ value: v3, done: d2 });
            }, reject);
          }
        };
        __makeTemplateObject3 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        __importStar3 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k2 in mod)
              if (Object.hasOwnProperty.call(mod, k2))
                result[k2] = mod[k2];
          }
          result["default"] = mod;
          return result;
        };
        __importDefault3 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet3 = function(receiver, privateMap) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
          }
          return privateMap.get(receiver);
        };
        __classPrivateFieldSet3 = function(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
          }
          privateMap.set(receiver, value);
          return value;
        };
        exporter("__extends", __extends3);
        exporter("__assign", __assign3);
        exporter("__rest", __rest3);
        exporter("__decorate", __decorate3);
        exporter("__param", __param3);
        exporter("__metadata", __metadata3);
        exporter("__awaiter", __awaiter3);
        exporter("__generator", __generator3);
        exporter("__exportStar", __exportStar3);
        exporter("__createBinding", __createBinding3);
        exporter("__values", __values3);
        exporter("__read", __read3);
        exporter("__spread", __spread3);
        exporter("__spreadArrays", __spreadArrays3);
        exporter("__await", __await3);
        exporter("__asyncGenerator", __asyncGenerator3);
        exporter("__asyncDelegator", __asyncDelegator3);
        exporter("__asyncValues", __asyncValues3);
        exporter("__makeTemplateObject", __makeTemplateObject3);
        exporter("__importStar", __importStar3);
        exporter("__importDefault", __importDefault3);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
      });
    }
  });

  // node_modules/@microsoft/fast-components/node_modules/tslib/tslib.js
  var require_tslib2 = __commonJS({
    "node_modules/@microsoft/fast-components/node_modules/tslib/tslib.js"(exports, module) {
      init_virtual_process_polyfill();
      var __extends3;
      var __assign3;
      var __rest3;
      var __decorate3;
      var __param3;
      var __metadata3;
      var __awaiter3;
      var __generator3;
      var __exportStar3;
      var __values3;
      var __read3;
      var __spread3;
      var __spreadArrays3;
      var __await3;
      var __asyncGenerator3;
      var __asyncDelegator3;
      var __asyncValues3;
      var __makeTemplateObject3;
      var __importStar3;
      var __importDefault3;
      var __classPrivateFieldGet3;
      var __classPrivateFieldSet3;
      var __createBinding3;
      (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v2) {
            return exports2[id] = previous ? previous(id, v2) : v2;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p2 in b2)
            if (b2.hasOwnProperty(p2))
              d2[p2] = b2[p2];
        };
        __extends3 = function(d2, b2) {
          extendStatics(d2, b2);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
        };
        __assign3 = Object.assign || function(t2) {
          for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
            s2 = arguments[i2];
            for (var p2 in s2)
              if (Object.prototype.hasOwnProperty.call(s2, p2))
                t2[p2] = s2[p2];
          }
          return t2;
        };
        __rest3 = function(s2, e) {
          var t2 = {};
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
              t2[p2] = s2[p2];
          if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
              if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
                t2[p2[i2]] = s2[p2[i2]];
            }
          return t2;
        };
        __decorate3 = function(decorators, target2, key, desc) {
          var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r2 = Reflect.decorate(decorators, target2, key, desc);
          else
            for (var i2 = decorators.length - 1; i2 >= 0; i2--)
              if (d2 = decorators[i2])
                r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
          return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
        };
        __param3 = function(paramIndex, decorator) {
          return function(target2, key) {
            decorator(target2, key, paramIndex);
          };
        };
        __metadata3 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter3 = function(thisArg, _arguments, P2, generator) {
          function adopt(value) {
            return value instanceof P2 ? value : new P2(function(resolve) {
              resolve(value);
            });
          }
          return new (P2 || (P2 = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator3 = function(thisArg, body) {
          var _2 = { label: 0, sent: function() {
            if (t2[0] & 1)
              throw t2[1];
            return t2[1];
          }, trys: [], ops: [] }, f2, y2, t2, g2;
          return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
            return this;
          }), g2;
          function verb(n2) {
            return function(v2) {
              return step([n2, v2]);
            };
          }
          function step(op) {
            if (f2)
              throw new TypeError("Generator is already executing.");
            while (_2)
              try {
                if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
                  return t2;
                if (y2 = 0, t2)
                  op = [op[0] & 2, t2.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t2 = op;
                    break;
                  case 4:
                    _2.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _2.label++;
                    y2 = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _2.ops.pop();
                    _2.trys.pop();
                    continue;
                  default:
                    if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _2 = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                      _2.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _2.label < t2[1]) {
                      _2.label = t2[1];
                      t2 = op;
                      break;
                    }
                    if (t2 && _2.label < t2[2]) {
                      _2.label = t2[2];
                      _2.ops.push(op);
                      break;
                    }
                    if (t2[2])
                      _2.ops.pop();
                    _2.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _2);
              } catch (e) {
                op = [6, e];
                y2 = 0;
              } finally {
                f2 = t2 = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __createBinding3 = function(o2, m, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          o2[k22] = m[k2];
        };
        __exportStar3 = function(m, exports2) {
          for (var p2 in m)
            if (p2 !== "default" && !exports2.hasOwnProperty(p2))
              exports2[p2] = m[p2];
        };
        __values3 = function(o2) {
          var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o2[s2], i2 = 0;
          if (m)
            return m.call(o2);
          if (o2 && typeof o2.length === "number")
            return {
              next: function() {
                if (o2 && i2 >= o2.length)
                  o2 = void 0;
                return { value: o2 && o2[i2++], done: !o2 };
              }
            };
          throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read3 = function(o2, n2) {
          var m = typeof Symbol === "function" && o2[Symbol.iterator];
          if (!m)
            return o2;
          var i2 = m.call(o2), r2, ar = [], e;
          try {
            while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
              ar.push(r2.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r2 && !r2.done && (m = i2["return"]))
                m.call(i2);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread3 = function() {
          for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
            ar = ar.concat(__read3(arguments[i2]));
          return ar;
        };
        __spreadArrays3 = function() {
          for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
            s2 += arguments[i2].length;
          for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
            for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
              r2[k2] = a2[j2];
          return r2;
        };
        __await3 = function(v2) {
          return this instanceof __await3 ? (this.v = v2, this) : new __await3(v2);
        };
        __asyncGenerator3 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
          return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2;
          function verb(n2) {
            if (g2[n2])
              i2[n2] = function(v2) {
                return new Promise(function(a2, b2) {
                  q2.push([n2, v2, a2, b2]) > 1 || resume(n2, v2);
                });
              };
          }
          function resume(n2, v2) {
            try {
              step(g2[n2](v2));
            } catch (e) {
              settle(q2[0][3], e);
            }
          }
          function step(r2) {
            r2.value instanceof __await3 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f2, v2) {
            if (f2(v2), q2.shift(), q2.length)
              resume(q2[0][0], q2[0][1]);
          }
        };
        __asyncDelegator3 = function(o2) {
          var i2, p2;
          return i2 = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i2[Symbol.iterator] = function() {
            return this;
          }, i2;
          function verb(n2, f2) {
            i2[n2] = o2[n2] ? function(v2) {
              return (p2 = !p2) ? { value: __await3(o2[n2](v2)), done: n2 === "return" } : f2 ? f2(v2) : v2;
            } : f2;
          }
        };
        __asyncValues3 = function(o2) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o2[Symbol.asyncIterator], i2;
          return m ? m.call(o2) : (o2 = typeof __values3 === "function" ? __values3(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2);
          function verb(n2) {
            i2[n2] = o2[n2] && function(v2) {
              return new Promise(function(resolve, reject) {
                v2 = o2[n2](v2), settle(resolve, reject, v2.done, v2.value);
              });
            };
          }
          function settle(resolve, reject, d2, v2) {
            Promise.resolve(v2).then(function(v3) {
              resolve({ value: v3, done: d2 });
            }, reject);
          }
        };
        __makeTemplateObject3 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        __importStar3 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k2 in mod)
              if (Object.hasOwnProperty.call(mod, k2))
                result[k2] = mod[k2];
          }
          result["default"] = mod;
          return result;
        };
        __importDefault3 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet3 = function(receiver, privateMap) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
          }
          return privateMap.get(receiver);
        };
        __classPrivateFieldSet3 = function(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
          }
          privateMap.set(receiver, value);
          return value;
        };
        exporter("__extends", __extends3);
        exporter("__assign", __assign3);
        exporter("__rest", __rest3);
        exporter("__decorate", __decorate3);
        exporter("__param", __param3);
        exporter("__metadata", __metadata3);
        exporter("__awaiter", __awaiter3);
        exporter("__generator", __generator3);
        exporter("__exportStar", __exportStar3);
        exporter("__createBinding", __createBinding3);
        exporter("__values", __values3);
        exporter("__read", __read3);
        exporter("__spread", __spread3);
        exporter("__spreadArrays", __spreadArrays3);
        exporter("__await", __await3);
        exporter("__asyncGenerator", __asyncGenerator3);
        exporter("__asyncDelegator", __asyncDelegator3);
        exporter("__asyncValues", __asyncValues3);
        exporter("__makeTemplateObject", __makeTemplateObject3);
        exporter("__importStar", __importStar3);
        exporter("__importDefault", __importDefault3);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
      });
    }
  });

  // src/index.ts
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-components/dist/esm/custom-elements.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-foundation/dist/esm/index.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/index.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/platform.js
  init_virtual_process_polyfill();
  var $global = function() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    try {
      return new Function("return this")();
    } catch (_a) {
      return {};
    }
  }();
  if ($global.trustedTypes === void 0) {
    $global.trustedTypes = { createPolicy: (n2, r2) => r2 };
  }
  var propConfig = {
    configurable: false,
    enumerable: false,
    writable: false
  };
  if ($global.FAST === void 0) {
    Reflect.defineProperty($global, "FAST", Object.assign({ value: /* @__PURE__ */ Object.create(null) }, propConfig));
  }
  var FAST = $global.FAST;
  if (FAST.getById === void 0) {
    const storage = /* @__PURE__ */ Object.create(null);
    Reflect.defineProperty(FAST, "getById", Object.assign({ value(id, initialize) {
      let found = storage[id];
      if (found === void 0) {
        found = initialize ? storage[id] = initialize() : null;
      }
      return found;
    } }, propConfig));
  }
  var emptyArray = Object.freeze([]);

  // node_modules/@microsoft/fast-element/dist/esm/templating/template.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/dom.js
  init_virtual_process_polyfill();
  var updateQueue = $global.FAST.getById(1, () => {
    const tasks = [];
    const pendingErrors = [];
    function throwFirstError() {
      if (pendingErrors.length) {
        throw pendingErrors.shift();
      }
    }
    function tryRunTask(task) {
      try {
        task.call();
      } catch (error) {
        pendingErrors.push(error);
        setTimeout(throwFirstError, 0);
      }
    }
    function process2() {
      const capacity = 1024;
      let index = 0;
      while (index < tasks.length) {
        tryRunTask(tasks[index]);
        index++;
        if (index > capacity) {
          for (let scan = 0, newLength = tasks.length - index; scan < newLength; scan++) {
            tasks[scan] = tasks[scan + index];
          }
          tasks.length -= index;
          index = 0;
        }
      }
      tasks.length = 0;
    }
    function enqueue(callable) {
      if (tasks.length < 1) {
        $global.requestAnimationFrame(process2);
      }
      tasks.push(callable);
    }
    return Object.freeze({
      enqueue,
      process: process2
    });
  });
  var fastHTMLPolicy = $global.trustedTypes.createPolicy("fast-html", {
    createHTML: (html2) => html2
  });
  var htmlPolicy = fastHTMLPolicy;
  var marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
  var _interpolationStart = `${marker}{`;
  var _interpolationEnd = `}${marker}`;
  var DOM = Object.freeze({
    supportsAdoptedStyleSheets: Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype,
    setHTMLPolicy(policy) {
      if (htmlPolicy !== fastHTMLPolicy) {
        throw new Error("The HTML policy can only be set once.");
      }
      htmlPolicy = policy;
    },
    createHTML(html2) {
      return htmlPolicy.createHTML(html2);
    },
    isMarker(node) {
      return node && node.nodeType === 8 && node.data.startsWith(marker);
    },
    extractDirectiveIndexFromMarker(node) {
      return parseInt(node.data.replace(`${marker}:`, ""));
    },
    createInterpolationPlaceholder(index) {
      return `${_interpolationStart}${index}${_interpolationEnd}`;
    },
    createCustomAttributePlaceholder(attributeName, index) {
      return `${attributeName}="${this.createInterpolationPlaceholder(index)}"`;
    },
    createBlockPlaceholder(index) {
      return `<!--${marker}:${index}-->`;
    },
    queueUpdate: updateQueue.enqueue,
    processUpdates: updateQueue.process,
    nextUpdate() {
      return new Promise(updateQueue.enqueue);
    },
    setAttribute(element, attributeName, value) {
      if (value === null || value === void 0) {
        element.removeAttribute(attributeName);
      } else {
        element.setAttribute(attributeName, value);
      }
    },
    setBooleanAttribute(element, attributeName, value) {
      value ? element.setAttribute(attributeName, "") : element.removeAttribute(attributeName);
    },
    removeChildNodes(parent) {
      for (let child = parent.firstChild; child !== null; child = parent.firstChild) {
        parent.removeChild(child);
      }
    },
    createTemplateWalker(fragment) {
      return document.createTreeWalker(fragment, 133, null, false);
    }
  });

  // node_modules/@microsoft/fast-element/dist/esm/observation/observable.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/observation/notifier.js
  init_virtual_process_polyfill();
  function spilloverSubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index === -1) {
      spillover.push(subscriber);
    }
  }
  function spilloverUnsubscribe(subscriber) {
    const spillover = this.spillover;
    const index = spillover.indexOf(subscriber);
    if (index !== -1) {
      spillover.splice(index, 1);
    }
  }
  function spilloverNotifySubscribers(args) {
    const spillover = this.spillover;
    const source = this.source;
    for (let i2 = 0, ii = spillover.length; i2 < ii; ++i2) {
      spillover[i2].handleChange(source, args);
    }
  }
  function spilloverHas(subscriber) {
    return this.spillover.indexOf(subscriber) !== -1;
  }
  var SubscriberSet = class {
    constructor(source, initialSubscriber) {
      this.sub1 = void 0;
      this.sub2 = void 0;
      this.spillover = void 0;
      this.source = source;
      this.sub1 = initialSubscriber;
    }
    has(subscriber) {
      return this.sub1 === subscriber || this.sub2 === subscriber;
    }
    subscribe(subscriber) {
      if (this.has(subscriber)) {
        return;
      }
      if (this.sub1 === void 0) {
        this.sub1 = subscriber;
        return;
      }
      if (this.sub2 === void 0) {
        this.sub2 = subscriber;
        return;
      }
      this.spillover = [this.sub1, this.sub2, subscriber];
      this.subscribe = spilloverSubscribe;
      this.unsubscribe = spilloverUnsubscribe;
      this.notify = spilloverNotifySubscribers;
      this.has = spilloverHas;
      this.sub1 = void 0;
      this.sub2 = void 0;
    }
    unsubscribe(subscriber) {
      if (this.sub1 === subscriber) {
        this.sub1 = void 0;
      } else if (this.sub2 === subscriber) {
        this.sub2 = void 0;
      }
    }
    notify(args) {
      const sub1 = this.sub1;
      const sub2 = this.sub2;
      const source = this.source;
      if (sub1 !== void 0) {
        sub1.handleChange(source, args);
      }
      if (sub2 !== void 0) {
        sub2.handleChange(source, args);
      }
    }
  };
  var PropertyChangeNotifier = class {
    constructor(source) {
      this.subscribers = {};
      this.sourceSubscribers = null;
      this.source = source;
    }
    notify(propertyName) {
      var _a;
      const subscribers = this.subscribers[propertyName];
      if (subscribers !== void 0) {
        subscribers.notify(propertyName);
      }
      (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.notify(propertyName);
    }
    subscribe(subscriber, propertyToWatch) {
      var _a;
      if (propertyToWatch) {
        let subscribers = this.subscribers[propertyToWatch];
        if (subscribers === void 0) {
          this.subscribers[propertyToWatch] = subscribers = new SubscriberSet(this.source);
        }
        subscribers.subscribe(subscriber);
      } else {
        this.sourceSubscribers = (_a = this.sourceSubscribers) !== null && _a !== void 0 ? _a : new SubscriberSet(this.source);
        this.sourceSubscribers.subscribe(subscriber);
      }
    }
    unsubscribe(subscriber, propertyToUnwatch) {
      var _a;
      if (propertyToUnwatch) {
        const subscribers = this.subscribers[propertyToUnwatch];
        if (subscribers !== void 0) {
          subscribers.unsubscribe(subscriber);
        }
      } else {
        (_a = this.sourceSubscribers) === null || _a === void 0 ? void 0 : _a.unsubscribe(subscriber);
      }
    }
  };

  // node_modules/@microsoft/fast-element/dist/esm/observation/observable.js
  var Observable = FAST.getById(2, () => {
    const volatileRegex = /(:|&&|\|\||if)/;
    const notifierLookup = /* @__PURE__ */ new WeakMap();
    const accessorLookup = /* @__PURE__ */ new WeakMap();
    const queueUpdate = DOM.queueUpdate;
    let watcher = void 0;
    let createArrayObserver = (array) => {
      throw new Error("Must call enableArrayObservation before observing arrays.");
    };
    function getNotifier(source) {
      let found = source.$fastController || notifierLookup.get(source);
      if (found === void 0) {
        if (Array.isArray(source)) {
          found = createArrayObserver(source);
        } else {
          notifierLookup.set(source, found = new PropertyChangeNotifier(source));
        }
      }
      return found;
    }
    function getAccessors(target2) {
      let accessors = accessorLookup.get(target2);
      if (accessors === void 0) {
        let currentTarget = Reflect.getPrototypeOf(target2);
        while (accessors === void 0 && currentTarget !== null) {
          accessors = accessorLookup.get(currentTarget);
          currentTarget = Reflect.getPrototypeOf(currentTarget);
        }
        if (accessors === void 0) {
          accessors = [];
        } else {
          accessors = accessors.slice(0);
        }
        accessorLookup.set(target2, accessors);
      }
      return accessors;
    }
    class DefaultObservableAccessor {
      constructor(name) {
        this.name = name;
        this.field = `_${name}`;
        this.callback = `${name}Changed`;
      }
      getValue(source) {
        if (watcher !== void 0) {
          watcher.watch(source, this.name);
        }
        return source[this.field];
      }
      setValue(source, newValue) {
        const field = this.field;
        const oldValue = source[field];
        if (oldValue !== newValue) {
          source[field] = newValue;
          const callback = source[this.callback];
          if (typeof callback === "function") {
            callback.call(source, oldValue, newValue);
          }
          getNotifier(source).notify(this.name);
        }
      }
    }
    class BindingObserverImplementation extends SubscriberSet {
      constructor(binding2, initialSubscriber, isVolatileBinding = false) {
        super(binding2, initialSubscriber);
        this.binding = binding2;
        this.isVolatileBinding = isVolatileBinding;
        this.needsRefresh = true;
        this.needsQueue = true;
        this.first = this;
        this.last = null;
        this.propertySource = void 0;
        this.propertyName = void 0;
        this.notifier = void 0;
        this.next = void 0;
      }
      observe(source, context) {
        if (this.needsRefresh && this.last !== null) {
          this.disconnect();
        }
        const previousWatcher = watcher;
        watcher = this.needsRefresh ? this : void 0;
        this.needsRefresh = this.isVolatileBinding;
        const result = this.binding(source, context);
        watcher = previousWatcher;
        return result;
      }
      disconnect() {
        if (this.last !== null) {
          let current = this.first;
          while (current !== void 0) {
            current.notifier.unsubscribe(this, current.propertyName);
            current = current.next;
          }
          this.last = null;
          this.needsRefresh = this.needsQueue = true;
        }
      }
      watch(propertySource, propertyName) {
        const prev = this.last;
        const notifier = getNotifier(propertySource);
        const current = prev === null ? this.first : {};
        current.propertySource = propertySource;
        current.propertyName = propertyName;
        current.notifier = notifier;
        notifier.subscribe(this, propertyName);
        if (prev !== null) {
          if (!this.needsRefresh) {
            let prevValue;
            watcher = void 0;
            prevValue = prev.propertySource[prev.propertyName];
            watcher = this;
            if (propertySource === prevValue) {
              this.needsRefresh = true;
            }
          }
          prev.next = current;
        }
        this.last = current;
      }
      handleChange() {
        if (this.needsQueue) {
          this.needsQueue = false;
          queueUpdate(this);
        }
      }
      call() {
        if (this.last !== null) {
          this.needsQueue = true;
          this.notify(this);
        }
      }
      records() {
        let next = this.first;
        return {
          next: () => {
            const current = next;
            if (current === void 0) {
              return { value: void 0, done: true };
            } else {
              next = next.next;
              return {
                value: current,
                done: false
              };
            }
          },
          [Symbol.iterator]: function() {
            return this;
          }
        };
      }
    }
    return Object.freeze({
      setArrayObserverFactory(factory) {
        createArrayObserver = factory;
      },
      getNotifier,
      track(source, propertyName) {
        if (watcher !== void 0) {
          watcher.watch(source, propertyName);
        }
      },
      trackVolatile() {
        if (watcher !== void 0) {
          watcher.needsRefresh = true;
        }
      },
      notify(source, args) {
        getNotifier(source).notify(args);
      },
      defineProperty(target2, nameOrAccessor) {
        if (typeof nameOrAccessor === "string") {
          nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
        }
        getAccessors(target2).push(nameOrAccessor);
        Reflect.defineProperty(target2, nameOrAccessor.name, {
          enumerable: true,
          get: function() {
            return nameOrAccessor.getValue(this);
          },
          set: function(newValue) {
            nameOrAccessor.setValue(this, newValue);
          }
        });
      },
      getAccessors,
      binding(binding2, initialSubscriber, isVolatileBinding = this.isVolatileBinding(binding2)) {
        return new BindingObserverImplementation(binding2, initialSubscriber, isVolatileBinding);
      },
      isVolatileBinding(binding2) {
        return volatileRegex.test(binding2.toString());
      }
    });
  });
  function observable(target2, nameOrAccessor) {
    Observable.defineProperty(target2, nameOrAccessor);
  }
  var contextEvent = FAST.getById(3, () => {
    let current = null;
    return {
      get() {
        return current;
      },
      set(event) {
        current = event;
      }
    };
  });
  var ExecutionContext = class {
    constructor() {
      this.index = 0;
      this.length = 0;
      this.parent = null;
      this.parentContext = null;
    }
    get event() {
      return contextEvent.get();
    }
    get isEven() {
      return this.index % 2 === 0;
    }
    get isOdd() {
      return this.index % 2 !== 0;
    }
    get isFirst() {
      return this.index === 0;
    }
    get isInMiddle() {
      return !this.isFirst && !this.isLast;
    }
    get isLast() {
      return this.index === this.length - 1;
    }
    static setEvent(event) {
      contextEvent.set(event);
    }
  };
  Observable.defineProperty(ExecutionContext.prototype, "index");
  Observable.defineProperty(ExecutionContext.prototype, "length");
  var defaultExecutionContext = Object.seal(new ExecutionContext());

  // node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/templating/binding.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/templating/html-directive.js
  init_virtual_process_polyfill();
  var HTMLDirective = class {
    constructor() {
      this.targetIndex = 0;
    }
  };
  var TargetedHTMLDirective = class extends HTMLDirective {
    constructor() {
      super(...arguments);
      this.createPlaceholder = DOM.createInterpolationPlaceholder;
    }
  };
  var AttachedBehaviorHTMLDirective = class extends HTMLDirective {
    constructor(name, behavior, options) {
      super();
      this.name = name;
      this.behavior = behavior;
      this.options = options;
    }
    createPlaceholder(index) {
      return DOM.createCustomAttributePlaceholder(this.name, index);
    }
    createBehavior(target2) {
      return new this.behavior(target2, this.options);
    }
  };

  // node_modules/@microsoft/fast-element/dist/esm/templating/binding.js
  function normalBind(source, context) {
    this.source = source;
    this.context = context;
    if (this.bindingObserver === null) {
      this.bindingObserver = Observable.binding(this.binding, this, this.isBindingVolatile);
    }
    this.updateTarget(this.bindingObserver.observe(source, context));
  }
  function triggerBind(source, context) {
    this.source = source;
    this.context = context;
    this.target.addEventListener(this.targetName, this);
  }
  function normalUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
  }
  function contentUnbind() {
    this.bindingObserver.disconnect();
    this.source = null;
    this.context = null;
    const view = this.target.$fastView;
    if (view !== void 0 && view.isComposed) {
      view.unbind();
      view.needsBindOnly = true;
    }
  }
  function triggerUnbind() {
    this.target.removeEventListener(this.targetName, this);
    this.source = null;
    this.context = null;
  }
  function updateAttributeTarget(value) {
    DOM.setAttribute(this.target, this.targetName, value);
  }
  function updateBooleanAttributeTarget(value) {
    DOM.setBooleanAttribute(this.target, this.targetName, value);
  }
  function updateContentTarget(value) {
    if (value === null || value === void 0) {
      value = "";
    }
    if (value.create) {
      this.target.textContent = "";
      let view = this.target.$fastView;
      if (view === void 0) {
        view = value.create();
      } else {
        if (this.target.$fastTemplate !== value) {
          if (view.isComposed) {
            view.remove();
            view.unbind();
          }
          view = value.create();
        }
      }
      if (!view.isComposed) {
        view.isComposed = true;
        view.bind(this.source, this.context);
        view.insertBefore(this.target);
        this.target.$fastView = view;
        this.target.$fastTemplate = value;
      } else if (view.needsBindOnly) {
        view.needsBindOnly = false;
        view.bind(this.source, this.context);
      }
    } else {
      const view = this.target.$fastView;
      if (view !== void 0 && view.isComposed) {
        view.isComposed = false;
        view.remove();
        if (view.needsBindOnly) {
          view.needsBindOnly = false;
        } else {
          view.unbind();
        }
      }
      this.target.textContent = value;
    }
  }
  function updatePropertyTarget(value) {
    this.target[this.targetName] = value;
  }
  function updateClassTarget(value) {
    const classVersions = this.classVersions || /* @__PURE__ */ Object.create(null);
    const target2 = this.target;
    let version2 = this.version || 0;
    if (value !== null && value !== void 0 && value.length) {
      const names = value.split(/\s+/);
      for (let i2 = 0, ii = names.length; i2 < ii; ++i2) {
        const currentName = names[i2];
        if (currentName === "") {
          continue;
        }
        classVersions[currentName] = version2;
        target2.classList.add(currentName);
      }
    }
    this.classVersions = classVersions;
    this.version = version2 + 1;
    if (version2 === 0) {
      return;
    }
    version2 -= 1;
    for (const name in classVersions) {
      if (classVersions[name] === version2) {
        target2.classList.remove(name);
      }
    }
  }
  var HTMLBindingDirective = class extends TargetedHTMLDirective {
    constructor(binding2) {
      super();
      this.binding = binding2;
      this.bind = normalBind;
      this.unbind = normalUnbind;
      this.updateTarget = updateAttributeTarget;
      this.isBindingVolatile = Observable.isVolatileBinding(this.binding);
    }
    get targetName() {
      return this.originalTargetName;
    }
    set targetName(value) {
      this.originalTargetName = value;
      if (value === void 0) {
        return;
      }
      switch (value[0]) {
        case ":":
          this.cleanedTargetName = value.substr(1);
          this.updateTarget = updatePropertyTarget;
          if (this.cleanedTargetName === "innerHTML") {
            const binding2 = this.binding;
            this.binding = (s2, c2) => DOM.createHTML(binding2(s2, c2));
          }
          break;
        case "?":
          this.cleanedTargetName = value.substr(1);
          this.updateTarget = updateBooleanAttributeTarget;
          break;
        case "@":
          this.cleanedTargetName = value.substr(1);
          this.bind = triggerBind;
          this.unbind = triggerUnbind;
          break;
        default:
          this.cleanedTargetName = value;
          if (value === "class") {
            this.updateTarget = updateClassTarget;
          }
          break;
      }
    }
    targetAtContent() {
      this.updateTarget = updateContentTarget;
      this.unbind = contentUnbind;
    }
    createBehavior(target2) {
      return new BindingBehavior(target2, this.binding, this.isBindingVolatile, this.bind, this.unbind, this.updateTarget, this.cleanedTargetName);
    }
  };
  var BindingBehavior = class {
    constructor(target2, binding2, isBindingVolatile, bind, unbind, updateTarget, targetName) {
      this.source = null;
      this.context = null;
      this.bindingObserver = null;
      this.target = target2;
      this.binding = binding2;
      this.isBindingVolatile = isBindingVolatile;
      this.bind = bind;
      this.unbind = unbind;
      this.updateTarget = updateTarget;
      this.targetName = targetName;
    }
    handleChange() {
      this.updateTarget(this.bindingObserver.observe(this.source, this.context));
    }
    handleEvent(event) {
      ExecutionContext.setEvent(event);
      const result = this.binding(this.source, this.context);
      ExecutionContext.setEvent(null);
      if (result !== true) {
        event.preventDefault();
      }
    }
  };

  // node_modules/@microsoft/fast-element/dist/esm/templating/compiler.js
  var sharedContext = null;
  var CompilationContext = class {
    addFactory(factory) {
      factory.targetIndex = this.targetIndex;
      this.behaviorFactories.push(factory);
    }
    captureContentBinding(directive) {
      directive.targetAtContent();
      this.addFactory(directive);
    }
    reset() {
      this.behaviorFactories = [];
      this.targetIndex = -1;
    }
    release() {
      sharedContext = this;
    }
    static borrow(directives) {
      const shareable = sharedContext || new CompilationContext();
      shareable.directives = directives;
      shareable.reset();
      sharedContext = null;
      return shareable;
    }
  };
  function createAggregateBinding(parts) {
    if (parts.length === 1) {
      return parts[0];
    }
    let targetName;
    const partCount = parts.length;
    const finalParts = parts.map((x2) => {
      if (typeof x2 === "string") {
        return () => x2;
      }
      targetName = x2.targetName || targetName;
      return x2.binding;
    });
    const binding2 = (scope, context) => {
      let output = "";
      for (let i2 = 0; i2 < partCount; ++i2) {
        output += finalParts[i2](scope, context);
      }
      return output;
    };
    const directive = new HTMLBindingDirective(binding2);
    directive.targetName = targetName;
    return directive;
  }
  var interpolationEndLength = _interpolationEnd.length;
  function parseContent(context, value) {
    const valueParts = value.split(_interpolationStart);
    if (valueParts.length === 1) {
      return null;
    }
    const bindingParts = [];
    for (let i2 = 0, ii = valueParts.length; i2 < ii; ++i2) {
      const current = valueParts[i2];
      const index = current.indexOf(_interpolationEnd);
      let literal;
      if (index === -1) {
        literal = current;
      } else {
        const directiveIndex = parseInt(current.substring(0, index));
        bindingParts.push(context.directives[directiveIndex]);
        literal = current.substring(index + interpolationEndLength);
      }
      if (literal !== "") {
        bindingParts.push(literal);
      }
    }
    return bindingParts;
  }
  function compileAttributes(context, node, includeBasicValues = false) {
    const attributes = node.attributes;
    for (let i2 = 0, ii = attributes.length; i2 < ii; ++i2) {
      const attr2 = attributes[i2];
      const attrValue = attr2.value;
      const parseResult = parseContent(context, attrValue);
      let result = null;
      if (parseResult === null) {
        if (includeBasicValues) {
          result = new HTMLBindingDirective(() => attrValue);
          result.targetName = attr2.name;
        }
      } else {
        result = createAggregateBinding(parseResult);
      }
      if (result !== null) {
        node.removeAttributeNode(attr2);
        i2--;
        ii--;
        context.addFactory(result);
      }
    }
  }
  function compileContent(context, node, walker) {
    const parseResult = parseContent(context, node.textContent);
    if (parseResult !== null) {
      let lastNode = node;
      for (let i2 = 0, ii = parseResult.length; i2 < ii; ++i2) {
        const currentPart = parseResult[i2];
        const currentNode = i2 === 0 ? node : lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
        if (typeof currentPart === "string") {
          currentNode.textContent = currentPart;
        } else {
          currentNode.textContent = " ";
          context.captureContentBinding(currentPart);
        }
        lastNode = currentNode;
        context.targetIndex++;
        if (currentNode !== node) {
          walker.nextNode();
        }
      }
      context.targetIndex--;
    }
  }
  function compileTemplate(template4, directives) {
    const fragment = template4.content;
    document.adoptNode(fragment);
    const context = CompilationContext.borrow(directives);
    compileAttributes(context, template4, true);
    const hostBehaviorFactories = context.behaviorFactories;
    context.reset();
    const walker = DOM.createTemplateWalker(fragment);
    let node;
    while (node = walker.nextNode()) {
      context.targetIndex++;
      switch (node.nodeType) {
        case 1:
          compileAttributes(context, node);
          break;
        case 3:
          compileContent(context, node, walker);
          break;
        case 8:
          if (DOM.isMarker(node)) {
            context.addFactory(directives[DOM.extractDirectiveIndexFromMarker(node)]);
          }
      }
    }
    let targetOffset = 0;
    if (DOM.isMarker(fragment.firstChild) || fragment.childNodes.length === 1 && directives.length) {
      fragment.insertBefore(document.createComment(""), fragment.firstChild);
      targetOffset = -1;
    }
    const viewBehaviorFactories = context.behaviorFactories;
    context.release();
    return {
      fragment,
      viewBehaviorFactories,
      hostBehaviorFactories,
      targetOffset
    };
  }

  // node_modules/@microsoft/fast-element/dist/esm/templating/view.js
  init_virtual_process_polyfill();
  var range = document.createRange();
  var HTMLView = class {
    constructor(fragment, behaviors) {
      this.fragment = fragment;
      this.behaviors = behaviors;
      this.source = null;
      this.context = null;
      this.firstChild = fragment.firstChild;
      this.lastChild = fragment.lastChild;
    }
    appendTo(node) {
      node.appendChild(this.fragment);
    }
    insertBefore(node) {
      if (this.fragment.hasChildNodes()) {
        node.parentNode.insertBefore(this.fragment, node);
      } else {
        const parentNode = node.parentNode;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while (current !== end) {
          next = current.nextSibling;
          parentNode.insertBefore(current, node);
          current = next;
        }
        parentNode.insertBefore(end, node);
      }
    }
    remove() {
      const fragment = this.fragment;
      const end = this.lastChild;
      let current = this.firstChild;
      let next;
      while (current !== end) {
        next = current.nextSibling;
        fragment.appendChild(current);
        current = next;
      }
      fragment.appendChild(end);
    }
    dispose() {
      const parent = this.firstChild.parentNode;
      const end = this.lastChild;
      let current = this.firstChild;
      let next;
      while (current !== end) {
        next = current.nextSibling;
        parent.removeChild(current);
        current = next;
      }
      parent.removeChild(end);
      const behaviors = this.behaviors;
      const oldSource = this.source;
      for (let i2 = 0, ii = behaviors.length; i2 < ii; ++i2) {
        behaviors[i2].unbind(oldSource);
      }
    }
    bind(source, context) {
      const behaviors = this.behaviors;
      if (this.source === source) {
        return;
      } else if (this.source !== null) {
        const oldSource = this.source;
        this.source = source;
        this.context = context;
        for (let i2 = 0, ii = behaviors.length; i2 < ii; ++i2) {
          const current = behaviors[i2];
          current.unbind(oldSource);
          current.bind(source, context);
        }
      } else {
        this.source = source;
        this.context = context;
        for (let i2 = 0, ii = behaviors.length; i2 < ii; ++i2) {
          behaviors[i2].bind(source, context);
        }
      }
    }
    unbind() {
      if (this.source === null) {
        return;
      }
      const behaviors = this.behaviors;
      const oldSource = this.source;
      for (let i2 = 0, ii = behaviors.length; i2 < ii; ++i2) {
        behaviors[i2].unbind(oldSource);
      }
      this.source = null;
    }
    static disposeContiguousBatch(views) {
      if (views.length === 0) {
        return;
      }
      range.setStartBefore(views[0].firstChild);
      range.setEndAfter(views[views.length - 1].lastChild);
      range.deleteContents();
      for (let i2 = 0, ii = views.length; i2 < ii; ++i2) {
        const view = views[i2];
        const behaviors = view.behaviors;
        const oldSource = view.source;
        for (let j2 = 0, jj = behaviors.length; j2 < jj; ++j2) {
          behaviors[j2].unbind(oldSource);
        }
      }
    }
  };

  // node_modules/@microsoft/fast-element/dist/esm/templating/template.js
  var ViewTemplate = class {
    constructor(html2, directives) {
      this.behaviorCount = 0;
      this.hasHostBehaviors = false;
      this.fragment = null;
      this.targetOffset = 0;
      this.viewBehaviorFactories = null;
      this.hostBehaviorFactories = null;
      this.html = html2;
      this.directives = directives;
    }
    create(hostBindingTarget) {
      if (this.fragment === null) {
        let template4;
        const html2 = this.html;
        if (typeof html2 === "string") {
          template4 = document.createElement("template");
          template4.innerHTML = DOM.createHTML(html2);
          const fec = template4.content.firstElementChild;
          if (fec !== null && fec.tagName === "TEMPLATE") {
            template4 = fec;
          }
        } else {
          template4 = html2;
        }
        const result = compileTemplate(template4, this.directives);
        this.fragment = result.fragment;
        this.viewBehaviorFactories = result.viewBehaviorFactories;
        this.hostBehaviorFactories = result.hostBehaviorFactories;
        this.targetOffset = result.targetOffset;
        this.behaviorCount = this.viewBehaviorFactories.length + this.hostBehaviorFactories.length;
        this.hasHostBehaviors = this.hostBehaviorFactories.length > 0;
      }
      const fragment = this.fragment.cloneNode(true);
      const viewFactories = this.viewBehaviorFactories;
      const behaviors = new Array(this.behaviorCount);
      const walker = DOM.createTemplateWalker(fragment);
      let behaviorIndex = 0;
      let targetIndex = this.targetOffset;
      let node = walker.nextNode();
      for (let ii = viewFactories.length; behaviorIndex < ii; ++behaviorIndex) {
        const factory = viewFactories[behaviorIndex];
        const factoryIndex = factory.targetIndex;
        while (node !== null) {
          if (targetIndex === factoryIndex) {
            behaviors[behaviorIndex] = factory.createBehavior(node);
            break;
          } else {
            node = walker.nextNode();
            targetIndex++;
          }
        }
      }
      if (this.hasHostBehaviors) {
        const hostFactories = this.hostBehaviorFactories;
        for (let i2 = 0, ii = hostFactories.length; i2 < ii; ++i2, ++behaviorIndex) {
          behaviors[behaviorIndex] = hostFactories[i2].createBehavior(hostBindingTarget);
        }
      }
      return new HTMLView(fragment, behaviors);
    }
    render(source, host, hostBindingTarget) {
      if (typeof host === "string") {
        host = document.getElementById(host);
      }
      if (hostBindingTarget === void 0) {
        hostBindingTarget = host;
      }
      const view = this.create(hostBindingTarget);
      view.bind(source, defaultExecutionContext);
      view.appendTo(host);
      return view;
    }
  };
  var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  function html(strings, ...values) {
    const directives = [];
    let html2 = "";
    for (let i2 = 0, ii = strings.length - 1; i2 < ii; ++i2) {
      const currentString = strings[i2];
      let value = values[i2];
      html2 += currentString;
      if (value instanceof ViewTemplate) {
        const template4 = value;
        value = () => template4;
      }
      if (typeof value === "function") {
        value = new HTMLBindingDirective(value);
      }
      if (value instanceof TargetedHTMLDirective) {
        const match = lastAttributeNameRegex.exec(currentString);
        if (match !== null) {
          value.targetName = match[2];
        }
      }
      if (value instanceof HTMLDirective) {
        html2 += value.createPlaceholder(directives.length);
        directives.push(value);
      } else {
        html2 += value;
      }
    }
    html2 += strings[strings.length - 1];
    return new ViewTemplate(html2, directives);
  }

  // node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/components/controller.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/styles/element-styles.js
  init_virtual_process_polyfill();
  var ElementStyles = class {
    constructor() {
      this.targets = /* @__PURE__ */ new WeakSet();
      this.behaviors = null;
    }
    addStylesTo(target2) {
      this.targets.add(target2);
    }
    removeStylesFrom(target2) {
      this.targets.delete(target2);
    }
    isAttachedTo(target2) {
      return this.targets.has(target2);
    }
    withBehaviors(...behaviors) {
      this.behaviors = this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
      return this;
    }
  };
  ElementStyles.create = (() => {
    if (DOM.supportsAdoptedStyleSheets) {
      const styleSheetCache = /* @__PURE__ */ new Map();
      return (styles) => new AdoptedStyleSheetsStyles(styles, styleSheetCache);
    }
    return (styles) => new StyleElementStyles(styles);
  })();
  function reduceStyles(styles) {
    return styles.map((x2) => x2 instanceof ElementStyles ? reduceStyles(x2.styles) : [x2]).reduce((prev, curr) => prev.concat(curr), []);
  }
  function reduceBehaviors(styles) {
    return styles.map((x2) => x2 instanceof ElementStyles ? x2.behaviors : null).reduce((prev, curr) => {
      if (curr === null) {
        return prev;
      }
      if (prev === null) {
        prev = [];
      }
      return prev.concat(curr);
    }, null);
  }
  var AdoptedStyleSheetsStyles = class extends ElementStyles {
    constructor(styles, styleSheetCache) {
      super();
      this.styles = styles;
      this.styleSheetCache = styleSheetCache;
      this._styleSheets = void 0;
      this.behaviors = reduceBehaviors(styles);
    }
    get styleSheets() {
      if (this._styleSheets === void 0) {
        const styles = this.styles;
        const styleSheetCache = this.styleSheetCache;
        this._styleSheets = reduceStyles(styles).map((x2) => {
          if (x2 instanceof CSSStyleSheet) {
            return x2;
          }
          let sheet = styleSheetCache.get(x2);
          if (sheet === void 0) {
            sheet = new CSSStyleSheet();
            sheet.replaceSync(x2);
            styleSheetCache.set(x2, sheet);
          }
          return sheet;
        });
      }
      return this._styleSheets;
    }
    addStylesTo(target2) {
      target2.adoptedStyleSheets = [...target2.adoptedStyleSheets, ...this.styleSheets];
      super.addStylesTo(target2);
    }
    removeStylesFrom(target2) {
      const sourceSheets = this.styleSheets;
      target2.adoptedStyleSheets = target2.adoptedStyleSheets.filter((x2) => sourceSheets.indexOf(x2) === -1);
      super.removeStylesFrom(target2);
    }
  };
  var styleClassId = 0;
  function getNextStyleClass() {
    return `fast-style-class-${++styleClassId}`;
  }
  var StyleElementStyles = class extends ElementStyles {
    constructor(styles) {
      super();
      this.styles = styles;
      this.behaviors = null;
      this.behaviors = reduceBehaviors(styles);
      this.styleSheets = reduceStyles(styles);
      this.styleClass = getNextStyleClass();
    }
    addStylesTo(target2) {
      const styleSheets = this.styleSheets;
      const styleClass = this.styleClass;
      target2 = this.normalizeTarget(target2);
      for (let i2 = 0; i2 < styleSheets.length; i2++) {
        const element = document.createElement("style");
        element.innerHTML = styleSheets[i2];
        element.className = styleClass;
        target2.append(element);
      }
      super.addStylesTo(target2);
    }
    removeStylesFrom(target2) {
      target2 = this.normalizeTarget(target2);
      const styles = target2.querySelectorAll(`.${this.styleClass}`);
      for (let i2 = 0, ii = styles.length; i2 < ii; ++i2) {
        target2.removeChild(styles[i2]);
      }
      super.removeStylesFrom(target2);
    }
    isAttachedTo(target2) {
      return super.isAttachedTo(this.normalizeTarget(target2));
    }
    normalizeTarget(target2) {
      return target2 === document ? document.body : target2;
    }
  };

  // node_modules/@microsoft/fast-element/dist/esm/components/attributes.js
  init_virtual_process_polyfill();
  var booleanConverter = {
    toView(value) {
      return value ? "true" : "false";
    },
    fromView(value) {
      if (value === null || value === void 0 || value === "false" || value === false || value === 0) {
        return false;
      }
      return true;
    }
  };
  var AttributeDefinition = class {
    constructor(Owner, name, attribute = name.toLowerCase(), mode = "reflect", converter) {
      this.guards = /* @__PURE__ */ new Set();
      this.Owner = Owner;
      this.name = name;
      this.attribute = attribute;
      this.mode = mode;
      this.converter = converter;
      this.fieldName = `_${name}`;
      this.callbackName = `${name}Changed`;
      this.hasCallback = this.callbackName in Owner.prototype;
      if (mode === "boolean" && converter === void 0) {
        this.converter = booleanConverter;
      }
    }
    setValue(source, newValue) {
      const oldValue = source[this.fieldName];
      const converter = this.converter;
      if (converter !== void 0) {
        newValue = converter.fromView(newValue);
      }
      if (oldValue !== newValue) {
        source[this.fieldName] = newValue;
        this.tryReflectToAttribute(source);
        if (this.hasCallback) {
          source[this.callbackName](oldValue, newValue);
        }
        source.$fastController.notify(this.name);
      }
    }
    getValue(source) {
      Observable.track(source, this.name);
      return source[this.fieldName];
    }
    onAttributeChangedCallback(element, value) {
      if (this.guards.has(element)) {
        return;
      }
      this.guards.add(element);
      this.setValue(element, value);
      this.guards.delete(element);
    }
    tryReflectToAttribute(element) {
      const mode = this.mode;
      const guards = this.guards;
      if (guards.has(element) || mode === "fromView") {
        return;
      }
      DOM.queueUpdate(() => {
        guards.add(element);
        const latestValue = element[this.fieldName];
        switch (mode) {
          case "reflect":
            const converter = this.converter;
            DOM.setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
            break;
          case "boolean":
            DOM.setBooleanAttribute(element, this.attribute, latestValue);
            break;
        }
        guards.delete(element);
      });
    }
    static collect(Owner, ...attributeLists) {
      const attributes = [];
      attributeLists.push(Owner.attributes);
      for (let i2 = 0, ii = attributeLists.length; i2 < ii; ++i2) {
        const list = attributeLists[i2];
        if (list === void 0) {
          continue;
        }
        for (let j2 = 0, jj = list.length; j2 < jj; ++j2) {
          const config2 = list[j2];
          if (typeof config2 === "string") {
            attributes.push(new AttributeDefinition(Owner, config2));
          } else {
            attributes.push(new AttributeDefinition(Owner, config2.property, config2.attribute, config2.mode, config2.converter));
          }
        }
      }
      return attributes;
    }
  };
  function attr(configOrTarget, prop) {
    let config2;
    function decorator($target, $prop) {
      if (arguments.length > 1) {
        config2.property = $prop;
      }
      const attributes = $target.constructor.attributes || ($target.constructor.attributes = []);
      attributes.push(config2);
    }
    if (arguments.length > 1) {
      config2 = {};
      decorator(configOrTarget, prop);
      return;
    }
    config2 = configOrTarget === void 0 ? {} : configOrTarget;
    return decorator;
  }

  // node_modules/@microsoft/fast-element/dist/esm/components/fast-definitions.js
  var defaultShadowOptions = { mode: "open" };
  var defaultElementOptions = {};
  var fastRegistry = FAST.getById(4, () => {
    const typeToDefinition = /* @__PURE__ */ new Map();
    return Object.freeze({
      register(definition) {
        if (typeToDefinition.has(definition.type)) {
          return false;
        }
        typeToDefinition.set(definition.type, definition);
        return true;
      },
      getByType(key) {
        return typeToDefinition.get(key);
      }
    });
  });
  var FASTElementDefinition = class {
    constructor(type, nameOrConfig = type.definition) {
      if (typeof nameOrConfig === "string") {
        nameOrConfig = { name: nameOrConfig };
      }
      this.type = type;
      this.name = nameOrConfig.name;
      this.template = nameOrConfig.template;
      const attributes = AttributeDefinition.collect(type, nameOrConfig.attributes);
      const observedAttributes = new Array(attributes.length);
      const propertyLookup = {};
      const attributeLookup = {};
      for (let i2 = 0, ii = attributes.length; i2 < ii; ++i2) {
        const current = attributes[i2];
        observedAttributes[i2] = current.attribute;
        propertyLookup[current.name] = current;
        attributeLookup[current.attribute] = current;
      }
      this.attributes = attributes;
      this.observedAttributes = observedAttributes;
      this.propertyLookup = propertyLookup;
      this.attributeLookup = attributeLookup;
      this.shadowOptions = nameOrConfig.shadowOptions === void 0 ? defaultShadowOptions : nameOrConfig.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
      this.elementOptions = nameOrConfig.elementOptions === void 0 ? defaultElementOptions : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
      this.styles = nameOrConfig.styles === void 0 ? void 0 : Array.isArray(nameOrConfig.styles) ? ElementStyles.create(nameOrConfig.styles) : nameOrConfig.styles instanceof ElementStyles ? nameOrConfig.styles : ElementStyles.create([nameOrConfig.styles]);
    }
    get isDefined() {
      return !!fastRegistry.getByType(this.type);
    }
    define(registry = customElements) {
      const type = this.type;
      if (fastRegistry.register(this)) {
        const attributes = this.attributes;
        const proto = type.prototype;
        for (let i2 = 0, ii = attributes.length; i2 < ii; ++i2) {
          Observable.defineProperty(proto, attributes[i2]);
        }
        Reflect.defineProperty(type, "observedAttributes", {
          value: this.observedAttributes,
          enumerable: true
        });
      }
      if (!registry.get(this.name)) {
        registry.define(this.name, type, this.elementOptions);
      }
      return this;
    }
  };
  FASTElementDefinition.forType = fastRegistry.getByType;

  // node_modules/@microsoft/fast-element/dist/esm/components/controller.js
  var shadowRoots = /* @__PURE__ */ new WeakMap();
  var defaultEventOptions = {
    bubbles: true,
    composed: true,
    cancelable: true
  };
  function getShadowRoot(element) {
    return element.shadowRoot || shadowRoots.get(element) || null;
  }
  var Controller = class extends PropertyChangeNotifier {
    constructor(element, definition) {
      super(element);
      this.boundObservables = null;
      this.behaviors = null;
      this.needsInitialization = true;
      this._template = null;
      this._styles = null;
      this._isConnected = false;
      this.$fastController = this;
      this.view = null;
      this.element = element;
      this.definition = definition;
      const shadowOptions = definition.shadowOptions;
      if (shadowOptions !== void 0) {
        const shadowRoot = element.attachShadow(shadowOptions);
        if (shadowOptions.mode === "closed") {
          shadowRoots.set(element, shadowRoot);
        }
      }
      const accessors = Observable.getAccessors(element);
      if (accessors.length > 0) {
        const boundObservables = this.boundObservables = /* @__PURE__ */ Object.create(null);
        for (let i2 = 0, ii = accessors.length; i2 < ii; ++i2) {
          const propertyName = accessors[i2].name;
          const value = element[propertyName];
          if (value !== void 0) {
            delete element[propertyName];
            boundObservables[propertyName] = value;
          }
        }
      }
    }
    get isConnected() {
      Observable.track(this, "isConnected");
      return this._isConnected;
    }
    setIsConnected(value) {
      this._isConnected = value;
      Observable.notify(this, "isConnected");
    }
    get template() {
      return this._template;
    }
    set template(value) {
      if (this._template === value) {
        return;
      }
      this._template = value;
      if (!this.needsInitialization) {
        this.renderTemplate(value);
      }
    }
    get styles() {
      return this._styles;
    }
    set styles(value) {
      if (this._styles === value) {
        return;
      }
      if (this._styles !== null) {
        this.removeStyles(this._styles);
      }
      this._styles = value;
      if (!this.needsInitialization && value !== null) {
        this.addStyles(value);
      }
    }
    addStyles(styles) {
      const target2 = getShadowRoot(this.element) || this.element.getRootNode();
      if (styles instanceof HTMLStyleElement) {
        target2.append(styles);
      } else if (!styles.isAttachedTo(target2)) {
        const sourceBehaviors = styles.behaviors;
        styles.addStylesTo(target2);
        if (sourceBehaviors !== null) {
          this.addBehaviors(sourceBehaviors);
        }
      }
    }
    removeStyles(styles) {
      const target2 = getShadowRoot(this.element) || this.element.getRootNode();
      if (styles instanceof HTMLStyleElement) {
        target2.removeChild(styles);
      } else if (styles.isAttachedTo(target2)) {
        const sourceBehaviors = styles.behaviors;
        styles.removeStylesFrom(target2);
        if (sourceBehaviors !== null) {
          this.removeBehaviors(sourceBehaviors);
        }
      }
    }
    addBehaviors(behaviors) {
      const targetBehaviors = this.behaviors || (this.behaviors = /* @__PURE__ */ new Map());
      const length = behaviors.length;
      const behaviorsToBind = [];
      for (let i2 = 0; i2 < length; ++i2) {
        const behavior = behaviors[i2];
        if (targetBehaviors.has(behavior)) {
          targetBehaviors.set(behavior, targetBehaviors.get(behavior) + 1);
        } else {
          targetBehaviors.set(behavior, 1);
          behaviorsToBind.push(behavior);
        }
      }
      if (this._isConnected) {
        const element = this.element;
        for (let i2 = 0; i2 < behaviorsToBind.length; ++i2) {
          behaviorsToBind[i2].bind(element, defaultExecutionContext);
        }
      }
    }
    removeBehaviors(behaviors, force = false) {
      const targetBehaviors = this.behaviors;
      if (targetBehaviors === null) {
        return;
      }
      const length = behaviors.length;
      const behaviorsToUnbind = [];
      for (let i2 = 0; i2 < length; ++i2) {
        const behavior = behaviors[i2];
        if (targetBehaviors.has(behavior)) {
          const count = targetBehaviors.get(behavior) - 1;
          count === 0 || force ? targetBehaviors.delete(behavior) && behaviorsToUnbind.push(behavior) : targetBehaviors.set(behavior, count);
        }
      }
      if (this._isConnected) {
        const element = this.element;
        for (let i2 = 0; i2 < behaviorsToUnbind.length; ++i2) {
          behaviorsToUnbind[i2].unbind(element);
        }
      }
    }
    onConnectedCallback() {
      if (this._isConnected) {
        return;
      }
      const element = this.element;
      if (this.needsInitialization) {
        this.finishInitialization();
      } else if (this.view !== null) {
        this.view.bind(element, defaultExecutionContext);
      }
      const behaviors = this.behaviors;
      if (behaviors !== null) {
        for (const [behavior] of behaviors) {
          behavior.bind(element, defaultExecutionContext);
        }
      }
      this.setIsConnected(true);
    }
    onDisconnectedCallback() {
      if (!this._isConnected) {
        return;
      }
      this.setIsConnected(false);
      const view = this.view;
      if (view !== null) {
        view.unbind();
      }
      const behaviors = this.behaviors;
      if (behaviors !== null) {
        const element = this.element;
        for (const [behavior] of behaviors) {
          behavior.unbind(element);
        }
      }
    }
    onAttributeChangedCallback(name, oldValue, newValue) {
      const attrDef = this.definition.attributeLookup[name];
      if (attrDef !== void 0) {
        attrDef.onAttributeChangedCallback(this.element, newValue);
      }
    }
    emit(type, detail, options) {
      if (this._isConnected) {
        return this.element.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({ detail }, defaultEventOptions), options)));
      }
      return false;
    }
    finishInitialization() {
      const element = this.element;
      const boundObservables = this.boundObservables;
      if (boundObservables !== null) {
        const propertyNames = Object.keys(boundObservables);
        for (let i2 = 0, ii = propertyNames.length; i2 < ii; ++i2) {
          const propertyName = propertyNames[i2];
          element[propertyName] = boundObservables[propertyName];
        }
        this.boundObservables = null;
      }
      const definition = this.definition;
      if (this._template === null) {
        if (this.element.resolveTemplate) {
          this._template = this.element.resolveTemplate();
        } else if (definition.template) {
          this._template = definition.template || null;
        }
      }
      if (this._template !== null) {
        this.renderTemplate(this._template);
      }
      if (this._styles === null) {
        if (this.element.resolveStyles) {
          this._styles = this.element.resolveStyles();
        } else if (definition.styles) {
          this._styles = definition.styles || null;
        }
      }
      if (this._styles !== null) {
        this.addStyles(this._styles);
      }
      this.needsInitialization = false;
    }
    renderTemplate(template4) {
      const element = this.element;
      const host = getShadowRoot(element) || element;
      if (this.view !== null) {
        this.view.dispose();
        this.view = null;
      } else if (!this.needsInitialization) {
        DOM.removeChildNodes(host);
      }
      if (template4) {
        this.view = template4.render(element, host, element);
      }
    }
    static forCustomElement(element) {
      const controller = element.$fastController;
      if (controller !== void 0) {
        return controller;
      }
      const definition = FASTElementDefinition.forType(element.constructor);
      if (definition === void 0) {
        throw new Error("Missing FASTElement definition.");
      }
      return element.$fastController = new Controller(element, definition);
    }
  };

  // node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js
  function createFASTElement(BaseType) {
    return class extends BaseType {
      constructor() {
        super();
        Controller.forCustomElement(this);
      }
      $emit(type, detail, options) {
        return this.$fastController.emit(type, detail, options);
      }
      connectedCallback() {
        this.$fastController.onConnectedCallback();
      }
      disconnectedCallback() {
        this.$fastController.onDisconnectedCallback();
      }
      attributeChangedCallback(name, oldValue, newValue) {
        this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
      }
    };
  }
  var FASTElement = Object.assign(createFASTElement(HTMLElement), {
    from(BaseType) {
      return createFASTElement(BaseType);
    },
    define(type, nameOrDef) {
      return new FASTElementDefinition(type, nameOrDef).define().type;
    }
  });
  function customElement(nameOrDef) {
    return function(type) {
      new FASTElementDefinition(type, nameOrDef).define();
    };
  }

  // node_modules/@microsoft/fast-element/dist/esm/styles/css.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/styles/css-directive.js
  init_virtual_process_polyfill();
  var CSSDirective = class {
    createCSS() {
      return "";
    }
    createBehavior() {
      return void 0;
    }
  };

  // node_modules/@microsoft/fast-element/dist/esm/styles/css.js
  function collectStyles(strings, values) {
    const styles = [];
    let cssString = "";
    const behaviors = [];
    for (let i2 = 0, ii = strings.length - 1; i2 < ii; ++i2) {
      cssString += strings[i2];
      let value = values[i2];
      if (value instanceof CSSDirective) {
        const behavior = value.createBehavior();
        value = value.createCSS();
        if (behavior) {
          behaviors.push(behavior);
        }
      }
      if (value instanceof ElementStyles || value instanceof CSSStyleSheet) {
        if (cssString.trim() !== "") {
          styles.push(cssString);
          cssString = "";
        }
        styles.push(value);
      } else {
        cssString += value;
      }
    }
    cssString += strings[strings.length - 1];
    if (cssString.trim() !== "") {
      styles.push(cssString);
    }
    return {
      styles,
      behaviors
    };
  }
  function css(strings, ...values) {
    const { styles, behaviors } = collectStyles(strings, values);
    const elementStyles = ElementStyles.create(styles);
    if (behaviors.length) {
      elementStyles.withBehaviors(...behaviors);
    }
    return elementStyles;
  }
  var CSSPartial = class extends CSSDirective {
    constructor(styles, behaviors) {
      super();
      this.behaviors = behaviors;
      this.css = "";
      const stylesheets = styles.reduce((accumulated, current) => {
        if (typeof current === "string") {
          this.css += current;
        } else {
          accumulated.push(current);
        }
        return accumulated;
      }, []);
      if (stylesheets.length) {
        this.styles = ElementStyles.create(stylesheets);
      }
    }
    createBehavior() {
      return this;
    }
    createCSS() {
      return this.css;
    }
    bind(el) {
      if (this.styles) {
        el.$fastController.addStyles(this.styles);
      }
      if (this.behaviors.length) {
        el.$fastController.addBehaviors(this.behaviors);
      }
    }
    unbind(el) {
      if (this.styles) {
        el.$fastController.removeStyles(this.styles);
      }
      if (this.behaviors.length) {
        el.$fastController.removeBehaviors(this.behaviors);
      }
    }
  };
  function cssPartial(strings, ...values) {
    const { styles, behaviors } = collectStyles(strings, values);
    return new CSSPartial(styles, behaviors);
  }

  // node_modules/@microsoft/fast-element/dist/esm/templating/ref.js
  init_virtual_process_polyfill();
  var RefBehavior = class {
    constructor(target2, propertyName) {
      this.target = target2;
      this.propertyName = propertyName;
    }
    bind(source) {
      source[this.propertyName] = this.target;
    }
    unbind() {
    }
  };
  function ref(propertyName) {
    return new AttachedBehaviorHTMLDirective("fast-ref", RefBehavior, propertyName);
  }

  // node_modules/@microsoft/fast-element/dist/esm/templating/when.js
  init_virtual_process_polyfill();
  function when(binding2, templateOrTemplateBinding) {
    const getTemplate = typeof templateOrTemplateBinding === "function" ? templateOrTemplateBinding : () => templateOrTemplateBinding;
    return (source, context) => binding2(source, context) ? getTemplate(source, context) : null;
  }

  // node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-element/dist/esm/templating/node-observation.js
  init_virtual_process_polyfill();
  var NodeObservationBehavior = class {
    constructor(target2, options) {
      this.target = target2;
      this.options = options;
      this.source = null;
    }
    bind(source) {
      const name = this.options.property;
      this.shouldUpdate = Observable.getAccessors(source).some((x2) => x2.name === name);
      this.source = source;
      this.updateTarget(this.computeNodes());
      if (this.shouldUpdate) {
        this.observe();
      }
    }
    unbind() {
      this.updateTarget(emptyArray);
      this.source = null;
      if (this.shouldUpdate) {
        this.disconnect();
      }
    }
    handleEvent() {
      this.updateTarget(this.computeNodes());
    }
    computeNodes() {
      let nodes = this.getNodes();
      if (this.options.filter !== void 0) {
        nodes = nodes.filter(this.options.filter);
      }
      return nodes;
    }
    updateTarget(value) {
      this.source[this.options.property] = value;
    }
  };

  // node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js
  var SlottedBehavior = class extends NodeObservationBehavior {
    constructor(target2, options) {
      super(target2, options);
    }
    observe() {
      this.target.addEventListener("slotchange", this);
    }
    disconnect() {
      this.target.removeEventListener("slotchange", this);
    }
    getNodes() {
      return this.target.assignedNodes(this.options);
    }
  };
  function slotted(propertyOrOptions) {
    if (typeof propertyOrOptions === "string") {
      propertyOrOptions = { property: propertyOrOptions };
    }
    return new AttachedBehaviorHTMLDirective("fast-slotted", SlottedBehavior, propertyOrOptions);
  }

  // node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js
  init_virtual_process_polyfill();
  var StartEnd = class {
    handleStartContentChange() {
      this.startContainer.classList.toggle("start", this.start.assignedNodes().length > 0);
    }
    handleEndContentChange() {
      this.endContainer.classList.toggle("end", this.end.assignedNodes().length > 0);
    }
  };
  var endSlotTemplate = (context, definition) => html`
    <span
        part="end"
        ${ref("endContainer")}
        class=${(x2) => definition.end ? "end" : void 0}
    >
        <slot name="end" ${ref("end")} @slotchange="${(x2) => x2.handleEndContentChange()}">
            ${definition.end || ""}
        </slot>
    </span>
`;
  var startSlotTemplate = (context, definition) => html`
    <span
        part="start"
        ${ref("startContainer")}
        class="${(x2) => definition.start ? "start" : void 0}"
    >
        <slot
            name="start"
            ${ref("start")}
            @slotchange="${(x2) => x2.handleStartContentChange()}"
        >
            ${definition.start || ""}
        </slot>
    </span>
`;
  var endTemplate = html`
    <span part="end" ${ref("endContainer")}>
        <slot
            name="end"
            ${ref("end")}
            @slotchange="${(x2) => x2.handleEndContentChange()}"
        ></slot>
    </span>
`;
  var startTemplate = html`
    <span part="start" ${ref("startContainer")}>
        <slot
            name="start"
            ${ref("start")}
            @slotchange="${(x2) => x2.handleStartContentChange()}"
        ></slot>
    </span>
`;

  // node_modules/@microsoft/fast-foundation/node_modules/tslib/modules/index.js
  init_virtual_process_polyfill();
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-foundation/dist/esm/di/di.js
  init_virtual_process_polyfill();
  var metadataByTarget = /* @__PURE__ */ new Map();
  if (!("metadata" in Reflect)) {
    Reflect.metadata = function(key, value) {
      return function(target2) {
        Reflect.defineMetadata(key, value, target2);
      };
    };
    Reflect.defineMetadata = function(key, value, target2) {
      let metadata = metadataByTarget.get(target2);
      if (metadata === void 0) {
        metadataByTarget.set(target2, metadata = /* @__PURE__ */ new Map());
      }
      metadata.set(key, value);
    };
    Reflect.getOwnMetadata = function(key, target2) {
      const metadata = metadataByTarget.get(target2);
      if (metadata !== void 0) {
        return metadata.get(key);
      }
      return void 0;
    };
  }
  var ResolverBuilder = class {
    constructor(container, key) {
      this.container = container;
      this.key = key;
    }
    instance(value) {
      return this.registerResolver(0, value);
    }
    singleton(value) {
      return this.registerResolver(1, value);
    }
    transient(value) {
      return this.registerResolver(2, value);
    }
    callback(value) {
      return this.registerResolver(3, value);
    }
    cachedCallback(value) {
      return this.registerResolver(3, cacheCallbackResult(value));
    }
    aliasTo(destinationKey) {
      return this.registerResolver(5, destinationKey);
    }
    registerResolver(strategy, state) {
      const { container, key } = this;
      this.container = this.key = void 0;
      return container.registerResolver(key, new ResolverImpl(key, strategy, state));
    }
  };
  function cloneArrayWithPossibleProps(source) {
    const clone = source.slice();
    const keys = Object.keys(source);
    const len = keys.length;
    let key;
    for (let i2 = 0; i2 < len; ++i2) {
      key = keys[i2];
      if (!isArrayIndex(key)) {
        clone[key] = source[key];
      }
    }
    return clone;
  }
  var DefaultResolver = Object.freeze({
    none(key) {
      throw Error(`${key.toString()} not registered, did you forget to add @singleton()?`);
    },
    singleton(key) {
      return new ResolverImpl(key, 1, key);
    },
    transient(key) {
      return new ResolverImpl(key, 2, key);
    }
  });
  var ContainerConfiguration = Object.freeze({
    default: Object.freeze({
      parentLocator: () => null,
      responsibleForOwnerRequests: false,
      defaultResolver: DefaultResolver.singleton
    })
  });
  var dependencyLookup = /* @__PURE__ */ new Map();
  function getParamTypes(key) {
    return (Type) => {
      return Reflect.getOwnMetadata(key, Type);
    };
  }
  var rootDOMContainer = null;
  var DI = Object.freeze({
    createContainer(config2) {
      return new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config2));
    },
    findResponsibleContainer(node) {
      const owned = node.$$container$$;
      if (owned && owned.responsibleForOwnerRequests) {
        return owned;
      }
      return DI.findParentContainer(node);
    },
    findParentContainer(node) {
      const event = new CustomEvent(DILocateParentEventType, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: { container: void 0 }
      });
      node.dispatchEvent(event);
      return event.detail.container || DI.getOrCreateDOMContainer();
    },
    getOrCreateDOMContainer(node, config2) {
      if (!node) {
        return rootDOMContainer || (rootDOMContainer = new ContainerImpl(null, Object.assign({}, ContainerConfiguration.default, config2, {
          parentLocator: () => null
        })));
      }
      return node.$$container$$ || new ContainerImpl(node, Object.assign({}, ContainerConfiguration.default, config2, {
        parentLocator: DI.findParentContainer
      }));
    },
    getDesignParamtypes: getParamTypes("design:paramtypes"),
    getAnnotationParamtypes: getParamTypes("di:paramtypes"),
    getOrCreateAnnotationParamTypes(Type) {
      let annotationParamtypes = this.getAnnotationParamtypes(Type);
      if (annotationParamtypes === void 0) {
        Reflect.defineMetadata("di:paramtypes", annotationParamtypes = [], Type);
      }
      return annotationParamtypes;
    },
    getDependencies(Type) {
      let dependencies = dependencyLookup.get(Type);
      if (dependencies === void 0) {
        const inject2 = Type.inject;
        if (inject2 === void 0) {
          const designParamtypes = DI.getDesignParamtypes(Type);
          const annotationParamtypes = DI.getAnnotationParamtypes(Type);
          if (designParamtypes === void 0) {
            if (annotationParamtypes === void 0) {
              const Proto = Object.getPrototypeOf(Type);
              if (typeof Proto === "function" && Proto !== Function.prototype) {
                dependencies = cloneArrayWithPossibleProps(DI.getDependencies(Proto));
              } else {
                dependencies = [];
              }
            } else {
              dependencies = cloneArrayWithPossibleProps(annotationParamtypes);
            }
          } else if (annotationParamtypes === void 0) {
            dependencies = cloneArrayWithPossibleProps(designParamtypes);
          } else {
            dependencies = cloneArrayWithPossibleProps(designParamtypes);
            let len = annotationParamtypes.length;
            let auAnnotationParamtype;
            for (let i2 = 0; i2 < len; ++i2) {
              auAnnotationParamtype = annotationParamtypes[i2];
              if (auAnnotationParamtype !== void 0) {
                dependencies[i2] = auAnnotationParamtype;
              }
            }
            const keys = Object.keys(annotationParamtypes);
            len = keys.length;
            let key;
            for (let i2 = 0; i2 < len; ++i2) {
              key = keys[i2];
              if (!isArrayIndex(key)) {
                dependencies[key] = annotationParamtypes[key];
              }
            }
          }
        } else {
          dependencies = cloneArrayWithPossibleProps(inject2);
        }
        dependencyLookup.set(Type, dependencies);
      }
      return dependencies;
    },
    defineProperty(target2, propertyName, key, respectConnection = false) {
      const diPropertyKey = `$di_${propertyName}`;
      Reflect.defineProperty(target2, propertyName, {
        get: function() {
          let value = this[diPropertyKey];
          if (value === void 0) {
            const container = this instanceof HTMLElement ? DI.findResponsibleContainer(this) : DI.getOrCreateDOMContainer();
            value = container.get(key);
            this[diPropertyKey] = value;
            if (respectConnection && this instanceof FASTElement) {
              const notifier = this.$fastController;
              const handleChange = () => {
                const newContainer = DI.findResponsibleContainer(this);
                const newValue = newContainer.get(key);
                const oldValue = this[diPropertyKey];
                if (newValue !== oldValue) {
                  this[diPropertyKey] = value;
                  notifier.notify(propertyName);
                }
              };
              notifier.subscribe({ handleChange }, "isConnected");
            }
          }
          return value;
        }
      });
    },
    createInterface(nameConfigOrCallback, configuror) {
      const configure = typeof nameConfigOrCallback === "function" ? nameConfigOrCallback : configuror;
      const friendlyName = typeof nameConfigOrCallback === "string" ? nameConfigOrCallback : nameConfigOrCallback && "friendlyName" in nameConfigOrCallback ? nameConfigOrCallback.friendlyName || defaultFriendlyName : defaultFriendlyName;
      const respectConnection = typeof nameConfigOrCallback === "string" ? false : nameConfigOrCallback && "respectConnection" in nameConfigOrCallback ? nameConfigOrCallback.respectConnection || false : false;
      const Interface = function(target2, property, index) {
        if (target2 == null || new.target !== void 0) {
          throw new Error(`No registration for interface: '${Interface.friendlyName}'`);
        }
        if (property) {
          DI.defineProperty(target2, property, Interface, respectConnection);
        } else {
          const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target2);
          annotationParamtypes[index] = Interface;
        }
      };
      Interface.$isInterface = true;
      Interface.friendlyName = friendlyName == null ? "(anonymous)" : friendlyName;
      if (configure != null) {
        Interface.register = function(container, key) {
          return configure(new ResolverBuilder(container, key !== null && key !== void 0 ? key : Interface));
        };
      }
      Interface.toString = function toString() {
        return `InterfaceSymbol<${Interface.friendlyName}>`;
      };
      return Interface;
    },
    inject(...dependencies) {
      return function(target2, key, descriptor) {
        if (typeof descriptor === "number") {
          const annotationParamtypes = DI.getOrCreateAnnotationParamTypes(target2);
          const dep = dependencies[0];
          if (dep !== void 0) {
            annotationParamtypes[descriptor] = dep;
          }
        } else if (key) {
          DI.defineProperty(target2, key, dependencies[0]);
        } else {
          const annotationParamtypes = descriptor ? DI.getOrCreateAnnotationParamTypes(descriptor.value) : DI.getOrCreateAnnotationParamTypes(target2);
          let dep;
          for (let i2 = 0; i2 < dependencies.length; ++i2) {
            dep = dependencies[i2];
            if (dep !== void 0) {
              annotationParamtypes[i2] = dep;
            }
          }
        }
      };
    },
    transient(target2) {
      target2.register = function register(container) {
        const registration = Registration.transient(target2, target2);
        return registration.register(container);
      };
      target2.registerInRequestor = false;
      return target2;
    },
    singleton(target2, options = defaultSingletonOptions) {
      target2.register = function register(container) {
        const registration = Registration.singleton(target2, target2);
        return registration.register(container);
      };
      target2.registerInRequestor = options.scoped;
      return target2;
    }
  });
  var Container = DI.createInterface("Container");
  function createResolver(getter) {
    return function(key) {
      const resolver = function(target2, property, descriptor) {
        DI.inject(resolver)(target2, property, descriptor);
      };
      resolver.$isResolver = true;
      resolver.resolve = function(handler, requestor) {
        return getter(key, handler, requestor);
      };
      return resolver;
    };
  }
  var inject = DI.inject;
  var defaultSingletonOptions = { scoped: false };
  function createAllResolver(getter) {
    return function(key, searchAncestors) {
      searchAncestors = !!searchAncestors;
      const resolver = function(target2, property, descriptor) {
        DI.inject(resolver)(target2, property, descriptor);
      };
      resolver.$isResolver = true;
      resolver.resolve = function(handler, requestor) {
        return getter(key, handler, requestor, searchAncestors);
      };
      return resolver;
    };
  }
  var all = createAllResolver((key, handler, requestor, searchAncestors) => requestor.getAll(key, searchAncestors));
  var lazy = createResolver((key, handler, requestor) => {
    return () => requestor.get(key);
  });
  var optional = createResolver((key, handler, requestor) => {
    if (requestor.has(key, true)) {
      return requestor.get(key);
    } else {
      return void 0;
    }
  });
  function ignore(target2, property, descriptor) {
    DI.inject(ignore)(target2, property, descriptor);
  }
  ignore.$isResolver = true;
  ignore.resolve = () => void 0;
  var newInstanceForScope = createResolver((key, handler, requestor) => {
    const instance = createNewInstance(key, handler);
    const resolver = new ResolverImpl(key, 0, instance);
    requestor.registerResolver(key, resolver);
    return instance;
  });
  var newInstanceOf = createResolver((key, handler, _requestor) => createNewInstance(key, handler));
  function createNewInstance(key, handler) {
    return handler.getFactory(key).construct(handler);
  }
  var ResolverImpl = class {
    constructor(key, strategy, state) {
      this.key = key;
      this.strategy = strategy;
      this.state = state;
      this.resolving = false;
    }
    get $isResolver() {
      return true;
    }
    register(container) {
      return container.registerResolver(this.key, this);
    }
    resolve(handler, requestor) {
      switch (this.strategy) {
        case 0:
          return this.state;
        case 1: {
          if (this.resolving) {
            throw new Error(`Cyclic dependency found: ${this.state.name}`);
          }
          this.resolving = true;
          this.state = handler.getFactory(this.state).construct(requestor);
          this.strategy = 0;
          this.resolving = false;
          return this.state;
        }
        case 2: {
          const factory = handler.getFactory(this.state);
          if (factory === null) {
            throw new Error(`Resolver for ${String(this.key)} returned a null factory`);
          }
          return factory.construct(requestor);
        }
        case 3:
          return this.state(handler, requestor, this);
        case 4:
          return this.state[0].resolve(handler, requestor);
        case 5:
          return requestor.get(this.state);
        default:
          throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`);
      }
    }
    getFactory(container) {
      var _a, _b, _c;
      switch (this.strategy) {
        case 1:
        case 2:
          return container.getFactory(this.state);
        case 5:
          return (_c = (_b = (_a = container.getResolver(this.state)) === null || _a === void 0 ? void 0 : _a.getFactory) === null || _b === void 0 ? void 0 : _b.call(_a, container)) !== null && _c !== void 0 ? _c : null;
        default:
          return null;
      }
    }
  };
  function containerGetKey(d2) {
    return this.get(d2);
  }
  function transformInstance(inst, transform) {
    return transform(inst);
  }
  var FactoryImpl = class {
    constructor(Type, dependencies) {
      this.Type = Type;
      this.dependencies = dependencies;
      this.transformers = null;
    }
    construct(container, dynamicDependencies) {
      let instance;
      if (dynamicDependencies === void 0) {
        instance = new this.Type(...this.dependencies.map(containerGetKey, container));
      } else {
        instance = new this.Type(...this.dependencies.map(containerGetKey, container), ...dynamicDependencies);
      }
      if (this.transformers == null) {
        return instance;
      }
      return this.transformers.reduce(transformInstance, instance);
    }
    registerTransformer(transformer) {
      (this.transformers || (this.transformers = [])).push(transformer);
    }
  };
  var containerResolver = {
    $isResolver: true,
    resolve(handler, requestor) {
      return requestor;
    }
  };
  function isRegistry(obj) {
    return typeof obj.register === "function";
  }
  function isSelfRegistry(obj) {
    return isRegistry(obj) && typeof obj.registerInRequestor === "boolean";
  }
  function isRegisterInRequester(obj) {
    return isSelfRegistry(obj) && obj.registerInRequestor;
  }
  function isClass(obj) {
    return obj.prototype !== void 0;
  }
  var InstrinsicTypeNames = /* @__PURE__ */ new Set([
    "Array",
    "ArrayBuffer",
    "Boolean",
    "DataView",
    "Date",
    "Error",
    "EvalError",
    "Float32Array",
    "Float64Array",
    "Function",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Map",
    "Number",
    "Object",
    "Promise",
    "RangeError",
    "ReferenceError",
    "RegExp",
    "Set",
    "SharedArrayBuffer",
    "String",
    "SyntaxError",
    "TypeError",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "URIError",
    "WeakMap",
    "WeakSet"
  ]);
  var DILocateParentEventType = "__DI_LOCATE_PARENT__";
  var factories = /* @__PURE__ */ new Map();
  var ContainerImpl = class {
    constructor(owner, config2) {
      this.owner = owner;
      this.config = config2;
      this._parent = void 0;
      this.registerDepth = 0;
      this.context = null;
      if (owner !== null) {
        owner.$$container$$ = this;
      }
      this.resolvers = /* @__PURE__ */ new Map();
      this.resolvers.set(Container, containerResolver);
      if (owner instanceof Node) {
        owner.addEventListener(DILocateParentEventType, (e) => {
          if (e.composedPath()[0] !== this.owner) {
            e.detail.container = this;
            e.stopImmediatePropagation();
          }
        });
      }
    }
    get parent() {
      if (this._parent === void 0) {
        this._parent = this.config.parentLocator(this.owner);
      }
      return this._parent;
    }
    get depth() {
      return this.parent === null ? 0 : this.parent.depth + 1;
    }
    get responsibleForOwnerRequests() {
      return this.config.responsibleForOwnerRequests;
    }
    registerWithContext(context, ...params) {
      this.context = context;
      this.register(...params);
      this.context = null;
      return this;
    }
    register(...params) {
      if (++this.registerDepth === 100) {
        throw new Error("Unable to autoregister dependency");
      }
      let current;
      let keys;
      let value;
      let j2;
      let jj;
      const context = this.context;
      for (let i2 = 0, ii = params.length; i2 < ii; ++i2) {
        current = params[i2];
        if (!isObject(current)) {
          continue;
        }
        if (isRegistry(current)) {
          current.register(this, context);
        } else if (isClass(current)) {
          Registration.singleton(current, current).register(this);
        } else {
          keys = Object.keys(current);
          j2 = 0;
          jj = keys.length;
          for (; j2 < jj; ++j2) {
            value = current[keys[j2]];
            if (!isObject(value)) {
              continue;
            }
            if (isRegistry(value)) {
              value.register(this, context);
            } else {
              this.register(value);
            }
          }
        }
      }
      --this.registerDepth;
      return this;
    }
    registerResolver(key, resolver) {
      validateKey(key);
      const resolvers = this.resolvers;
      const result = resolvers.get(key);
      if (result == null) {
        resolvers.set(key, resolver);
      } else if (result instanceof ResolverImpl && result.strategy === 4) {
        result.state.push(resolver);
      } else {
        resolvers.set(key, new ResolverImpl(key, 4, [result, resolver]));
      }
      return resolver;
    }
    registerTransformer(key, transformer) {
      const resolver = this.getResolver(key);
      if (resolver == null) {
        return false;
      }
      if (resolver.getFactory) {
        const factory = resolver.getFactory(this);
        if (factory == null) {
          return false;
        }
        factory.registerTransformer(transformer);
        return true;
      }
      return false;
    }
    getResolver(key, autoRegister = true) {
      validateKey(key);
      if (key.resolve !== void 0) {
        return key;
      }
      let current = this;
      let resolver;
      while (current != null) {
        resolver = current.resolvers.get(key);
        if (resolver == null) {
          if (current.parent == null) {
            const handler = isRegisterInRequester(key) ? this : current;
            return autoRegister ? this.jitRegister(key, handler) : null;
          }
          current = current.parent;
        } else {
          return resolver;
        }
      }
      return null;
    }
    has(key, searchAncestors = false) {
      return this.resolvers.has(key) ? true : searchAncestors && this.parent != null ? this.parent.has(key, true) : false;
    }
    get(key) {
      validateKey(key);
      if (key.$isResolver) {
        return key.resolve(this, this);
      }
      let current = this;
      let resolver;
      while (current != null) {
        resolver = current.resolvers.get(key);
        if (resolver == null) {
          if (current.parent == null) {
            const handler = isRegisterInRequester(key) ? this : current;
            resolver = this.jitRegister(key, handler);
            return resolver.resolve(current, this);
          }
          current = current.parent;
        } else {
          return resolver.resolve(current, this);
        }
      }
      throw new Error(`Unable to resolve key: ${key}`);
    }
    getAll(key, searchAncestors = false) {
      validateKey(key);
      const requestor = this;
      let current = requestor;
      let resolver;
      if (searchAncestors) {
        let resolutions = emptyArray;
        while (current != null) {
          resolver = current.resolvers.get(key);
          if (resolver != null) {
            resolutions = resolutions.concat(buildAllResponse(resolver, current, requestor));
          }
          current = current.parent;
        }
        return resolutions;
      } else {
        while (current != null) {
          resolver = current.resolvers.get(key);
          if (resolver == null) {
            current = current.parent;
            if (current == null) {
              return emptyArray;
            }
          } else {
            return buildAllResponse(resolver, current, requestor);
          }
        }
      }
      return emptyArray;
    }
    getFactory(Type) {
      let factory = factories.get(Type);
      if (factory === void 0) {
        if (isNativeFunction(Type)) {
          throw new Error(`${Type.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);
        }
        factories.set(Type, factory = new FactoryImpl(Type, DI.getDependencies(Type)));
      }
      return factory;
    }
    registerFactory(key, factory) {
      factories.set(key, factory);
    }
    createChild(config2) {
      return new ContainerImpl(null, Object.assign({}, this.config, config2, { parentLocator: () => this }));
    }
    jitRegister(keyAsValue, handler) {
      if (typeof keyAsValue !== "function") {
        throw new Error(`Attempted to jitRegister something that is not a constructor: '${keyAsValue}'. Did you forget to register this dependency?`);
      }
      if (InstrinsicTypeNames.has(keyAsValue.name)) {
        throw new Error(`Attempted to jitRegister an intrinsic type: ${keyAsValue.name}. Did you forget to add @inject(Key)`);
      }
      if (isRegistry(keyAsValue)) {
        const registrationResolver = keyAsValue.register(handler);
        if (!(registrationResolver instanceof Object) || registrationResolver.resolve == null) {
          const newResolver = handler.resolvers.get(keyAsValue);
          if (newResolver != void 0) {
            return newResolver;
          }
          throw new Error("A valid resolver was not returned from the static register method");
        }
        return registrationResolver;
      } else if (keyAsValue.$isInterface) {
        throw new Error(`Attempted to jitRegister an interface: ${keyAsValue.friendlyName}`);
      } else {
        const resolver = this.config.defaultResolver(keyAsValue, handler);
        handler.resolvers.set(keyAsValue, resolver);
        return resolver;
      }
    }
  };
  var cache = /* @__PURE__ */ new WeakMap();
  function cacheCallbackResult(fun) {
    return function(handler, requestor, resolver) {
      if (cache.has(resolver)) {
        return cache.get(resolver);
      }
      const t2 = fun(handler, requestor, resolver);
      cache.set(resolver, t2);
      return t2;
    };
  }
  var Registration = Object.freeze({
    instance(key, value) {
      return new ResolverImpl(key, 0, value);
    },
    singleton(key, value) {
      return new ResolverImpl(key, 1, value);
    },
    transient(key, value) {
      return new ResolverImpl(key, 2, value);
    },
    callback(key, callback) {
      return new ResolverImpl(key, 3, callback);
    },
    cachedCallback(key, callback) {
      return new ResolverImpl(key, 3, cacheCallbackResult(callback));
    },
    aliasTo(originalKey, aliasKey) {
      return new ResolverImpl(aliasKey, 5, originalKey);
    }
  });
  function validateKey(key) {
    if (key === null || key === void 0) {
      throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");
    }
  }
  function buildAllResponse(resolver, handler, requestor) {
    if (resolver instanceof ResolverImpl && resolver.strategy === 4) {
      const state = resolver.state;
      let i2 = state.length;
      const results = new Array(i2);
      while (i2--) {
        results[i2] = state[i2].resolve(handler, requestor);
      }
      return results;
    }
    return [resolver.resolve(handler, requestor)];
  }
  var defaultFriendlyName = "(anonymous)";
  function isObject(value) {
    return typeof value === "object" && value !== null || typeof value === "function";
  }
  var isNativeFunction = function() {
    const lookup = /* @__PURE__ */ new WeakMap();
    let isNative = false;
    let sourceText = "";
    let i2 = 0;
    return function(fn2) {
      isNative = lookup.get(fn2);
      if (isNative === void 0) {
        sourceText = fn2.toString();
        i2 = sourceText.length;
        isNative = i2 >= 29 && i2 <= 100 && sourceText.charCodeAt(i2 - 1) === 125 && sourceText.charCodeAt(i2 - 2) <= 32 && sourceText.charCodeAt(i2 - 3) === 93 && sourceText.charCodeAt(i2 - 4) === 101 && sourceText.charCodeAt(i2 - 5) === 100 && sourceText.charCodeAt(i2 - 6) === 111 && sourceText.charCodeAt(i2 - 7) === 99 && sourceText.charCodeAt(i2 - 8) === 32 && sourceText.charCodeAt(i2 - 9) === 101 && sourceText.charCodeAt(i2 - 10) === 118 && sourceText.charCodeAt(i2 - 11) === 105 && sourceText.charCodeAt(i2 - 12) === 116 && sourceText.charCodeAt(i2 - 13) === 97 && sourceText.charCodeAt(i2 - 14) === 110 && sourceText.charCodeAt(i2 - 15) === 88;
        lookup.set(fn2, isNative);
      }
      return isNative;
    };
  }();
  var isNumericLookup = {};
  function isArrayIndex(value) {
    switch (typeof value) {
      case "number":
        return value >= 0 && (value | 0) === value;
      case "string": {
        const result = isNumericLookup[value];
        if (result !== void 0) {
          return result;
        }
        const length = value.length;
        if (length === 0) {
          return isNumericLookup[value] = false;
        }
        let ch = 0;
        for (let i2 = 0; i2 < length; ++i2) {
          ch = value.charCodeAt(i2);
          if (i2 === 0 && ch === 48 && length > 1 || ch < 48 || ch > 57) {
            return isNumericLookup[value] = false;
          }
        }
        return isNumericLookup[value] = true;
      }
      default:
        return false;
    }
  }

  // node_modules/@microsoft/fast-foundation/dist/esm/design-system/component-presentation.js
  function presentationKeyFromTag(tagName) {
    return `${tagName.toLowerCase()}:presentation`;
  }
  var presentationRegistry = /* @__PURE__ */ new Map();
  var ComponentPresentation = Object.freeze({
    define(tagName, presentation, container) {
      const key = presentationKeyFromTag(tagName);
      const existing = presentationRegistry.get(key);
      if (existing === void 0) {
        presentationRegistry.set(key, presentation);
      } else {
        presentationRegistry.set(key, false);
      }
      container.register(Registration.instance(key, presentation));
    },
    forTag(tagName, element) {
      const key = presentationKeyFromTag(tagName);
      const existing = presentationRegistry.get(key);
      if (existing === false) {
        const container = DI.findResponsibleContainer(element);
        return container.get(key);
      }
      return existing || null;
    }
  });
  var DefaultComponentPresentation = class {
    constructor(template4, styles) {
      this.template = template4 || null;
      this.styles = styles === void 0 ? null : Array.isArray(styles) ? ElementStyles.create(styles) : styles instanceof ElementStyles ? styles : ElementStyles.create([styles]);
    }
    applyTo(element) {
      const controller = element.$fastController;
      if (controller.template === null) {
        controller.template = this.template;
      }
      if (controller.styles === null) {
        controller.styles = this.styles;
      }
    }
  };

  // node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js
  var FoundationElement = class extends FASTElement {
    constructor() {
      super(...arguments);
      this._presentation = void 0;
    }
    get $presentation() {
      if (this._presentation === void 0) {
        this._presentation = ComponentPresentation.forTag(this.tagName, this);
      }
      return this._presentation;
    }
    templateChanged() {
      if (this.template !== void 0) {
        this.$fastController.template = this.template;
      }
    }
    stylesChanged() {
      if (this.styles !== void 0) {
        this.$fastController.styles = this.styles;
      }
    }
    connectedCallback() {
      if (this.$presentation !== null) {
        this.$presentation.applyTo(this);
      }
      super.connectedCallback();
    }
    static compose(elementDefinition) {
      return (overrideDefinition = {}) => new FoundationElementRegistry(this === FoundationElement ? class extends FoundationElement {
      } : this, elementDefinition, overrideDefinition);
    }
  };
  __decorate([
    observable
  ], FoundationElement.prototype, "template", void 0);
  __decorate([
    observable
  ], FoundationElement.prototype, "styles", void 0);
  function resolveOption(option, context, definition) {
    if (typeof option === "function") {
      return option(context, definition);
    }
    return option;
  }
  var FoundationElementRegistry = class {
    constructor(type, elementDefinition, overrideDefinition) {
      this.type = type;
      this.elementDefinition = elementDefinition;
      this.overrideDefinition = overrideDefinition;
      this.definition = Object.assign(Object.assign({}, this.elementDefinition), this.overrideDefinition);
    }
    register(container, context) {
      const definition = this.definition;
      const overrideDefinition = this.overrideDefinition;
      const prefix = definition.prefix || context.elementPrefix;
      const name = `${prefix}-${definition.baseName}`;
      context.tryDefineElement({
        name,
        type: this.type,
        baseClass: this.elementDefinition.baseClass,
        callback: (x2) => {
          const presentation = new DefaultComponentPresentation(resolveOption(definition.template, x2, definition), resolveOption(definition.styles, x2, definition));
          x2.definePresentation(presentation);
          let shadowOptions = resolveOption(definition.shadowOptions, x2, definition);
          if (x2.shadowRootMode) {
            if (shadowOptions) {
              if (!overrideDefinition.shadowOptions) {
                shadowOptions.mode = x2.shadowRootMode;
              }
            } else if (shadowOptions !== null) {
              shadowOptions = { mode: x2.shadowRootMode };
            }
          }
          x2.defineElement({
            elementOptions: resolveOption(definition.elementOptions, x2, definition),
            shadowOptions,
            attributes: resolveOption(definition.attributes, x2, definition)
          });
        }
      });
    }
  };

  // node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js
  init_virtual_process_polyfill();
  function applyMixins(derivedCtor, ...baseCtors) {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        if (name !== "constructor") {
          Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        }
      });
      if (baseCtor.attributes) {
        const existing = derivedCtor.attributes || [];
        derivedCtor.attributes = existing.concat(baseCtor.attributes);
      }
    });
  }

  // node_modules/@microsoft/fast-web-utilities/dist/dom.js
  init_virtual_process_polyfill();

  // node_modules/exenv-es6/dist/can-use-dom.js
  init_virtual_process_polyfill();
  function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }

  // node_modules/@microsoft/fast-web-utilities/dist/dom.js
  function getNonce() {
    const node = document.querySelector('meta[property="csp-nonce"]');
    if (node) {
      return node.getAttribute("content");
    } else {
      return null;
    }
  }
  var _canUseFocusVisible;
  function canUseFocusVisible() {
    if (typeof _canUseFocusVisible === "boolean") {
      return _canUseFocusVisible;
    }
    if (!canUseDOM()) {
      _canUseFocusVisible = false;
      return _canUseFocusVisible;
    }
    const styleElement = document.createElement("style");
    const styleNonce = getNonce();
    if (styleNonce !== null) {
      styleElement.setAttribute("nonce", styleNonce);
    }
    document.head.appendChild(styleElement);
    try {
      styleElement.sheet.insertRule("foo:focus-visible {color:inherit}", 0);
      _canUseFocusVisible = true;
    } catch (e) {
      _canUseFocusVisible = false;
    } finally {
      document.head.removeChild(styleElement);
    }
    return _canUseFocusVisible;
  }

  // node_modules/@microsoft/fast-web-utilities/dist/key-codes.js
  init_virtual_process_polyfill();
  var KeyCodes;
  (function(KeyCodes2) {
    KeyCodes2[KeyCodes2["alt"] = 18] = "alt";
    KeyCodes2[KeyCodes2["arrowDown"] = 40] = "arrowDown";
    KeyCodes2[KeyCodes2["arrowLeft"] = 37] = "arrowLeft";
    KeyCodes2[KeyCodes2["arrowRight"] = 39] = "arrowRight";
    KeyCodes2[KeyCodes2["arrowUp"] = 38] = "arrowUp";
    KeyCodes2[KeyCodes2["back"] = 8] = "back";
    KeyCodes2[KeyCodes2["backSlash"] = 220] = "backSlash";
    KeyCodes2[KeyCodes2["break"] = 19] = "break";
    KeyCodes2[KeyCodes2["capsLock"] = 20] = "capsLock";
    KeyCodes2[KeyCodes2["closeBracket"] = 221] = "closeBracket";
    KeyCodes2[KeyCodes2["colon"] = 186] = "colon";
    KeyCodes2[KeyCodes2["colon2"] = 59] = "colon2";
    KeyCodes2[KeyCodes2["comma"] = 188] = "comma";
    KeyCodes2[KeyCodes2["ctrl"] = 17] = "ctrl";
    KeyCodes2[KeyCodes2["delete"] = 46] = "delete";
    KeyCodes2[KeyCodes2["end"] = 35] = "end";
    KeyCodes2[KeyCodes2["enter"] = 13] = "enter";
    KeyCodes2[KeyCodes2["equals"] = 187] = "equals";
    KeyCodes2[KeyCodes2["equals2"] = 61] = "equals2";
    KeyCodes2[KeyCodes2["equals3"] = 107] = "equals3";
    KeyCodes2[KeyCodes2["escape"] = 27] = "escape";
    KeyCodes2[KeyCodes2["forwardSlash"] = 191] = "forwardSlash";
    KeyCodes2[KeyCodes2["function1"] = 112] = "function1";
    KeyCodes2[KeyCodes2["function10"] = 121] = "function10";
    KeyCodes2[KeyCodes2["function11"] = 122] = "function11";
    KeyCodes2[KeyCodes2["function12"] = 123] = "function12";
    KeyCodes2[KeyCodes2["function2"] = 113] = "function2";
    KeyCodes2[KeyCodes2["function3"] = 114] = "function3";
    KeyCodes2[KeyCodes2["function4"] = 115] = "function4";
    KeyCodes2[KeyCodes2["function5"] = 116] = "function5";
    KeyCodes2[KeyCodes2["function6"] = 117] = "function6";
    KeyCodes2[KeyCodes2["function7"] = 118] = "function7";
    KeyCodes2[KeyCodes2["function8"] = 119] = "function8";
    KeyCodes2[KeyCodes2["function9"] = 120] = "function9";
    KeyCodes2[KeyCodes2["home"] = 36] = "home";
    KeyCodes2[KeyCodes2["insert"] = 45] = "insert";
    KeyCodes2[KeyCodes2["menu"] = 93] = "menu";
    KeyCodes2[KeyCodes2["minus"] = 189] = "minus";
    KeyCodes2[KeyCodes2["minus2"] = 109] = "minus2";
    KeyCodes2[KeyCodes2["numLock"] = 144] = "numLock";
    KeyCodes2[KeyCodes2["numPad0"] = 96] = "numPad0";
    KeyCodes2[KeyCodes2["numPad1"] = 97] = "numPad1";
    KeyCodes2[KeyCodes2["numPad2"] = 98] = "numPad2";
    KeyCodes2[KeyCodes2["numPad3"] = 99] = "numPad3";
    KeyCodes2[KeyCodes2["numPad4"] = 100] = "numPad4";
    KeyCodes2[KeyCodes2["numPad5"] = 101] = "numPad5";
    KeyCodes2[KeyCodes2["numPad6"] = 102] = "numPad6";
    KeyCodes2[KeyCodes2["numPad7"] = 103] = "numPad7";
    KeyCodes2[KeyCodes2["numPad8"] = 104] = "numPad8";
    KeyCodes2[KeyCodes2["numPad9"] = 105] = "numPad9";
    KeyCodes2[KeyCodes2["numPadDivide"] = 111] = "numPadDivide";
    KeyCodes2[KeyCodes2["numPadDot"] = 110] = "numPadDot";
    KeyCodes2[KeyCodes2["numPadMinus"] = 109] = "numPadMinus";
    KeyCodes2[KeyCodes2["numPadMultiply"] = 106] = "numPadMultiply";
    KeyCodes2[KeyCodes2["numPadPlus"] = 107] = "numPadPlus";
    KeyCodes2[KeyCodes2["openBracket"] = 219] = "openBracket";
    KeyCodes2[KeyCodes2["pageDown"] = 34] = "pageDown";
    KeyCodes2[KeyCodes2["pageUp"] = 33] = "pageUp";
    KeyCodes2[KeyCodes2["period"] = 190] = "period";
    KeyCodes2[KeyCodes2["print"] = 44] = "print";
    KeyCodes2[KeyCodes2["quote"] = 222] = "quote";
    KeyCodes2[KeyCodes2["scrollLock"] = 145] = "scrollLock";
    KeyCodes2[KeyCodes2["shift"] = 16] = "shift";
    KeyCodes2[KeyCodes2["space"] = 32] = "space";
    KeyCodes2[KeyCodes2["tab"] = 9] = "tab";
    KeyCodes2[KeyCodes2["tilde"] = 192] = "tilde";
    KeyCodes2[KeyCodes2["windowsLeft"] = 91] = "windowsLeft";
    KeyCodes2[KeyCodes2["windowsOpera"] = 219] = "windowsOpera";
    KeyCodes2[KeyCodes2["windowsRight"] = 92] = "windowsRight";
  })(KeyCodes || (KeyCodes = {}));
  var keyEnter = "Enter";

  // node_modules/@microsoft/fast-web-utilities/dist/localization.js
  init_virtual_process_polyfill();
  var Direction;
  (function(Direction2) {
    Direction2["ltr"] = "ltr";
    Direction2["rtl"] = "rtl";
  })(Direction || (Direction = {}));

  // node_modules/@microsoft/fast-web-utilities/dist/system-colors.js
  init_virtual_process_polyfill();
  var SystemColors;
  (function(SystemColors2) {
    SystemColors2["Canvas"] = "Canvas";
    SystemColors2["CanvasText"] = "CanvasText";
    SystemColors2["LinkText"] = "LinkText";
    SystemColors2["VisitedText"] = "VisitedText";
    SystemColors2["ActiveText"] = "ActiveText";
    SystemColors2["ButtonFace"] = "ButtonFace";
    SystemColors2["ButtonText"] = "ButtonText";
    SystemColors2["Field"] = "Field";
    SystemColors2["FieldText"] = "FieldText";
    SystemColors2["Highlight"] = "Highlight";
    SystemColors2["HighlightText"] = "HighlightText";
    SystemColors2["GrayText"] = "GrayText";
  })(SystemColors || (SystemColors = {}));

  // node_modules/@microsoft/fast-foundation/dist/esm/patterns/aria-global.js
  init_virtual_process_polyfill();
  var ARIAGlobalStatesAndProperties = class {
  };
  __decorate([
    attr({ attribute: "aria-atomic" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaAtomic", void 0);
  __decorate([
    attr({ attribute: "aria-busy" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaBusy", void 0);
  __decorate([
    attr({ attribute: "aria-controls" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaControls", void 0);
  __decorate([
    attr({ attribute: "aria-current" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaCurrent", void 0);
  __decorate([
    attr({ attribute: "aria-describedby" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaDescribedby", void 0);
  __decorate([
    attr({ attribute: "aria-details" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaDetails", void 0);
  __decorate([
    attr({ attribute: "aria-disabled" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaDisabled", void 0);
  __decorate([
    attr({ attribute: "aria-errormessage" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaErrormessage", void 0);
  __decorate([
    attr({ attribute: "aria-flowto" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaFlowto", void 0);
  __decorate([
    attr({ attribute: "aria-haspopup" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaHaspopup", void 0);
  __decorate([
    attr({ attribute: "aria-hidden" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaHidden", void 0);
  __decorate([
    attr({ attribute: "aria-invalid" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaInvalid", void 0);
  __decorate([
    attr({ attribute: "aria-keyshortcuts" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaKeyshortcuts", void 0);
  __decorate([
    attr({ attribute: "aria-label" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaLabel", void 0);
  __decorate([
    attr({ attribute: "aria-labelledby" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaLabelledby", void 0);
  __decorate([
    attr({ attribute: "aria-live" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaLive", void 0);
  __decorate([
    attr({ attribute: "aria-owns" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaOwns", void 0);
  __decorate([
    attr({ attribute: "aria-relevant" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaRelevant", void 0);
  __decorate([
    attr({ attribute: "aria-roledescription" })
  ], ARIAGlobalStatesAndProperties.prototype, "ariaRoledescription", void 0);

  // node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js
  init_virtual_process_polyfill();
  var buttonTemplate = (context, definition) => html`
    <button
        class="control"
        part="control"
        ?autofocus="${(x2) => x2.autofocus}"
        ?disabled="${(x2) => x2.disabled}"
        form="${(x2) => x2.formId}"
        formaction="${(x2) => x2.formaction}"
        formenctype="${(x2) => x2.formenctype}"
        formmethod="${(x2) => x2.formmethod}"
        formnovalidate="${(x2) => x2.formnovalidate}"
        formtarget="${(x2) => x2.formtarget}"
        name="${(x2) => x2.name}"
        type="${(x2) => x2.type}"
        value="${(x2) => x2.value}"
        aria-atomic="${(x2) => x2.ariaAtomic}"
        aria-busy="${(x2) => x2.ariaBusy}"
        aria-controls="${(x2) => x2.ariaControls}"
        aria-current="${(x2) => x2.ariaCurrent}"
        aria-describedby="${(x2) => x2.ariaDescribedby}"
        aria-details="${(x2) => x2.ariaDetails}"
        aria-disabled="${(x2) => x2.ariaDisabled}"
        aria-errormessage="${(x2) => x2.ariaErrormessage}"
        aria-expanded="${(x2) => x2.ariaExpanded}"
        aria-flowto="${(x2) => x2.ariaFlowto}"
        aria-haspopup="${(x2) => x2.ariaHaspopup}"
        aria-hidden="${(x2) => x2.ariaHidden}"
        aria-invalid="${(x2) => x2.ariaInvalid}"
        aria-keyshortcuts="${(x2) => x2.ariaKeyshortcuts}"
        aria-label="${(x2) => x2.ariaLabel}"
        aria-labelledby="${(x2) => x2.ariaLabelledby}"
        aria-live="${(x2) => x2.ariaLive}"
        aria-owns="${(x2) => x2.ariaOwns}"
        aria-pressed="${(x2) => x2.ariaPressed}"
        aria-relevant="${(x2) => x2.ariaRelevant}"
        aria-roledescription="${(x2) => x2.ariaRoledescription}"
        ${ref("control")}
    >
        ${startSlotTemplate(context, definition)}
        <span class="content" part="content">
            <slot ${slotted("defaultSlottedContent")}></slot>
        </span>
        ${endSlotTemplate(context, definition)}
    </button>
`;

  // node_modules/@microsoft/fast-foundation/dist/esm/button/button.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js
  init_virtual_process_polyfill();
  var proxySlotName = "form-associated-proxy";
  var ElementInternalsKey = "ElementInternals";
  var supportsElementInternals = ElementInternalsKey in window && "setFormValue" in window[ElementInternalsKey].prototype;
  var InternalsMap = /* @__PURE__ */ new WeakMap();
  function FormAssociated(BaseCtor) {
    const C = class extends BaseCtor {
      constructor(...args) {
        super(...args);
        this.dirtyValue = false;
        this.disabled = false;
        this.proxyEventsToBlock = ["change", "click"];
        this.proxyInitialized = false;
        this.required = false;
        this.initialValue = this.initialValue || "";
        if (!this.elementInternals) {
          this.formResetCallback = this.formResetCallback.bind(this);
        }
      }
      static get formAssociated() {
        return supportsElementInternals;
      }
      get validity() {
        return this.elementInternals ? this.elementInternals.validity : this.proxy.validity;
      }
      get form() {
        return this.elementInternals ? this.elementInternals.form : this.proxy.form;
      }
      get validationMessage() {
        return this.elementInternals ? this.elementInternals.validationMessage : this.proxy.validationMessage;
      }
      get willValidate() {
        return this.elementInternals ? this.elementInternals.willValidate : this.proxy.willValidate;
      }
      get labels() {
        if (this.elementInternals) {
          return Object.freeze(Array.from(this.elementInternals.labels));
        } else if (this.proxy instanceof HTMLElement && this.proxy.ownerDocument && this.id) {
          const parentLabels = this.proxy.labels;
          const forLabels = Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`));
          const labels = parentLabels ? forLabels.concat(Array.from(parentLabels)) : forLabels;
          return Object.freeze(labels);
        } else {
          return emptyArray;
        }
      }
      valueChanged(previous, next) {
        this.dirtyValue = true;
        if (this.proxy instanceof HTMLElement) {
          this.proxy.value = this.value;
        }
        this.currentValue = this.value;
        this.setFormValue(this.value);
        this.validate();
      }
      currentValueChanged() {
        this.value = this.currentValue;
      }
      initialValueChanged(previous, next) {
        if (!this.dirtyValue) {
          this.value = this.initialValue;
          this.dirtyValue = false;
        }
      }
      disabledChanged(previous, next) {
        if (this.proxy instanceof HTMLElement) {
          this.proxy.disabled = this.disabled;
        }
        DOM.queueUpdate(() => this.classList.toggle("disabled", this.disabled));
      }
      nameChanged(previous, next) {
        if (this.proxy instanceof HTMLElement) {
          this.proxy.name = this.name;
        }
      }
      requiredChanged(prev, next) {
        if (this.proxy instanceof HTMLElement) {
          this.proxy.required = this.required;
        }
        DOM.queueUpdate(() => this.classList.toggle("required", this.required));
        this.validate();
      }
      get elementInternals() {
        if (!supportsElementInternals) {
          return null;
        }
        let internals = InternalsMap.get(this);
        if (!internals) {
          internals = this.attachInternals();
          InternalsMap.set(this, internals);
        }
        return internals;
      }
      connectedCallback() {
        super.connectedCallback();
        this.addEventListener("keypress", this._keypressHandler);
        if (!this.value) {
          this.value = this.initialValue;
          this.dirtyValue = false;
        }
        if (!this.elementInternals) {
          this.attachProxy();
          if (this.form) {
            this.form.addEventListener("reset", this.formResetCallback);
          }
        }
      }
      disconnectedCallback() {
        this.proxyEventsToBlock.forEach((name) => this.proxy.removeEventListener(name, this.stopPropagation));
        if (!this.elementInternals && this.form) {
          this.form.removeEventListener("reset", this.formResetCallback);
        }
      }
      checkValidity() {
        return this.elementInternals ? this.elementInternals.checkValidity() : this.proxy.checkValidity();
      }
      reportValidity() {
        return this.elementInternals ? this.elementInternals.reportValidity() : this.proxy.reportValidity();
      }
      setValidity(flags, message, anchor) {
        if (this.elementInternals) {
          this.elementInternals.setValidity(flags, message, anchor);
        } else if (typeof message === "string") {
          this.proxy.setCustomValidity(message);
        }
      }
      formDisabledCallback(disabled) {
        this.disabled = disabled;
      }
      formResetCallback() {
        this.value = this.initialValue;
        this.dirtyValue = false;
      }
      attachProxy() {
        var _a;
        if (!this.proxyInitialized) {
          this.proxyInitialized = true;
          this.proxy.style.display = "none";
          this.proxyEventsToBlock.forEach((name) => this.proxy.addEventListener(name, this.stopPropagation));
          this.proxy.disabled = this.disabled;
          this.proxy.required = this.required;
          if (typeof this.name === "string") {
            this.proxy.name = this.name;
          }
          if (typeof this.value === "string") {
            this.proxy.value = this.value;
          }
          this.proxy.setAttribute("slot", proxySlotName);
          this.proxySlot = document.createElement("slot");
          this.proxySlot.setAttribute("name", proxySlotName);
        }
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.proxySlot);
        this.appendChild(this.proxy);
      }
      detachProxy() {
        var _a;
        this.removeChild(this.proxy);
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.removeChild(this.proxySlot);
      }
      validate() {
        if (this.proxy instanceof HTMLElement) {
          this.setValidity(this.proxy.validity, this.proxy.validationMessage);
        }
      }
      setFormValue(value, state) {
        if (this.elementInternals) {
          this.elementInternals.setFormValue(value, state || value);
        }
      }
      _keypressHandler(e) {
        switch (e.key) {
          case keyEnter:
            if (this.form instanceof HTMLFormElement) {
              const defaultButton = this.form.querySelector("[type=submit]");
              defaultButton === null || defaultButton === void 0 ? void 0 : defaultButton.click();
            }
            break;
        }
      }
      stopPropagation(e) {
        e.stopPropagation();
      }
    };
    attr({ mode: "boolean" })(C.prototype, "disabled");
    attr({ mode: "fromView", attribute: "value" })(C.prototype, "initialValue");
    attr({ attribute: "current-value" })(C.prototype, "currentValue");
    attr(C.prototype, "name");
    attr({ mode: "boolean" })(C.prototype, "required");
    observable(C.prototype, "value");
    return C;
  }

  // node_modules/@microsoft/fast-foundation/dist/esm/button/button.form-associated.js
  var _Button = class extends FoundationElement {
  };
  var FormAssociatedButton = class extends FormAssociated(_Button) {
    constructor() {
      super(...arguments);
      this.proxy = document.createElement("input");
    }
  };

  // node_modules/@microsoft/fast-foundation/dist/esm/button/button.js
  var Button = class extends FormAssociatedButton {
    constructor() {
      super(...arguments);
      this.handleClick = (e) => {
        var _a;
        if (this.disabled && ((_a = this.defaultSlottedContent) === null || _a === void 0 ? void 0 : _a.length) <= 1) {
          e.stopPropagation();
        }
      };
      this.handleSubmission = () => {
        if (!this.form) {
          return;
        }
        const attached = this.proxy.isConnected;
        if (!attached) {
          this.attachProxy();
        }
        typeof this.form.requestSubmit === "function" ? this.form.requestSubmit(this.proxy) : this.proxy.click();
        if (!attached) {
          this.detachProxy();
        }
      };
      this.handleFormReset = () => {
        var _a;
        (_a = this.form) === null || _a === void 0 ? void 0 : _a.reset();
      };
      this.handleUnsupportedDelegatesFocus = () => {
        var _a;
        if (window.ShadowRoot && !window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus") && ((_a = this.$fastController.definition.shadowOptions) === null || _a === void 0 ? void 0 : _a.delegatesFocus)) {
          this.focus = () => {
            this.control.focus();
          };
        }
      };
    }
    formactionChanged() {
      if (this.proxy instanceof HTMLInputElement) {
        this.proxy.formAction = this.formaction;
      }
    }
    formenctypeChanged() {
      if (this.proxy instanceof HTMLInputElement) {
        this.proxy.formEnctype = this.formenctype;
      }
    }
    formmethodChanged() {
      if (this.proxy instanceof HTMLInputElement) {
        this.proxy.formMethod = this.formmethod;
      }
    }
    formnovalidateChanged() {
      if (this.proxy instanceof HTMLInputElement) {
        this.proxy.formNoValidate = this.formnovalidate;
      }
    }
    formtargetChanged() {
      if (this.proxy instanceof HTMLInputElement) {
        this.proxy.formTarget = this.formtarget;
      }
    }
    typeChanged(previous, next) {
      if (this.proxy instanceof HTMLInputElement) {
        this.proxy.type = this.type;
      }
      next === "submit" && this.addEventListener("click", this.handleSubmission);
      previous === "submit" && this.removeEventListener("click", this.handleSubmission);
      next === "reset" && this.addEventListener("click", this.handleFormReset);
      previous === "reset" && this.removeEventListener("click", this.handleFormReset);
    }
    connectedCallback() {
      var _a;
      super.connectedCallback();
      this.proxy.setAttribute("type", this.type);
      this.handleUnsupportedDelegatesFocus();
      const elements = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
      if (elements) {
        elements.forEach((span) => {
          span.addEventListener("click", this.handleClick);
        });
      }
    }
    disconnectedCallback() {
      var _a;
      super.disconnectedCallback();
      const elements = Array.from((_a = this.control) === null || _a === void 0 ? void 0 : _a.children);
      if (elements) {
        elements.forEach((span) => {
          span.removeEventListener("click", this.handleClick);
        });
      }
    }
  };
  __decorate([
    attr({ mode: "boolean" })
  ], Button.prototype, "autofocus", void 0);
  __decorate([
    attr({ attribute: "form" })
  ], Button.prototype, "formId", void 0);
  __decorate([
    attr
  ], Button.prototype, "formaction", void 0);
  __decorate([
    attr
  ], Button.prototype, "formenctype", void 0);
  __decorate([
    attr
  ], Button.prototype, "formmethod", void 0);
  __decorate([
    attr({ mode: "boolean" })
  ], Button.prototype, "formnovalidate", void 0);
  __decorate([
    attr
  ], Button.prototype, "formtarget", void 0);
  __decorate([
    attr
  ], Button.prototype, "type", void 0);
  __decorate([
    observable
  ], Button.prototype, "defaultSlottedContent", void 0);
  var DelegatesARIAButton = class {
  };
  __decorate([
    attr({ attribute: "aria-expanded" })
  ], DelegatesARIAButton.prototype, "ariaExpanded", void 0);
  __decorate([
    attr({ attribute: "aria-pressed" })
  ], DelegatesARIAButton.prototype, "ariaPressed", void 0);
  applyMixins(DelegatesARIAButton, ARIAGlobalStatesAndProperties);
  applyMixins(Button, StartEnd, DelegatesARIAButton);

  // node_modules/@microsoft/fast-foundation/dist/esm/design-system/design-system.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-parent.js
  init_virtual_process_polyfill();
  function composedParent(element) {
    const parentNode = element.parentElement;
    if (parentNode) {
      return parentNode;
    } else {
      const rootNode = element.getRootNode();
      if (rootNode.host instanceof HTMLElement) {
        return rootNode.host;
      }
    }
    return null;
  }

  // node_modules/@microsoft/fast-foundation/dist/esm/utilities/composed-contains.js
  init_virtual_process_polyfill();
  function composedContains(reference, test) {
    let current = test;
    while (current !== null) {
      if (current === reference) {
        return true;
      }
      current = composedParent(current);
    }
    return false;
  }

  // node_modules/@microsoft/fast-foundation/dist/esm/design-token/custom-property-manager.js
  init_virtual_process_polyfill();
  var defaultElement = document.createElement("div");
  function isFastElement(element) {
    return element instanceof FASTElement;
  }
  var QueuedStyleSheetTarget = class {
    setProperty(name, value) {
      DOM.queueUpdate(() => this.target.setProperty(name, value));
    }
    removeProperty(name) {
      DOM.queueUpdate(() => this.target.removeProperty(name));
    }
  };
  var ConstructableStyleSheetTarget = class extends QueuedStyleSheetTarget {
    constructor(source) {
      super();
      const sheet = new CSSStyleSheet();
      this.target = sheet.cssRules[sheet.insertRule(":host{}")].style;
      source.$fastController.addStyles(ElementStyles.create([sheet]));
    }
  };
  var DocumentStyleSheetTarget = class extends QueuedStyleSheetTarget {
    constructor() {
      super();
      const sheet = new CSSStyleSheet();
      this.target = sheet.cssRules[sheet.insertRule(":root{}")].style;
      document.adoptedStyleSheets = [
        ...document.adoptedStyleSheets,
        sheet
      ];
    }
  };
  var HeadStyleElementStyleSheetTarget = class extends QueuedStyleSheetTarget {
    constructor() {
      super();
      this.style = document.createElement("style");
      document.head.appendChild(this.style);
      const { sheet } = this.style;
      if (sheet) {
        const index = sheet.insertRule(":root{}", sheet.cssRules.length);
        this.target = sheet.cssRules[index].style;
      }
    }
  };
  var StyleElementStyleSheetTarget = class {
    constructor(target2) {
      this.store = /* @__PURE__ */ new Map();
      this.target = null;
      const controller = target2.$fastController;
      this.style = document.createElement("style");
      controller.addStyles(this.style);
      Observable.getNotifier(controller).subscribe(this, "isConnected");
      this.handleChange(controller, "isConnected");
    }
    targetChanged() {
      if (this.target !== null) {
        for (const [key, value] of this.store.entries()) {
          this.target.setProperty(key, value);
        }
      }
    }
    setProperty(name, value) {
      this.store.set(name, value);
      DOM.queueUpdate(() => {
        if (this.target !== null) {
          this.target.setProperty(name, value);
        }
      });
    }
    removeProperty(name) {
      this.store.delete(name);
      DOM.queueUpdate(() => {
        if (this.target !== null) {
          this.target.removeProperty(name);
        }
      });
    }
    handleChange(source, key) {
      const { sheet } = this.style;
      if (sheet) {
        const index = sheet.insertRule(":host{}", sheet.cssRules.length);
        this.target = sheet.cssRules[index].style;
      } else {
        this.target = null;
      }
    }
  };
  __decorate([
    observable
  ], StyleElementStyleSheetTarget.prototype, "target", void 0);
  var ElementStyleSheetTarget = class {
    constructor(source) {
      this.target = source.style;
    }
    setProperty(name, value) {
      DOM.queueUpdate(() => this.target.setProperty(name, value));
    }
    removeProperty(name) {
      DOM.queueUpdate(() => this.target.removeProperty(name));
    }
  };
  var RootStyleSheetTarget = class {
    setProperty(name, value) {
      RootStyleSheetTarget.properties[name] = value;
      for (const target2 of RootStyleSheetTarget.roots.values()) {
        PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(target2)).setProperty(name, value);
      }
    }
    removeProperty(name) {
      delete RootStyleSheetTarget.properties[name];
      for (const target2 of RootStyleSheetTarget.roots.values()) {
        PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(target2)).removeProperty(name);
      }
    }
    static registerRoot(root) {
      const { roots } = RootStyleSheetTarget;
      if (!roots.has(root)) {
        roots.add(root);
        const target2 = PropertyTargetManager.getOrCreate(this.normalizeRoot(root));
        for (const key in RootStyleSheetTarget.properties) {
          target2.setProperty(key, RootStyleSheetTarget.properties[key]);
        }
      }
    }
    static unregisterRoot(root) {
      const { roots } = RootStyleSheetTarget;
      if (roots.has(root)) {
        roots.delete(root);
        const target2 = PropertyTargetManager.getOrCreate(RootStyleSheetTarget.normalizeRoot(root));
        for (const key in RootStyleSheetTarget.properties) {
          target2.removeProperty(key);
        }
      }
    }
    static normalizeRoot(root) {
      return root === defaultElement ? document : root;
    }
  };
  RootStyleSheetTarget.roots = /* @__PURE__ */ new Set();
  RootStyleSheetTarget.properties = {};
  var propertyTargetCache = /* @__PURE__ */ new WeakMap();
  var propertyTargetCtor = DOM.supportsAdoptedStyleSheets ? ConstructableStyleSheetTarget : StyleElementStyleSheetTarget;
  var PropertyTargetManager = Object.freeze({
    getOrCreate(source) {
      if (propertyTargetCache.has(source)) {
        return propertyTargetCache.get(source);
      }
      let target2;
      if (source === defaultElement) {
        target2 = new RootStyleSheetTarget();
      } else if (source instanceof Document) {
        target2 = DOM.supportsAdoptedStyleSheets ? new DocumentStyleSheetTarget() : new HeadStyleElementStyleSheetTarget();
      } else if (isFastElement(source)) {
        target2 = new propertyTargetCtor(source);
      } else {
        target2 = new ElementStyleSheetTarget(source);
      }
      propertyTargetCache.set(source, target2);
      return target2;
    }
  });

  // node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js
  var DesignTokenImpl = class extends CSSDirective {
    constructor(configuration) {
      super();
      this.subscribers = /* @__PURE__ */ new WeakMap();
      this._appliedTo = /* @__PURE__ */ new Set();
      this.name = configuration.name;
      if (configuration.cssCustomPropertyName !== null) {
        this.cssCustomProperty = `--${configuration.cssCustomPropertyName}`;
        this.cssVar = `var(${this.cssCustomProperty})`;
      }
      this.id = DesignTokenImpl.uniqueId();
      DesignTokenImpl.tokensById.set(this.id, this);
    }
    get appliedTo() {
      return [...this._appliedTo];
    }
    static from(nameOrConfig) {
      return new DesignTokenImpl({
        name: typeof nameOrConfig === "string" ? nameOrConfig : nameOrConfig.name,
        cssCustomPropertyName: typeof nameOrConfig === "string" ? nameOrConfig : nameOrConfig.cssCustomPropertyName === void 0 ? nameOrConfig.name : nameOrConfig.cssCustomPropertyName
      });
    }
    static isCSSDesignToken(token) {
      return typeof token.cssCustomProperty === "string";
    }
    static isDerivedDesignTokenValue(value) {
      return typeof value === "function";
    }
    static getTokenById(id) {
      return DesignTokenImpl.tokensById.get(id);
    }
    getOrCreateSubscriberSet(target2 = this) {
      return this.subscribers.get(target2) || this.subscribers.set(target2, /* @__PURE__ */ new Set()) && this.subscribers.get(target2);
    }
    createCSS() {
      return this.cssVar || "";
    }
    getValueFor(element) {
      const value = DesignTokenNode.getOrCreate(element).get(this);
      if (value !== void 0) {
        return value;
      }
      throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${element} or an ancestor of ${element}.`);
    }
    setValueFor(element, value) {
      this._appliedTo.add(element);
      if (value instanceof DesignTokenImpl) {
        value = this.alias(value);
      }
      DesignTokenNode.getOrCreate(element).set(this, value);
      return this;
    }
    deleteValueFor(element) {
      this._appliedTo.delete(element);
      if (DesignTokenNode.existsFor(element)) {
        DesignTokenNode.getOrCreate(element).delete(this);
      }
      return this;
    }
    withDefault(value) {
      this.setValueFor(defaultElement, value);
      return this;
    }
    subscribe(subscriber, target2) {
      const subscriberSet = this.getOrCreateSubscriberSet(target2);
      if (target2 && !DesignTokenNode.existsFor(target2)) {
        DesignTokenNode.getOrCreate(target2);
      }
      if (!subscriberSet.has(subscriber)) {
        subscriberSet.add(subscriber);
      }
    }
    unsubscribe(subscriber, target2) {
      const list = this.subscribers.get(target2 || this);
      if (list && list.has(subscriber)) {
        list.delete(subscriber);
      }
    }
    notify(element) {
      const record = Object.freeze({ token: this, target: element });
      if (this.subscribers.has(this)) {
        this.subscribers.get(this).forEach((sub) => sub.handleChange(record));
      }
      if (this.subscribers.has(element)) {
        this.subscribers.get(element).forEach((sub) => sub.handleChange(record));
      }
    }
    alias(token) {
      return (target2) => token.getValueFor(target2);
    }
  };
  DesignTokenImpl.uniqueId = (() => {
    let id = 0;
    return () => {
      id++;
      return id.toString(16);
    };
  })();
  DesignTokenImpl.tokensById = /* @__PURE__ */ new Map();
  var CustomPropertyReflector = class {
    startReflection(token, target2) {
      token.subscribe(this, target2);
      this.handleChange({ token, target: target2 });
    }
    stopReflection(token, target2) {
      token.unsubscribe(this, target2);
      this.remove(token, target2);
    }
    handleChange(record) {
      const { token, target: target2 } = record;
      this.add(token, target2);
    }
    add(token, target2) {
      PropertyTargetManager.getOrCreate(target2).setProperty(token.cssCustomProperty, this.resolveCSSValue(DesignTokenNode.getOrCreate(target2).get(token)));
    }
    remove(token, target2) {
      PropertyTargetManager.getOrCreate(target2).removeProperty(token.cssCustomProperty);
    }
    resolveCSSValue(value) {
      return value && typeof value.createCSS === "function" ? value.createCSS() : value;
    }
  };
  var DesignTokenBindingObserver = class {
    constructor(source, token, node) {
      this.source = source;
      this.token = token;
      this.node = node;
      this.dependencies = /* @__PURE__ */ new Set();
      this.observer = Observable.binding(source, this, false);
      this.observer.handleChange = this.observer.call;
      this.handleChange();
    }
    disconnect() {
      this.observer.disconnect();
    }
    handleChange() {
      this.node.store.set(this.token, this.observer.observe(this.node.target, defaultExecutionContext));
    }
  };
  var Store = class {
    constructor() {
      this.values = /* @__PURE__ */ new Map();
    }
    set(token, value) {
      if (this.values.get(token) !== value) {
        this.values.set(token, value);
        Observable.getNotifier(this).notify(token.id);
      }
    }
    get(token) {
      Observable.track(this, token.id);
      return this.values.get(token);
    }
    delete(token) {
      this.values.delete(token);
    }
    all() {
      return this.values.entries();
    }
  };
  var nodeCache = /* @__PURE__ */ new WeakMap();
  var childToParent = /* @__PURE__ */ new WeakMap();
  var DesignTokenNode = class {
    constructor(target2) {
      this.target = target2;
      this.store = new Store();
      this.children = [];
      this.assignedValues = /* @__PURE__ */ new Map();
      this.reflecting = /* @__PURE__ */ new Set();
      this.bindingObservers = /* @__PURE__ */ new Map();
      this.tokenValueChangeHandler = {
        handleChange: (source, arg) => {
          const token = DesignTokenImpl.getTokenById(arg);
          if (token) {
            token.notify(this.target);
            if (DesignTokenImpl.isCSSDesignToken(token)) {
              const parent = this.parent;
              const reflecting = this.isReflecting(token);
              if (parent) {
                const parentValue = parent.get(token);
                const sourceValue = source.get(token);
                if (parentValue !== sourceValue && !reflecting) {
                  this.reflectToCSS(token);
                } else if (parentValue === sourceValue && reflecting) {
                  this.stopReflectToCSS(token);
                }
              } else if (!reflecting) {
                this.reflectToCSS(token);
              }
            }
          }
        }
      };
      nodeCache.set(target2, this);
      Observable.getNotifier(this.store).subscribe(this.tokenValueChangeHandler);
      if (target2 instanceof FASTElement) {
        target2.$fastController.addBehaviors([this]);
      } else if (target2.isConnected) {
        this.bind();
      }
    }
    static getOrCreate(target2) {
      return nodeCache.get(target2) || new DesignTokenNode(target2);
    }
    static existsFor(target2) {
      return nodeCache.has(target2);
    }
    static findParent(node) {
      if (!(defaultElement === node.target)) {
        let parent = composedParent(node.target);
        while (parent !== null) {
          if (nodeCache.has(parent)) {
            return nodeCache.get(parent);
          }
          parent = composedParent(parent);
        }
        return DesignTokenNode.getOrCreate(defaultElement);
      }
      return null;
    }
    static findClosestAssignedNode(token, start) {
      let current = start;
      do {
        if (current.has(token)) {
          return current;
        }
        current = current.parent ? current.parent : current.target !== defaultElement ? DesignTokenNode.getOrCreate(defaultElement) : null;
      } while (current !== null);
      return null;
    }
    get parent() {
      return childToParent.get(this) || null;
    }
    has(token) {
      return this.assignedValues.has(token);
    }
    get(token) {
      const value = this.store.get(token);
      if (value !== void 0) {
        return value;
      }
      const raw = this.getRaw(token);
      if (raw !== void 0) {
        this.hydrate(token, raw);
        return this.get(token);
      }
    }
    getRaw(token) {
      var _a;
      if (this.assignedValues.has(token)) {
        return this.assignedValues.get(token);
      }
      return (_a = DesignTokenNode.findClosestAssignedNode(token, this)) === null || _a === void 0 ? void 0 : _a.getRaw(token);
    }
    set(token, value) {
      if (DesignTokenImpl.isDerivedDesignTokenValue(this.assignedValues.get(token))) {
        this.tearDownBindingObserver(token);
      }
      this.assignedValues.set(token, value);
      if (DesignTokenImpl.isDerivedDesignTokenValue(value)) {
        this.setupBindingObserver(token, value);
      } else {
        this.store.set(token, value);
      }
    }
    delete(token) {
      this.assignedValues.delete(token);
      this.tearDownBindingObserver(token);
      const upstream = this.getRaw(token);
      if (upstream) {
        this.hydrate(token, upstream);
      } else {
        this.store.delete(token);
      }
    }
    bind() {
      const parent = DesignTokenNode.findParent(this);
      if (parent) {
        parent.appendChild(this);
      }
      for (const key of this.assignedValues.keys()) {
        key.notify(this.target);
      }
    }
    unbind() {
      if (this.parent) {
        const parent = childToParent.get(this);
        parent.removeChild(this);
      }
    }
    appendChild(child) {
      if (child.parent) {
        childToParent.get(child).removeChild(child);
      }
      const reParent = this.children.filter((x2) => child.contains(x2));
      childToParent.set(child, this);
      this.children.push(child);
      reParent.forEach((x2) => child.appendChild(x2));
      Observable.getNotifier(this.store).subscribe(child);
      for (const [token, value] of this.store.all()) {
        child.hydrate(token, this.bindingObservers.has(token) ? this.getRaw(token) : value);
      }
    }
    removeChild(child) {
      const childIndex = this.children.indexOf(child);
      if (childIndex !== -1) {
        this.children.splice(childIndex, 1);
      }
      Observable.getNotifier(this.store).unsubscribe(child);
      return child.parent === this ? childToParent.delete(child) : false;
    }
    contains(test) {
      return composedContains(this.target, test.target);
    }
    reflectToCSS(token) {
      if (!this.isReflecting(token)) {
        this.reflecting.add(token);
        DesignTokenNode.cssCustomPropertyReflector.startReflection(token, this.target);
      }
    }
    stopReflectToCSS(token) {
      if (this.isReflecting(token)) {
        this.reflecting.delete(token);
        DesignTokenNode.cssCustomPropertyReflector.stopReflection(token, this.target);
      }
    }
    isReflecting(token) {
      return this.reflecting.has(token);
    }
    handleChange(source, property) {
      const token = DesignTokenImpl.getTokenById(property);
      if (!token) {
        return;
      }
      this.hydrate(token, this.getRaw(token));
    }
    hydrate(token, value) {
      if (!this.has(token)) {
        const observer = this.bindingObservers.get(token);
        if (DesignTokenImpl.isDerivedDesignTokenValue(value)) {
          if (observer) {
            if (observer.source !== value) {
              this.tearDownBindingObserver(token);
              this.setupBindingObserver(token, value);
            }
          } else {
            this.setupBindingObserver(token, value);
          }
        } else {
          if (observer) {
            this.tearDownBindingObserver(token);
          }
          this.store.set(token, value);
        }
      }
    }
    setupBindingObserver(token, source) {
      const binding2 = new DesignTokenBindingObserver(source, token, this);
      this.bindingObservers.set(token, binding2);
      return binding2;
    }
    tearDownBindingObserver(token) {
      if (this.bindingObservers.has(token)) {
        this.bindingObservers.get(token).disconnect();
        this.bindingObservers.delete(token);
        return true;
      }
      return false;
    }
  };
  DesignTokenNode.cssCustomPropertyReflector = new CustomPropertyReflector();
  __decorate([
    observable
  ], DesignTokenNode.prototype, "children", void 0);
  function create(nameOrConfig) {
    return DesignTokenImpl.from(nameOrConfig);
  }
  var DesignToken = Object.freeze({
    create,
    notifyConnection(element) {
      if (!element.isConnected || !DesignTokenNode.existsFor(element)) {
        return false;
      }
      DesignTokenNode.getOrCreate(element).bind();
      return true;
    },
    notifyDisconnection(element) {
      if (element.isConnected || !DesignTokenNode.existsFor(element)) {
        return false;
      }
      DesignTokenNode.getOrCreate(element).unbind();
      return true;
    },
    registerRoot(target2 = defaultElement) {
      RootStyleSheetTarget.registerRoot(target2);
    },
    unregisterRoot(target2 = defaultElement) {
      RootStyleSheetTarget.unregisterRoot(target2);
    }
  });

  // node_modules/@microsoft/fast-foundation/dist/esm/design-system/design-system.js
  var ElementDisambiguation = Object.freeze({
    definitionCallbackOnly: null,
    ignoreDuplicate: Symbol()
  });
  var elementTypesByTag = /* @__PURE__ */ new Map();
  var elementTagsByType = /* @__PURE__ */ new Map();
  var rootDesignSystem = null;
  var designSystemKey = DI.createInterface((x2) => x2.cachedCallback((handler) => {
    if (rootDesignSystem === null) {
      rootDesignSystem = new DefaultDesignSystem(null, handler);
    }
    return rootDesignSystem;
  }));
  var DesignSystem = Object.freeze({
    tagFor(type) {
      return elementTagsByType.get(type);
    },
    responsibleFor(element) {
      const owned = element.$$designSystem$$;
      if (owned) {
        return owned;
      }
      const container = DI.findResponsibleContainer(element);
      return container.get(designSystemKey);
    },
    getOrCreate(node) {
      if (!node) {
        if (rootDesignSystem === null) {
          rootDesignSystem = DI.getOrCreateDOMContainer().get(designSystemKey);
        }
        return rootDesignSystem;
      }
      const owned = node.$$designSystem$$;
      if (owned) {
        return owned;
      }
      const container = DI.getOrCreateDOMContainer(node);
      if (container.has(designSystemKey, false)) {
        return container.get(designSystemKey);
      } else {
        const system = new DefaultDesignSystem(node, container);
        container.register(Registration.instance(designSystemKey, system));
        return system;
      }
    }
  });
  function extractTryDefineElementParams(params, elementDefinitionType, elementDefinitionCallback) {
    if (typeof params === "string") {
      return {
        name: params,
        type: elementDefinitionType,
        callback: elementDefinitionCallback
      };
    } else {
      return params;
    }
  }
  var DefaultDesignSystem = class {
    constructor(owner, container) {
      this.owner = owner;
      this.container = container;
      this.designTokensInitialized = false;
      this.prefix = "fast";
      this.shadowRootMode = void 0;
      this.disambiguate = () => ElementDisambiguation.definitionCallbackOnly;
      if (owner !== null) {
        owner.$$designSystem$$ = this;
      }
    }
    withPrefix(prefix) {
      this.prefix = prefix;
      return this;
    }
    withShadowRootMode(mode) {
      this.shadowRootMode = mode;
      return this;
    }
    withElementDisambiguation(callback) {
      this.disambiguate = callback;
      return this;
    }
    withDesignTokenRoot(root) {
      this.designTokenRoot = root;
      return this;
    }
    register(...registrations) {
      const container = this.container;
      const elementDefinitionEntries = [];
      const disambiguate = this.disambiguate;
      const shadowRootMode = this.shadowRootMode;
      const context = {
        elementPrefix: this.prefix,
        tryDefineElement(params, elementDefinitionType, elementDefinitionCallback) {
          const extractedParams = extractTryDefineElementParams(params, elementDefinitionType, elementDefinitionCallback);
          const { name, callback, baseClass } = extractedParams;
          let { type } = extractedParams;
          let elementName = name;
          let typeFoundByName = elementTypesByTag.get(elementName);
          let needsDefine = true;
          while (typeFoundByName) {
            const result = disambiguate(elementName, type, typeFoundByName);
            switch (result) {
              case ElementDisambiguation.ignoreDuplicate:
                return;
              case ElementDisambiguation.definitionCallbackOnly:
                needsDefine = false;
                typeFoundByName = void 0;
                break;
              default:
                elementName = result;
                typeFoundByName = elementTypesByTag.get(elementName);
                break;
            }
          }
          if (needsDefine) {
            if (elementTagsByType.has(type) || type === FoundationElement) {
              type = class extends type {
              };
            }
            elementTypesByTag.set(elementName, type);
            elementTagsByType.set(type, elementName);
            if (baseClass) {
              elementTagsByType.set(baseClass, elementName);
            }
          }
          elementDefinitionEntries.push(new ElementDefinitionEntry(container, elementName, type, shadowRootMode, callback, needsDefine));
        }
      };
      if (!this.designTokensInitialized) {
        this.designTokensInitialized = true;
        if (this.designTokenRoot !== null) {
          DesignToken.registerRoot(this.designTokenRoot);
        }
      }
      container.registerWithContext(context, ...registrations);
      for (const entry of elementDefinitionEntries) {
        entry.callback(entry);
        if (entry.willDefine && entry.definition !== null) {
          entry.definition.define();
        }
      }
      return this;
    }
  };
  var ElementDefinitionEntry = class {
    constructor(container, name, type, shadowRootMode, callback, willDefine) {
      this.container = container;
      this.name = name;
      this.type = type;
      this.shadowRootMode = shadowRootMode;
      this.callback = callback;
      this.willDefine = willDefine;
      this.definition = null;
    }
    definePresentation(presentation) {
      ComponentPresentation.define(this.name, presentation, this.container);
    }
    defineElement(definition) {
      this.definition = new FASTElementDefinition(this.type, Object.assign(Object.assign({}, definition), { name: this.name }));
    }
    tagFor(type) {
      return DesignSystem.tagFor(type);
    }
  };

  // node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js
  init_virtual_process_polyfill();
  var MatchMediaBehavior = class {
    constructor(query) {
      this.listenerCache = /* @__PURE__ */ new WeakMap();
      this.query = query;
    }
    bind(source) {
      const { query } = this;
      const listener = this.constructListener(source);
      listener.bind(query)();
      query.addListener(listener);
      this.listenerCache.set(source, listener);
    }
    unbind(source) {
      const listener = this.listenerCache.get(source);
      if (listener) {
        this.query.removeListener(listener);
        this.listenerCache.delete(source);
      }
    }
  };
  var MatchMediaStyleSheetBehavior = class extends MatchMediaBehavior {
    constructor(query, styles) {
      super(query);
      this.styles = styles;
    }
    static with(query) {
      return (styles) => {
        return new MatchMediaStyleSheetBehavior(query, styles);
      };
    }
    constructListener(source) {
      let attached = false;
      const styles = this.styles;
      return function listener() {
        const { matches } = this;
        if (matches && !attached) {
          source.$fastController.addStyles(styles);
          attached = matches;
        } else if (!matches && attached) {
          source.$fastController.removeStyles(styles);
          attached = matches;
        }
      };
    }
    unbind(source) {
      super.unbind(source);
      source.$fastController.removeStyles(this.styles);
    }
  };
  var forcedColorsStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(forced-colors)"));
  var darkModeStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(prefers-color-scheme: dark)"));
  var lightModeStylesheetBehavior = MatchMediaStyleSheetBehavior.with(window.matchMedia("(prefers-color-scheme: light)"));

  // node_modules/@microsoft/fast-foundation/dist/esm/utilities/property-stylesheet-behavior.js
  init_virtual_process_polyfill();
  var PropertyStyleSheetBehavior = class {
    constructor(propertyName, value, styles) {
      this.propertyName = propertyName;
      this.value = value;
      this.styles = styles;
    }
    bind(elementInstance) {
      Observable.getNotifier(elementInstance).subscribe(this, this.propertyName);
      this.handleChange(elementInstance, this.propertyName);
    }
    unbind(source) {
      Observable.getNotifier(source).unsubscribe(this, this.propertyName);
      source.$fastController.removeStyles(this.styles);
    }
    handleChange(source, key) {
      if (source[key] === this.value) {
        source.$fastController.addStyles(this.styles);
      } else {
        source.$fastController.removeStyles(this.styles);
      }
    }
  };

  // node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js
  init_virtual_process_polyfill();
  var disabledCursor = "not-allowed";

  // node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js
  init_virtual_process_polyfill();
  var hidden = `:host([hidden]){display:none}`;
  function display(displayValue) {
    return `${hidden}:host{display:${displayValue}}`;
  }

  // node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js
  init_virtual_process_polyfill();
  var focusVisible = canUseFocusVisible() ? "focus-visible" : "focus";

  // node_modules/@microsoft/fast-components/dist/esm/design-tokens.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-components/dist/esm/color/palette.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-colors/dist/color-blending.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-colors/dist/color-converters.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-colors/dist/color-hsl.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-colors/dist/math-utilities.js
  init_virtual_process_polyfill();
  function clamp(i2, min, max) {
    if (isNaN(i2) || i2 <= min) {
      return min;
    } else if (i2 >= max) {
      return max;
    }
    return i2;
  }
  function normalize(i2, min, max) {
    if (isNaN(i2) || i2 <= min) {
      return 0;
    } else if (i2 >= max) {
      return 1;
    }
    return i2 / (max - min);
  }
  function denormalize(i2, min, max) {
    if (isNaN(i2)) {
      return min;
    }
    return min + i2 * (max - min);
  }
  function degreesToRadians(i2) {
    return i2 * (Math.PI / 180);
  }
  function radiansToDegrees(i2) {
    return i2 * (180 / Math.PI);
  }
  function getHexStringForByte(i2) {
    const s2 = Math.round(clamp(i2, 0, 255)).toString(16);
    if (s2.length === 1) {
      return "0" + s2;
    }
    return s2;
  }
  function lerp(i2, min, max) {
    if (isNaN(i2) || i2 <= 0) {
      return min;
    } else if (i2 >= 1) {
      return max;
    }
    return min + i2 * (max - min);
  }
  function lerpAnglesInDegrees(i2, min, max) {
    if (i2 <= 0) {
      return min % 360;
    } else if (i2 >= 1) {
      return max % 360;
    }
    const a2 = (min - max + 360) % 360;
    const b2 = (max - min + 360) % 360;
    if (a2 <= b2) {
      return (min - a2 * i2 + 360) % 360;
    }
    return (min + a2 * i2 + 360) % 360;
  }
  var TwoPI = Math.PI * 2;
  function roundToPrecisionSmall(i2, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(i2 * factor) / factor;
  }

  // node_modules/@microsoft/fast-colors/dist/color-hsl.js
  var ColorHSL = class {
    constructor(hue, sat, lum) {
      this.h = hue;
      this.s = sat;
      this.l = lum;
    }
    static fromObject(data) {
      if (data && !isNaN(data.h) && !isNaN(data.s) && !isNaN(data.l)) {
        return new ColorHSL(data.h, data.s, data.l);
      }
      return null;
    }
    equalValue(rhs) {
      return this.h === rhs.h && this.s === rhs.s && this.l === rhs.l;
    }
    roundToPrecision(precision) {
      return new ColorHSL(roundToPrecisionSmall(this.h, precision), roundToPrecisionSmall(this.s, precision), roundToPrecisionSmall(this.l, precision));
    }
    toObject() {
      return { h: this.h, s: this.s, l: this.l };
    }
  };

  // node_modules/@microsoft/fast-colors/dist/color-hsv.js
  init_virtual_process_polyfill();
  var ColorHSV = class {
    constructor(hue, sat, val) {
      this.h = hue;
      this.s = sat;
      this.v = val;
    }
    static fromObject(data) {
      if (data && !isNaN(data.h) && !isNaN(data.s) && !isNaN(data.v)) {
        return new ColorHSV(data.h, data.s, data.v);
      }
      return null;
    }
    equalValue(rhs) {
      return this.h === rhs.h && this.s === rhs.s && this.v === rhs.v;
    }
    roundToPrecision(precision) {
      return new ColorHSV(roundToPrecisionSmall(this.h, precision), roundToPrecisionSmall(this.s, precision), roundToPrecisionSmall(this.v, precision));
    }
    toObject() {
      return { h: this.h, s: this.s, v: this.v };
    }
  };

  // node_modules/@microsoft/fast-colors/dist/color-lab.js
  init_virtual_process_polyfill();
  var ColorLAB = class {
    constructor(l2, a2, b2) {
      this.l = l2;
      this.a = a2;
      this.b = b2;
    }
    static fromObject(data) {
      if (data && !isNaN(data.l) && !isNaN(data.a) && !isNaN(data.b)) {
        return new ColorLAB(data.l, data.a, data.b);
      }
      return null;
    }
    equalValue(rhs) {
      return this.l === rhs.l && this.a === rhs.a && this.b === rhs.b;
    }
    roundToPrecision(precision) {
      return new ColorLAB(roundToPrecisionSmall(this.l, precision), roundToPrecisionSmall(this.a, precision), roundToPrecisionSmall(this.b, precision));
    }
    toObject() {
      return { l: this.l, a: this.a, b: this.b };
    }
  };
  ColorLAB.epsilon = 216 / 24389;
  ColorLAB.kappa = 24389 / 27;

  // node_modules/@microsoft/fast-colors/dist/color-lch.js
  init_virtual_process_polyfill();
  var ColorLCH = class {
    constructor(l2, c2, h2) {
      this.l = l2;
      this.c = c2;
      this.h = h2;
    }
    static fromObject(data) {
      if (data && !isNaN(data.l) && !isNaN(data.c) && !isNaN(data.h)) {
        return new ColorLCH(data.l, data.c, data.h);
      }
      return null;
    }
    equalValue(rhs) {
      return this.l === rhs.l && this.c === rhs.c && this.h === rhs.h;
    }
    roundToPrecision(precision) {
      return new ColorLCH(roundToPrecisionSmall(this.l, precision), roundToPrecisionSmall(this.c, precision), roundToPrecisionSmall(this.h, precision));
    }
    toObject() {
      return { l: this.l, c: this.c, h: this.h };
    }
  };

  // node_modules/@microsoft/fast-colors/dist/color-rgba-64.js
  init_virtual_process_polyfill();
  var ColorRGBA64 = class {
    constructor(red, green, blue, alpha) {
      this.r = red;
      this.g = green;
      this.b = blue;
      this.a = typeof alpha === "number" && !isNaN(alpha) ? alpha : 1;
    }
    static fromObject(data) {
      return data && !isNaN(data.r) && !isNaN(data.g) && !isNaN(data.b) ? new ColorRGBA64(data.r, data.g, data.b, data.a) : null;
    }
    equalValue(rhs) {
      return this.r === rhs.r && this.g === rhs.g && this.b === rhs.b && this.a === rhs.a;
    }
    toStringHexRGB() {
      return "#" + [this.r, this.g, this.b].map(this.formatHexValue).join("");
    }
    toStringHexRGBA() {
      return this.toStringHexRGB() + this.formatHexValue(this.a);
    }
    toStringHexARGB() {
      return "#" + [this.a, this.r, this.g, this.b].map(this.formatHexValue).join("");
    }
    toStringWebRGB() {
      return `rgb(${Math.round(denormalize(this.r, 0, 255))},${Math.round(denormalize(this.g, 0, 255))},${Math.round(denormalize(this.b, 0, 255))})`;
    }
    toStringWebRGBA() {
      return `rgba(${Math.round(denormalize(this.r, 0, 255))},${Math.round(denormalize(this.g, 0, 255))},${Math.round(denormalize(this.b, 0, 255))},${clamp(this.a, 0, 1)})`;
    }
    roundToPrecision(precision) {
      return new ColorRGBA64(roundToPrecisionSmall(this.r, precision), roundToPrecisionSmall(this.g, precision), roundToPrecisionSmall(this.b, precision), roundToPrecisionSmall(this.a, precision));
    }
    clamp() {
      return new ColorRGBA64(clamp(this.r, 0, 1), clamp(this.g, 0, 1), clamp(this.b, 0, 1), clamp(this.a, 0, 1));
    }
    toObject() {
      return { r: this.r, g: this.g, b: this.b, a: this.a };
    }
    formatHexValue(value) {
      return getHexStringForByte(denormalize(value, 0, 255));
    }
  };

  // node_modules/@microsoft/fast-colors/dist/color-xyz.js
  init_virtual_process_polyfill();
  var ColorXYZ = class {
    constructor(x2, y2, z2) {
      this.x = x2;
      this.y = y2;
      this.z = z2;
    }
    static fromObject(data) {
      if (data && !isNaN(data.x) && !isNaN(data.y) && !isNaN(data.z)) {
        return new ColorXYZ(data.x, data.y, data.z);
      }
      return null;
    }
    equalValue(rhs) {
      return this.x === rhs.x && this.y === rhs.y && this.z === rhs.z;
    }
    roundToPrecision(precision) {
      return new ColorXYZ(roundToPrecisionSmall(this.x, precision), roundToPrecisionSmall(this.y, precision), roundToPrecisionSmall(this.z, precision));
    }
    toObject() {
      return { x: this.x, y: this.y, z: this.z };
    }
  };
  ColorXYZ.whitePoint = new ColorXYZ(0.95047, 1, 1.08883);

  // node_modules/@microsoft/fast-colors/dist/color-converters.js
  function rgbToLinearLuminance(rgb) {
    return rgb.r * 0.2126 + rgb.g * 0.7152 + rgb.b * 0.0722;
  }
  function rgbToRelativeLuminance(rgb) {
    function luminanceHelper(i2) {
      if (i2 <= 0.03928) {
        return i2 / 12.92;
      }
      return Math.pow((i2 + 0.055) / 1.055, 2.4);
    }
    return rgbToLinearLuminance(new ColorRGBA64(luminanceHelper(rgb.r), luminanceHelper(rgb.g), luminanceHelper(rgb.b), 1));
  }
  var calculateContrastRatio = (a2, b2) => (a2 + 0.05) / (b2 + 0.05);
  function contrastRatio(a2, b2) {
    const luminanceA = rgbToRelativeLuminance(a2);
    const luminanceB = rgbToRelativeLuminance(b2);
    return luminanceA > luminanceB ? calculateContrastRatio(luminanceA, luminanceB) : calculateContrastRatio(luminanceB, luminanceA);
  }
  function rgbToHSL(rgb) {
    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);
    const delta = max - min;
    let hue = 0;
    if (delta !== 0) {
      if (max === rgb.r) {
        hue = 60 * ((rgb.g - rgb.b) / delta % 6);
      } else if (max === rgb.g) {
        hue = 60 * ((rgb.b - rgb.r) / delta + 2);
      } else {
        hue = 60 * ((rgb.r - rgb.g) / delta + 4);
      }
    }
    if (hue < 0) {
      hue += 360;
    }
    const lum = (max + min) / 2;
    let sat = 0;
    if (delta !== 0) {
      sat = delta / (1 - Math.abs(2 * lum - 1));
    }
    return new ColorHSL(hue, sat, lum);
  }
  function hslToRGB(hsl, alpha = 1) {
    const c2 = (1 - Math.abs(2 * hsl.l - 1)) * hsl.s;
    const x2 = c2 * (1 - Math.abs(hsl.h / 60 % 2 - 1));
    const m = hsl.l - c2 / 2;
    let r2 = 0;
    let g2 = 0;
    let b2 = 0;
    if (hsl.h < 60) {
      r2 = c2;
      g2 = x2;
      b2 = 0;
    } else if (hsl.h < 120) {
      r2 = x2;
      g2 = c2;
      b2 = 0;
    } else if (hsl.h < 180) {
      r2 = 0;
      g2 = c2;
      b2 = x2;
    } else if (hsl.h < 240) {
      r2 = 0;
      g2 = x2;
      b2 = c2;
    } else if (hsl.h < 300) {
      r2 = x2;
      g2 = 0;
      b2 = c2;
    } else if (hsl.h < 360) {
      r2 = c2;
      g2 = 0;
      b2 = x2;
    }
    return new ColorRGBA64(r2 + m, g2 + m, b2 + m, alpha);
  }
  function rgbToHSV(rgb) {
    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);
    const delta = max - min;
    let hue = 0;
    if (delta !== 0) {
      if (max === rgb.r) {
        hue = 60 * ((rgb.g - rgb.b) / delta % 6);
      } else if (max === rgb.g) {
        hue = 60 * ((rgb.b - rgb.r) / delta + 2);
      } else {
        hue = 60 * ((rgb.r - rgb.g) / delta + 4);
      }
    }
    if (hue < 0) {
      hue += 360;
    }
    let sat = 0;
    if (max !== 0) {
      sat = delta / max;
    }
    return new ColorHSV(hue, sat, max);
  }
  function hsvToRGB(hsv, alpha = 1) {
    const c2 = hsv.s * hsv.v;
    const x2 = c2 * (1 - Math.abs(hsv.h / 60 % 2 - 1));
    const m = hsv.v - c2;
    let r2 = 0;
    let g2 = 0;
    let b2 = 0;
    if (hsv.h < 60) {
      r2 = c2;
      g2 = x2;
      b2 = 0;
    } else if (hsv.h < 120) {
      r2 = x2;
      g2 = c2;
      b2 = 0;
    } else if (hsv.h < 180) {
      r2 = 0;
      g2 = c2;
      b2 = x2;
    } else if (hsv.h < 240) {
      r2 = 0;
      g2 = x2;
      b2 = c2;
    } else if (hsv.h < 300) {
      r2 = x2;
      g2 = 0;
      b2 = c2;
    } else if (hsv.h < 360) {
      r2 = c2;
      g2 = 0;
      b2 = x2;
    }
    return new ColorRGBA64(r2 + m, g2 + m, b2 + m, alpha);
  }
  function lchToLAB(lch) {
    let a2 = 0;
    let b2 = 0;
    if (lch.h !== 0) {
      a2 = Math.cos(degreesToRadians(lch.h)) * lch.c;
      b2 = Math.sin(degreesToRadians(lch.h)) * lch.c;
    }
    return new ColorLAB(lch.l, a2, b2);
  }
  function labToLCH(lab) {
    let h2 = 0;
    if (Math.abs(lab.b) > 1e-3 || Math.abs(lab.a) > 1e-3) {
      h2 = radiansToDegrees(Math.atan2(lab.b, lab.a));
    }
    if (h2 < 0) {
      h2 += 360;
    }
    const c2 = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    return new ColorLCH(lab.l, c2, h2);
  }
  function labToXYZ(lab) {
    const fy = (lab.l + 16) / 116;
    const fx = fy + lab.a / 500;
    const fz = fy - lab.b / 200;
    const xcubed = Math.pow(fx, 3);
    const ycubed = Math.pow(fy, 3);
    const zcubed = Math.pow(fz, 3);
    let x2 = 0;
    if (xcubed > ColorLAB.epsilon) {
      x2 = xcubed;
    } else {
      x2 = (116 * fx - 16) / ColorLAB.kappa;
    }
    let y2 = 0;
    if (lab.l > ColorLAB.epsilon * ColorLAB.kappa) {
      y2 = ycubed;
    } else {
      y2 = lab.l / ColorLAB.kappa;
    }
    let z2 = 0;
    if (zcubed > ColorLAB.epsilon) {
      z2 = zcubed;
    } else {
      z2 = (116 * fz - 16) / ColorLAB.kappa;
    }
    x2 = ColorXYZ.whitePoint.x * x2;
    y2 = ColorXYZ.whitePoint.y * y2;
    z2 = ColorXYZ.whitePoint.z * z2;
    return new ColorXYZ(x2, y2, z2);
  }
  function xyzToLAB(xyz) {
    function xyzToLABHelper(i2) {
      if (i2 > ColorLAB.epsilon) {
        return Math.pow(i2, 1 / 3);
      }
      return (ColorLAB.kappa * i2 + 16) / 116;
    }
    const x2 = xyzToLABHelper(xyz.x / ColorXYZ.whitePoint.x);
    const y2 = xyzToLABHelper(xyz.y / ColorXYZ.whitePoint.y);
    const z2 = xyzToLABHelper(xyz.z / ColorXYZ.whitePoint.z);
    const l2 = 116 * y2 - 16;
    const a2 = 500 * (x2 - y2);
    const b2 = 200 * (y2 - z2);
    return new ColorLAB(l2, a2, b2);
  }
  function rgbToXYZ(rgb) {
    function rgbToXYZHelper(i2) {
      if (i2 <= 0.04045) {
        return i2 / 12.92;
      }
      return Math.pow((i2 + 0.055) / 1.055, 2.4);
    }
    const r2 = rgbToXYZHelper(rgb.r);
    const g2 = rgbToXYZHelper(rgb.g);
    const b2 = rgbToXYZHelper(rgb.b);
    const x2 = r2 * 0.4124564 + g2 * 0.3575761 + b2 * 0.1804375;
    const y2 = r2 * 0.2126729 + g2 * 0.7151522 + b2 * 0.072175;
    const z2 = r2 * 0.0193339 + g2 * 0.119192 + b2 * 0.9503041;
    return new ColorXYZ(x2, y2, z2);
  }
  function xyzToRGB(xyz, alpha = 1) {
    function xyzToRGBHelper(i2) {
      if (i2 <= 31308e-7) {
        return i2 * 12.92;
      }
      return 1.055 * Math.pow(i2, 1 / 2.4) - 0.055;
    }
    const r2 = xyzToRGBHelper(xyz.x * 3.2404542 - xyz.y * 1.5371385 - xyz.z * 0.4985314);
    const g2 = xyzToRGBHelper(xyz.x * -0.969266 + xyz.y * 1.8760108 + xyz.z * 0.041556);
    const b2 = xyzToRGBHelper(xyz.x * 0.0556434 - xyz.y * 0.2040259 + xyz.z * 1.0572252);
    return new ColorRGBA64(r2, g2, b2, alpha);
  }
  function rgbToLAB(rgb) {
    return xyzToLAB(rgbToXYZ(rgb));
  }
  function labToRGB(lab, alpha = 1) {
    return xyzToRGB(labToXYZ(lab), alpha);
  }
  function rgbToLCH(rgb) {
    return labToLCH(rgbToLAB(rgb));
  }
  function lchToRGB(lch, alpha = 1) {
    return labToRGB(lchToLAB(lch), alpha);
  }

  // node_modules/@microsoft/fast-colors/dist/color-blending.js
  function saturateViaLCH(input, saturation, saturationConstant = 18) {
    const lch = rgbToLCH(input);
    let sat = lch.c + saturation * saturationConstant;
    if (sat < 0) {
      sat = 0;
    }
    return lchToRGB(new ColorLCH(lch.l, sat, lch.h));
  }
  function blendMultiplyChannel(bottom, top) {
    return bottom * top;
  }
  function blendMultiply(bottom, top) {
    return new ColorRGBA64(blendMultiplyChannel(bottom.r, top.r), blendMultiplyChannel(bottom.g, top.g), blendMultiplyChannel(bottom.b, top.b), 1);
  }
  function blendOverlayChannel(bottom, top) {
    if (bottom < 0.5) {
      return clamp(2 * top * bottom, 0, 1);
    }
    return clamp(1 - 2 * (1 - top) * (1 - bottom), 0, 1);
  }
  function blendOverlay(bottom, top) {
    return new ColorRGBA64(blendOverlayChannel(bottom.r, top.r), blendOverlayChannel(bottom.g, top.g), blendOverlayChannel(bottom.b, top.b), 1);
  }
  var ColorBlendMode;
  (function(ColorBlendMode2) {
    ColorBlendMode2[ColorBlendMode2["Burn"] = 0] = "Burn";
    ColorBlendMode2[ColorBlendMode2["Color"] = 1] = "Color";
    ColorBlendMode2[ColorBlendMode2["Darken"] = 2] = "Darken";
    ColorBlendMode2[ColorBlendMode2["Dodge"] = 3] = "Dodge";
    ColorBlendMode2[ColorBlendMode2["Lighten"] = 4] = "Lighten";
    ColorBlendMode2[ColorBlendMode2["Multiply"] = 5] = "Multiply";
    ColorBlendMode2[ColorBlendMode2["Overlay"] = 6] = "Overlay";
    ColorBlendMode2[ColorBlendMode2["Screen"] = 7] = "Screen";
  })(ColorBlendMode || (ColorBlendMode = {}));

  // node_modules/@microsoft/fast-colors/dist/color-interpolation.js
  init_virtual_process_polyfill();
  function interpolateRGB(position, left, right) {
    if (isNaN(position) || position <= 0) {
      return left;
    } else if (position >= 1) {
      return right;
    }
    return new ColorRGBA64(lerp(position, left.r, right.r), lerp(position, left.g, right.g), lerp(position, left.b, right.b), lerp(position, left.a, right.a));
  }
  function interpolateHSL(position, left, right) {
    if (isNaN(position) || position <= 0) {
      return left;
    } else if (position >= 1) {
      return right;
    }
    return new ColorHSL(lerpAnglesInDegrees(position, left.h, right.h), lerp(position, left.s, right.s), lerp(position, left.l, right.l));
  }
  function interpolateHSV(position, left, right) {
    if (isNaN(position) || position <= 0) {
      return left;
    } else if (position >= 1) {
      return right;
    }
    return new ColorHSV(lerpAnglesInDegrees(position, left.h, right.h), lerp(position, left.s, right.s), lerp(position, left.v, right.v));
  }
  function interpolateXYZ(position, left, right) {
    if (isNaN(position) || position <= 0) {
      return left;
    } else if (position >= 1) {
      return right;
    }
    return new ColorXYZ(lerp(position, left.x, right.x), lerp(position, left.y, right.y), lerp(position, left.z, right.z));
  }
  function interpolateLAB(position, left, right) {
    if (isNaN(position) || position <= 0) {
      return left;
    } else if (position >= 1) {
      return right;
    }
    return new ColorLAB(lerp(position, left.l, right.l), lerp(position, left.a, right.a), lerp(position, left.b, right.b));
  }
  function interpolateLCH(position, left, right) {
    if (isNaN(position) || position <= 0) {
      return left;
    } else if (position >= 1) {
      return right;
    }
    return new ColorLCH(lerp(position, left.l, right.l), lerp(position, left.c, right.c), lerpAnglesInDegrees(position, left.h, right.h));
  }
  var ColorInterpolationSpace;
  (function(ColorInterpolationSpace2) {
    ColorInterpolationSpace2[ColorInterpolationSpace2["RGB"] = 0] = "RGB";
    ColorInterpolationSpace2[ColorInterpolationSpace2["HSL"] = 1] = "HSL";
    ColorInterpolationSpace2[ColorInterpolationSpace2["HSV"] = 2] = "HSV";
    ColorInterpolationSpace2[ColorInterpolationSpace2["XYZ"] = 3] = "XYZ";
    ColorInterpolationSpace2[ColorInterpolationSpace2["LAB"] = 4] = "LAB";
    ColorInterpolationSpace2[ColorInterpolationSpace2["LCH"] = 5] = "LCH";
  })(ColorInterpolationSpace || (ColorInterpolationSpace = {}));
  function interpolateByColorSpace(position, space, left, right) {
    if (isNaN(position) || position <= 0) {
      return left;
    } else if (position >= 1) {
      return right;
    }
    switch (space) {
      case ColorInterpolationSpace.HSL:
        return hslToRGB(interpolateHSL(position, rgbToHSL(left), rgbToHSL(right)));
      case ColorInterpolationSpace.HSV:
        return hsvToRGB(interpolateHSV(position, rgbToHSV(left), rgbToHSV(right)));
      case ColorInterpolationSpace.XYZ:
        return xyzToRGB(interpolateXYZ(position, rgbToXYZ(left), rgbToXYZ(right)));
      case ColorInterpolationSpace.LAB:
        return labToRGB(interpolateLAB(position, rgbToLAB(left), rgbToLAB(right)));
      case ColorInterpolationSpace.LCH:
        return lchToRGB(interpolateLCH(position, rgbToLCH(left), rgbToLCH(right)));
      default:
        return interpolateRGB(position, left, right);
    }
  }

  // node_modules/@microsoft/fast-colors/dist/color-palette.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-colors/dist/color-scale.js
  init_virtual_process_polyfill();
  var ColorScale = class {
    constructor(stops) {
      if (stops == null || stops.length === 0) {
        throw new Error("The stops argument must be non-empty");
      } else {
        this.stops = this.sortColorScaleStops(stops);
      }
    }
    static createBalancedColorScale(colors) {
      if (colors == null || colors.length === 0) {
        throw new Error("The colors argument must be non-empty");
      }
      const stops = new Array(colors.length);
      for (let i2 = 0; i2 < colors.length; i2++) {
        if (i2 === 0) {
          stops[i2] = { color: colors[i2], position: 0 };
        } else if (i2 === colors.length - 1) {
          stops[i2] = { color: colors[i2], position: 1 };
        } else {
          stops[i2] = {
            color: colors[i2],
            position: i2 * (1 / (colors.length - 1))
          };
        }
      }
      return new ColorScale(stops);
    }
    getColor(position, interpolationMode = ColorInterpolationSpace.RGB) {
      if (this.stops.length === 1) {
        return this.stops[0].color;
      } else if (position <= 0) {
        return this.stops[0].color;
      } else if (position >= 1) {
        return this.stops[this.stops.length - 1].color;
      }
      let lowerIndex = 0;
      for (let i2 = 0; i2 < this.stops.length; i2++) {
        if (this.stops[i2].position <= position) {
          lowerIndex = i2;
        }
      }
      let upperIndex = lowerIndex + 1;
      if (upperIndex >= this.stops.length) {
        upperIndex = this.stops.length - 1;
      }
      const scalePosition = (position - this.stops[lowerIndex].position) * (1 / (this.stops[upperIndex].position - this.stops[lowerIndex].position));
      return interpolateByColorSpace(scalePosition, interpolationMode, this.stops[lowerIndex].color, this.stops[upperIndex].color);
    }
    trim(lowerBound, upperBound, interpolationMode = ColorInterpolationSpace.RGB) {
      if (lowerBound < 0 || upperBound > 1 || upperBound < lowerBound) {
        throw new Error("Invalid bounds");
      }
      if (lowerBound === upperBound) {
        return new ColorScale([
          { color: this.getColor(lowerBound, interpolationMode), position: 0 }
        ]);
      }
      const containedStops = [];
      for (let i2 = 0; i2 < this.stops.length; i2++) {
        if (this.stops[i2].position >= lowerBound && this.stops[i2].position <= upperBound) {
          containedStops.push(this.stops[i2]);
        }
      }
      if (containedStops.length === 0) {
        return new ColorScale([
          { color: this.getColor(lowerBound), position: lowerBound },
          { color: this.getColor(upperBound), position: upperBound }
        ]);
      }
      if (containedStops[0].position !== lowerBound) {
        containedStops.unshift({
          color: this.getColor(lowerBound),
          position: lowerBound
        });
      }
      if (containedStops[containedStops.length - 1].position !== upperBound) {
        containedStops.push({
          color: this.getColor(upperBound),
          position: upperBound
        });
      }
      const range2 = upperBound - lowerBound;
      const finalStops = new Array(containedStops.length);
      for (let i2 = 0; i2 < containedStops.length; i2++) {
        finalStops[i2] = {
          color: containedStops[i2].color,
          position: (containedStops[i2].position - lowerBound) / range2
        };
      }
      return new ColorScale(finalStops);
    }
    findNextColor(position, contrast2, searchDown = false, interpolationMode = ColorInterpolationSpace.RGB, contrastErrorMargin = 5e-3, maxSearchIterations = 32) {
      if (isNaN(position) || position <= 0) {
        position = 0;
      } else if (position >= 1) {
        position = 1;
      }
      const startingColor = this.getColor(position, interpolationMode);
      const finalPosition = searchDown ? 0 : 1;
      const finalColor = this.getColor(finalPosition, interpolationMode);
      const finalContrast = contrastRatio(startingColor, finalColor);
      if (finalContrast <= contrast2) {
        return finalPosition;
      }
      let testRangeMin = searchDown ? 0 : position;
      let testRangeMax = searchDown ? position : 0;
      let mid = finalPosition;
      let iterations = 0;
      while (iterations <= maxSearchIterations) {
        mid = Math.abs(testRangeMax - testRangeMin) / 2 + testRangeMin;
        const midColor = this.getColor(mid, interpolationMode);
        const midContrast = contrastRatio(startingColor, midColor);
        if (Math.abs(midContrast - contrast2) <= contrastErrorMargin) {
          return mid;
        } else if (midContrast > contrast2) {
          if (searchDown) {
            testRangeMin = mid;
          } else {
            testRangeMax = mid;
          }
        } else {
          if (searchDown) {
            testRangeMax = mid;
          } else {
            testRangeMin = mid;
          }
        }
        iterations++;
      }
      return mid;
    }
    clone() {
      const newStops = new Array(this.stops.length);
      for (let i2 = 0; i2 < newStops.length; i2++) {
        newStops[i2] = {
          color: this.stops[i2].color,
          position: this.stops[i2].position
        };
      }
      return new ColorScale(newStops);
    }
    sortColorScaleStops(stops) {
      return stops.sort((a2, b2) => {
        const A2 = a2.position;
        const B2 = b2.position;
        if (A2 < B2) {
          return -1;
        } else if (A2 > B2) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  };

  // node_modules/@microsoft/fast-colors/dist/parse-color.js
  init_virtual_process_polyfill();
  var hexRGBRegex = /^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;
  function parseColorHexRGB(raw) {
    const result = hexRGBRegex.exec(raw);
    if (result === null) {
      return null;
    }
    let digits = result[1];
    if (digits.length === 3) {
      const r2 = digits.charAt(0);
      const g2 = digits.charAt(1);
      const b2 = digits.charAt(2);
      digits = r2.concat(r2, g2, g2, b2, b2);
    }
    const rawInt = parseInt(digits, 16);
    if (isNaN(rawInt)) {
      return null;
    }
    return new ColorRGBA64(normalize((rawInt & 16711680) >>> 16, 0, 255), normalize((rawInt & 65280) >>> 8, 0, 255), normalize(rawInt & 255, 0, 255), 1);
  }

  // node_modules/@microsoft/fast-colors/dist/color-palette.js
  var ColorPalette = class {
    constructor(config2) {
      this.config = Object.assign({}, ColorPalette.defaultPaletteConfig, config2);
      this.palette = [];
      this.updatePaletteColors();
    }
    updatePaletteGenerationValues(newConfig) {
      let changed = false;
      for (const key in newConfig) {
        if (this.config[key]) {
          if (this.config[key].equalValue) {
            if (!this.config[key].equalValue(newConfig[key])) {
              this.config[key] = newConfig[key];
              changed = true;
            }
          } else {
            if (newConfig[key] !== this.config[key]) {
              this.config[key] = newConfig[key];
              changed = true;
            }
          }
        }
      }
      if (changed) {
        this.updatePaletteColors();
      }
      return changed;
    }
    updatePaletteColors() {
      const scale = this.generatePaletteColorScale();
      for (let i2 = 0; i2 < this.config.steps; i2++) {
        this.palette[i2] = scale.getColor(i2 / (this.config.steps - 1), this.config.interpolationMode);
      }
    }
    generatePaletteColorScale() {
      const baseColorHSL = rgbToHSL(this.config.baseColor);
      const baseScale = new ColorScale([
        { position: 0, color: this.config.scaleColorLight },
        { position: 0.5, color: this.config.baseColor },
        { position: 1, color: this.config.scaleColorDark }
      ]);
      const trimmedScale = baseScale.trim(this.config.clipLight, 1 - this.config.clipDark);
      const trimmedLight = trimmedScale.getColor(0);
      const trimmedDark = trimmedScale.getColor(1);
      let adjustedLight = trimmedLight;
      let adjustedDark = trimmedDark;
      if (baseColorHSL.s >= this.config.saturationAdjustmentCutoff) {
        adjustedLight = saturateViaLCH(adjustedLight, this.config.saturationLight);
        adjustedDark = saturateViaLCH(adjustedDark, this.config.saturationDark);
      }
      if (this.config.multiplyLight !== 0) {
        const multiply = blendMultiply(this.config.baseColor, adjustedLight);
        adjustedLight = interpolateByColorSpace(this.config.multiplyLight, this.config.interpolationMode, adjustedLight, multiply);
      }
      if (this.config.multiplyDark !== 0) {
        const multiply = blendMultiply(this.config.baseColor, adjustedDark);
        adjustedDark = interpolateByColorSpace(this.config.multiplyDark, this.config.interpolationMode, adjustedDark, multiply);
      }
      if (this.config.overlayLight !== 0) {
        const overlay = blendOverlay(this.config.baseColor, adjustedLight);
        adjustedLight = interpolateByColorSpace(this.config.overlayLight, this.config.interpolationMode, adjustedLight, overlay);
      }
      if (this.config.overlayDark !== 0) {
        const overlay = blendOverlay(this.config.baseColor, adjustedDark);
        adjustedDark = interpolateByColorSpace(this.config.overlayDark, this.config.interpolationMode, adjustedDark, overlay);
      }
      if (this.config.baseScalePosition) {
        if (this.config.baseScalePosition <= 0) {
          return new ColorScale([
            { position: 0, color: this.config.baseColor },
            { position: 1, color: adjustedDark.clamp() }
          ]);
        } else if (this.config.baseScalePosition >= 1) {
          return new ColorScale([
            { position: 0, color: adjustedLight.clamp() },
            { position: 1, color: this.config.baseColor }
          ]);
        }
        return new ColorScale([
          { position: 0, color: adjustedLight.clamp() },
          {
            position: this.config.baseScalePosition,
            color: this.config.baseColor
          },
          { position: 1, color: adjustedDark.clamp() }
        ]);
      }
      return new ColorScale([
        { position: 0, color: adjustedLight.clamp() },
        { position: 0.5, color: this.config.baseColor },
        { position: 1, color: adjustedDark.clamp() }
      ]);
    }
  };
  ColorPalette.defaultPaletteConfig = {
    baseColor: parseColorHexRGB("#808080"),
    steps: 11,
    interpolationMode: ColorInterpolationSpace.RGB,
    scaleColorLight: new ColorRGBA64(1, 1, 1, 1),
    scaleColorDark: new ColorRGBA64(0, 0, 0, 1),
    clipLight: 0.185,
    clipDark: 0.16,
    saturationAdjustmentCutoff: 0.05,
    saturationLight: 0.35,
    saturationDark: 1.25,
    overlayLight: 0,
    overlayDark: 0.25,
    multiplyLight: 0,
    multiplyDark: 0,
    baseScalePosition: 0.5
  };
  ColorPalette.greyscalePaletteConfig = {
    baseColor: parseColorHexRGB("#808080"),
    steps: 11,
    interpolationMode: ColorInterpolationSpace.RGB,
    scaleColorLight: new ColorRGBA64(1, 1, 1, 1),
    scaleColorDark: new ColorRGBA64(0, 0, 0, 1),
    clipLight: 0,
    clipDark: 0,
    saturationAdjustmentCutoff: 0,
    saturationLight: 0,
    saturationDark: 0,
    overlayLight: 0,
    overlayDark: 0,
    multiplyLight: 0,
    multiplyDark: 0,
    baseScalePosition: 0.5
  };
  var defaultCenteredRescaleConfig = {
    targetSize: 63,
    spacing: 4,
    scaleColorLight: ColorPalette.defaultPaletteConfig.scaleColorLight,
    scaleColorDark: ColorPalette.defaultPaletteConfig.scaleColorDark
  };

  // node_modules/@microsoft/fast-colors/dist/component-state-color-palette.js
  init_virtual_process_polyfill();
  var ComponentStateColorPalette = class {
    constructor(config2) {
      this.palette = [];
      this.config = Object.assign({}, ComponentStateColorPalette.defaultPaletteConfig, config2);
      this.regenPalettes();
    }
    regenPalettes() {
      let steps = this.config.steps;
      if (isNaN(steps) || steps < 3) {
        steps = 3;
      }
      const darkLum = 0.14;
      const darkestLum = 0.06;
      const darkLumColor = new ColorRGBA64(darkLum, darkLum, darkLum, 1);
      const stepsForLuminanceRamp = 94;
      const r2 = new ColorPalette(Object.assign(Object.assign({}, ColorPalette.greyscalePaletteConfig), { baseColor: darkLumColor, baseScalePosition: (1 - darkLum) * 100 / stepsForLuminanceRamp, steps }));
      const referencePalette = r2.palette;
      const baseColorLum1 = rgbToLinearLuminance(this.config.baseColor);
      const baseColorLum2 = rgbToHSL(this.config.baseColor).l;
      const baseColorLum = (baseColorLum1 + baseColorLum2) / 2;
      const baseColorRefIndex = this.matchRelativeLuminanceIndex(baseColorLum, referencePalette);
      const baseColorPercent = baseColorRefIndex / (steps - 1);
      const darkRefIndex = this.matchRelativeLuminanceIndex(darkLum, referencePalette);
      const darkPercent = darkRefIndex / (steps - 1);
      const baseColorHSL = rgbToHSL(this.config.baseColor);
      const darkBaseColor = hslToRGB(ColorHSL.fromObject({
        h: baseColorHSL.h,
        s: baseColorHSL.s,
        l: darkLum
      }));
      const darkestBaseColor = hslToRGB(ColorHSL.fromObject({
        h: baseColorHSL.h,
        s: baseColorHSL.s,
        l: darkestLum
      }));
      const fullColorScaleStops = new Array(5);
      fullColorScaleStops[0] = {
        position: 0,
        color: new ColorRGBA64(1, 1, 1, 1)
      };
      fullColorScaleStops[1] = {
        position: baseColorPercent,
        color: this.config.baseColor
      };
      fullColorScaleStops[2] = {
        position: darkPercent,
        color: darkBaseColor
      };
      fullColorScaleStops[3] = {
        position: 0.99,
        color: darkestBaseColor
      };
      fullColorScaleStops[4] = {
        position: 1,
        color: new ColorRGBA64(0, 0, 0, 1)
      };
      const scale = new ColorScale(fullColorScaleStops);
      this.palette = new Array(steps);
      for (let i2 = 0; i2 < steps; i2++) {
        const c2 = scale.getColor(i2 / (steps - 1), ColorInterpolationSpace.RGB);
        this.palette[i2] = c2;
      }
    }
    matchRelativeLuminanceIndex(input, reference) {
      let bestFitValue = Number.MAX_VALUE;
      let bestFitIndex = 0;
      let i2 = 0;
      const referenceLength = reference.length;
      for (; i2 < referenceLength; i2++) {
        const fitValue = Math.abs(rgbToLinearLuminance(reference[i2]) - input);
        if (fitValue < bestFitValue) {
          bestFitValue = fitValue;
          bestFitIndex = i2;
        }
      }
      return bestFitIndex;
    }
  };
  ComponentStateColorPalette.defaultPaletteConfig = {
    baseColor: parseColorHexRGB("#808080"),
    steps: 94
  };

  // node_modules/@microsoft/fast-components/dist/esm/color/swatch.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-components/dist/esm/color/utilities/relative-luminance.js
  init_virtual_process_polyfill();
  function contrast(a2, b2) {
    const L1 = a2.relativeLuminance > b2.relativeLuminance ? a2 : b2;
    const L2 = a2.relativeLuminance > b2.relativeLuminance ? b2 : a2;
    return (L1.relativeLuminance + 0.05) / (L2.relativeLuminance + 0.05);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/swatch.js
  var SwatchRGB = Object.freeze({
    create(r2, g2, b2) {
      return new SwatchRGBImpl(r2, g2, b2);
    },
    from(obj) {
      return new SwatchRGBImpl(obj.r, obj.g, obj.b);
    }
  });
  function isSwatchRGB(value) {
    const test = {
      r: 0,
      g: 0,
      b: 0,
      toColorString: () => "",
      contrast: () => 0,
      relativeLuminance: 0
    };
    for (const key in test) {
      if (typeof test[key] !== typeof value[key]) {
        return false;
      }
    }
    return true;
  }
  var SwatchRGBImpl = class extends ColorRGBA64 {
    constructor(red, green, blue) {
      super(red, green, blue, 1);
      this.toColorString = this.toStringHexRGB;
      this.contrast = contrast.bind(null, this);
      this.createCSS = this.toColorString;
      this.relativeLuminance = rgbToRelativeLuminance(this);
    }
    static fromObject(obj) {
      return new SwatchRGBImpl(obj.r, obj.g, obj.b);
    }
  };

  // node_modules/@microsoft/fast-components/dist/esm/color/utilities/binary-search.js
  init_virtual_process_polyfill();
  function binarySearch(valuesToSearch, searchCondition, startIndex = 0, endIndex = valuesToSearch.length - 1) {
    if (endIndex === startIndex) {
      return valuesToSearch[startIndex];
    }
    const middleIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
    return searchCondition(valuesToSearch[middleIndex]) ? binarySearch(valuesToSearch, searchCondition, startIndex, middleIndex) : binarySearch(valuesToSearch, searchCondition, middleIndex + 1, endIndex);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-components/dist/esm/color/utilities/is-dark.js
  init_virtual_process_polyfill();
  var target = (-0.1 + Math.sqrt(0.21)) / 2;
  function isDark(color) {
    return color.relativeLuminance <= target;
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/utilities/direction-by-is-dark.js
  function directionByIsDark(color) {
    return isDark(color) ? -1 : 1;
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/palette.js
  function create2(rOrSource, g2, b2) {
    if (typeof rOrSource === "number") {
      return PaletteRGB.from(SwatchRGB.create(rOrSource, g2, b2));
    } else {
      return PaletteRGB.from(rOrSource);
    }
  }
  function from(source) {
    return isSwatchRGB(source) ? PaletteRGBImpl.from(source) : PaletteRGBImpl.from(SwatchRGB.create(source.r, source.g, source.b));
  }
  var PaletteRGB = Object.freeze({
    create: create2,
    from
  });
  var PaletteRGBImpl = class {
    constructor(source, swatches) {
      this.closestIndexCache = /* @__PURE__ */ new Map();
      this.source = source;
      this.swatches = swatches;
      this.reversedSwatches = Object.freeze([...this.swatches].reverse());
      this.lastIndex = this.swatches.length - 1;
    }
    colorContrast(reference, contrastTarget, initialSearchIndex, direction2) {
      if (initialSearchIndex === void 0) {
        initialSearchIndex = this.closestIndexOf(reference);
      }
      let source = this.swatches;
      const endSearchIndex = this.lastIndex;
      let startSearchIndex = initialSearchIndex;
      if (direction2 === void 0) {
        direction2 = directionByIsDark(reference);
      }
      const condition = (value) => contrast(reference, value) >= contrastTarget;
      if (direction2 === -1) {
        source = this.reversedSwatches;
        startSearchIndex = endSearchIndex - startSearchIndex;
      }
      return binarySearch(source, condition, startSearchIndex, endSearchIndex);
    }
    get(index) {
      return this.swatches[index] || this.swatches[clamp(index, 0, this.lastIndex)];
    }
    closestIndexOf(reference) {
      if (this.closestIndexCache.has(reference.relativeLuminance)) {
        return this.closestIndexCache.get(reference.relativeLuminance);
      }
      let index = this.swatches.indexOf(reference);
      if (index !== -1) {
        this.closestIndexCache.set(reference.relativeLuminance, index);
        return index;
      }
      const closest = this.swatches.reduce((previous, next) => Math.abs(next.relativeLuminance - reference.relativeLuminance) < Math.abs(previous.relativeLuminance - reference.relativeLuminance) ? next : previous);
      index = this.swatches.indexOf(closest);
      this.closestIndexCache.set(reference.relativeLuminance, index);
      return index;
    }
    static from(source) {
      return new PaletteRGBImpl(source, Object.freeze(new ComponentStateColorPalette({
        baseColor: ColorRGBA64.fromObject(source)
      }).palette.map((x2) => {
        const _x = parseColorHexRGB(x2.toStringHexRGB());
        return SwatchRGB.create(_x.r, _x.g, _x.b);
      })));
    }
  };

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/accent-fill.js
  init_virtual_process_polyfill();
  function accentFill(palette, neutralPalette2, reference, hoverDelta, activeDelta, focusDelta, neutralFillRestDelta2, neutralFillHoverDelta2, neutralFillActiveDelta2) {
    const accent = palette.source;
    const referenceIndex = neutralPalette2.closestIndexOf(reference);
    const swapThreshold = Math.max(neutralFillRestDelta2, neutralFillHoverDelta2, neutralFillActiveDelta2);
    const direction2 = referenceIndex >= swapThreshold ? -1 : 1;
    const accentIndex = palette.closestIndexOf(accent);
    const hoverIndex = accentIndex;
    const restIndex = hoverIndex + direction2 * -1 * hoverDelta;
    const activeIndex = restIndex + direction2 * activeDelta;
    const focusIndex = restIndex + direction2 * focusDelta;
    return {
      rest: palette.get(restIndex),
      hover: palette.get(hoverIndex),
      active: palette.get(activeIndex),
      focus: palette.get(focusIndex)
    };
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/accent-foreground.js
  init_virtual_process_polyfill();
  function accentForeground(palette, reference, contrastTarget, restDelta, hoverDelta, activeDelta, focusDelta) {
    const accent = palette.source;
    const accentIndex = palette.closestIndexOf(accent);
    const direction2 = directionByIsDark(reference);
    const startIndex = accentIndex + (direction2 === 1 ? Math.min(restDelta, hoverDelta) : Math.max(direction2 * restDelta, direction2 * hoverDelta));
    const accessibleSwatch = palette.colorContrast(reference, contrastTarget, startIndex, direction2);
    const accessibleIndex1 = palette.closestIndexOf(accessibleSwatch);
    const accessibleIndex2 = accessibleIndex1 + direction2 * Math.abs(restDelta - hoverDelta);
    const indexOneIsRestState = direction2 === 1 ? restDelta < hoverDelta : direction2 * restDelta > direction2 * hoverDelta;
    let restIndex;
    let hoverIndex;
    if (indexOneIsRestState) {
      restIndex = accessibleIndex1;
      hoverIndex = accessibleIndex2;
    } else {
      restIndex = accessibleIndex2;
      hoverIndex = accessibleIndex1;
    }
    return {
      rest: palette.get(restIndex),
      hover: palette.get(hoverIndex),
      active: palette.get(restIndex + direction2 * activeDelta),
      focus: palette.get(restIndex + direction2 * focusDelta)
    };
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/foreground-on-accent.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-components/dist/esm/color/utilities/color-constants.js
  init_virtual_process_polyfill();
  var white = SwatchRGB.create(1, 1, 1);
  var black = SwatchRGB.create(0, 0, 0);
  var middleGrey = SwatchRGB.from(parseColorHexRGB("#808080"));
  var accentBase = SwatchRGB.from(parseColorHexRGB("#DA1A5F"));

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/foreground-on-accent.js
  function foregroundOnAccent(reference, contrastTarget) {
    return reference.contrast(white) >= contrastTarget ? white : black;
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill.js
  init_virtual_process_polyfill();
  function neutralFill(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const referenceIndex = palette.closestIndexOf(reference);
    const threshold = Math.max(restDelta, hoverDelta, activeDelta, focusDelta);
    const direction2 = referenceIndex >= threshold ? -1 : 1;
    return {
      rest: palette.get(referenceIndex + direction2 * restDelta),
      hover: palette.get(referenceIndex + direction2 * hoverDelta),
      active: palette.get(referenceIndex + direction2 * activeDelta),
      focus: palette.get(referenceIndex + direction2 * focusDelta)
    };
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-input.js
  init_virtual_process_polyfill();
  function neutralFillInput(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const direction2 = directionByIsDark(reference);
    const referenceIndex = palette.closestIndexOf(reference);
    return {
      rest: palette.get(referenceIndex - direction2 * restDelta),
      hover: palette.get(referenceIndex - direction2 * hoverDelta),
      active: palette.get(referenceIndex - direction2 * activeDelta),
      focus: palette.get(referenceIndex - direction2 * focusDelta)
    };
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-layer.js
  init_virtual_process_polyfill();
  function neutralFillLayer(palette, reference, delta) {
    const referenceIndex = palette.closestIndexOf(reference);
    return palette.get(referenceIndex - (referenceIndex < delta ? delta * -1 : delta));
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-stealth.js
  init_virtual_process_polyfill();
  function neutralFillStealth(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta, fillRestDelta, fillHoverDelta, fillActiveDelta, fillFocusDelta) {
    const swapThreshold = Math.max(restDelta, hoverDelta, activeDelta, focusDelta, fillRestDelta, fillHoverDelta, fillActiveDelta, fillFocusDelta);
    const referenceIndex = palette.closestIndexOf(reference);
    const direction2 = referenceIndex >= swapThreshold ? -1 : 1;
    return {
      rest: palette.get(referenceIndex + direction2 * restDelta),
      hover: palette.get(referenceIndex + direction2 * hoverDelta),
      active: palette.get(referenceIndex + direction2 * activeDelta),
      focus: palette.get(referenceIndex + direction2 * focusDelta)
    };
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-fill-contrast.js
  init_virtual_process_polyfill();
  function neutralFillContrast(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const direction2 = directionByIsDark(reference);
    const accessibleIndex = palette.closestIndexOf(palette.colorContrast(reference, 4.5));
    const accessibleIndex2 = accessibleIndex + direction2 * Math.abs(restDelta - hoverDelta);
    const indexOneIsRest = direction2 === 1 ? restDelta < hoverDelta : direction2 * restDelta > direction2 * hoverDelta;
    let restIndex;
    let hoverIndex;
    if (indexOneIsRest) {
      restIndex = accessibleIndex;
      hoverIndex = accessibleIndex2;
    } else {
      restIndex = accessibleIndex2;
      hoverIndex = accessibleIndex;
    }
    return {
      rest: palette.get(restIndex),
      hover: palette.get(hoverIndex),
      active: palette.get(restIndex + direction2 * activeDelta),
      focus: palette.get(restIndex + direction2 * focusDelta)
    };
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/focus-stroke.js
  init_virtual_process_polyfill();
  function focusStrokeOuter(palette, reference) {
    return palette.colorContrast(reference, 3.5);
  }
  function focusStrokeInner(palette, reference, focusColor) {
    return palette.colorContrast(focusColor, 3.5, palette.closestIndexOf(palette.source), directionByIsDark(reference) * -1);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-foreground.js
  init_virtual_process_polyfill();
  function neutralForeground(palette, reference) {
    return palette.colorContrast(reference, 14);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-foreground-hint.js
  init_virtual_process_polyfill();
  function neutralForegroundHint(palette, reference) {
    return palette.colorContrast(reference, 4.5);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-card-container.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js
  init_virtual_process_polyfill();
  function baseLayerLuminanceSwatch(luminance) {
    return SwatchRGB.create(luminance, luminance, luminance);
  }
  var StandardLuminance;
  (function(StandardLuminance2) {
    StandardLuminance2[StandardLuminance2["LightMode"] = 1] = "LightMode";
    StandardLuminance2[StandardLuminance2["DarkMode"] = 0.23] = "DarkMode";
  })(StandardLuminance || (StandardLuminance = {}));

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-card-container.js
  function neutralLayerCardContainer(palette, relativeLuminance, layerDelta) {
    return palette.get(palette.closestIndexOf(baseLayerLuminanceSwatch(relativeLuminance)) + layerDelta);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-floating.js
  init_virtual_process_polyfill();
  function neutralLayerFloating(palette, relativeLuminance, layerDelta) {
    const cardIndex = palette.closestIndexOf(baseLayerLuminanceSwatch(relativeLuminance)) - layerDelta;
    return palette.get(cardIndex - layerDelta);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-1.js
  init_virtual_process_polyfill();
  function neutralLayer1(palette, baseLayerLuminance2) {
    return palette.get(palette.closestIndexOf(baseLayerLuminanceSwatch(baseLayerLuminance2)));
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-2.js
  init_virtual_process_polyfill();
  function neutralLayer2Index(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) {
    return Math.max(palette.closestIndexOf(baseLayerLuminanceSwatch(luminance)) + layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta);
  }
  function neutralLayer2(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) {
    return palette.get(neutralLayer2Index(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta));
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-3.js
  init_virtual_process_polyfill();
  function neutralLayer3(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) {
    return palette.get(neutralLayer2Index(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) + layerDelta);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-layer-4.js
  init_virtual_process_polyfill();
  function neutralLayer4(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) {
    return palette.get(neutralLayer2Index(palette, luminance, layerDelta, fillRestDelta, fillHoverDelta, fillActiveDelta) + layerDelta * 2);
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-stroke.js
  init_virtual_process_polyfill();
  function neutralStroke(palette, reference, restDelta, hoverDelta, activeDelta, focusDelta) {
    const referenceIndex = palette.closestIndexOf(reference);
    const direction2 = directionByIsDark(reference);
    const restIndex = referenceIndex + direction2 * restDelta;
    const hoverIndex = restIndex + direction2 * (hoverDelta - restDelta);
    const activeIndex = restIndex + direction2 * (activeDelta - restDelta);
    const focusIndex = restIndex + direction2 * (focusDelta - restDelta);
    return {
      rest: palette.get(restIndex),
      hover: palette.get(hoverIndex),
      active: palette.get(activeIndex),
      focus: palette.get(focusIndex)
    };
  }

  // node_modules/@microsoft/fast-components/dist/esm/color/recipes/neutral-stroke-divider.js
  init_virtual_process_polyfill();
  function neutralStrokeDivider(palette, reference, delta) {
    return palette.get(palette.closestIndexOf(reference) + directionByIsDark(reference) * delta);
  }

  // node_modules/@microsoft/fast-components/dist/esm/design-tokens.js
  var { create: create3 } = DesignToken;
  function createNonCss(name) {
    return DesignToken.create({ name, cssCustomPropertyName: null });
  }
  var bodyFont = create3("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif');
  var baseHeightMultiplier = create3("base-height-multiplier").withDefault(10);
  var baseHorizontalSpacingMultiplier = create3("base-horizontal-spacing-multiplier").withDefault(3);
  var baseLayerLuminance = create3("base-layer-luminance").withDefault(StandardLuminance.DarkMode);
  var controlCornerRadius = create3("control-corner-radius").withDefault(4);
  var density = create3("density").withDefault(0);
  var designUnit = create3("design-unit").withDefault(4);
  var direction = create3("direction").withDefault(Direction.ltr);
  var disabledOpacity = create3("disabled-opacity").withDefault(0.3);
  var strokeWidth = create3("stroke-width").withDefault(1);
  var focusStrokeWidth = create3("focus-stroke-width").withDefault(2);
  var typeRampBaseFontSize = create3("type-ramp-base-font-size").withDefault("14px");
  var typeRampBaseLineHeight = create3("type-ramp-base-line-height").withDefault("20px");
  var typeRampMinus1FontSize = create3("type-ramp-minus-1-font-size").withDefault("12px");
  var typeRampMinus1LineHeight = create3("type-ramp-minus-1-line-height").withDefault("16px");
  var typeRampMinus2FontSize = create3("type-ramp-minus-2-font-size").withDefault("10px");
  var typeRampMinus2LineHeight = create3("type-ramp-minus-2-line-height").withDefault("16px");
  var typeRampPlus1FontSize = create3("type-ramp-plus-1-font-size").withDefault("16px");
  var typeRampPlus1LineHeight = create3("type-ramp-plus-1-line-height").withDefault("24px");
  var typeRampPlus2FontSize = create3("type-ramp-plus-2-font-size").withDefault("20px");
  var typeRampPlus2LineHeight = create3("type-ramp-plus-2-line-height").withDefault("28px");
  var typeRampPlus3FontSize = create3("type-ramp-plus-3-font-size").withDefault("28px");
  var typeRampPlus3LineHeight = create3("type-ramp-plus-3-line-height").withDefault("36px");
  var typeRampPlus4FontSize = create3("type-ramp-plus-4-font-size").withDefault("34px");
  var typeRampPlus4LineHeight = create3("type-ramp-plus-4-line-height").withDefault("44px");
  var typeRampPlus5FontSize = create3("type-ramp-plus-5-font-size").withDefault("46px");
  var typeRampPlus5LineHeight = create3("type-ramp-plus-5-line-height").withDefault("56px");
  var typeRampPlus6FontSize = create3("type-ramp-plus-6-font-size").withDefault("60px");
  var typeRampPlus6LineHeight = create3("type-ramp-plus-6-line-height").withDefault("72px");
  var accentFillRestDelta = createNonCss("accent-fill-rest-delta").withDefault(0);
  var accentFillHoverDelta = createNonCss("accent-fill-hover-delta").withDefault(4);
  var accentFillActiveDelta = createNonCss("accent-fill-active-delta").withDefault(-5);
  var accentFillFocusDelta = createNonCss("accent-fill-focus-delta").withDefault(0);
  var accentForegroundRestDelta = createNonCss("accent-foreground-rest-delta").withDefault(0);
  var accentForegroundHoverDelta = createNonCss("accent-foreground-hover-delta").withDefault(6);
  var accentForegroundActiveDelta = createNonCss("accent-foreground-active-delta").withDefault(-4);
  var accentForegroundFocusDelta = createNonCss("accent-foreground-focus-delta").withDefault(0);
  var neutralFillRestDelta = createNonCss("neutral-fill-rest-delta").withDefault(7);
  var neutralFillHoverDelta = createNonCss("neutral-fill-hover-delta").withDefault(10);
  var neutralFillActiveDelta = createNonCss("neutral-fill-active-delta").withDefault(5);
  var neutralFillFocusDelta = createNonCss("neutral-fill-focus-delta").withDefault(0);
  var neutralFillInputRestDelta = createNonCss("neutral-fill-input-rest-delta").withDefault(0);
  var neutralFillInputHoverDelta = createNonCss("neutral-fill-input-hover-delta").withDefault(0);
  var neutralFillInputActiveDelta = createNonCss("neutral-fill-input-active-delta").withDefault(0);
  var neutralFillInputFocusDelta = createNonCss("neutral-fill-input-focus-delta").withDefault(0);
  var neutralFillStealthRestDelta = createNonCss("neutral-fill-stealth-rest-delta").withDefault(0);
  var neutralFillStealthHoverDelta = createNonCss("neutral-fill-stealth-hover-delta").withDefault(5);
  var neutralFillStealthActiveDelta = createNonCss("neutral-fill-stealth-active-delta").withDefault(3);
  var neutralFillStealthFocusDelta = createNonCss("neutral-fill-stealth-focus-delta").withDefault(0);
  var neutralFillStrongRestDelta = createNonCss("neutral-fill-strong-rest-delta").withDefault(0);
  var neutralFillStrongHoverDelta = createNonCss("neutral-fill-strong-hover-delta").withDefault(8);
  var neutralFillStrongActiveDelta = createNonCss("neutral-fill-strong-active-delta").withDefault(-5);
  var neutralFillStrongFocusDelta = createNonCss("neutral-fill-strong-focus-delta").withDefault(0);
  var neutralFillLayerRestDelta = createNonCss("neutral-fill-layer-rest-delta").withDefault(3);
  var neutralStrokeRestDelta = createNonCss("neutral-stroke-rest-delta").withDefault(25);
  var neutralStrokeHoverDelta = createNonCss("neutral-stroke-hover-delta").withDefault(40);
  var neutralStrokeActiveDelta = createNonCss("neutral-stroke-active-delta").withDefault(16);
  var neutralStrokeFocusDelta = createNonCss("neutral-stroke-focus-delta").withDefault(25);
  var neutralStrokeDividerRestDelta = createNonCss("neutral-stroke-divider-rest-delta").withDefault(8);
  var neutralColor = create3("neutral-color").withDefault(middleGrey);
  var neutralPalette = createNonCss("neutral-palette").withDefault((element) => PaletteRGB.from(neutralColor.getValueFor(element)));
  var accentColor = create3("accent-color").withDefault(accentBase);
  var accentPalette = createNonCss("accent-palette").withDefault((element) => PaletteRGB.from(accentColor.getValueFor(element)));
  var neutralLayerCardContainerRecipe = createNonCss("neutral-layer-card-container-recipe").withDefault({
    evaluate: (element) => neutralLayerCardContainer(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element))
  });
  var neutralLayerCardContainer2 = create3("neutral-layer-card-container").withDefault((element) => neutralLayerCardContainerRecipe.getValueFor(element).evaluate(element));
  var neutralLayerFloatingRecipe = createNonCss("neutral-layer-floating-recipe").withDefault({
    evaluate: (element) => neutralLayerFloating(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element))
  });
  var neutralLayerFloating2 = create3("neutral-layer-floating").withDefault((element) => neutralLayerFloatingRecipe.getValueFor(element).evaluate(element));
  var neutralLayer1Recipe = createNonCss("neutral-layer-1-recipe").withDefault({
    evaluate: (element) => neutralLayer1(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element))
  });
  var neutralLayer12 = create3("neutral-layer-1").withDefault((element) => neutralLayer1Recipe.getValueFor(element).evaluate(element));
  var neutralLayer2Recipe = createNonCss("neutral-layer-2-recipe").withDefault({
    evaluate: (element) => neutralLayer2(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element))
  });
  var neutralLayer22 = create3("neutral-layer-2").withDefault((element) => neutralLayer2Recipe.getValueFor(element).evaluate(element));
  var neutralLayer3Recipe = createNonCss("neutral-layer-3-recipe").withDefault({
    evaluate: (element) => neutralLayer3(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element))
  });
  var neutralLayer32 = create3("neutral-layer-3").withDefault((element) => neutralLayer3Recipe.getValueFor(element).evaluate(element));
  var neutralLayer4Recipe = createNonCss("neutral-layer-4-recipe").withDefault({
    evaluate: (element) => neutralLayer4(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element))
  });
  var neutralLayer42 = create3("neutral-layer-4").withDefault((element) => neutralLayer4Recipe.getValueFor(element).evaluate(element));
  var fillColor = create3("fill-color").withDefault((element) => neutralLayer12.getValueFor(element));
  var ContrastTarget;
  (function(ContrastTarget2) {
    ContrastTarget2[ContrastTarget2["normal"] = 4.5] = "normal";
    ContrastTarget2[ContrastTarget2["large"] = 7] = "large";
  })(ContrastTarget || (ContrastTarget = {}));
  var accentFillRecipe = create3({
    name: "accent-fill-recipe",
    cssCustomPropertyName: null
  }).withDefault({
    evaluate: (element, reference) => accentFill(accentPalette.getValueFor(element), neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), accentFillHoverDelta.getValueFor(element), accentFillActiveDelta.getValueFor(element), accentFillFocusDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element))
  });
  var accentFillRest = create3("accent-fill-rest").withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).rest;
  });
  var accentFillHover = create3("accent-fill-hover").withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).hover;
  });
  var accentFillActive = create3("accent-fill-active").withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).active;
  });
  var accentFillFocus = create3("accent-fill-focus").withDefault((element) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).focus;
  });
  var foregroundOnAccentByContrast = (contrast2) => (element, reference) => {
    return foregroundOnAccent(reference || accentFillRest.getValueFor(element), contrast2);
  };
  var foregroundOnAccentRecipe = createNonCss("foreground-on-accent-recipe").withDefault({
    evaluate: (element, reference) => foregroundOnAccentByContrast(ContrastTarget.normal)(element, reference)
  });
  var foregroundOnAccentRest = create3("foreground-on-accent-rest").withDefault((element) => foregroundOnAccentRecipe.getValueFor(element).evaluate(element, accentFillRest.getValueFor(element)));
  var foregroundOnAccentHover = create3("foreground-on-accent-hover").withDefault((element) => foregroundOnAccentRecipe.getValueFor(element).evaluate(element, accentFillHover.getValueFor(element)));
  var foregroundOnAccentActive = create3("foreground-on-accent-active").withDefault((element) => foregroundOnAccentRecipe.getValueFor(element).evaluate(element, accentFillActive.getValueFor(element)));
  var foregroundOnAccentFocus = create3("foreground-on-accent-focus").withDefault((element) => foregroundOnAccentRecipe.getValueFor(element).evaluate(element, accentFillFocus.getValueFor(element)));
  var foregroundOnAccentLargeRecipe = createNonCss("foreground-on-accent-large-recipe").withDefault({
    evaluate: (element, reference) => foregroundOnAccentByContrast(ContrastTarget.large)(element, reference)
  });
  var foregroundOnAccentRestLarge = create3("foreground-on-accent-rest-large").withDefault((element) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillRest.getValueFor(element)));
  var foregroundOnAccentHoverLarge = create3("foreground-on-accent-hover-large").withDefault((element) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillHover.getValueFor(element)));
  var foregroundOnAccentActiveLarge = create3("foreground-on-accent-active-large").withDefault((element) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillActive.getValueFor(element)));
  var foregroundOnAccentFocusLarge = create3("foreground-on-accent-focus-large").withDefault((element) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillFocus.getValueFor(element)));
  var accentForegroundByContrast = (contrast2) => (element, reference) => accentForeground(accentPalette.getValueFor(element), reference || fillColor.getValueFor(element), contrast2, accentForegroundRestDelta.getValueFor(element), accentForegroundHoverDelta.getValueFor(element), accentForegroundActiveDelta.getValueFor(element), accentForegroundFocusDelta.getValueFor(element));
  var accentForegroundRecipe = create3({
    name: "accent-foreground-recipe",
    cssCustomPropertyName: null
  }).withDefault({
    evaluate: (element, reference) => accentForegroundByContrast(ContrastTarget.normal)(element, reference)
  });
  var accentForegroundRest = create3("accent-foreground-rest").withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).rest);
  var accentForegroundHover = create3("accent-foreground-hover").withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).hover);
  var accentForegroundActive = create3("accent-foreground-active").withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).active);
  var accentForegroundFocus = create3("accent-foreground-focus").withDefault((element) => accentForegroundRecipe.getValueFor(element).evaluate(element).focus);
  var neutralFillRecipe = create3({
    name: "neutral-fill-recipe",
    cssCustomPropertyName: null
  }).withDefault({
    evaluate: (element, reference) => neutralFill(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element), neutralFillFocusDelta.getValueFor(element))
  });
  var neutralFillRest = create3("neutral-fill-rest").withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).rest);
  var neutralFillHover = create3("neutral-fill-hover").withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).hover);
  var neutralFillActive = create3("neutral-fill-active").withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).active);
  var neutralFillFocus = create3("neutral-fill-focus").withDefault((element) => neutralFillRecipe.getValueFor(element).evaluate(element).focus);
  var neutralFillInputRecipe = create3({
    name: "neutral-fill-input-recipe",
    cssCustomPropertyName: null
  }).withDefault({
    evaluate: (element, reference) => neutralFillInput(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillInputRestDelta.getValueFor(element), neutralFillInputHoverDelta.getValueFor(element), neutralFillInputActiveDelta.getValueFor(element), neutralFillInputFocusDelta.getValueFor(element))
  });
  var neutralFillInputRest = create3("neutral-fill-input-rest").withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).rest);
  var neutralFillInputHover = create3("neutral-fill-input-hover").withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).hover);
  var neutralFillInputActive = create3("neutral-fill-input-active").withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).active);
  var neutralFillInputFocus = create3("neutral-fill-input-focus").withDefault((element) => neutralFillInputRecipe.getValueFor(element).evaluate(element).focus);
  var neutralFillStealthRecipe = create3({
    name: "neutral-fill-stealth-recipe",
    cssCustomPropertyName: null
  }).withDefault({
    evaluate: (element, reference) => neutralFillStealth(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillStealthRestDelta.getValueFor(element), neutralFillStealthHoverDelta.getValueFor(element), neutralFillStealthActiveDelta.getValueFor(element), neutralFillStealthFocusDelta.getValueFor(element), neutralFillRestDelta.getValueFor(element), neutralFillHoverDelta.getValueFor(element), neutralFillActiveDelta.getValueFor(element), neutralFillFocusDelta.getValueFor(element))
  });
  var neutralFillStealthRest = create3("neutral-fill-stealth-rest").withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).rest);
  var neutralFillStealthHover = create3("neutral-fill-stealth-hover").withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).hover);
  var neutralFillStealthActive = create3("neutral-fill-stealth-active").withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).active);
  var neutralFillStealthFocus = create3("neutral-fill-stealth-focus").withDefault((element) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).focus);
  var neutralFillStrongRecipe = create3({
    name: "neutral-fill-strong-recipe",
    cssCustomPropertyName: null
  }).withDefault({
    evaluate: (element, reference) => neutralFillContrast(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillStrongRestDelta.getValueFor(element), neutralFillStrongHoverDelta.getValueFor(element), neutralFillStrongActiveDelta.getValueFor(element), neutralFillStrongFocusDelta.getValueFor(element))
  });
  var neutralFillStrongRest = create3("neutral-fill-strong-rest").withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).rest);
  var neutralFillStrongHover = create3("neutral-fill-strong-hover").withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).hover);
  var neutralFillStrongActive = create3("neutral-fill-strong-active").withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).active);
  var neutralFillStrongFocus = create3("neutral-fill-strong-focus").withDefault((element) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).focus);
  var neutralFillLayerRecipe = createNonCss("neutral-fill-layer-recipe").withDefault({
    evaluate: (element, reference) => neutralFillLayer(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralFillLayerRestDelta.getValueFor(element))
  });
  var neutralFillLayerRest = create3("neutral-fill-layer-rest").withDefault((element) => neutralFillLayerRecipe.getValueFor(element).evaluate(element));
  var focusStrokeOuterRecipe = createNonCss("focus-stroke-outer-recipe").withDefault({
    evaluate: (element) => focusStrokeOuter(neutralPalette.getValueFor(element), fillColor.getValueFor(element))
  });
  var focusStrokeOuter2 = create3("focus-stroke-outer").withDefault((element) => focusStrokeOuterRecipe.getValueFor(element).evaluate(element));
  var focusStrokeInnerRecipe = createNonCss("focus-stroke-inner-recipe").withDefault({
    evaluate: (element) => focusStrokeInner(accentPalette.getValueFor(element), fillColor.getValueFor(element), focusStrokeOuter2.getValueFor(element))
  });
  var focusStrokeInner2 = create3("focus-stroke-inner").withDefault((element) => focusStrokeInnerRecipe.getValueFor(element).evaluate(element));
  var neutralForegroundHintRecipe = createNonCss("neutral-foreground-hint-recipe").withDefault({
    evaluate: (element) => neutralForegroundHint(neutralPalette.getValueFor(element), fillColor.getValueFor(element))
  });
  var neutralForegroundHint2 = create3("neutral-foreground-hint").withDefault((element) => neutralForegroundHintRecipe.getValueFor(element).evaluate(element));
  var neutralForegroundRecipe = createNonCss("neutral-foreground-recipe").withDefault({
    evaluate: (element) => neutralForeground(neutralPalette.getValueFor(element), fillColor.getValueFor(element))
  });
  var neutralForegroundRest = create3("neutral-foreground-rest").withDefault((element) => neutralForegroundRecipe.getValueFor(element).evaluate(element));
  var neutralStrokeRecipe = create3({
    name: "neutral-stroke-recipe",
    cssCustomPropertyName: null
  }).withDefault({
    evaluate: (element) => {
      return neutralStroke(neutralPalette.getValueFor(element), fillColor.getValueFor(element), neutralStrokeRestDelta.getValueFor(element), neutralStrokeHoverDelta.getValueFor(element), neutralStrokeActiveDelta.getValueFor(element), neutralStrokeFocusDelta.getValueFor(element));
    }
  });
  var neutralStrokeRest = create3("neutral-stroke-rest").withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).rest);
  var neutralStrokeHover = create3("neutral-stroke-hover").withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).hover);
  var neutralStrokeActive = create3("neutral-stroke-active").withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).active);
  var neutralStrokeFocus = create3("neutral-stroke-focus").withDefault((element) => neutralStrokeRecipe.getValueFor(element).evaluate(element).focus);
  var neutralStrokeDividerRecipe = createNonCss("neutral-stroke-divider-recipe").withDefault({
    evaluate: (element, reference) => neutralStrokeDivider(neutralPalette.getValueFor(element), reference || fillColor.getValueFor(element), neutralStrokeDividerRestDelta.getValueFor(element))
  });
  var neutralStrokeDividerRest = create3("neutral-stroke-divider-rest").withDefault((element) => neutralStrokeDividerRecipe.getValueFor(element).evaluate(element));
  var heightNumberAsToken = DesignToken.create({
    name: "height-number",
    cssCustomPropertyName: null
  }).withDefault((target2) => (baseHeightMultiplier.getValueFor(target2) + density.getValueFor(target2)) * designUnit.getValueFor(target2));

  // node_modules/@microsoft/fast-components/dist/esm/styles/size.js
  init_virtual_process_polyfill();
  var heightNumber = cssPartial`(${baseHeightMultiplier} + ${density}) * ${designUnit}`;

  // node_modules/@microsoft/fast-components/node_modules/tslib/modules/index.js
  init_virtual_process_polyfill();
  var import_tslib7 = __toESM(require_tslib2(), 1);
  var {
    __extends: __extends2,
    __assign: __assign2,
    __rest: __rest2,
    __decorate: __decorate2,
    __param: __param2,
    __metadata: __metadata2,
    __awaiter: __awaiter2,
    __generator: __generator2,
    __exportStar: __exportStar2,
    __createBinding: __createBinding2,
    __values: __values2,
    __read: __read2,
    __spread: __spread2,
    __spreadArrays: __spreadArrays2,
    __await: __await2,
    __asyncGenerator: __asyncGenerator2,
    __asyncDelegator: __asyncDelegator2,
    __asyncValues: __asyncValues2,
    __makeTemplateObject: __makeTemplateObject2,
    __importStar: __importStar2,
    __importDefault: __importDefault2,
    __classPrivateFieldGet: __classPrivateFieldGet2,
    __classPrivateFieldSet: __classPrivateFieldSet2
  } = import_tslib7.default;

  // node_modules/@microsoft/fast-components/dist/esm/styles/patterns/button.js
  init_virtual_process_polyfill();
  var BaseButtonStyles = css`
    ${display("inline-flex")} :host {
        font-family: ${bodyFont};
        outline: none;
        font-size: ${typeRampBaseFontSize};
        line-height: ${typeRampBaseLineHeight};
        height: calc(${heightNumber} * 1px);
        min-width: calc(${heightNumber} * 1px);
        background-color: ${neutralFillRest};
        color: ${neutralForegroundRest};
        border-radius: calc(${controlCornerRadius} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: baseline;
        padding: 0 calc((10 + (${designUnit} * 2 * ${density})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${strokeWidth} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-weight: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${neutralFillHover};
    }

    :host(:active) {
        background-color: ${neutralFillActive};
    }

    .control:${focusVisible} {
        border-color: ${focusStrokeOuter2};
        box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px) ${focusStrokeOuter2} inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .start,
    .content,
    .end {
        align-self: center;
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(forcedColorsStylesheetBehavior(css`
            :host .control {
              background-color: ${SystemColors.ButtonFace};
              border-color: ${SystemColors.ButtonText};
              color: ${SystemColors.ButtonText};
              fill: currentColor;
            }

            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${SystemColors.Highlight};
              color: ${SystemColors.HighlightText};
            }

            .control:${focusVisible} {
              forced-color-adjust: none;
              background-color: ${SystemColors.Highlight};
              border-color: ${SystemColors.ButtonText};
              box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px) ${SystemColors.ButtonText} inset;
              color: ${SystemColors.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${SystemColors.ButtonText};
            }

            :host([href]) .control {
                border-color: ${SystemColors.LinkText};
                color: ${SystemColors.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${focusVisible}{
              forced-color-adjust: none;
              background: ${SystemColors.ButtonFace};
              border-color: ${SystemColors.LinkText};
              box-shadow: 0 0 0 1px ${SystemColors.LinkText} inset;
              color: ${SystemColors.LinkText};
              fill: currentColor;
            }
        `));
  var AccentButtonStyles = css`
    :host([appearance="accent"]) {
        background: ${accentFillRest};
        color: ${foregroundOnAccentRest};
    }

    :host([appearance="accent"]:hover) {
        background: ${accentFillHover};
        color: ${foregroundOnAccentHover};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${accentFillActive};
        color: ${foregroundOnAccentActive};
    }

    :host([appearance="accent"]) .control:${focusVisible} {
        box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px) ${focusStrokeOuter2} inset,
            0 0 0 calc((${focusStrokeWidth} + ${strokeWidth}) * 1px) ${focusStrokeInner2} inset;
    }
`.withBehaviors(forcedColorsStylesheetBehavior(css`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${SystemColors.Highlight};
                color: ${SystemColors.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${SystemColors.HighlightText};
                border-color: ${SystemColors.Highlight};
                color: ${SystemColors.Highlight};
            }

            :host([appearance="accent"]) .control:${focusVisible} {
                border-color: ${SystemColors.Highlight};
                box-shadow: 0 0 0 calc(${focusStrokeWidth} * 1px) ${SystemColors.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${SystemColors.LinkText};
                color: ${SystemColors.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${SystemColors.ButtonFace};
                border-color: ${SystemColors.LinkText};
                box-shadow: none;
                color: ${SystemColors.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${focusVisible} {
                border-color: ${SystemColors.LinkText};
                box-shadow: 0 0 0 calc(${focusStrokeWidth} * 1px) ${SystemColors.HighlightText} inset;
            }
        `));
  var HypertextStyles = css`
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${accentForegroundRest};
        border-bottom: calc(${strokeWidth} * 1px) solid ${accentForegroundRest};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${accentForegroundHover};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${accentForegroundActive};
    }

    :host([appearance="hypertext"]) .control:${focusVisible} {
        border-bottom: calc(${focusStrokeWidth} * 1px) solid ${focusStrokeOuter2};
        margin-bottom: calc(calc(${strokeWidth} - ${focusStrokeWidth}) * 1px);
    }
`.withBehaviors(forcedColorsStylesheetBehavior(css`
            :host([appearance="hypertext"]:hover) {
                background-color: ${SystemColors.ButtonFace};
                color: ${SystemColors.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${focusVisible} {
                color: ${SystemColors.LinkText};
                border-bottom-color: ${SystemColors.LinkText};
                box-shadow: none;
            }
        `));
  var LightweightButtonStyles = css`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${accentForegroundRest};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        background: transparent;
        color: ${accentForegroundHover};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${accentForegroundActive};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${strokeWidth} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${accentForegroundHover};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${accentForegroundActive};
    }

    :host([appearance="lightweight"]) .control:${focusVisible} .content::before {
        background: ${neutralForegroundRest};
        height: calc(${focusStrokeWidth} * 1px);
    }
`.withBehaviors(forcedColorsStylesheetBehavior(css`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${focusVisible} {
                forced-color-adjust: none;
                background: ${SystemColors.ButtonFace};
                color: ${SystemColors.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${focusVisible} .content::before {
                background: ${SystemColors.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${focusVisible} {
                background: ${SystemColors.ButtonFace};
                box-shadow: none;
                color: ${SystemColors.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${focusVisible} .content::before {
                background: ${SystemColors.LinkText};
            }
        `));
  var OutlineButtonStyles = css`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${accentFillRest};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${accentFillHover};
    }

    :host([appearance="outline"]:active) {
        border-color: ${accentFillActive};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${focusVisible} {
        box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px) ${focusStrokeOuter2} inset;
        border-color: ${focusStrokeOuter2};
    }
`.withBehaviors(forcedColorsStylesheetBehavior(css`
            :host([appearance="outline"]) .control {
                border-color: ${SystemColors.ButtonText};
            }
            :host([appearance="outline"]) .control:${focusVisible} {
              forced-color-adjust: none;
              background-color: ${SystemColors.Highlight};
              border-color: ${SystemColors.ButtonText};
              box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px) ${SystemColors.ButtonText} inset;
              color: ${SystemColors.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${SystemColors.ButtonFace};
                border-color: ${SystemColors.LinkText};
                color: ${SystemColors.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${focusVisible} {
              forced-color-adjust: none;
              border-color: ${SystemColors.LinkText};
              box-shadow: 0 0 0 1px ${SystemColors.LinkText} inset;
            }
        `));
  var StealthButtonStyles = css`
    :host([appearance="stealth"]) {
        background: ${neutralFillStealthRest};
    }

    :host([appearance="stealth"]:hover) {
        background: ${neutralFillStealthHover};
    }

    :host([appearance="stealth"]:active) {
        background: ${neutralFillStealthActive};
    }
`.withBehaviors(forcedColorsStylesheetBehavior(css`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${SystemColors.ButtonFace};
                border-color: transparent;
                color: ${SystemColors.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${SystemColors.Highlight};
                border-color: ${SystemColors.Highlight};
                color: ${SystemColors.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${focusVisible}) .control {
                background: ${SystemColors.Highlight};
                box-shadow: 0 0 0 1px ${SystemColors.Highlight};
                color: ${SystemColors.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${SystemColors.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${focusVisible}) .control {
                background: ${SystemColors.LinkText};
                border-color: ${SystemColors.LinkText};
                color: ${SystemColors.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${focusVisible}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${SystemColors.LinkText};
            }
        `));

  // node_modules/@microsoft/fast-components/dist/esm/utilities/behaviors.js
  init_virtual_process_polyfill();
  function appearanceBehavior(value, styles) {
    return new PropertyStyleSheetBehavior("appearance", value, styles);
  }

  // node_modules/@microsoft/fast-components/dist/esm/button/index.js
  init_virtual_process_polyfill();

  // node_modules/@microsoft/fast-components/dist/esm/button/button.styles.js
  init_virtual_process_polyfill();
  var buttonStyles = (context, definition) => css`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${disabledOpacity};
            background-color: ${neutralFillRest};
            cursor: ${disabledCursor};
        }

        ${BaseButtonStyles}
    `.withBehaviors(forcedColorsStylesheetBehavior(css`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${SystemColors.ButtonFace};
                    border-color: ${SystemColors.GrayText};
                    color: ${SystemColors.GrayText};
                    cursor: ${disabledCursor};
                    opacity: 1;
                }
            `), appearanceBehavior("accent", css`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${accentFillRest};
                }

                ${AccentButtonStyles}
            `.withBehaviors(forcedColorsStylesheetBehavior(css`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${SystemColors.ButtonFace};
                            border-color: ${SystemColors.GrayText};
                            color: ${SystemColors.GrayText};
                        }
                    `))), appearanceBehavior("lightweight", css`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${accentForegroundRest};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${LightweightButtonStyles}
            `.withBehaviors(forcedColorsStylesheetBehavior(css`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${SystemColors.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))), appearanceBehavior("outline", css`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${accentFillRest};
                }

                ${OutlineButtonStyles}
            `.withBehaviors(forcedColorsStylesheetBehavior(css`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${SystemColors.GrayText};
                        }
                    `))), appearanceBehavior("stealth", css`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${neutralFillStealthRest};
                }

                ${StealthButtonStyles}
            `.withBehaviors(forcedColorsStylesheetBehavior(css`
                        :host([appearance="stealth"][disabled]) {
                            background: ${SystemColors.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${SystemColors.ButtonFace};
                            border-color: transparent;
                            color: ${SystemColors.GrayText};
                        }
                    `))));

  // node_modules/@microsoft/fast-components/dist/esm/button/index.js
  var Button2 = class extends Button {
    constructor() {
      super(...arguments);
      this.appearance = "neutral";
    }
    defaultSlottedContentChanged(oldValue, newValue) {
      const slottedElements = this.defaultSlottedContent.filter((x2) => x2.nodeType === Node.ELEMENT_NODE);
      if (slottedElements.length === 1 && slottedElements[0] instanceof SVGElement) {
        this.control.classList.add("icon-only");
      } else {
        this.control.classList.remove("icon-only");
      }
    }
  };
  __decorate2([
    attr
  ], Button2.prototype, "appearance", void 0);
  var fastButton = Button2.compose({
    baseName: "button",
    baseClass: Button,
    template: buttonTemplate,
    styles: buttonStyles,
    shadowOptions: {
      delegatesFocus: true
    }
  });

  // node_modules/@microsoft/fast-components/dist/esm/fast-design-system.js
  init_virtual_process_polyfill();
  function provideFASTDesignSystem(element) {
    return DesignSystem.getOrCreate(element).withPrefix("fast");
  }

  // src/acs-microphone-button.ts
  init_virtual_process_polyfill();

  // src/BaseComponent.ts
  init_virtual_process_polyfill();
  var BaseComponent = class extends FASTElement {
    set handlers(newHandlers) {
      if (!this.explicitProps) {
        throw new Error("Must set the `explicitprops` attr to provide explicit handlers");
      }
      this._handlers = newHandlers;
    }
    get handlers() {
      if (this.explicitProps) {
        return this._handlers;
      }
      return this.context;
    }
    get state() {
      return this._state;
    }
    set state(newState) {
      if (!this.explicitProps) {
        throw new Error("Must set the `explicitprops` attr to provide explicit state");
      }
      this._state = newState;
    }
    getSelector() {
      throw new Error("Unimplemented");
    }
    safeContextCast(context) {
      throw new Error("Unimplemented");
    }
    connectedCallback() {
      super.connectedCallback && super.connectedCallback();
      this.typedEmit("provider-register", {
        contextChanged: this.contextChanged.bind(this)
      });
    }
    disconnectedCallback() {
      var _a;
      this.typedEmit("provider-unregister", {
        contextChanged: this.contextChanged.bind(this)
      });
      (_a = this.context) == null ? void 0 : _a.unregisterStateChangeCallback(this.onStateChange.bind(this), this.getSelector());
      this.context = void 0;
      super.disconnectedCallback && super.disconnectedCallback();
    }
    contextChanged(context) {
      this.context = context && this.safeContextCast(context);
      if (this.context) {
        this.context.registerStateChangeCallback(this.onStateChange.bind(this), this.getSelector());
      }
    }
    onStateChange(newState) {
      if (!this.explicitProps) {
        this._state = newState;
      }
    }
    typedEmit(type, detail) {
      this.$emit(type, detail);
    }
  };
  __decorateClass([
    attr({ mode: "boolean" })
  ], BaseComponent.prototype, "explicitProps", 2);
  __decorateClass([
    observable
  ], BaseComponent.prototype, "_state", 2);

  // src/MicrophoneButtonContext.ts
  init_virtual_process_polyfill();

  // node_modules/reselect/es/index.js
  init_virtual_process_polyfill();

  // node_modules/reselect/es/defaultMemoize.js
  init_virtual_process_polyfill();
  var NOT_FOUND = "NOT_FOUND";
  function createSingletonCache(equals) {
    var entry;
    return {
      get: function get(key) {
        if (entry && equals(entry.key, key)) {
          return entry.value;
        }
        return NOT_FOUND;
      },
      put: function put(key, value) {
        entry = {
          key,
          value
        };
      },
      getEntries: function getEntries() {
        return entry ? [entry] : [];
      },
      clear: function clear() {
        entry = void 0;
      }
    };
  }
  function createLruCache(maxSize, equals) {
    var entries = [];
    function get(key) {
      var cacheIndex = entries.findIndex(function(entry2) {
        return equals(key, entry2.key);
      });
      if (cacheIndex > -1) {
        var entry = entries[cacheIndex];
        if (cacheIndex > 0) {
          entries.splice(cacheIndex, 1);
          entries.unshift(entry);
        }
        return entry.value;
      }
      return NOT_FOUND;
    }
    function put(key, value) {
      if (get(key) === NOT_FOUND) {
        entries.unshift({
          key,
          value
        });
        if (entries.length > maxSize) {
          entries.pop();
        }
      }
    }
    function getEntries() {
      return entries;
    }
    function clear() {
      entries = [];
    }
    return {
      get,
      put,
      getEntries,
      clear
    };
  }
  var defaultEqualityCheck = function defaultEqualityCheck2(a2, b2) {
    return a2 === b2;
  };
  function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
      if (prev === null || next === null || prev.length !== next.length) {
        return false;
      }
      var length = prev.length;
      for (var i2 = 0; i2 < length; i2++) {
        if (!equalityCheck(prev[i2], next[i2])) {
          return false;
        }
      }
      return true;
    };
  }
  function defaultMemoize(func, equalityCheckOrOptions) {
    var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
      equalityCheck: equalityCheckOrOptions
    };
    var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
    var comparator = createCacheKeyComparator(equalityCheck);
    var cache2 = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
    function memoized() {
      var value = cache2.get(arguments);
      if (value === NOT_FOUND) {
        value = func.apply(null, arguments);
        if (resultEqualityCheck) {
          var entries = cache2.getEntries();
          var matchingEntry = entries.find(function(entry) {
            return resultEqualityCheck(entry.value, value);
          });
          if (matchingEntry) {
            value = matchingEntry.value;
          }
        }
        cache2.put(arguments, value);
      }
      return value;
    }
    memoized.clearCache = function() {
      return cache2.clear();
    };
    return memoized;
  }

  // node_modules/reselect/es/index.js
  function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
    if (!dependencies.every(function(dep) {
      return typeof dep === "function";
    })) {
      var dependencyTypes = dependencies.map(function(dep) {
        return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
      }).join(", ");
      throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
    }
    return dependencies;
  }
  function createSelectorCreator(memoize) {
    for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      memoizeOptionsFromArgs[_key - 1] = arguments[_key];
    }
    var createSelector2 = function createSelector3() {
      for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
      }
      var _recomputations = 0;
      var _lastResult;
      var directlyPassedOptions = {
        memoizeOptions: void 0
      };
      var resultFunc = funcs.pop();
      if (typeof resultFunc === "object") {
        directlyPassedOptions = resultFunc;
        resultFunc = funcs.pop();
      }
      if (typeof resultFunc !== "function") {
        throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
      }
      var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
      var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
      var dependencies = getDependencies(funcs);
      var memoizedResultFunc = memoize.apply(void 0, [function() {
        _recomputations++;
        return resultFunc.apply(null, arguments);
      }].concat(finalMemoizeOptions));
      var selector = memoize(function() {
        var params = [];
        var length = dependencies.length;
        for (var i2 = 0; i2 < length; i2++) {
          params.push(dependencies[i2].apply(null, arguments));
        }
        _lastResult = memoizedResultFunc.apply(null, params);
        return _lastResult;
      });
      Object.assign(selector, {
        resultFunc,
        memoizedResultFunc,
        dependencies,
        lastResult: function lastResult() {
          return _lastResult;
        },
        recomputations: function recomputations() {
          return _recomputations;
        },
        resetRecomputations: function resetRecomputations() {
          return _recomputations = 0;
        }
      });
      return selector;
    };
    return createSelector2;
  }
  var createSelector = /* @__PURE__ */ createSelectorCreator(defaultMemoize);

  // src/MicrophoneButtonContext.ts
  var getCallExists = (state) => !!state.call;
  var getIsMuted = (state) => {
    var _a;
    return (_a = state.call) == null ? void 0 : _a.isMuted;
  };
  var microphoneButtonSelector = createSelector([getCallExists, getIsMuted], (callExists, isMuted) => ({
    checked: callExists ? !!isMuted : false
  }));

  // src/acs-microphone-button.ts
  var uncheckedSlot = html`
  <slot name="unchecked"> ${(x2) => x2.strings.onLabel} </slot>
`;
  var checkedSlot = html`
  <slot name="checked"> ${(x2) => x2.strings.offLabel} </slot>
`;
  var template = html`
  ${when((x2) => x2.state, html`
      <fast-button @click=${(x2) => x2.onClick()}>
        ${when((x2) => {
    var _a;
    return !((_a = x2.state) == null ? void 0 : _a.checked);
  }, uncheckedSlot)}
        ${when((x2) => {
    var _a;
    return (_a = x2.state) == null ? void 0 : _a.checked;
  }, checkedSlot)}
      </fast-button>
    `)}
`;
  var AcsMicrophoneButton = class extends BaseComponent {
    constructor() {
      super(...arguments);
      this.strings = {
        onLabel: "mute",
        offLabel: "unmute"
      };
    }
    getSelector() {
      return microphoneButtonSelector;
    }
    safeContextCast(context) {
      return context;
    }
    onClick() {
      if (!this.state || !this.handlers) {
        return;
      }
      if (this.state.checked) {
        this.handlers.unmute();
      } else {
        this.handlers.mute();
      }
    }
  };
  AcsMicrophoneButton = __decorateClass([
    customElement({ name: "acs-microphone-button", template })
  ], AcsMicrophoneButton);

  // src/acs-fake-call-provider.ts
  init_virtual_process_polyfill();

  // src/BaseCallProvider.ts
  init_virtual_process_polyfill();
  var BaseCallProvider = class extends FASTElement {
    constructor() {
      super();
      this.notificationFns = [];
      this.addEventListener("provider-register", (e) => {
        e.stopPropagation();
        this.registerNotificationFn(e.detail.contextChanged);
        this.context && e.detail.contextChanged(this.context);
      });
      this.addEventListener("provider-unregister", (e) => this.unregisterNotificationFn(e.detail.contextChanged));
    }
    setContext(context) {
      this.context = context;
      this.notifyAll(context);
    }
    registerNotificationFn(contextChanged) {
      this.notificationFns.push(contextChanged);
    }
    unregisterNotificationFn(f2) {
      const i2 = this.notificationFns.findIndex((v2) => v2 === f2);
      this.notificationFns.splice(i2, 1);
    }
    notifyAll(context) {
      this.notificationFns.forEach((contextChanged) => contextChanged(context));
    }
  };

  // src/FakeCallAdapter.ts
  init_virtual_process_polyfill();

  // node_modules/immer/dist/immer.esm.js
  init_virtual_process_polyfill();
  function n(n2) {
    for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
      t2[e - 1] = arguments[e];
    if (true) {
      var i2 = Y[n2], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
      throw Error("[Immer] " + o2);
    }
    throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
      return "'" + n3 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function r(n2) {
    return !!n2 && !!n2[Q];
  }
  function t(n2) {
    return !!n2 && (function(n3) {
      if (!n3 || typeof n3 != "object")
        return false;
      var r2 = Object.getPrototypeOf(n3);
      if (r2 === null)
        return true;
      var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
      return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
    }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
  }
  function i(n2, r2, t2) {
    t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
      t2 && typeof e == "symbol" || r2(e, n2[e], n2);
    }) : n2.forEach(function(t3, e) {
      return r2(e, t3, n2);
    });
  }
  function o(n2) {
    var r2 = n2[Q];
    return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
  }
  function u(n2, r2) {
    return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
  }
  function a(n2, r2) {
    return o(n2) === 2 ? n2.get(r2) : n2[r2];
  }
  function f(n2, r2, t2) {
    var e = o(n2);
    e === 2 ? n2.set(r2, t2) : e === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
  }
  function c(n2, r2) {
    return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
  }
  function s(n2) {
    return X && n2 instanceof Map;
  }
  function v(n2) {
    return q && n2 instanceof Set;
  }
  function p(n2) {
    return n2.o || n2.t;
  }
  function l(n2) {
    if (Array.isArray(n2))
      return Array.prototype.slice.call(n2);
    var r2 = rn(n2);
    delete r2[Q];
    for (var t2 = nn(r2), e = 0; e < t2.length; e++) {
      var i2 = t2[e], o2 = r2[i2];
      o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
    }
    return Object.create(Object.getPrototypeOf(n2), r2);
  }
  function d(n2, e) {
    return e === void 0 && (e = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
      return d(r2, true);
    }, true), n2);
  }
  function h() {
    n(2);
  }
  function y(n2) {
    return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
  }
  function b(r2) {
    var t2 = tn[r2];
    return t2 || n(18, r2), t2;
  }
  function _() {
    return U || n(0), U;
  }
  function j(n2, r2) {
    r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
  }
  function O(n2) {
    g(n2), n2.p.forEach(S), n2.p = null;
  }
  function g(n2) {
    n2 === U && (U = n2.l);
  }
  function w(n2) {
    return U = { p: [], l: U, h: n2, m: true, _: 0 };
  }
  function S(n2) {
    var r2 = n2[Q];
    r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
  }
  function P(r2, e) {
    e._ = e.p.length;
    var i2 = e.p[0], o2 = r2 !== void 0 && r2 !== i2;
    return e.h.g || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (O(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
  }
  function M(n2, r2, t2) {
    if (y(r2))
      return r2;
    var e = r2[Q];
    if (!e)
      return i(r2, function(i2, o3) {
        return A(n2, e, r2, i2, o3, t2);
      }, true), r2;
    if (e.A !== n2)
      return r2;
    if (!e.P)
      return x(n2, e.t, true), e.t;
    if (!e.I) {
      e.I = true, e.A._--;
      var o2 = e.i === 4 || e.i === 5 ? e.o = l(e.k) : e.o;
      i(e.i === 3 ? new Set(o2) : o2, function(r3, i2) {
        return A(n2, e, o2, r3, i2, t2);
      }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e, t2, n2.u, n2.s);
    }
    return e.o;
  }
  function A(e, i2, o2, a2, c2, s2) {
    if (c2 === o2 && n(5), r(c2)) {
      var v2 = M(e, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
      if (f(o2, a2, v2), !r(v2))
        return;
      e.m = false;
    }
    if (t(c2) && !y(c2)) {
      if (!e.h.F && e._ < 1)
        return;
      M(e, c2), i2 && i2.A.l || x(e, c2);
    }
  }
  function x(n2, r2, t2) {
    t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
  }
  function z(n2, r2) {
    var t2 = n2[Q];
    return (t2 ? p(t2) : n2)[r2];
  }
  function I(n2, r2) {
    if (r2 in n2)
      for (var t2 = Object.getPrototypeOf(n2); t2; ) {
        var e = Object.getOwnPropertyDescriptor(t2, r2);
        if (e)
          return e;
        t2 = Object.getPrototypeOf(t2);
      }
  }
  function k(n2) {
    n2.P || (n2.P = true, n2.l && k(n2.l));
  }
  function E(n2) {
    n2.o || (n2.o = l(n2.t));
  }
  function R(n2, r2, t2) {
    var e = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
      var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
      t3 && (i2 = [e2], o2 = on2);
      var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
      return e2.k = f2, e2.j = a2, f2;
    }(r2, t2) : b("ES5").J(r2, t2);
    return (t2 ? t2.A : _()).p.push(e), e;
  }
  function D(e) {
    return r(e) || n(22, e), function n2(r2) {
      if (!t(r2))
        return r2;
      var e2, u2 = r2[Q], c2 = o(r2);
      if (u2) {
        if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
          return u2.t;
        u2.I = true, e2 = F(r2, c2), u2.I = false;
      } else
        e2 = F(r2, c2);
      return i(e2, function(r3, t2) {
        u2 && a(u2.t, r3) === t2 || f(e2, r3, n2(t2));
      }), c2 === 3 ? new Set(e2) : e2;
    }(e);
  }
  function F(n2, r2) {
    switch (r2) {
      case 2:
        return new Map(n2);
      case 3:
        return Array.from(n2);
    }
    return l(n2);
  }
  var G;
  var U;
  var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
  var X = typeof Map != "undefined";
  var q = typeof Set != "undefined";
  var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
  var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
  var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q = W ? Symbol.for("immer-state") : "__$immer_state";
  var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
  }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
    return "Cannot apply patch, path doesn't resolve: " + n2;
  }, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
    return "Unsupported patch operation: " + n2;
  }, 18: function(n2) {
    return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
  }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
  }, 22: function(n2) {
    return "'current' expects a draft, got: " + n2;
  }, 23: function(n2) {
    return "'original' expects a draft, got: " + n2;
  }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
  var Z = "" + Object.prototype.constructor;
  var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
    return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
  } : Object.getOwnPropertyNames;
  var rn = Object.getOwnPropertyDescriptors || function(n2) {
    var r2 = {};
    return nn(n2).forEach(function(t2) {
      r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
    }), r2;
  };
  var tn = {};
  var en = { get: function(n2, r2) {
    if (r2 === Q)
      return n2;
    var e = p(n2);
    if (!u(e, r2))
      return function(n3, r3, t2) {
        var e2, i3 = I(r3, t2);
        return i3 ? "value" in i3 ? i3.value : (e2 = i3.get) === null || e2 === void 0 ? void 0 : e2.call(n3.k) : void 0;
      }(n2, e, r2);
    var i2 = e[r2];
    return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
  }, has: function(n2, r2) {
    return r2 in p(n2);
  }, ownKeys: function(n2) {
    return Reflect.ownKeys(p(n2));
  }, set: function(n2, r2, t2) {
    var e = I(p(n2), r2);
    if (e == null ? void 0 : e.set)
      return e.set.call(n2.k, t2), true;
    if (!n2.P) {
      var i2 = z(p(n2), r2), o2 = i2 == null ? void 0 : i2[Q];
      if (o2 && o2.t === t2)
        return n2.o[r2] = t2, n2.D[r2] = false, true;
      if (c(t2, i2) && (t2 !== void 0 || u(n2.t, r2)))
        return true;
      E(n2), k(n2);
    }
    return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
  }, deleteProperty: function(n2, r2) {
    return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
  }, getOwnPropertyDescriptor: function(n2, r2) {
    var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
    return e ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e.enumerable, value: t2[r2] } : e;
  }, defineProperty: function() {
    n(11);
  }, getPrototypeOf: function(n2) {
    return Object.getPrototypeOf(n2.t);
  }, setPrototypeOf: function() {
    n(12);
  } };
  var on2 = {};
  i(en, function(n2, r2) {
    on2[n2] = function() {
      return arguments[0] = arguments[0][0], r2.apply(this, arguments);
    };
  }), on2.deleteProperty = function(r2, t2) {
    return isNaN(parseInt(t2)) && n(13), on2.set.call(this, r2, t2, void 0);
  }, on2.set = function(r2, t2, e) {
    return t2 !== "length" && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e, r2[0]);
  };
  var un = function() {
    function e(r2) {
      var e2 = this;
      this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
        if (typeof r3 == "function" && typeof i3 != "function") {
          var u2 = i3;
          i3 = r3;
          var a2 = e2;
          return function(n2) {
            var r4 = this;
            n2 === void 0 && (n2 = u2);
            for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
              e3[o3 - 1] = arguments[o3];
            return a2.produce(n2, function(n3) {
              var t3;
              return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
            });
          };
        }
        var f2;
        if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r3)) {
          var c2 = w(e2), s2 = R(e2, r3, void 0), v2 = true;
          try {
            f2 = i3(s2), v2 = false;
          } finally {
            v2 ? O(c2) : g(c2);
          }
          return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
            return j(c2, o2), P(n2, c2);
          }, function(n2) {
            throw O(c2), n2;
          }) : (j(c2, o2), P(f2, c2));
        }
        if (!r3 || typeof r3 != "object") {
          if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H && (f2 = void 0), e2.F && d(f2, true), o2) {
            var p2 = [], l2 = [];
            b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
          }
          return f2;
        }
        n(21, r3);
      }, this.produceWithPatches = function(n2, r3) {
        if (typeof n2 == "function")
          return function(r4) {
            for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
              i4[o3 - 1] = arguments[o3];
            return e2.produceWithPatches(r4, function(r5) {
              return n2.apply(void 0, [r5].concat(i4));
            });
          };
        var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
          t2 = n3, i3 = r4;
        });
        return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
          return [n3, t2, i3];
        }) : [o2, t2, i3];
      }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
    }
    var i2 = e.prototype;
    return i2.createDraft = function(e2) {
      t(e2) || n(8), r(e2) && (e2 = D(e2));
      var i3 = w(this), o2 = R(this, e2, void 0);
      return o2[Q].C = true, g(i3), o2;
    }, i2.finishDraft = function(r2, t2) {
      var e2 = r2 && r2[Q];
      e2 && e2.C || n(9), e2.I && n(10);
      var i3 = e2.A;
      return j(i3, t2), P(void 0, i3);
    }, i2.setAutoFreeze = function(n2) {
      this.F = n2;
    }, i2.setUseProxies = function(r2) {
      r2 && !B && n(20), this.g = r2;
    }, i2.applyPatches = function(n2, t2) {
      var e2;
      for (e2 = t2.length - 1; e2 >= 0; e2--) {
        var i3 = t2[e2];
        if (i3.path.length === 0 && i3.op === "replace") {
          n2 = i3.value;
          break;
        }
      }
      e2 > -1 && (t2 = t2.slice(e2 + 1));
      var o2 = b("Patches").$;
      return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
        return o2(n3, t2);
      });
    }, e;
  }();
  var an = new un();
  var fn = an.produce;
  var cn = an.produceWithPatches.bind(an);
  var sn = an.setAutoFreeze.bind(an);
  var vn = an.setUseProxies.bind(an);
  var pn = an.applyPatches.bind(an);
  var ln = an.createDraft.bind(an);
  var dn = an.finishDraft.bind(an);
  var immer_esm_default = fn;

  // src/FakeCallAdapter.ts
  var FakeCallAdapter = class {
    constructor() {
      this.state = {
        page: "call",
        isLocalPreviewMicrophoneEnabled: false,
        userId: { kind: "communicationUser", communicationUserId: "fake_id" },
        displayName: "fake_display_name",
        devices: {
          isSpeakerSelectionAvailable: false,
          cameras: [],
          microphones: [],
          speakers: [],
          unparentedViews: []
        },
        isTeamsCall: false,
        latestErrors: {},
        call: {
          id: "fake_call_id",
          callerInfo: {
            identifier: {
              kind: "communicationUser",
              communicationUserId: "fake_id"
            },
            displayName: "fake_display_name"
          },
          state: "Connected",
          direction: "Outgoing",
          isMuted: false,
          isScreenSharingOn: false,
          localVideoStreams: [],
          remoteParticipants: {},
          remoteParticipantsEnded: {},
          transcription: {
            isTranscriptionActive: false
          },
          recording: {
            isRecordingActive: false
          },
          startTime: new Date(Date.now()),
          endTime: void 0,
          diagnostics: {
            network: {
              latest: {}
            },
            media: {
              latest: {}
            }
          }
        }
      };
      this.handlers = [];
    }
    onStateChange(handler) {
      this.handlers.push(handler);
    }
    offStateChange(handler) {
      const toRemove = this.handlers.findIndex((candidate) => candidate === handler);
      if (toRemove === -1) {
        console.error("Found none to remove. My handler logic is broken!");
        return;
      }
      this.handlers = this.handlers.splice(toRemove, 1);
    }
    getState() {
      return this.state;
    }
    modifyState(act) {
      const newState = immer_esm_default(this.state, act);
      if (this.state !== newState) {
        this.state = newState;
        this.handlers.forEach((handler) => handler(this.state));
      }
    }
    on() {
      throw new Error("unimplemented");
    }
    off() {
      throw new Error("unimplemented");
    }
    dispose() {
    }
    joinCall() {
      throw new Error("unimplemented");
    }
    leaveCall() {
      throw new Error("unimplemented");
    }
    startCamera() {
      throw new Error("unimplemented");
    }
    stopCamera() {
      throw new Error("unimplemented");
    }
    mute() {
      this.modifyState((draft) => {
        if (draft.call) {
          draft.call.isMuted = true;
        }
      });
      return Promise.resolve();
    }
    unmute() {
      this.modifyState((draft) => {
        if (draft.call) {
          draft.call.isMuted = false;
        }
      });
      return Promise.resolve();
    }
    startCall() {
      throw new Error("unimplemented");
    }
    startScreenShare() {
      throw new Error("unimplemented");
    }
    stopScreenShare() {
      throw new Error("unimplemented");
    }
    removeParticipant() {
      throw new Error("unimplemented");
    }
    createStreamView() {
      throw new Error("unimplemented");
    }
    disposeStreamView() {
      throw new Error("unimplemented");
    }
    askDevicePermission() {
      throw new Error("unimplemented");
    }
    queryCameras() {
      throw new Error("unimplemented");
    }
    queryMicrophones() {
      throw new Error("unimplemented");
    }
    querySpeakers() {
      throw new Error("unimplemented");
    }
    setCamera() {
      throw new Error("unimplemented");
    }
    setMicrophone() {
      throw new Error("unimplemented");
    }
    setSpeaker() {
      throw new Error("unimplemented");
    }
  };

  // src/acs-fake-call-provider.ts
  var template2 = html`<slot></slot>`;
  var AcsFakeCallProvider = class extends BaseCallProvider {
    constructor() {
      super();
      this.setContext(new AcsFakeCallContext());
    }
  };
  AcsFakeCallProvider = __decorateClass([
    customElement({ name: "acs-fake-call-provider", template: template2 })
  ], AcsFakeCallProvider);
  var AcsFakeCallContext = class extends FakeCallAdapter {
    registerStateChangeCallback(callback, selector) {
      this.onStateChange((state) => {
        callback(selector(state));
      });
      callback(selector(this.getState()));
    }
    unregisterStateChangeCallback(callback, selector) {
      this.offStateChange((state) => {
        callback(selector(state));
      });
    }
  };

  // src/acs-real-call-provider.ts
  init_virtual_process_polyfill();

  // src/AcsRealCallContext.ts
  init_virtual_process_polyfill();
  var AcsRealCallContext = class {
    constructor(adapter) {
      this.adapter = adapter;
    }
    registerStateChangeCallback(callback, selector) {
      this.onStateChange((state) => {
        callback(selector(state));
      });
    }
    unregisterStateChangeCallback(callback, selector) {
      this.offStateChange((state) => {
        callback(selector(state));
      });
    }
    onStateChange(handler) {
      this.adapter.onStateChange(handler);
    }
    offStateChange(handler) {
      var _a;
      return (_a = this.adapter) == null ? void 0 : _a.offStateChange(handler);
    }
    getState() {
      return this.adapter.getState();
    }
    on() {
      throw new Error("unimplemented");
    }
    off() {
      throw new Error("unimplemented");
    }
    dispose() {
      var _a;
      (_a = this.adapter) == null ? void 0 : _a.dispose();
    }
    joinCall() {
      throw new Error("unimplemented");
    }
    leaveCall() {
      throw new Error("unimplemented");
    }
    startCamera() {
      throw new Error("unimplemented");
    }
    stopCamera() {
      throw new Error("unimplemented");
    }
    async mute() {
      var _a;
      return (_a = this.adapter) == null ? void 0 : _a.mute();
    }
    async unmute() {
      var _a;
      return (_a = this.adapter) == null ? void 0 : _a.unmute();
    }
    startCall() {
      throw new Error("unimplemented");
    }
    startScreenShare() {
      throw new Error("unimplemented");
    }
    stopScreenShare() {
      throw new Error("unimplemented");
    }
    removeParticipant() {
      throw new Error("unimplemented");
    }
    createStreamView() {
      throw new Error("unimplemented");
    }
    disposeStreamView() {
      throw new Error("unimplemented");
    }
    askDevicePermission() {
      throw new Error("unimplemented");
    }
    queryCameras() {
      throw new Error("unimplemented");
    }
    queryMicrophones() {
      throw new Error("unimplemented");
    }
    querySpeakers() {
      throw new Error("unimplemented");
    }
    setCamera() {
      throw new Error("unimplemented");
    }
    setMicrophone() {
      throw new Error("unimplemented");
    }
    setSpeaker() {
      throw new Error("unimplemented");
    }
  };

  // src/acs-real-call-provider.ts
  var template3 = html`<slot></slot>`;
  var AcsRealCallProvider = class extends BaseCallProvider {
    connectedCallback() {
      super.connectedCallback && super.connectedCallback();
      if (this.adapter) {
        this.setContext(new AcsRealCallContext(this.adapter));
      }
    }
    adapterChanged(_oldValue, newValue) {
      if (newValue) {
        this.setContext(new AcsRealCallContext(newValue));
      }
    }
  };
  __decorateClass([
    observable
  ], AcsRealCallProvider.prototype, "adapter", 2);
  AcsRealCallProvider = __decorateClass([
    customElement({ name: "acs-real-call-provider", template: template3 })
  ], AcsRealCallProvider);

  // src/index.ts
  provideFASTDesignSystem().register(fastButton());
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
