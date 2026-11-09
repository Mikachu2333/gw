# Hyperlink.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Hyperlink** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一个超链接的名称。*/
function test() {
    alert(Application.ActiveDocument.Hyperlinks.Item(1).Name)
}
```


```JavaScript
/*本示例显示活动文档中最后一个超链接的名称。*/
function test() {
    let num = Application.ActiveDocument.Hyperlinks.Count
    alert(Application.ActiveDocument.Hyperlinks.Item(num).Name)
}
```
