# DropDown.Value

返回或设置下拉型窗体域中所选项目的编号。可读写 **Long** 类型。



## 语法

express.**Value**

express   一个代表 **DropDown** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个下拉型窗体域中选定项目的编号。*/
function test() {
    let dropDown = ActiveDocument.FormFields.Item(1).DropDown
    alert(dropDown.Value)
}
```


```JavaScript
/*本示例设置第一个文档上名为”“DropDown1”的下拉型窗体域中选定项目的编号。*/
function test() {
    let dropDown = Documents.Item(1).FormFields.Item("DropDown1").DropDown
    dropDown.Value = 3
}
```
