# Chart.HasAxis

返回或设置图表上显示的坐标轴。可读/写 **Variant** 类型。



## 语法

**注意：**为 **HasAxis** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
HasAxis(Index1?: any, Index2?: any, prop?: any): void;
HasAxis(Index1?: any, Index2?: any): any;
```

express.**HasAxis(Index1, Index2)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index1 | 可选 | any | 坐标轴类型。系列坐标轴仅适用于三维图表。可以是 **[XlAxisType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisType)** 常量之一。 |
| Index2 | 可选 | any | 坐标轴组。三维图表只有一组坐标轴。可以是 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 常量之一。 |

## 返回值

any

## 说明


设置该属性时，必须至少输入一个参数的值。

如果更改了图表类型或 **[AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/AxisGroup)** 属性，Kingsoft WPS文字 可能会创建或删除坐标轴。



## 示例


```JavaScript
/*本示例对活动文档中的第一个图表应用主数值轴。*/
function test() {
    if (ActiveDocument.InlineShapes(1).HasChart) {
        ActiveDocument.InlineShapes(1).Chart.HasAxis(xlValue, xlPrimary, true)
    }
}
```


```JavaScript
/*本示例将第一个文档中的第一张图表的主类别轴设置为不可见。*/
function test() {
    let chart = Documents.Item(1).InlineShapes(1).Chart
    chart.HasAxis(xlCategory, xlPrimary, false)
}
```
