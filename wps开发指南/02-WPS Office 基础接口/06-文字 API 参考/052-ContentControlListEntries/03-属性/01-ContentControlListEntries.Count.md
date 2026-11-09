# ContentControlListEntries.Count

返回 **ContentControlListEntries** 集合中的项目数。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **ContentControlListEntries** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内容控件中的项目数。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Item(1)
    alert(contentControl.DropdownListEntries.Count)
}
```
