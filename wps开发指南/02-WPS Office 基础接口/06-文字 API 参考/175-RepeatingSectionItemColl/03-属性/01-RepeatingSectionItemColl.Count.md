# RepeatingSectionItemColl.Count

返回一个 **Long** 类型的值，该值代表集合中的重复节项数。只读。



## 语法

express.**Count**

express   一个代表 **RepeatingSectionItemColl** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个（重复节）内容控件中重复节项的数量。*/
function test() {
    alert(ActiveDocument.ContentControls.Item(1).RepeatingSectionItems.Count)
}
```
