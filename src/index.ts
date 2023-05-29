/**
 * ## Filter tree list
 * @param data source tree list
 * @param filterFn Expression condition for search in tree
 *  - Example: `(x => x.title?.toLowerCase()?.includes(this.filter.toLowerCase())` 
 * @param options Configuration (optional): children key name 
 * - default key is: `children`
 * @returns result of filtered tree list
 */
export function filterTreeList<T>(
    data: T[],
    filterFn: (item: T) => boolean,
    options?: {
        childrenKeyName?: string;
    }
) {
    options = options || {};
    const childrenKey = options.childrenKeyName || "children";
    const children = data || [];
    const getNodes = (result: T[], object: T) => {
        if (filterFn(object)) {
            result.push(object);
            return result;
        }
        if (Array.isArray((object as any)[childrenKey])) {
            const nodes = (object as any)[childrenKey].reduce(getNodes, []);
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


