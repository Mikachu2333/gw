# Window.DisplayScreenTips

如果批注、脚注、尾注和超链接以提示形式显示，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayScreenTips**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


突出显示那些标记有批注的文本。



## 示例


```JavaScript
/*本示例使 WPS 将批注、脚注和尾注显示为提示。而且突出显示那些标记有批注的文本。*/
function test() {
    ActiveWindow.DisplayScreenTips = true
}
```


```JavaScript
/*本示例显示 WPS “选项”对话框中“视图”选项卡上“页面显示选项”部分中“屏幕提示”复选框的当前状态。*/
function test() {
    let temp = ActiveWindow.DisplayScreenTips
    alert(temp)
}
```
