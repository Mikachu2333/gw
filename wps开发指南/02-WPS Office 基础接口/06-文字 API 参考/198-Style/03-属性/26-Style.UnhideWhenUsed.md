# Style.UnhideWhenUsed

如果指定样式在用于文档中后显示为 WPS 中 **“样式”** 和 **“样式和格式”** 任务窗格中的推荐样式，则该属性值为 **True** 。可读/写。



## 语法

express.**UnhideWhenUsed**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档中名为“标题 1”的样式在用于文档中后是否展示为“样式”和“样式和格式”任务窗格中的推荐样式。*/
function test() {
    alert(ActiveDocument.Styles.Item("标题 1").UnhideWhenUsed)
}
```


```JavaScript
/*本示例设置所选区域的样式在用于文档中后展示为“样式”和“样式和格式”任务窗格中的推荐样式。*/
function test() {
    Selection.Range.Style.UnhideWhenUsed = true
}
```
