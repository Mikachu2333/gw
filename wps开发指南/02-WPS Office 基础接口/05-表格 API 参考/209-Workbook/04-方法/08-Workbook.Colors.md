# Workbook.Colors

返回或设置工作簿调色板中的颜色。调色板有 56 项，每项以一个 RGB 值表示。 **Variant** 类型，可读/写。



## 语法

**注意：**为 **Colors** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
Colors(Index?: any, RHS?: any): void;
Colors(Index?: any): any;
```

express.**Colors(Index)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 颜色索引号（1 到 56）。如果不指定该参数，该方法返回一个包含调色板中所有 56 种颜色的数组。 |
| RHS | 可选 | any | 待赋值的颜色值。不传该参数则为取值情况。 |

## 返回值

any

## 示例


```JavaScript
/*本示例使活动工作簿的调色板与工作簿 Book2.xls 的调色板相同。*/
function test() {
    ActiveWorkbook.Colors(undefined, Workbooks.Item("BOOK2.XLS").Colors())
}
```


```JavaScript
/*本示例设置活动工作簿调色板中的第五项颜色为红色。*/
function test() {
    ActiveWorkbook.Colors(5, RGB(255, 0, 0))
}
```
