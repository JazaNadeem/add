(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["VueSelect"] = factory();
    else
        root["VueSelect"] = factory();
})(this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/ // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/ // Check if module is in cache
            /******/
            if (installedModules[moduleId])
                /******/
                return installedModules[moduleId].exports;
            /******/
            /******/ // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: false
                /******/
            };
            /******/
            /******/ // Execute the module function
            /******/
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ // Flag the module as loaded
            /******/
            module.loaded = true;
            /******/
            /******/ // Return the exports of the module
            /******/
            return module.exports;
            /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/
        __webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/
        __webpack_require__.c = installedModules;
        /******/
        /******/ // __webpack_public_path__
        /******/
        __webpack_require__.p = "/";
        /******/
        /******/ // Load entry module and return exports
        /******/
        return __webpack_require__(0);
        /******/
    })
    /************************************************************************/
    /******/
    ([
        /* 0 */
        /***/
        (function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.mixins = exports.VueSelect = undefined;

            var _Select = __webpack_require__(83);

            var _Select2 = _interopRequireDefault(_Select);

            var _index = __webpack_require__(42);

            var _index2 = _interopRequireDefault(_index);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            exports.default = _Select2.default;
            exports.VueSelect = _Select2.default;
            exports.mixins = _index2.default;

            /***/
        }),
        /* 1 */
        /***/
        (function(module, exports) {

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
                window : typeof self != 'undefined' && self.Math == Math ? self
                // eslint-disable-next-line no-new-func
                :
                Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


            /***/
        }),
        /* 2 */
        /***/
        (function(module, exports, __webpack_require__) {

            // Thank's IE8 for his funny defineProperty
            module.exports = !__webpack_require__(9)(function() {
                return Object.defineProperty({}, 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });


            /***/
        }),
        /* 3 */
        /***/
        (function(module, exports) {

            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };


            /***/
        }),
        /* 4 */
        /***/
        (function(module, exports, __webpack_require__) {

            var anObject = __webpack_require__(11);
            var IE8_DOM_DEFINE = __webpack_require__(33);
            var toPrimitive = __webpack_require__(25);
            var dP = Object.defineProperty;

            exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return dP(O, P, Attributes);
                } catch (e) { /* empty */ }
                if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
            };


            /***/
        }),
        /* 5 */
        /***/
        (function(module, exports) {

            var core = module.exports = {
                version: '2.5.2'
            };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


            /***/
        }),
        /* 6 */
        /***/
        (function(module, exports, __webpack_require__) {

            var dP = __webpack_require__(4);
            var createDesc = __webpack_require__(14);
            module.exports = __webpack_require__(2) ? function(object, key, value) {
                return dP.f(object, key, createDesc(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };


            /***/
        }),
        /* 7 */
        /***/
        (function(module, exports, __webpack_require__) {

            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__(59);
            var defined = __webpack_require__(16);
            module.exports = function(it) {
                return IObject(defined(it));
            };


            /***/
        }),
        /* 8 */
        /***/
        (function(module, exports, __webpack_require__) {

            var store = __webpack_require__(23)('wks');
            var uid = __webpack_require__(15);
            var Symbol = __webpack_require__(1).Symbol;
            var USE_SYMBOL = typeof Symbol == 'function';

            var $exports = module.exports = function(name) {
                return store[name] || (store[name] =
                    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
            };

            $exports.store = store;


            /***/
        }),
        /* 9 */
        /***/
        (function(module, exports) {

            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };


            /***/
        }),
        /* 10 */
        /***/
        (function(module, exports) {

            module.exports = function(it) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };


            /***/
        }),
        /* 11 */
        /***/
        (function(module, exports, __webpack_require__) {

            var isObject = __webpack_require__(10);
            module.exports = function(it) {
                if (!isObject(it)) throw TypeError(it + ' is not an object!');
                return it;
            };


            /***/
        }),
        /* 12 */
        /***/
        (function(module, exports, __webpack_require__) {

            var global = __webpack_require__(1);
            var core = __webpack_require__(5);
            var ctx = __webpack_require__(56);
            var hide = __webpack_require__(6);
            var PROTOTYPE = 'prototype';

            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F;
                var IS_GLOBAL = type & $export.G;
                var IS_STATIC = type & $export.S;
                var IS_PROTO = type & $export.P;
                var IS_BIND = type & $export.B;
                var IS_WRAP = type & $export.W;
                var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                var expProto = exports[PROTOTYPE];
                var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
                var key, own, out;
                if (IS_GLOBAL) source = name;
                for (key in source) {
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                        // bind timers to global for call from export context
                        :
                        IS_BIND && own ? ctx(out, global)
                        // wrap global constructors for prevent change them in library
                        :
                        IS_WRAP && target[key] == out ? (function(C) {
                            var F = function(a, b, c) {
                                if (this instanceof C) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new C();
                                        case 1:
                                            return new C(a);
                                        case 2:
                                            return new C(a, b);
                                    }
                                    return new C(a, b, c);
                                }
                                return C.apply(this, arguments);
                            };
                            F[PROTOTYPE] = C[PROTOTYPE];
                            return F;
                            // make static versions for prototype methods
                        })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                    if (IS_PROTO) {
                        (exports.virtual || (exports.virtual = {}))[key] = out;
                        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                        if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                    }
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            $export.U = 64; // safe
            $export.R = 128; // real proto method for `library`
            module.exports = $export;


            /***/
        }),
        /* 13 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            var $keys = __webpack_require__(38);
            var enumBugKeys = __webpack_require__(17);

            module.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
            };


            /***/
        }),
        /* 14 */
        /***/
        (function(module, exports) {

            module.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };


            /***/
        }),
        /* 15 */
        /***/
        (function(module, exports) {

            var id = 0;
            var px = Math.random();
            module.exports = function(key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };


            /***/
        }),
        /* 16 */
        /***/
        (function(module, exports) {

            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };


            /***/
        }),
        /* 17 */
        /***/
        (function(module, exports) {

            // IE 8- don't enum bug keys
            module.exports = (
                'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
            ).split(',');


            /***/
        }),
        /* 18 */
        /***/
        (function(module, exports) {

            module.exports = {};


            /***/
        }),
        /* 19 */
        /***/
        (function(module, exports) {

            module.exports = true;


            /***/
        }),
        /* 20 */
        /***/
        (function(module, exports) {

            exports.f = {}.propertyIsEnumerable;


            /***/
        }),
        /* 21 */
        /***/
        (function(module, exports, __webpack_require__) {

            var def = __webpack_require__(4).f;
            var has = __webpack_require__(3);
            var TAG = __webpack_require__(8)('toStringTag');

            module.exports = function(it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                    configurable: true,
                    value: tag
                });
            };


            /***/
        }),
        /* 22 */
        /***/
        (function(module, exports, __webpack_require__) {

            var shared = __webpack_require__(23)('keys');
            var uid = __webpack_require__(15);
            module.exports = function(key) {
                return shared[key] || (shared[key] = uid(key));
            };


            /***/
        }),
        /* 23 */
        /***/
        (function(module, exports, __webpack_require__) {

            var global = __webpack_require__(1);
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || (global[SHARED] = {});
            module.exports = function(key) {
                return store[key] || (store[key] = {});
            };


            /***/
        }),
        /* 24 */
        /***/
        (function(module, exports) {

            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = function(it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };


            /***/
        }),
        /* 25 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__(10);
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };


            /***/
        }),
        /* 26 */
        /***/
        (function(module, exports, __webpack_require__) {

            var global = __webpack_require__(1);
            var core = __webpack_require__(5);
            var LIBRARY = __webpack_require__(19);
            var wksExt = __webpack_require__(27);
            var defineProperty = __webpack_require__(4).f;
            module.exports = function(name) {
                var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
                if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
                    value: wksExt.f(name)
                });
            };


            /***/
        }),
        /* 27 */
        /***/
        (function(module, exports, __webpack_require__) {

            exports.f = __webpack_require__(8);


            /***/
        }),
        /* 28 */
        /***/
        (function(module, exports) {

            'use strict';

            module.exports = {
                props: {
                    loading: {
                        type: Boolean,
                        default: false
                    },

                    onSearch: {
                        type: Function,
                        default: function _default(search, loading) {}
                    }
                },

                data: function data() {
                    return {
                        mutableLoading: false
                    };
                },


                watch: {
                    search: function search() {
                        if (this.search.length > 0) {
                            this.onSearch(this.search, this.toggleLoading);
                            this.$emit('search', this.search, this.toggleLoading);
                        }
                    },
                    loading: function loading(val) {
                        this.mutableLoading = val;
                    }
                },

                methods: {
                    toggleLoading: function toggleLoading() {
                        var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                        if (toggle == null) {
                            return this.mutableLoading = !this.mutableLoading;
                        }
                        return this.mutableLoading = toggle;
                    }
                }
            };

            /***/
        }),
        /* 29 */
        /***/
        (function(module, exports) {

            "use strict";

            module.exports = {
                watch: {
                    typeAheadPointer: function typeAheadPointer() {
                        this.maybeAdjustScroll();
                    }
                },

                methods: {
                    maybeAdjustScroll: function maybeAdjustScroll() {
                        var pixelsToPointerTop = this.pixelsToPointerTop();
                        var pixelsToPointerBottom = this.pixelsToPointerBottom();

                        if (pixelsToPointerTop <= this.viewport().top) {
                            return this.scrollTo(pixelsToPointerTop);
                        } else if (pixelsToPointerBottom >= this.viewport().bottom) {
                            return this.scrollTo(this.viewport().top + this.pointerHeight());
                        }
                    },
                    pixelsToPointerTop: function pixelsToPointerTop() {
                        var pixelsToPointerTop = 0;
                        if (this.$refs.dropdownMenu) {
                            for (var i = 0; i < this.typeAheadPointer; i++) {
                                pixelsToPointerTop += this.$refs.dropdownMenu.children[i].offsetHeight;
                            }
                        }
                        return pixelsToPointerTop;
                    },
                    pixelsToPointerBottom: function pixelsToPointerBottom() {
                        return this.pixelsToPointerTop() + this.pointerHeight();
                    },
                    pointerHeight: function pointerHeight() {
                        var element = this.$refs.dropdownMenu ? this.$refs.dropdownMenu.children[this.typeAheadPointer] : false;
                        return element ? element.offsetHeight : 0;
                    },
                    viewport: function viewport() {
                        return {
                            top: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop : 0,
                            bottom: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.offsetHeight + this.$refs.dropdownMenu.scrollTop : 0
                        };
                    },
                    scrollTo: function scrollTo(position) {
                        return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop = position : null;
                    }
                }
            };

            /***/
        }),
        /* 30 */
        /***/
        (function(module, exports) {

            "use strict";

            module.exports = {
                data: function data() {
                    return {
                        typeAheadPointer: -1
                    };
                },


                watch: {
                    filteredOptions: function filteredOptions() {
                        this.typeAheadPointer = 0;
                    }
                },

                methods: {
                    typeAheadUp: function typeAheadUp() {
                        if (this.typeAheadPointer > 0) {
                            this.typeAheadPointer--;
                            if (this.maybeAdjustScroll) {
                                this.maybeAdjustScroll();
                            }
                        }
                    },
                    typeAheadDown: function typeAheadDown() {
                        if (this.typeAheadPointer < this.filteredOptions.length - 1) {
                            this.typeAheadPointer++;
                            if (this.maybeAdjustScroll) {
                                this.maybeAdjustScroll();
                            }
                        }
                    },
                    typeAheadSelect: function typeAheadSelect() {
                        if (this.filteredOptions[this.typeAheadPointer]) {
                            this.select(this.filteredOptions[this.typeAheadPointer]);
                        } else if (this.taggable && this.search.length) {
                            this.select(this.search);
                        }

                        if (this.clearSearchOnSelect) {
                            this.search = "";
                        }
                    }
                }
            };

            /***/
        }),
        /* 31 */
        /***/
        (function(module, exports) {

            var toString = {}.toString;

            module.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };


            /***/
        }),
        /* 32 */
        /***/
        (function(module, exports, __webpack_require__) {

            var isObject = __webpack_require__(10);
            var document = __webpack_require__(1).document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject(document) && isObject(document.createElement);
            module.exports = function(it) {
                return is ? document.createElement(it) : {};
            };


            /***/
        }),
        /* 33 */
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = !__webpack_require__(2) && !__webpack_require__(9)(function() {
                return Object.defineProperty(__webpack_require__(32)('div'), 'a', {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });


            /***/
        }),
        /* 34 */
        /***/
        (function(module, exports, __webpack_require__) {

            'use strict';
            var LIBRARY = __webpack_require__(19);
            var $export = __webpack_require__(12);
            var redefine = __webpack_require__(39);
            var hide = __webpack_require__(6);
            var has = __webpack_require__(3);
            var Iterators = __webpack_require__(18);
            var $iterCreate = __webpack_require__(61);
            var setToStringTag = __webpack_require__(21);
            var getPrototypeOf = __webpack_require__(67);
            var ITERATOR = __webpack_require__(8)('iterator');
            var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
            var FF_ITERATOR = '@@iterator';
            var KEYS = 'keys';
            var VALUES = 'values';

            var returnThis = function() {
                return this;
            };

            module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch (kind) {
                        case KEYS:
                            return function keys() {
                                return new Constructor(this, kind);
                            };
                        case VALUES:
                            return function values() {
                                return new Constructor(this, kind);
                            };
                    }
                    return function entries() {
                        return new Constructor(this, kind);
                    };
                };
                var TAG = NAME + ' Iterator';
                var DEF_VALUES = DEFAULT == VALUES;
                var VALUES_BUG = false;
                var proto = Base.prototype;
                var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                var $default = $native || getMethod(DEFAULT);
                var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                var methods, key, IteratorPrototype;
                // Fix native
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                        // Set @@toStringTag to native iterators
                        setToStringTag(IteratorPrototype, TAG, true);
                        // fix for some old engines
                        if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this);
                    };
                }
                // Define iterator
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                    hide(proto, ITERATOR, $default);
                }
                // Plug for library
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                    };
                    if (FORCED)
                        for (key in methods) {
                            if (!(key in proto)) redefine(proto, key, methods[key]);
                        } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
            };


            /***/
        }),
        /* 35 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            var anObject = __webpack_require__(11);
            var dPs = __webpack_require__(64);
            var enumBugKeys = __webpack_require__(17);
            var IE_PROTO = __webpack_require__(22)('IE_PROTO');
            var Empty = function() { /* empty */ };
            var PROTOTYPE = 'prototype';

            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = __webpack_require__(32)('iframe');
                var i = enumBugKeys.length;
                var lt = '<';
                var gt = '>';
                var iframeDocument;
                iframe.style.display = 'none';
                __webpack_require__(58).appendChild(iframe);
                iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                // createDict = iframe.contentWindow.Object;
                // html.removeChild(iframe);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
            };

            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : dPs(result, Properties);
            };


            /***/
        }),
        /* 36 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
            var $keys = __webpack_require__(38);
            var hiddenKeys = __webpack_require__(17).concat('length', 'prototype');

            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return $keys(O, hiddenKeys);
            };


            /***/
        }),
        /* 37 */
        /***/
        (function(module, exports) {

            exports.f = Object.getOwnPropertySymbols;


            /***/
        }),
        /* 38 */
        /***/
        (function(module, exports, __webpack_require__) {

            var has = __webpack_require__(3);
            var toIObject = __webpack_require__(7);
            var arrayIndexOf = __webpack_require__(55)(false);
            var IE_PROTO = __webpack_require__(22)('IE_PROTO');

            module.exports = function(object, names) {
                var O = toIObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O)
                    if (key != IE_PROTO) has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while (names.length > i)
                    if (has(O, key = names[i++])) {
                        ~arrayIndexOf(result, key) || result.push(key);
                    }
                return result;
            };


            /***/
        }),
        /* 39 */
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__(6);


            /***/
        }),
        /* 40 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(16);
            module.exports = function(it) {
                return Object(defined(it));
            };


            /***/
        }),
        /* 41 */
        /***/
        (function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _keys = __webpack_require__(44);

            var _keys2 = _interopRequireDefault(_keys);

            var _defineProperty2 = __webpack_require__(47);

            var _defineProperty3 = _interopRequireDefault(_defineProperty2);

            var _typeof2 = __webpack_require__(48);

            var _typeof3 = _interopRequireDefault(_typeof2);

            var _pointerScroll = __webpack_require__(29);

            var _pointerScroll2 = _interopRequireDefault(_pointerScroll);

            var _typeAheadPointer = __webpack_require__(30);

            var _typeAheadPointer2 = _interopRequireDefault(_typeAheadPointer);

            var _ajax = __webpack_require__(28);

            var _ajax2 = _interopRequireDefault(_ajax);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            exports.default = {
                mixins: [_pointerScroll2.default, _typeAheadPointer2.default, _ajax2.default],

                props: {
                    value: {
                        default: null
                    },

                    options: {
                        type: Array,
                        default: function _default() {
                            return [];
                        }
                    },

                    disabled: {
                        type: Boolean,
                        default: false
                    },

                    maxHeight: {
                        type: String,
                        default: '400px'
                    },

                    searchable: {
                        type: Boolean,
                        default: true
                    },

                    multiple: {
                        type: Boolean,
                        default: false
                    },

                    placeholder: {
                        type: String,
                        default: ''
                    },

                    transition: {
                        type: String,
                        default: 'fade'
                    },

                    clearSearchOnSelect: {
                        type: Boolean,
                        default: true
                    },

                    closeOnSelect: {
                        type: Boolean,
                        default: true
                    },

                    label: {
                        type: String,
                        default: 'label'
                    },

                    getOptionLabel: {
                        type: Function,
                        default: function _default(option) {
                            if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object') {
                                if (this.label && option[this.label]) {
                                    return option[this.label];
                                }
                            }
                            return option;
                        }
                    },

                    onChange: {
                        type: Function,
                        default: function _default(val) {
                            this.$emit('input', val);
                        }
                    },

                    taggable: {
                        type: Boolean,
                        default: false
                    },

                    tabindex: {
                        type: Number,
                        default: null
                    },

                    pushTags: {
                        type: Boolean,
                        default: false
                    },

                    filterable: {
                        type: Boolean,
                        default: true
                    },

                    createOption: {
                        type: Function,
                        default: function _default(newOption) {
                            if ((0, _typeof3.default)(this.mutableOptions[0]) === 'object') {
                                newOption = (0, _defineProperty3.default)({}, this.label, newOption);
                            }
                            this.$emit('option:created', newOption);
                            return newOption;
                        }
                    },

                    resetOnOptionsChange: {
                        type: Boolean,
                        default: false
                    },

                    noDrop: {
                        type: Boolean,
                        default: false
                    },

                    inputId: {
                        type: String
                    },

                    dir: {
                        type: String,
                        default: 'auto'
                    }
                },

                data: function data() {
                    return {
                        search: '',
                        open: false,
                        mutableValue: null,
                        mutableOptions: []
                    };
                },


                watch: {
                    value: function value(val) {
                        this.mutableValue = val;
                    },
                    mutableValue: function mutableValue(val, old) {
                        if (this.multiple) {
                            this.onChange ? this.onChange(val) : null;
                        } else {
                            this.onChange && val !== old ? this.onChange(val) : null;
                        }
                    },
                    options: function options(val) {
                        this.mutableOptions = val;
                    },
                    mutableOptions: function mutableOptions() {
                        if (!this.taggable && this.resetOnOptionsChange) {
                            this.mutableValue = this.multiple ? [] : null;
                        }
                    },
                    multiple: function multiple(val) {
                        this.mutableValue = val ? [] : null;
                    }
                },

                created: function created() {
                    this.mutableValue = this.value;
                    this.mutableOptions = this.options.slice(0);
                    this.mutableLoading = this.loading;

                    this.$on('option:created', this.maybePushTag);
                },


                methods: {
                    select: function select(option) {
                        if (this.isOptionSelected(option)) {
                            this.deselect(option);
                        } else {
                            if (this.taggable && !this.optionExists(option)) {
                                option = this.createOption(option);
                            }

                            if (this.multiple && !this.mutableValue) {
                                this.mutableValue = [option];
                            } else if (this.multiple) {
                                this.mutableValue.push(option);
                            } else {
                                this.mutableValue = option;
                            }
                        }

                        this.onAfterSelect(option);
                    },
                    deselect: function deselect(option) {
                        var _this = this;

                        if (this.multiple) {
                            var ref = -1;
                            this.mutableValue.forEach(function(val) {
                                if (val === option || (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) === 'object' && val[_this.label] === option[_this.label]) {
                                    ref = val;
                                }
                            });
                            var index = this.mutableValue.indexOf(ref);
                            this.mutableValue.splice(index, 1);
                        } else {
                            this.mutableValue = null;
                        }
                    },
                    clearSelection: function clearSelection() {
                        this.mutableValue = this.multiple ? [] : null;
                    },
                    onAfterSelect: function onAfterSelect(option) {
                        if (this.closeOnSelect) {
                            this.open = !this.open;
                            this.$refs.search.blur();
                        }

                        if (this.clearSearchOnSelect) {
                            this.search = '';
                        }
                    },
                    toggleDropdown: function toggleDropdown(e) {
                        if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {
                            if (this.open) {
                                this.$refs.search.blur();
                            } else {
                                if (!this.disabled) {
                                    this.open = true;
                                    this.$refs.search.focus();
                                }
                            }
                        }
                    },
                    isOptionSelected: function isOptionSelected(option) {
                        var _this2 = this;

                        if (this.multiple && this.mutableValue) {
                            var selected = false;
                            this.mutableValue.forEach(function(opt) {
                                if ((typeof opt === 'undefined' ? 'undefined' : (0, _typeof3.default)(opt)) === 'object' && opt[_this2.label] === option[_this2.label]) {
                                    selected = true;
                                } else if ((typeof opt === 'undefined' ? 'undefined' : (0, _typeof3.default)(opt)) === 'object' && opt[_this2.label] === option) {
                                    selected = true;
                                } else if (opt === option) {
                                    selected = true;
                                }
                            });
                            return selected;
                        }

                        return this.mutableValue === option;
                    },
                    onEscape: function onEscape() {
                        if (!this.search.length) {
                            this.$refs.search.blur();
                        } else {
                            this.search = '';
                        }
                    },
                    onSearchBlur: function onSearchBlur() {
                        if (this.clearSearchOnBlur) {
                            this.search = '';
                        }
                        this.open = false;
                        this.$emit('search:blur');
                    },
                    onSearchFocus: function onSearchFocus() {
                        this.open = true;
                        this.$emit('search:focus');
                    },
                    maybeDeleteValue: function maybeDeleteValue() {
                        if (!this.$refs.search.value.length && this.mutableValue) {
                            return this.multiple ? this.mutableValue.pop() : this.mutableValue = null;
                        }
                    },
                    optionExists: function optionExists(option) {
                        var _this3 = this;

                        var exists = false;

                        this.mutableOptions.forEach(function(opt) {
                            if ((typeof opt === 'undefined' ? 'undefined' : (0, _typeof3.default)(opt)) === 'object' && opt[_this3.label] === option) {
                                exists = true;
                            } else if (opt === option) {
                                exists = true;
                            }
                        });

                        return exists;
                    },
                    maybePushTag: function maybePushTag(option) {
                        if (this.pushTags) {
                            this.mutableOptions.push(option);
                        }
                    }
                },

                computed: {
                    dropdownClasses: function dropdownClasses() {
                        return {
                            open: this.dropdownOpen,
                            single: !this.multiple,
                            searching: this.searching,
                            searchable: this.searchable,
                            unsearchable: !this.searchable,
                            loading: this.mutableLoading,
                            rtl: this.dir === 'rtl',
                            disabled: this.disabled
                        };
                    },
                    clearSearchOnBlur: function clearSearchOnBlur() {
                        return this.clearSearchOnSelect && !this.multiple;
                    },
                    searching: function searching() {
                        return !!this.search;
                    },
                    dropdownOpen: function dropdownOpen() {
                        return this.noDrop ? false : this.open && !this.mutableLoading;
                    },
                    searchPlaceholder: function searchPlaceholder() {
                        if (this.isValueEmpty && this.placeholder) {
                            return this.placeholder;
                        }
                    },
                    filteredOptions: function filteredOptions() {
                        var _this4 = this;

                        if (!this.filterable && !this.taggable) {
                            return this.mutableOptions.slice();
                        }
                        var options = this.mutableOptions.filter(function(option) {
                            if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object' && option.hasOwnProperty(_this4.label)) {
                                return option[_this4.label].toLowerCase().indexOf(_this4.search.toLowerCase()) > -1;
                            } else if ((typeof option === 'undefined' ? 'undefined' : (0, _typeof3.default)(option)) === 'object' && !option.hasOwnProperty(_this4.label)) {
                                return console.warn('[vue-select warn]: Label key "option.' + _this4.label + '" does not exist in options object.\nhttp://sagalbot.github.io/vue-select/#ex-labels');
                            }
                            return option.toLowerCase().indexOf(_this4.search.toLowerCase()) > -1;
                        });
                        if (this.taggable && this.search.length && !this.optionExists(this.search)) {
                            options.unshift(this.search);
                        }
                        return options;
                    },
                    isValueEmpty: function isValueEmpty() {
                        if (this.mutableValue) {
                            if ((0, _typeof3.default)(this.mutableValue) === 'object') {
                                return !(0, _keys2.default)(this.mutableValue).length;
                            }
                            return !this.mutableValue.length;
                        }

                        return true;
                    },
                    valueAsArray: function valueAsArray() {
                        if (this.multiple) {
                            return this.mutableValue;
                        } else if (this.mutableValue) {
                            return [this.mutableValue];
                        }

                        return [];
                    },
                    showClearButton: function showClearButton() {
                        return !this.multiple && !this.open && this.mutableValue != null;
                    }
                }

            };

            /***/
        }),
        /* 42 */
        /***/
        (function(module, exports, __webpack_require__) {

            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _ajax = __webpack_require__(28);

            var _ajax2 = _interopRequireDefault(_ajax);

            var _typeAheadPointer = __webpack_require__(30);

            var _typeAheadPointer2 = _interopRequireDefault(_typeAheadPointer);

            var _pointerScroll = __webpack_require__(29);

            var _pointerScroll2 = _interopRequireDefault(_pointerScroll);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            exports.default = {
                ajax: _ajax2.default,
                pointer: _typeAheadPointer2.default,
                pointerScroll: _pointerScroll2.default
            };

            /***/
        }),
        /* 43 */
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = {
                "default": __webpack_require__(49),
                __esModule: true
            };

            /***/
        }),
        /* 44 */
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = {
                "default": __webpack_require__(50),
                __esModule: true
            };

            /***/
        }),
        /* 45 */
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = {
                "default": __webpack_require__(51),
                __esModule: true
            };

            /***/
        }),
        /* 46 */
        /***/
        (function(module, exports, __webpack_require__) {

            module.exports = {
                "default": __webpack_require__(52),
                __esModule: true
            };

            /***/
        }),
        /* 47 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";

            exports.__esModule = true;

            var _defineProperty = __webpack_require__(43);

            var _defineProperty2 = _interopRequireDefault(_defineProperty);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            exports.default = function(obj, key, value) {
                if (key in obj) {
                    (0, _defineProperty2.default)(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }

                return obj;
            };

            /***/
        }),
        /* 48 */
        /***/
        (function(module, exports, __webpack_require__) {

            "use strict";

            exports.__esModule = true;

            var _iterator = __webpack_require__(46);

            var _iterator2 = _interopRequireDefault(_iterator);

            var _symbol = __webpack_require__(45);

            var _symbol2 = _interopRequireDefault(_symbol);

            var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
            };

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }

            exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof(obj);
            } : function(obj) {
                return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
            };

            /***/
        }),
        /* 49 */
        /***/
        (function(module, exports, __webpack_require__) {

            __webpack_require__(73);
            var $Object = __webpack_require__(5).Object;
            module.exports = function defineProperty(it, key, desc) {
                return $Object.defineProperty(it, key, desc);
            };


            /***/
        }),
        /* 50 */
        /***/
        (function(module, exports, __webpack_require__) {

            __webpack_require__(74);
            module.exports = __webpack_require__(5).Object.keys;


            /***/
        }),
        /* 51 */
        /***/
        (function(module, exports, __webpack_require__) {

            __webpack_require__(77);
            __webpack_require__(75);
            __webpack_require__(78);
            __webpack_require__(79);
            module.exports = __webpack_require__(5).Symbol;


            /***/
        }),
        /* 52 */
        /***/
        (function(module, exports, __webpack_require__) {

            __webpack_require__(76);
            __webpack_require__(80);
            module.exports = __webpack_require__(27).f('iterator');


            /***/
        }),
        /* 53 */
        /***/
        (function(module, exports) {

            module.exports = function(it) {
                if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                return it;
            };


            /***/
        }),
        /* 54 */
        /***/
        (function(module, exports) {

            module.exports = function() { /* empty */ };


            /***/
        }),
        /* 55 */
        /***/
        (function(module, exports, __webpack_require__) {

            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__(7);
            var toLength = __webpack_require__(71);
            var toAbsoluteIndex = __webpack_require__(70);
            module.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el)
                        while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        } else
                            for (; length > index; index++)
                                if (IS_INCLUDES || index in O) {
                                    if (O[index] === el) return IS_INCLUDES || index || 0;
                                }
                    return !IS_INCLUDES && -1;
                };
            };


            /***/
        }),
        /* 56 */
        /***/
        (function(module, exports, __webpack_require__) {

            // optional / simple context binding
            var aFunction = __webpack_require__(53);
            module.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function( /* ...args */ ) {
                    return fn.apply(that, arguments);
                };
            };


            /***/
        }),
        /* 57 */
        /***/
        (function(module, exports, __webpack_require__) {

            // all enumerable object keys, includes symbols
            var getKeys = __webpack_require__(13);
            var gOPS = __webpack_require__(37);
            var pIE = __webpack_require__(20);
            module.exports = function(it) {
                var result = getKeys(it);
                var getSymbols = gOPS.f;
                if (getSymbols) {
                    var symbols = getSymbols(it);
                    var isEnum = pIE.f;
                    var i = 0;
                    var key;
                    while (symbols.length > i)
                        if (isEnum.call(it, key = symbols[i++])) result.push(key);
                }
                return result;
            };


            /***/
        }),
        /* 58 */
        /***/
        (function(module, exports, __webpack_require__) {

            var document = __webpack_require__(1).document;
            module.exports = document && document.documentElement;


            /***/
        }),
        /* 59 */
        /***/
        (function(module, exports, __webpack_require__) {

            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__(31);
            // eslint-disable-next-line no-prototype-builtins
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
                return cof(it) == 'String' ? it.split('') : Object(it);
            };


            /***/
        }),
        /* 60 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 7.2.2 IsArray(argument)
            var cof = __webpack_require__(31);
            module.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == 'Array';
            };


            /***/
        }),
        /* 61 */
        /***/
        (function(module, exports, __webpack_require__) {

            'use strict';
            var create = __webpack_require__(35);
            var descriptor = __webpack_require__(14);
            var setToStringTag = __webpack_require__(21);
            var IteratorPrototype = {};

            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__(6)(IteratorPrototype, __webpack_require__(8)('iterator'), function() {
                return this;
            });

            module.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, {
                    next: descriptor(1, next)
                });
                setToStringTag(Constructor, NAME + ' Iterator');
            };


            /***/
        }),
        /* 62 */
        /***/
        (function(module, exports) {

            module.exports = function(done, value) {
                return {
                    value: value,
                    done: !!done
                };
            };


            /***/
        }),
        /* 63 */
        /***/
        (function(module, exports, __webpack_require__) {

            var META = __webpack_require__(15)('meta');
            var isObject = __webpack_require__(10);
            var has = __webpack_require__(3);
            var setDesc = __webpack_require__(4).f;
            var id = 0;
            var isExtensible = Object.isExtensible || function() {
                return true;
            };
            var FREEZE = !__webpack_require__(9)(function() {
                return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function(it) {
                setDesc(it, META, {
                    value: {
                        i: 'O' + ++id, // object ID
                        w: {} // weak collections IDs
                    }
                });
            };
            var fastKey = function(it, create) {
                // return primitive with prefix
                if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return 'F';
                    // not necessary to add metadata
                    if (!create) return 'E';
                    // add missing metadata
                    setMeta(it);
                    // return object ID
                }
                return it[META].i;
            };
            var getWeak = function(it, create) {
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return true;
                    // not necessary to add metadata
                    if (!create) return false;
                    // add missing metadata
                    setMeta(it);
                    // return hash weak collections IDs
                }
                return it[META].w;
            };
            // add metadata on freeze-family methods calling
            var onFreeze = function(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
                return it;
            };
            var meta = module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            };


            /***/
        }),
        /* 64 */
        /***/
        (function(module, exports, __webpack_require__) {

            var dP = __webpack_require__(4);
            var anObject = __webpack_require__(11);
            var getKeys = __webpack_require__(13);

            module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties);
                var length = keys.length;
                var i = 0;
                var P;
                while (length > i) dP.f(O, P = keys[i++], Properties[P]);
                return O;
            };


            /***/
        }),
        /* 65 */
        /***/
        (function(module, exports, __webpack_require__) {

            var pIE = __webpack_require__(20);
            var createDesc = __webpack_require__(14);
            var toIObject = __webpack_require__(7);
            var toPrimitive = __webpack_require__(25);
            var has = __webpack_require__(3);
            var IE8_DOM_DEFINE = __webpack_require__(33);
            var gOPD = Object.getOwnPropertyDescriptor;

            exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P) {
                O = toIObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE) try {
                    return gOPD(O, P);
                } catch (e) { /* empty */ }
                if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
            };


            /***/
        }),
        /* 66 */
        /***/
        (function(module, exports, __webpack_require__) {

            // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
            var toIObject = __webpack_require__(7);
            var gOPN = __webpack_require__(36).f;
            var toString = {}.toString;

            var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
                Object.getOwnPropertyNames(window) : [];

            var getWindowNames = function(it) {
                try {
                    return gOPN(it);
                } catch (e) {
                    return windowNames.slice();
                }
            };

            module.exports.f = function getOwnPropertyNames(it) {
                return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
            };


            /***/
        }),
        /* 67 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            var has = __webpack_require__(3);
            var toObject = __webpack_require__(40);
            var IE_PROTO = __webpack_require__(22)('IE_PROTO');
            var ObjectProto = Object.prototype;

            module.exports = Object.getPrototypeOf || function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                    return O.constructor.prototype;
                }
                return O instanceof Object ? ObjectProto : null;
            };


            /***/
        }),
        /* 68 */
        /***/
        (function(module, exports, __webpack_require__) {

            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(12);
            var core = __webpack_require__(5);
            var fails = __webpack_require__(9);
            module.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY];
                var exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), 'Object', exp);
            };


            /***/
        }),
        /* 69 */
        /***/
        (function(module, exports, __webpack_require__) {

            var toInteger = __webpack_require__(24);
            var defined = __webpack_require__(16);
            // true  -> String#at
            // false -> String#codePointAt
            module.exports = function(TO_STRING) {
                return function(that, pos) {
                    var s = String(defined(that));
                    var i = toInteger(pos);
                    var l = s.length;
                    var a, b;
                    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ?
                        TO_STRING ? s.charAt(i) : a :
                        TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                };
            };


            /***/
        }),
        /* 70 */
        /***/
        (function(module, exports, __webpack_require__) {

            var toInteger = __webpack_require__(24);
            var max = Math.max;
            var min = Math.min;
            module.exports = function(index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };


            /***/
        }),
        /* 71 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 7.1.15 ToLength
            var toInteger = __webpack_require__(24);
            var min = Math.min;
            module.exports = function(it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };


            /***/
        }),
        /* 72 */
        /***/
        (function(module, exports, __webpack_require__) {

            'use strict';
            var addToUnscopables = __webpack_require__(54);
            var step = __webpack_require__(62);
            var Iterators = __webpack_require__(18);
            var toIObject = __webpack_require__(7);

            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = __webpack_require__(34)(Array, 'Array', function(iterated, kind) {
                this._t = toIObject(iterated); // target
                this._i = 0; // next index
                this._k = kind; // kind
                // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function() {
                var O = this._t;
                var kind = this._k;
                var index = this._i++;
                if (!O || index >= O.length) {
                    this._t = undefined;
                    return step(1);
                }
                if (kind == 'keys') return step(0, index);
                if (kind == 'values') return step(0, O[index]);
                return step(0, [index, O[index]]);
            }, 'values');

            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;

            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');


            /***/
        }),
        /* 73 */
        /***/
        (function(module, exports, __webpack_require__) {

            var $export = __webpack_require__(12);
            // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
            $export($export.S + $export.F * !__webpack_require__(2), 'Object', {
                defineProperty: __webpack_require__(4).f
            });


            /***/
        }),
        /* 74 */
        /***/
        (function(module, exports, __webpack_require__) {

            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(40);
            var $keys = __webpack_require__(13);

            __webpack_require__(68)('keys', function() {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });


            /***/
        }),
        /* 75 */
        /***/
        (function(module, exports) {



            /***/
        }),
        /* 76 */
        /***/
        (function(module, exports, __webpack_require__) {

            'use strict';
            var $at = __webpack_require__(69)(true);

            // 21.1.3.27 String.prototype[@@iterator]()
            __webpack_require__(34)(String, 'String', function(iterated) {
                this._t = String(iterated); // target
                this._i = 0; // next index
                // 21.1.5.2.1 %StringIteratorPrototype%.next()
            }, function() {
                var O = this._t;
                var index = this._i;
                var point;
                if (index >= O.length) return {
                    value: undefined,
                    done: true
                };
                point = $at(O, index);
                this._i += point.length;
                return {
                    value: point,
                    done: false
                };
            });


            /***/
        }),
        /* 77 */
        /***/
        (function(module, exports, __webpack_require__) {

            'use strict';
            // ECMAScript 6 symbols shim
            var global = __webpack_require__(1);
            var has = __webpack_require__(3);
            var DESCRIPTORS = __webpack_require__(2);
            var $export = __webpack_require__(12);
            var redefine = __webpack_require__(39);
            var META = __webpack_require__(63).KEY;
            var $fails = __webpack_require__(9);
            var shared = __webpack_require__(23);
            var setToStringTag = __webpack_require__(21);
            var uid = __webpack_require__(15);
            var wks = __webpack_require__(8);
            var wksExt = __webpack_require__(27);
            var wksDefine = __webpack_require__(26);
            var enumKeys = __webpack_require__(57);
            var isArray = __webpack_require__(60);
            var anObject = __webpack_require__(11);
            var isObject = __webpack_require__(10);
            var toIObject = __webpack_require__(7);
            var toPrimitive = __webpack_require__(25);
            var createDesc = __webpack_require__(14);
            var _create = __webpack_require__(35);
            var gOPNExt = __webpack_require__(66);
            var $GOPD = __webpack_require__(65);
            var $DP = __webpack_require__(4);
            var $keys = __webpack_require__(13);
            var gOPD = $GOPD.f;
            var dP = $DP.f;
            var gOPN = gOPNExt.f;
            var $Symbol = global.Symbol;
            var $JSON = global.JSON;
            var _stringify = $JSON && $JSON.stringify;
            var PROTOTYPE = 'prototype';
            var HIDDEN = wks('_hidden');
            var TO_PRIMITIVE = wks('toPrimitive');
            var isEnum = {}.propertyIsEnumerable;
            var SymbolRegistry = shared('symbol-registry');
            var AllSymbols = shared('symbols');
            var OPSymbols = shared('op-symbols');
            var ObjectProto = Object[PROTOTYPE];
            var USE_NATIVE = typeof $Symbol == 'function';
            var QObject = global.QObject;
            // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
            var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

            // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
            var setSymbolDesc = DESCRIPTORS && $fails(function() {
                return _create(dP({}, 'a', {
                    get: function() {
                        return dP(this, 'a', {
                            value: 7
                        }).a;
                    }
                })).a != 7;
            }) ? function(it, key, D) {
                var protoDesc = gOPD(ObjectProto, key);
                if (protoDesc) delete ObjectProto[key];
                dP(it, key, D);
                if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
            } : dP;

            var wrap = function(tag) {
                var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
                sym._k = tag;
                return sym;
            };

            var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it) {
                return typeof it == 'symbol';
            } : function(it) {
                return it instanceof $Symbol;
            };

            var $defineProperty = function defineProperty(it, key, D) {
                if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
                anObject(it);
                key = toPrimitive(key, true);
                anObject(D);
                if (has(AllSymbols, key)) {
                    if (!D.enumerable) {
                        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                        it[HIDDEN][key] = true;
                    } else {
                        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                        D = _create(D, {
                            enumerable: createDesc(0, false)
                        });
                    }
                    return setSymbolDesc(it, key, D);
                }
                return dP(it, key, D);
            };
            var $defineProperties = function defineProperties(it, P) {
                anObject(it);
                var keys = enumKeys(P = toIObject(P));
                var i = 0;
                var l = keys.length;
                var key;
                while (l > i) $defineProperty(it, key = keys[i++], P[key]);
                return it;
            };
            var $create = function create(it, P) {
                return P === undefined ? _create(it) : $defineProperties(_create(it), P);
            };
            var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                var E = isEnum.call(this, key = toPrimitive(key, true));
                if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
                return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
            };
            var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                it = toIObject(it);
                key = toPrimitive(key, true);
                if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
                var D = gOPD(it, key);
                if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                return D;
            };
            var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                var names = gOPN(toIObject(it));
                var result = [];
                var i = 0;
                var key;
                while (names.length > i) {
                    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
                }
                return result;
            };
            var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                var IS_OP = it === ObjectProto;
                var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
                var result = [];
                var i = 0;
                var key;
                while (names.length > i) {
                    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
                }
                return result;
            };

            // 19.4.1.1 Symbol([description])
            if (!USE_NATIVE) {
                $Symbol = function Symbol() {
                    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                    var $set = function(value) {
                        if (this === ObjectProto) $set.call(OPSymbols, value);
                        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                        setSymbolDesc(this, tag, createDesc(1, value));
                    };
                    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                        configurable: true,
                        set: $set
                    });
                    return wrap(tag);
                };
                redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                    return this._k;
                });

                $GOPD.f = $getOwnPropertyDescriptor;
                $DP.f = $defineProperty;
                __webpack_require__(36).f = gOPNExt.f = $getOwnPropertyNames;
                __webpack_require__(20).f = $propertyIsEnumerable;
                __webpack_require__(37).f = $getOwnPropertySymbols;

                if (DESCRIPTORS && !__webpack_require__(19)) {
                    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                }

                wksExt.f = function(name) {
                    return wrap(wks(name));
                };
            }

            $export($export.G + $export.W + $export.F * !USE_NATIVE, {
                Symbol: $Symbol
            });

            for (var es6Symbols = (
                    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
                ).split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

            for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

            $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
                // 19.4.2.1 Symbol.for(key)
                'for': function(key) {
                    return has(SymbolRegistry, key += '') ?
                        SymbolRegistry[key] :
                        SymbolRegistry[key] = $Symbol(key);
                },
                // 19.4.2.5 Symbol.keyFor(sym)
                keyFor: function keyFor(sym) {
                    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                    for (var key in SymbolRegistry)
                        if (SymbolRegistry[key] === sym) return key;
                },
                useSetter: function() {
                    setter = true;
                },
                useSimple: function() {
                    setter = false;
                }
            });

            $export($export.S + $export.F * !USE_NATIVE, 'Object', {
                // 19.1.2.2 Object.create(O [, Properties])
                create: $create,
                // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                defineProperty: $defineProperty,
                // 19.1.2.3 Object.defineProperties(O, Properties)
                defineProperties: $defineProperties,
                // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                // 19.1.2.7 Object.getOwnPropertyNames(O)
                getOwnPropertyNames: $getOwnPropertyNames,
                // 19.1.2.8 Object.getOwnPropertySymbols(O)
                getOwnPropertySymbols: $getOwnPropertySymbols
            });

            // 24.3.2 JSON.stringify(value [, replacer [, space]])
            $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
                var S = $Symbol();
                // MS Edge converts symbol values to JSON as {}
                // WebKit converts symbol values to JSON as null
                // V8 throws on boxed symbols
                return _stringify([S]) != '[null]' || _stringify({
                    a: S
                }) != '{}' || _stringify(Object(S)) != '{}';
            })), 'JSON', {
                stringify: function stringify(it) {
                    var args = [it];
                    var i = 1;
                    var replacer, $replacer;
                    while (arguments.length > i) args.push(arguments[i++]);
                    $replacer = replacer = args[1];
                    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                    if (!isArray(replacer)) replacer = function(key, value) {
                        if ($replacer) value = $replacer.call(this, key, value);
                        if (!isSymbol(value)) return value;
                    };
                    args[1] = replacer;
                    return _stringify.apply($JSON, args);
                }
            });

            // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
            $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
            // 19.4.3.5 Symbol.prototype[@@toStringTag]
            setToStringTag($Symbol, 'Symbol');
            // 20.2.1.9 Math[@@toStringTag]
            setToStringTag(Math, 'Math', true);
            // 24.3.3 JSON[@@toStringTag]
            setToStringTag(global.JSON, 'JSON', true);


            /***/
        }),
        /* 78 */
        /***/
        (function(module, exports, __webpack_require__) {

            __webpack_require__(26)('asyncIterator');


            /***/
        }),
        /* 79 */
        /***/
        (function(module, exports, __webpack_require__) {

            __webpack_require__(26)('observable');


            /***/
        }),
        /* 80 */
        /***/
        (function(module, exports, __webpack_require__) {

            __webpack_require__(72);
            var global = __webpack_require__(1);
            var hide = __webpack_require__(6);
            var Iterators = __webpack_require__(18);
            var TO_STRING_TAG = __webpack_require__(8)('toStringTag');

            var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
                'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
                'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
                'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
                'TextTrackList,TouchList').split(',');

            for (var i = 0; i < DOMIterables.length; i++) {
                var NAME = DOMIterables[i];
                var Collection = global[NAME];
                var proto = Collection && Collection.prototype;
                if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = Iterators.Array;
            }


            /***/
        }),
        /* 81 */
        /***/
        (function(module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__(82)();
            // imports


            // module
            exports.push([module.id, ".v-select{position:relative;font-family:sans-serif}.v-select,.v-select *{box-sizing:border-box}.v-select.rtl .open-indicator{left:10px;right:auto}.v-select.rtl .selected-tag{float:right;margin-right:3px;margin-left:1px}.v-select.rtl .dropdown-menu{text-align:right}.v-select.rtl .dropdown-toggle .clear{left:30px;right:auto}.v-select .open-indicator{position:absolute;bottom:6px;right:10px;cursor:pointer;pointer-events:all;opacity:1;height:20px}.v-select .open-indicator,.v-select .open-indicator:before{display:inline-block;transition:all .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855);width:10px}.v-select .open-indicator:before{border-color:rgba(60,60,60,.5);border-style:solid;border-width:3px 3px 0 0;content:\"\";height:10px;vertical-align:top;transform:rotate(133deg);box-sizing:inherit}.v-select.open .open-indicator:before{transform:rotate(315deg)}.v-select.loading .open-indicator{opacity:0}.v-select.open .open-indicator{bottom:1px}.v-select .dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;padding:0;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.v-select .dropdown-toggle:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}.v-select .dropdown-toggle .clear{position:absolute;bottom:9px;right:30px;font-size:23px;font-weight:700;line-height:1;color:rgba(60,60,60,.5);padding:0;border:0;background-color:transparent;cursor:pointer}.v-select.searchable .dropdown-toggle{cursor:text}.v-select.unsearchable .dropdown-toggle{cursor:pointer}.v-select.open .dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.v-select .dropdown-menu{display:block;position:absolute;top:100%;left:0;z-index:1000;min-width:160px;padding:5px 0;margin:0;width:100%;overflow-y:scroll;border:1px solid rgba(0,0,0,.26);box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border-top:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.v-select .no-options{text-align:center}.v-select .selected-tag{color:#333;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;height:26px;margin:4px 1px 0 3px;padding:1px .25em;float:left;line-height:24px}.v-select.single .selected-tag{background-color:transparent;border-color:transparent}.v-select.single.open .selected-tag{position:absolute;opacity:.5}.v-select.single.loading .selected-tag,.v-select.single.open.searching .selected-tag{display:none}.v-select .selected-tag .close{float:none;margin-right:0;font-size:20px;appearance:none;padding:0;cursor:pointer;background:0 0;border:0;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.v-select.single.searching:not(.open):not(.loading) input[type=search]{opacity:.2}.v-select input[type=search]::-webkit-search-cancel-button,.v-select input[type=search]::-webkit-search-decoration,.v-select input[type=search]::-webkit-search-results-button,.v-select input[type=search]::-webkit-search-results-decoration{display:none}.v-select input[type=search]::-ms-clear{display:none}.v-select input[type=search],.v-select input[type=search]:focus{appearance:none;-webkit-appearance:none;-moz-appearance:none;line-height:1.42857143;font-size:1em;height:34px;display:inline-block;border:none;outline:none;margin:0;padding:0 .5em;width:10em;max-width:100%;background:none;position:relative;box-shadow:none}.v-select.unsearchable input[type=search]{opacity:0}.v-select.unsearchable input[type=search]:hover{cursor:pointer}.v-select li{line-height:1.42857143}.v-select li>a{display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.v-select li:hover{cursor:pointer}.v-select .dropdown-menu .active>a{color:#333;background:rgba(50,50,50,.1)}.v-select .dropdown-menu>.highlight>a{background:#5897fb;color:#fff}.v-select .highlight:not(:last-child){margin-bottom:0}.v-select .spinner{opacity:0;position:absolute;top:5px;right:10px;font-size:5px;text-indent:-9999em;overflow:hidden;border-top:.9em solid hsla(0,0%,39%,.1);border-right:.9em solid hsla(0,0%,39%,.1);border-bottom:.9em solid hsla(0,0%,39%,.1);border-left:.9em solid rgba(60,60,60,.45);transform:translateZ(0);animation:vSelectSpinner 1.1s infinite linear;transition:opacity .1s}.v-select .spinner,.v-select .spinner:after{border-radius:50%;width:5em;height:5em}.v-select.disabled .dropdown-toggle,.v-select.disabled .dropdown-toggle .clear,.v-select.disabled .dropdown-toggle input,.v-select.disabled .open-indicator,.v-select.disabled .selected-tag .close{cursor:not-allowed;background-color:#f8f8f8}.v-select.loading .spinner{opacity:1}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fade-enter-active,.fade-leave-active{transition:opacity .15s cubic-bezier(1,.5,.8,1)}.fade-enter,.fade-leave-to{opacity:0}", ""]);

            // exports


            /***/
        }),
        /* 82 */
        /***/
        (function(module, exports) {

            /*
            	MIT License http://www.opensource.org/licenses/mit-license.php
            	Author Tobias Koppers @sokra
            */
            // css base code, injected by the css-loader
            module.exports = function() {
                var list = [];

                // return the list of modules as css string
                list.toString = function toString() {
                    var result = [];
                    for (var i = 0; i < this.length; i++) {
                        var item = this[i];
                        if (item[2]) {
                            result.push("@media " + item[2] + "{" + item[1] + "}");
                        } else {
                            result.push(item[1]);
                        }
                    }
                    return result.join("");
                };

                // import a list of modules into the list
                list.i = function(modules, mediaQuery) {
                    if (typeof modules === "string")
                        modules = [
                            [null, modules, ""]
                        ];
                    var alreadyImportedModules = {};
                    for (var i = 0; i < this.length; i++) {
                        var id = this[i][0];
                        if (typeof id === "number")
                            alreadyImportedModules[id] = true;
                    }
                    for (i = 0; i < modules.length; i++) {
                        var item = modules[i];
                        // skip already imported module
                        // this implementation is not 100% perfect for weird media query combinations
                        //  when a module is imported multiple times with different media queries.
                        //  I hope this will never occur (Hey this way we have smaller bundles)
                        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                            if (mediaQuery && !item[2]) {
                                item[2] = mediaQuery;
                            } else if (mediaQuery) {
                                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                            }
                            list.push(item);
                        }
                    }
                };
                return list;
            };


            /***/
        }),
        /* 83 */
        /***/
        (function(module, exports, __webpack_require__) {


            /* styles */
            __webpack_require__(87)

            var Component = __webpack_require__(84)(
                /* script */
                __webpack_require__(41),
                /* template */
                __webpack_require__(85),
                /* scopeId */
                null,
                /* cssModules */
                null
            )

            module.exports = Component.exports


            /***/
        }),
        /* 84 */
        /***/
        (function(module, exports) {

            module.exports = function normalizeComponent(
                rawScriptExports,
                compiledTemplate,
                scopeId,
                cssModules
            ) {
                var esModule
                var scriptExports = rawScriptExports = rawScriptExports || {}

                // ES6 modules interop
                var type = typeof rawScriptExports.default
                if (type === 'object' || type === 'function') {
                    esModule = rawScriptExports
                    scriptExports = rawScriptExports.default
                }

                // Vue.extend constructor export interop
                var options = typeof scriptExports === 'function' ?
                    scriptExports.options :
                    scriptExports

                // render functions
                if (compiledTemplate) {
                    options.render = compiledTemplate.render
                    options.staticRenderFns = compiledTemplate.staticRenderFns
                }

                // scopedId
                if (scopeId) {
                    options._scopeId = scopeId
                }

                // inject cssModules
                if (cssModules) {
                    var computed = options.computed || (options.computed = {})
                    Object.keys(cssModules).forEach(function(key) {
                        var module = cssModules[key]
                        computed[key] = function() {
                            return module
                        }
                    })
                }

                return {
                    esModule: esModule,
                    exports: scriptExports,
                    options: options
                }
            }


            /***/
        }),
        /* 85 */
        /***/
        (function(module, exports) {

            module.exports = {
                render: function() {
                    var _vm = this;
                    var _h = _vm.$createElement;
                    var _c = _vm._self._c || _h;
                    return _c('div', {
                        staticClass: "dropdown v-select",
                        class: _vm.dropdownClasses,
                        attrs: {
                            "dir": _vm.dir
                        }
                    }, [_c('div', {
                        ref: "toggle",
                        class: ['dropdown-toggle', 'clearfix'],
                        on: {
                            "mousedown": function($event) {
                                $event.preventDefault();
                                _vm.toggleDropdown($event)
                            }
                        }
                    }, [_vm._l((_vm.valueAsArray), function(option) {
                        return _c('span', {
                            key: option.index,
                            staticClass: "selected-tag"
                        }, [_vm._t("selected-option", [_vm._v("\n        " + _vm._s(_vm.getOptionLabel(option)) + "\n      ")], null, option), _vm._v(" "), (_vm.multiple) ? _c('button', {
                            staticClass: "close",
                            attrs: {
                                "disabled": _vm.disabled,
                                "type": "button",
                                "aria-label": "Remove option"
                            },
                            on: {
                                "click": function($event) {
                                    _vm.deselect(option)
                                }
                            }
                        }, [_c('span', {
                            attrs: {
                                "aria-hidden": "true"
                            }
                        }, [_vm._v("×")])]) : _vm._e()], 2)
                    }), _vm._v(" "), _c('input', {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: (_vm.search),
                            expression: "search"
                        }],
                        ref: "search",
                        staticClass: "form-control",
                        style: ({
                            width: _vm.isValueEmpty ? '100%' : 'auto'
                        }),
                        attrs: {
                            "type": "search",
                            "autocomplete": "false",
                            "disabled": _vm.disabled,
                            "placeholder": _vm.searchPlaceholder,
                            "tabindex": _vm.tabindex,
                            "readonly": !_vm.searchable,
                            "id": _vm.inputId,
                            "aria-label": "Search for option"
                        },
                        domProps: {
                            "value": (_vm.search)
                        },
                        on: {
                            "keydown": [function($event) {
                                if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46], $event.key)) {
                                    return null;
                                }
                                _vm.maybeDeleteValue($event)
                            }, function($event) {
                                if (!('button' in $event) && _vm._k($event.keyCode, "up", 38, $event.key)) {
                                    return null;
                                }
                                $event.preventDefault();
                                _vm.typeAheadUp($event)
                            }, function($event) {
                                if (!('button' in $event) && _vm._k($event.keyCode, "down", 40, $event.key)) {
                                    return null;
                                }
                                $event.preventDefault();
                                _vm.typeAheadDown($event)
                            }, function($event) {
                                if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) {
                                    return null;
                                }
                                $event.preventDefault();
                                _vm.typeAheadSelect($event)
                            }],
                            "keyup": function($event) {
                                if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key)) {
                                    return null;
                                }
                                _vm.onEscape($event)
                            },
                            "blur": _vm.onSearchBlur,
                            "focus": _vm.onSearchFocus,
                            "input": function($event) {
                                if ($event.target.composing) {
                                    return;
                                }
                                _vm.search = $event.target.value
                            }
                        }
                    }), _vm._v(" "), _c('button', {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: (_vm.showClearButton),
                            expression: "showClearButton"
                        }],
                        staticClass: "clear",
                        attrs: {
                            "disabled": _vm.disabled,
                            "type": "button",
                            "title": "Clear selection"
                        },
                        on: {
                            "click": _vm.clearSelection
                        }
                    }, [_c('span', {
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [_vm._v("×")])]), _vm._v(" "), (!_vm.noDrop) ? _c('i', {
                        ref: "openIndicator",
                        staticClass: "open-indicator",
                        attrs: {
                            "role": "presentation"
                        }
                    }) : _vm._e(), _vm._v(" "), _vm._t("spinner", [_c('div', {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: (_vm.mutableLoading),
                            expression: "mutableLoading"
                        }],
                        staticClass: "spinner"
                    }, [_vm._v("Loading...")])])], 2), _vm._v(" "), _c('transition', {
                        attrs: {
                            "name": _vm.transition
                        }
                    }, [(_vm.dropdownOpen) ? _c('ul', {
                        ref: "dropdownMenu",
                        staticClass: "dropdown-menu",
                        style: ({
                            'max-height': _vm.maxHeight
                        })
                    }, [_vm._l((_vm.filteredOptions), function(option, index) {
                        return _c('li', {
                            key: index,
                            class: {
                                active: _vm.isOptionSelected(option), highlight: index === _vm.typeAheadPointer
                            },
                            on: {
                                "mouseover": function($event) {
                                    _vm.typeAheadPointer = index
                                }
                            }
                        }, [_c('a', {
                            on: {
                                "mousedown": function($event) {
                                    $event.preventDefault();
                                    _vm.select(option)
                                }
                            }
                        }, [_vm._t("option", [_vm._v("\n          " + _vm._s(_vm.getOptionLabel(option)) + "\n        ")], null, option)], 2)])
                    }), _vm._v(" "), (!_vm.filteredOptions.length) ? _c('li', {
                        staticClass: "no-options"
                    }, [_vm._t("no-options", [_vm._v("Sorry, no matching options.")])], 2) : _vm._e()], 2) : _vm._e()])], 1)
                },
                staticRenderFns: []
            }

            /***/
        }),
        /* 86 */
        /***/
        (function(module, exports, __webpack_require__) {

            /*
            	MIT License http://www.opensource.org/licenses/mit-license.php
            	Author Tobias Koppers @sokra
            */
            var stylesInDom = {},
                memoize = function(fn) {
                    var memo;
                    return function() {
                        if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                        return memo;
                    };
                },
                isOldIE = memoize(function() {
                    return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
                }),
                getHeadElement = memoize(function() {
                    return document.head || document.getElementsByTagName("head")[0];
                }),
                singletonElement = null,
                singletonCounter = 0,
                styleElementsInsertedAtTop = [];

            module.exports = function(list, options) {
                if (false) {
                    if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
                }

                options = options || {};
                // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (typeof options.singleton === "undefined") options.singleton = isOldIE();

                // By default, add <style> tags to the bottom of <head>.
                if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

                var styles = listToStyles(list);
                addStylesToDom(styles, options);

                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        domStyle.refs--;
                        mayRemove.push(domStyle);
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList);
                        addStylesToDom(newStyles, options);
                    }
                    for (var i = 0; i < mayRemove.length; i++) {
                        var domStyle = mayRemove[i];
                        if (domStyle.refs === 0) {
                            for (var j = 0; j < domStyle.parts.length; j++)
                                domStyle.parts[j]();
                            delete stylesInDom[domStyle.id];
                        }
                    }
                };
            }

            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    if (domStyle) {
                        domStyle.refs++;
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    } else {
                        var parts = [];
                        for (var j = 0; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }

            function listToStyles(list) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id])
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    else
                        newStyles[id].parts.push(part);
                }
                return styles;
            }

            function insertStyleElement(options, styleElement) {
                var head = getHeadElement();
                var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
                if (options.insertAt === "top") {
                    if (!lastStyleElementInsertedAtTop) {
                        head.insertBefore(styleElement, head.firstChild);
                    } else if (lastStyleElementInsertedAtTop.nextSibling) {
                        head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
                    } else {
                        head.appendChild(styleElement);
                    }
                    styleElementsInsertedAtTop.push(styleElement);
                } else if (options.insertAt === "bottom") {
                    head.appendChild(styleElement);
                } else {
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                }
            }

            function removeStyleElement(styleElement) {
                styleElement.parentNode.removeChild(styleElement);
                var idx = styleElementsInsertedAtTop.indexOf(styleElement);
                if (idx >= 0) {
                    styleElementsInsertedAtTop.splice(idx, 1);
                }
            }

            function createStyleElement(options) {
                var styleElement = document.createElement("style");
                styleElement.type = "text/css";
                insertStyleElement(options, styleElement);
                return styleElement;
            }

            function addStyle(obj, options) {
                var styleElement, update, remove;

                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    styleElement = singletonElement || (singletonElement = createStyleElement(options));
                    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
                } else {
                    styleElement = createStyleElement(options);
                    update = applyToTag.bind(null, styleElement);
                    remove = function() {
                        removeStyleElement(styleElement);
                    };
                }

                update(obj);

                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
                            return;
                        update(obj = newObj);
                    } else {
                        remove();
                    }
                };
            }

            var replaceText = (function() {
                var textStore = [];

                return function(index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            })();

            function applyToSingletonTag(styleElement, index, remove, obj) {
                var css = remove ? "" : obj.css;

                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = replaceText(index, css);
                } else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = styleElement.childNodes;
                    if (childNodes[index]) styleElement.removeChild(childNodes[index]);
                    if (childNodes.length) {
                        styleElement.insertBefore(cssNode, childNodes[index]);
                    } else {
                        styleElement.appendChild(cssNode);
                    }
                }
            }

            function applyToTag(styleElement, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;

                if (media) {
                    styleElement.setAttribute("media", media);
                }

                if (sourceMap) {
                    // https://developer.chrome.com/devtools/docs/javascript-debugging
                    // this makes source maps inside style tags work properly in Chrome
                    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
                    // http://stackoverflow.com/a/26603875
                    css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
                }

                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = css;
                } else {
                    while (styleElement.firstChild) {
                        styleElement.removeChild(styleElement.firstChild);
                    }
                    styleElement.appendChild(document.createTextNode(css));
                }
            }


            /***/
        }),
        /* 87 */
        /***/
        (function(module, exports, __webpack_require__) {

            // style-loader: Adds some css to the DOM by adding a <style> tag

            // load the styles
            var content = __webpack_require__(81);
            if (typeof content === 'string') content = [
                [module.id, content, '']
            ];
            // add the styles to the DOM
            var update = __webpack_require__(86)(content, {});
            if (content.locals) module.exports = content.locals;
            // Hot Module Replacement
            if (false) {
                // When the styles change, update the <style> tags
                if (!content.locals) {
                    module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3e06dd28!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue", function() {
                        var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3e06dd28!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Select.vue");
                        if (typeof newContent === 'string') newContent = [
                            [module.id, newContent, '']
                        ];
                        update(newContent);
                    });
                }
                // When the module is disposed, remove the <style> tags
                module.hot.dispose(function() {
                    update();
                });
            }

            /***/
        })
        /******/
    ])
});;


// WEBPACK FOOTER //
// vue-select.js