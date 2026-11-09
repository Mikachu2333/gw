# View.ShadeEditableRanges

返回或设置一个 **Long** 类型的值，该值代表是否将底纹应用于文档中用户有权修改的区域。



## 语法

express.**ShadeEditableRanges**

express   一个代表 **View** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果为 **msoTrue** ，则将底纹应用于文档中用户可以修改的区域。默认情况下，区域底纹处于打开状态。当区域底纹处于打开状态，或将该属性设置为 **msoTrue** 时， **ShadeEditableRanges** 属性返回的值为 -1。将 **ShadeEditableRanges** 属性设置为 **msoFalse** 时，返回的值为 0。该值仅用于代表属性值为 **msoTrue** 或 **msoFalse** ，没有其他意义。



## 示例


```JavaScript
/*本示例将底纹应用于用户有权修改的所有区域。*/
function test() {
    ActiveWindow.View.ShadeEditableRanges = msoTrue
}
```


```JavaScript
/*本示例显示第一个窗口上活动窗格是否将底纹应用于用户可以修改的区域。*/
function test() {
    alert(Windows.Item(1).ActivePane.View.ShadeEditableRanges === msoTrue)
}
```
