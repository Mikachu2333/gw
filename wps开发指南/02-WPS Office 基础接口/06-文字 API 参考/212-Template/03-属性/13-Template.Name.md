# Template.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **Template** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例显示第一个模板的名称。*/
function test() {
    alert(Application.Templates.Item(1).Name)
}
```


```JavaScript
/*本示例在光标处插入活动文档附加模板的名称。*/
function test() {
    Selection.TypeText(ActiveDocument.AttachedTemplate.Name)
}
```
