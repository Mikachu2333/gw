# OLEFormat.ProgID

返回指定 OLE 对象的程序标识符（ProgID）（程序标识符：窗体 OLEServerName.ObjectName 中的标识符（例如，Excel.Sheet 或 PowerPoint.Slide），由 Windows 注册表用来唯一标识一个对象。）。只读。



## 语法

express.**ProgID**

express   一个代表 **OLEFormat** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例搜索活动演示文稿所有幻灯片中的所有对象，将全部链接的 ET 工作表设为手动更新。*/
function test() {
    for (let i = 1; i <= ActivePresentation.Slides.Count; i++) {
        let shapes = ActivePresentation.Slides.Item(i).Shapes
        for (let j = 1; j <= shapes.Count; j++) {
            let shape = shapes.Item(j)
            if (shape.Type == msoLinkedOLEObject) {
                if (shape.OLEFormat.ProgID == "Excel.Sheet.12") {
                    shape.LinkFormat.AutoUpdate = ppUpdateOptionManual
                }
            }
        }
    }
}
```


```JavaScript
/*本示例判断如果活动窗口所选的第一张幻灯片的第一个形状为链接的 OLE 对象，则显示该 OLE 对象的程序标识符（ProgID）。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    if (shape.Type == msoLinkedOLEObject) {
        alert(shape.OLEFormat.ProgID)
    }
}
```
