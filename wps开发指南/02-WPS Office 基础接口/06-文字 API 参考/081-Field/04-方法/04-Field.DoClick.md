# Field.DoClick

单击指定域。



## 语法

express.**DoClick()**

express   一个代表 **Field** 对象的变量。

## 返回值

void

## 说明


如果是 GOTOBUTTON 域，该方法将插入点移至指定位置或选定指定的书签。如果是 MACROBUTTON 域，该方法将运行指定的宏。如果是 HYPERLINK 域，该方法将跳转至目标位置。



## 示例


```JavaScript
/*本示例单击所选内容中第一个域（跳转至目标文件）。*/
function test() {
    let field = Selection.Fields.Item(1)
    field.DoClick()
}
```


```JavaScript
/*本示例单击活动文档上第二个域（跳转至目标文件）。*/
function test() {
    let field = ActiveDocument.Fields.Item(2)
    field.DoClick()
}
```
