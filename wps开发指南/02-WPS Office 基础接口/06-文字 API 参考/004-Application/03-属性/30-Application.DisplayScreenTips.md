# Application.DisplayScreenTips

如果为 **True** ，则批注、脚注、尾注和超链接以提示形式显示。突出显示那些标记有批注的文本。 **Boolean** 类型，可读写。



## 语法

express.**DisplayScreenTips**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使 WPS 将批注、脚注和尾注显示为提示。而且突出显示那些标记有批注的文本。*/
function test() {
    Application.DisplayScreenTips = true
}
```


```JavaScript
/*本示例显示批注、脚注、尾注和超链接是否以提示形式展示。*/
function test() {
    alert(Application.DisplayScreenTips)
}
```
