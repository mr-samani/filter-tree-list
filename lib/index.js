"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTreeList = void 0;
/**
 * ## فیلتر کردن لیست درختی
 * @param data لیست درختی مورد نظر
 * @param filterFn فانکشن برای جستجو
 *  - مثال: `(x => x.title?.toLowerCase()?.includes(this.filter.toLowerCase())`
 * @param options تنظیمات : کلیدی که فرزندان در آن قرار دارد
 * @returns لیست درختی فیلتر شده
 */
function filterTreeList(data, filterFn, options) {
    options = options || {};
    var childrenKey = options.childrenKeyName || "children";
    var children = data || [];
    var getNodes = function (result, object) {
        var _a;
        if (filterFn(object)) {
            result.push(object);
            return result;
        }
        if (Array.isArray(object[childrenKey])) {
            var nodes = object[childrenKey].reduce(getNodes, []);
            // console.log('nodes', nodes)
            // console.log('object', object)
            if (nodes.length)
                result.push(__assign(__assign({}, object), (_a = {}, _a[childrenKey] = nodes, _a)));
        }
        return result;
    };
    return children.reduce(getNodes, []);
}
exports.filterTreeList = filterTreeList;
