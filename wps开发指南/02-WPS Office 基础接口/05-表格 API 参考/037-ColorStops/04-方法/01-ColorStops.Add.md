# ColorStops.Add

将一个 **[ColorStop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorStop/obj)** 对象添加到指定集合。



## 语法

express.**Add(Position)**

express   一个代表 **ColorStops** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Position | 必选 | number（double 精度） | 代表要应用 **ColorStop** 的位置。 |

## 返回值

ColorStop

## 示例


```JavaScript
/*为当前选定区域添加一个ColorStop。*/
function test() {
    Range("A1:A10").Select()
    let colorStop = Selection.Interior.Gradient.ColorStops.Add(1)
    colorStop.ThemeColor = xlThemeColorAccent1
    colorStop.TintAndShade = 0
}
```


```JavaScript
/*本示例为活动单元格添加一个ColorStop，并将主题颜色设置为xlThemeColorDark2。*/
function test() {
    let colorStop = ActiveCell.Interior.Gradient.ColorStops.Add(0.5)
    colorStop.ThemeColor = xlThemeColorDark2
}
```
