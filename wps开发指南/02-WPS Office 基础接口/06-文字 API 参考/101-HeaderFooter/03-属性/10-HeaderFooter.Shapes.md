# HeaderFooter.Shapes

返回一个 **Shapes** 集合，该集合代表页眉或页脚中的所有的 **Shape** 对象。只读。



## 语法

express.**Shapes**

express   一个代表 **HeaderFooter** 对象的变量。

## 类型

Shapes

## 说明


该集合可以包含绘图、形状、图片、OLE 对象、ActiveX 控件、文本对象和标注。有关返回集合中单个成员的信息，请参阅 返回集合中的对象。

当 **Shapes** 属性应用于文档时，该属性将返回正文中的所有 **Shape** 对象，不包括页眉和页脚。当将其应用到 **HeaderFooter** 对象时， **Shapes** 属性返回文档中所有页眉和页脚中的 **Shape** 对象。



## 示例


```JavaScript
/*本示例显示活动文档第一节的主页眉和页脚中所有形状的总数。*/
function test() {
    alert(ActiveDocument.Sections.Item(1).Headers.Item(wdHeaderFooterPrimary).Shapes.Count)
}
```


```JavaScript
/*本示例显示所选页眉中第一个形状的名称。*/
function test() {
    let shape = Selection.HeaderFooter.Shapes.Item(1)
    alert(shape.Name)
}
```
