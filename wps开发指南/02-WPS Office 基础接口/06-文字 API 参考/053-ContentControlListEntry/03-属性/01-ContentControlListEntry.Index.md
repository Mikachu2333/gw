# ContentControlListEntry.Index

返回或设置 **Long** 值，该值表示内容控件列表项在列表项集合中的序号位置。可读/写。



## 语法

express.**Index**

express   一个代表 **ContentControlListEntry** 对象的变量。

## 类型

number（int4 精度）

## 说明


可以将 **Index** 属性设置为任意数值，以更改项在列表中的序号位置。例如，如果将列表中第五项的 **Index** 属性更改为“2”，则第五项将成为第二项。最初的第二项及其后面的所有项都将下移一个位置。



## 示例


```JavaScript
/*本示例将活动文档的第一个内容控件中的第三项的序号位置设置为1。*/
function test() {
    let listEntry = ActiveDocument.ContentControls.Item(1).DropdownListEntries.Item(3)
    listEntry.Index = 1
}
```


```JavaScript
/*本示例显示第一个文档的第一个内容控件中的最后一项的序号位置。*/
function test() {
    let listEntries = Documents.Item(1).ContentControls.Item(1).DropdownListEntries
    alert(listEntries.Item(listEntries.Count).Index)
}
```
