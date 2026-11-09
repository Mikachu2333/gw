# Name.Value

返回或设置一个 **String** 值，它代表规定名称去引用的公式。



## 语法

express.**Value**

express   一个代表 **Name** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿中索引号为4的名称所引用的公式。*/
function test() {
    alert(ActiveWorkbook.Names.Item(4).Value)
}
```


```JavaScript
/*本示例给索引号为3的名称设置所引用的公式。*/
function test() {
    Application.Names.Item(3).Value = "=Sheet1!$A$4"
}
```
