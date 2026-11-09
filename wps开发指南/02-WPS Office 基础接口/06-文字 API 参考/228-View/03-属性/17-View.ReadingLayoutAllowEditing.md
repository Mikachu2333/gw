# View.ReadingLayoutAllowEditing

返回 **Boolean** 值，该值表示是否允许在阅读布局模式下编辑文本。可读/写。




## 语法

express.**ReadingLayoutAllowEditing**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


此属性对应于阅读布局模式下 **“视图选项”** 菜单上的 **“允许键入** / **禁止键入”** 选项。

| 注释                          |
| --------------------------- |
| 如果在阅读布局模式以外的其他视图中，则不能设置此属性。 |




## 示例


```JavaScript
/*以下示例使 WPS 禁止在阅读布局模式下编辑文本。*/
ActiveDocument.ActiveWindow.View.ReadingLayoutAllowEditing = false
```
