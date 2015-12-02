//// [tests/cases/compiler/commonSourceDir5.ts] ////

//// [bar.ts]
import {z} from "./foo";
export var x = z + z;

//// [foo.ts]
import {pi} from "B:/baz";
export var i = Math.sqrt(-1);
export var z = pi * pi;

//// [baz.ts]
import {x} from "A:/bar";
import {i} from "A:/foo";
export var pi = Math.PI;
export var y = x * i;

//// [concat.js]
define("b:/baz", ["require", "exports", "a:/bar", "a:/foo"], function (require, exports, bar_1, foo_1) {
    "use strict";
    exports.pi = Math.PI;
    exports.y = bar_1.x * foo_1.i;
});
define("a:/foo", ["require", "exports", "b:/baz"], function (require, exports, baz_1) {
    "use strict";
    exports.i = Math.sqrt(-1);
    exports.z = baz_1.pi * baz_1.pi;
});
define("a:/bar", ["require", "exports", "a:/foo"], function (require, exports, foo_2) {
    "use strict";
    exports.x = foo_2.z + foo_2.z;
});
