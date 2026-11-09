# Range.End

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表包含源区域的区域尾端的单元格。等同于按键 End+ 向上键、End+ 向下键、End+ 向左键或 End+ 向右键。 **Range** 对象，只读。



## 语法

express.**End(Direction)**

express   一个代表 **Range** 对象的变量。

## 返回值

Range

## 示例


```JavaScript
/*本示例选定包含单元格 B4 的区域中 B 列顶端的单元格。*/
function test() {
    Application.Range("B4").End(xlUp).Select()
}
```


```JavaScript
/*本示例选定包含单元格 B4 的区域中第 4 行尾端的单元格。*/
function test() {
    Application.Range("B4").End(xlToRight).Select()
}
```


```JavaScript
/*本示例将选定区域从单元格 B4 延伸至第四行最后一个包含数据的单元格。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.Range("B4", Range("B4").End(xlToRight)).Select()
}
```
