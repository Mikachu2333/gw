# View.ShowCropMarks

返回或设置一个 **Boolean** 类型的值，该值表示是否在页面的角显示裁剪标记，以指示页边距的位置。可读/写。



## 语法

express.**ShowCropMarks**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


如果显示裁减标记，将禁止用户通过拖动裁减标记来更改边距。显示裁减标记只是为了指示边距在页面上的位置。此属性对应于 **“WPS 选项”** 对话框的 **“视图”** 选项卡中的 **“裁减标记”** 复选框。  

在东亚语言中默认显示裁减标记，在其他所有语言中默认情况下将关闭它。



## 示例


```JavaScript
/*本示例设置在活动窗口的角落不显示裁剪标记。*/
function test() {
    ActiveWindow.View.ShowCropMarks = false
}
```


```JavaScript
/*本示例显示是否在第一个窗口的活动窗格的角落展示裁剪标记，以指示页边距的位置。*/
function test() {
    let view = Windows.Item(1).ActivePane.View
    alert(view.ShowCropMarks)
}
```
