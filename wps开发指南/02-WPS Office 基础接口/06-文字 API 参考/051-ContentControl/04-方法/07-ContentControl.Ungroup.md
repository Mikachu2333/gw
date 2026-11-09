# ContentControl.Ungroup

从文档中删除一个组内容控件，以便它的子内容控件不再嵌套，并且可以自由地进行编辑。



## 语法

express.**Ungroup()**

express   一个代表 **ContentControl** 对象的变量。

## 返回值

void

## 说明


如果您在非 **wdContentControlGroup** 类型的控件上运行该方法，则该方法将失败。



## 示例


```JavaScript
/*本示例删除活动文档上第六个（组）内容控件。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(6)
    control.Ungroup()
}
```


```JavaScript
/*本示例删除所选内容中第六个（组）内容控件，并显示删除前后的内容控件的数量。*/
function test() {
    alert("删除前的内容控件的数量为：" + Selection.ContentControls.Count)
    Selection.ContentControls.Item(6).Ungroup()
    alert("删除后的内容控件的数量为：" + Selection.ContentControls.Count)
}
```
