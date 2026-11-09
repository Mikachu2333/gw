# IconSets.Count

返回一个 **Long** 值，该值指定可用于工作簿的图标集的数目。只读。



## 语法

express.**Count**

express   一个代表 **IconSets** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿上图标集的数目。*/
function test() {
    alert(ActiveWorkbook.IconSets.Count)
}
```
