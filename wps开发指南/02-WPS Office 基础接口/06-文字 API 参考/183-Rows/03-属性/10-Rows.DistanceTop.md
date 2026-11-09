# Rows.DistanceTop

返回或设置文档文字与指定表格的上边缘之间的距离（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**DistanceTop**

express   一个代表 **Rows** 对象的变量。

## 类型

number（float 精度）

## 说明


如果 **WrapAroundText** 为 **msoFalse** ，则该属性将不起作用。



## 示例


```JavaScript
/*本示例设定文字环绕在活动文档中第一个表格的周围，并且环绕文字与该表格各边的间距为 20 磅。*/
function test() {
    let Rows = ActiveDocument.Tables.Item(1).Rows
    Rows.WrapAroundText = msoTrue
    Rows.DistanceLeft = 20
    Rows.DistanceRight = 20
    Rows.DistanceTop = 20
    Rows.DistanceBottom = 20
}
```


```JavaScript
/*本示例显示所选表格行上边缘与文字的间距。*/
function test() {
    alert(`${Selection.Rows.DistanceTop} 磅`)
}
```
