# Name.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **Name** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿中索引号为2的自定义名称。*/
function test() {
    alert(ActiveWorkbook.Names.Item(2).Name)
}
```


```JavaScript
/*本示例显示活动工作簿中第二个名称是否为“test”。*/
function test() {
    alert(ActiveWorkbook.Names.Item(2).Name == "test")
}
```
