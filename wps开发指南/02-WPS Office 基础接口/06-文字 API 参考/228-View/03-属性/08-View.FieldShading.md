# View.FieldShading

返回或设置域的屏幕底纹。 **WdFieldShading** 类型，可读写。



## 语法

express.**FieldShading**

express   一个代表 **View** 对象的变量。

## 类型

WdFieldShading

## 示例


```JavaScript
/*本示例激活活动窗口中所有域的域底纹。*/
function test() {
    ActiveDocument.ActiveWindow.View.FieldShading = wdFieldShadingAlways
}
```


```JavaScript
/*本示例显示第一个窗口的活动窗格中域的屏幕底纹是否为wdFieldShadingWhenSelected。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.FieldShading == wdFieldShadingWhenSelected)
}
```
