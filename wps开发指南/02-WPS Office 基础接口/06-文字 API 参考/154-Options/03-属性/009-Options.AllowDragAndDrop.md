# Options.AllowDragAndDrop

如果可以使用拖动来移动或复制所选内容，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AllowDragAndDrop**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例打开拖放编辑功能。*/
function test() {
    Options.AllowDragAndDrop = true
}
```


```JavaScript
/*本示例显示“选项”对话框中“编辑”选项卡上的“拖放式文字编辑”选项的状态。*/
function test() {
    alert(Options.AllowDragAndDrop)
}
```
