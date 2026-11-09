# Outline.AutomaticStyles

如果分级显示使用自动样式，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutomaticStyles**

express   一个代表 **Outline** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 Sheet1 的分级显示设置为使用自动样式。*/
function test() {
    Worksheets.Item("Sheet1").Outline.AutomaticStyles = true
}
```


```JavaScript
/*此示例显示活动工作表分级显示是否使用自动样式。*/
function test() {
    alert(ActiveSheet.Outline.AutomaticStyles)
}
```
