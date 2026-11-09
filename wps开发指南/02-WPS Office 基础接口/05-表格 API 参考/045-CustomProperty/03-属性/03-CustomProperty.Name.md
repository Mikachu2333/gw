# CustomProperty.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **CustomProperty** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例设置第一张工作表第一个标识符的名称。*/
function test() {
    Worksheets.Item(1).CustomProperties.Item(1).Name = "Test1"
}
```


```JavaScript
/*此示例显示活动工作表第二个标识符名称。*/
function test() {
    alert(ActiveSheet.CustomProperties.Item(2).Name)
}
```
