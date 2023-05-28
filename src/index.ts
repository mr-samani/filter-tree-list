/**
 * ## فیلتر کردن لیست درختی
 * @param data لیست درختی مورد نظر
 * @param filterFn فانکشن برای جستجو
 *  - مثال: `(x => x.title?.toLowerCase()?.includes(this.filter.toLowerCase())` 
 * @param options تنظیمات : کلیدی که فرزندان در آن قرار دارد
 * @returns لیست درختی فیلتر شده
 */
export function arrayTreeFilter<T>(
    data: T[],
    filterFn: (item: T) => boolean,
    options?: {
        childrenKeyName?: string;
    }
) {
    options = options || {};
    let childrenKey = options.childrenKeyName || "children";
    var children = data || [];
    const getNodes = (result:T[], object: T) => {
        if (filterFn(object)) {
            result.push(object);
            return result;
        }
        if (Array.isArray((object as any)[childrenKey])) {
            const nodes = (object as any)[childrenKey].reduce(getNodes, []);
            // console.log('nodes', nodes)
            // console.log('object', object)
            if (nodes.length)
                result.push({
                    ...object,
                    [childrenKey]: nodes
                });
        }
        return result;
    };

    return children.reduce(getNodes, []);
}


