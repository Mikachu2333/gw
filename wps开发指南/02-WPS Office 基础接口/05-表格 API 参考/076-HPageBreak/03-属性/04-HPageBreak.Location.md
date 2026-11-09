# HPageBreak.Location

返回或设置定义分页符位置的单元格（ **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象）。水平分页符与定位单元格的上边缘对齐；垂直分页符与定位单元格的左边缘对齐。 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 类型，可读写。



## 语法

express.**Location**

express   一个代表 **HPageBreak** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例移动第一个工作表的第一个水平分页符至E5单元格*/
function test() {
    Application.Worksheets.Item(1).HPageBreaks.Item(1).Location = Application.Worksheets.Item(1).Range("E5")
}
```


```JavaScript
/*本示例显示第一个工作表的第三个水平分页符所在单元格区域的地址*/
function test() {
    let range = Application.Worksheets.Item(1).HPageBreaks.Item(3).Location
    alert(range.Address())
}
```
