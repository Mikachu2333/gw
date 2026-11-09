# ColorFormat.RGB

返回或设置指定颜色的 RGB 值（红-绿-蓝值）。 **Long** 类型，可读写。



## 语法

express.**RGB**

express   一个代表 **ColorFormat** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动文档的第二个图形的前景色设置为灰色。*/
function test() {
    ActiveDocument.Shapes(2).Fill.ForeColor.RGB = RGB(128, 128, 128)
}
```


```JavaScript
/*本示例将活动文档中的 Rectangle 1 的阴影的前景色设置为蓝色。*/
function test() {
    ActiveDocument.Shapes("Rectangle 1").Shadow.ForeColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例显示活动文档中第一个图形的前景色的值。*/
function test() {
    alert(ActiveDocument.Shapes(1).Fill.ForeColor.RGB)
}
```
