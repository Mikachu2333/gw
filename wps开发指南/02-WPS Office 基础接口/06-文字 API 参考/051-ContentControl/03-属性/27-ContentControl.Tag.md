# ContentControl.Tag

返回或设置一个 **String** 类型的值，该值代表用于识别内容控件的值。可读写。



## 语法

express.**Tag**

express   一个代表 **ContentControl** 对象的变量。

## 类型

string

## 说明


 **Tag** 属性与 **Title** 属性的不同之处在于，用户在编辑文档时从不会显示标记。当文档处于打开状态时，开发人员可以利用该属性来存储编程操作的值。



## 示例


```JavaScript
/*本示例显示活动文档上第一个内容控件的标记。*/
function test() {
    let control = ActiveDocument.ContentControls.Item(1)
    alert(control.Tag)
}
```


```JavaScript
/*本示例设置所选内容中第二个内容控件的标记。*/
function test() {
    let control = Selection.ContentControls.Item(2)
    control.Tag = "example"
}
```
