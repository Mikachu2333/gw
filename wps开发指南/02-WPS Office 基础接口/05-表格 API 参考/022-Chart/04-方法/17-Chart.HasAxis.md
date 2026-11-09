# Chart.HasAxis

返回或设置图表上显示的坐标轴。 **Variant** 类型，可读写。



## 语法

**注意：**为 **HasAxis** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
HasAxis(Index1?: any, Index2?: any, RHS?: any): void;
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

如果更改了图表类型或 **[Axis.AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/AxisGroup)** 、 **[Chart.AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/AxisGroup)** 或 **[Series.AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/AxisGroup)** 属性，ET 可能要创建或删除坐标轴。



## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中的主数值轴。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.HasAxis(xlValue, xlPrimary, true)
}
```


```JavaScript
/*本示例设置 Sheet1 工作表第一个内嵌图表的主数值轴为不可见。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.HasAxis(xlValue, xlPrimary, false)
}
```
