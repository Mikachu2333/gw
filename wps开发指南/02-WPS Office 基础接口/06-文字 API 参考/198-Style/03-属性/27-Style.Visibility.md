# Style.Visibility

如果指定样式显示为 **“样式”** 库和 **“样式和格式”** 任务窗格中的推荐样式，则该属性值为 **True** 。可读/写。



## 语法

express.**Visibility**

express   一个代表 **Style** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档中名为“标题 2”的样式在“样式”库和“样式和格式”任务窗格中是否展示为推荐样式。*/
function test() {
    alert(ActiveDocument.Styles.Item("标题 2").Visibility)
}
```


```JavaScript
/*本示例设置所选内容的样式在“样式”库和“样式和格式”任务窗格中展示为推荐样式。*/
function test() {
    Selection.Style.Visibility = true
}
```
