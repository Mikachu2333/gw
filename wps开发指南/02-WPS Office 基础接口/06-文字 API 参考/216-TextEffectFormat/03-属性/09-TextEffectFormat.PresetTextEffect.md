# TextEffectFormat.PresetTextEffect

返回或设置指定艺术字的样式。该属性的值对应于“艺术字库”对话框（ **“插入”** 菜单）中的格式（从左到右，从上到下进行编号）。 **MsoPresetTextEffect** 类型，可读/写。



## 语法

express.**PresetTextEffect**

express   一个代表 **TextEffectFormat** 对象的变量。

## 类型

MsoPresetTextEffect

## 说明


设置 **PresetTextEffect** 属性会自动设置指定形状的许多其他格式属性。



## 示例


```JavaScript
/*本示例将活动文档中所有艺术字的样式设置为“艺术字库”对话框中列出的第一种样式。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        if (ActiveDocument.Shapes.Item(i).Type == msoTextEffect) {
            ActiveDocument.Shapes.Item(i).TextEffect.PresetTextEffect = msoTextEffect1
        }
    }
}
```


```JavaScript
/*本示例将选中的第二个形状（需要是艺术字对象）的样式设置为“艺术字库”对话框中列出的第十五种样式。*/
function test() {
    Selection.ShapeRange.Item(2).TextEffect.PresetTextEffect = msoTextEffect15
}
```
