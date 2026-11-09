# Shape.Type

返回一个 **MsoShapeType** 常量，该常量代表单个形状或形状范围内多个形状的类型。只读。



## 语法

express.**Type**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoShapeType

## 说明


| MsoShapeType 可以是下列 MsoShapeType 常量之一。 |
| ------------------------------------- |
| **msoAutoShape**                      |
| **msoCallout**                        |
| **msoCanvas**                         |
| **msoChart**                          |
| **msoComment**                        |
| **msoDiagram**                        |
| **msoEmbeddedOLEObject**              |
| **msoFormControl**                    |
| **msoFreeform**                       |
| **msoGroup**                          |
| **msoLine**                           |
| **msoLinkedOLEObject**                |
| **msoLinkedPicture**                  |
| **msoMedia**                          |
| **msoOLEControlObject**               |
| **msoPicture**                        |
| **msoPlaceholder**                    |
| **msoScriptAnchor**                   |
| **msoShapeTypeMixed**                 |
| **msoTable**                          |
| **msoTextBox**                        |
| **msoTextEffect**                     |



## 示例


```JavaScript
/*本示例遍历活动演示文稿中第二张幻灯片上的所有形状，如果形状的类型为图表，则显示形状的名称。*/
function test() {
    let slide = ActivePresentation.Slides.Item(2)
    for (let i = 1; i <= slide.Shapes.Count; i++) {
        let shape = slide.Shapes.Item(i)
        if (shape.Type == msoChart) {
            alert(shape.Name)
        }
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一个形状的类型是否为自选图形。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.Type == msoAutoShape)
}
```
