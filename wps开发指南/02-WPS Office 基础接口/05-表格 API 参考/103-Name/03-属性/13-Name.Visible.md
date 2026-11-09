# Name.Visible

返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。



## 语法

express.**Visible**

express   一个代表 **Name** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿中索引为1的名称是否可见。*/
function test() {
    alert(ActiveWorkbook.Names.Item(1).Visible)
}
```


```JavaScript
/*本示例将 Sheet1 中名为“test1”的名称设置为不可见。*/
function test() {
    Application.Worksheets.Item("Sheet1").Names.Item("test1").Visible = false
}
```
