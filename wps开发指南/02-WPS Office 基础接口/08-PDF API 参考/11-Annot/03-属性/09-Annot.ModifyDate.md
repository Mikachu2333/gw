# Annot.ModifyDate

获取注释的最后修改日期时间。只读。

## 语法

express.**ModifyDate**

express   一个代表 **Annot** 对象的变量。

## 类型

Date

## 说明

返回 JavaScript `Date` 对象。可直接调用 `.toLocaleString()`、`.getFullYear()` 等标准 `Date` 方法。

## 示例

```JavaScript
var d = annot.ModifyDate;
console.log(d.toLocaleString()); // 例如：2026/5/27 01:22:32
console.log(d.getFullYear());    // 例如：2026
```
