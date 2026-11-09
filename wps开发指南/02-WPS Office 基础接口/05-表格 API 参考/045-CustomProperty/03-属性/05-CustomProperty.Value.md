# CustomProperty.Value

返回或设置一个 **Variant** 值，它代表对象的值。



## 语法

express.**Value**

express   一个代表 **CustomProperty** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*此示例设置第一张工作表第一个标识符的值。*/
function test() {
    Worksheets.Item(1).CustomProperties.Item(1).Value = "Hello"
}
```


```JavaScript
/*此示例显示活动工作表第二个标识符的值。*/
function test() {
    alert(ActiveSheet.CustomProperties.Item(2).Value)
}
```
