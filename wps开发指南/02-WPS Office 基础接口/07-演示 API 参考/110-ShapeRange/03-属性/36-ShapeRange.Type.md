# ShapeRange.Type

返回一个 **MsoShapeType** 常量，该常量代表单个形状或形状范围内多个形状的类型。只读。



## 语法

express.**Type**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoShapeType

## 说明


 **Type** 属性的值可以是下列 **MsoShapeType** 常量之一。
msoAutoShape  
msoCallout  
msoCanvas  
msoChart  
msoComment  
msoDiagram  
msoEmbeddedOLEObject  
msoFormControl  
msoFreeform  
msoGroup  
msoLine  
msoLinkedOLEObject  
msoLinkedPicture  
msoMedia  
msoOLEControlObject  
msoPicture  
msoPlaceholder  
msoScriptAnchor  
msoShapeTypeMixed  
msoTable  
msoTextBox  
msoTextEffect



## 示例


```JavaScript
/*本示例遍历活动演示文稿中第二张幻灯片上的所有形状，如果形状的类型为表格，则显示形状的名称。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(2).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        let shapeRange = shapes.Range(i)
        if (shapeRange.Type == msoTable) {
            alert(shapeRange.Name)
        }
    }
}
```


```JavaScript
/*本示例显示活动窗口上的选中形状的类型是否为自选图形。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.Type == msoAutoShape)
}
```
