/**
 * ## فیلتر کردن لیست درختی
 * @param data لیست درختی مورد نظر
 * @param filterFn فانکشن برای جستجو
 *  - مثال: `(x => x.title?.toLowerCase()?.includes(this.filter.toLowerCase())`
 * @param options تنظیمات : کلیدی که فرزندان در آن قرار دارد
 * @returns لیست درختی فیلتر شده
 */
export declare function filterTreeList<T>(data: T[], filterFn: (item: T) => boolean, options?: {
    childrenKeyName?: string;
}): T[];
