# Name.NameLocal

以用户语言返回或设置对象的名称。 **String** 型，可读写。



## 语法

express.**NameLocal**

express   一个代表 **Name** 对象的变量。

## 类型

string

## 说明


如果样式为内置样式，则此属性以当前系统所使用的地区语言返回样式的名称。



## 示例


```JavaScript
/*本示例以用户语言显示活动工作簿中索引号为4的自定义名称。*/
function test() {
    alert(`索引号为4的名称为 ${ActiveWorkbook.Names.Item(4).NameLocal}`)
}
```


```JavaScript
/*本示例以用户语言显示活动工作簿中索引号为3的名称是否为“test”。*/
function test() {
    alert(ActiveWorkbook.Names.Item(3).NameLocal == "test")
}
```
