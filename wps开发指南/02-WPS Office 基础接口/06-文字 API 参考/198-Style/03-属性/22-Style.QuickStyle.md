# Style.QuickStyle

返回或设置一个 **Boolean** 类型的值，该值代表样式是否对应于可用的快速样式。可读写。



## 语法

express.**QuickStyle**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档中名为“标题 1”的样式是否对应于可用的快速样式。*/
function test() {
    alert(ActiveDocument.Styles.Item("标题 1").QuickStyle)
}
```


```JavaScript
/*本示例设置所选区域的样式未对应于可用的快速样式。*/
function test() {
    Selection.Range.Style.QuickStyle = false
}
```
