# LinkFormat.AutoUpdate

返回或设置更新链接的方法。可读/写。



## 语法

express.**AutoUpdate**

express   一个代表 **LinkFormat** 对象的变量。

## 类型

PpUpdateOption

## 说明


 **AutoUpdate** 属性的值可以是下列 **PpUpdateOption** 常量之一：

| 常量 | 说明 |
| ----- | ----- |
| **ppUpdateOptionAutomatic** | 每次打开演示文稿或更改源文件时更新链接。 |
| **ppUpdateOptionManual** | 仅当用户特别要求更新演示文稿时更新链接。    |
| **ppUpdateOptionMixed** | 混合。                       |



## 示例


```JavaScript
/*本示例遍历活动演示文稿所有幻灯片中的所有形状，将全部链接的 ET 工作表设置为手动更新。*/
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
/*本示例显示活动窗口所选的第一张幻灯片的第一个 OLE 对象更新链接的方法。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    switch (shape.LinkFormat.AutoUpdate) {
        case ppUpdateOptionAutomatic:
            alert("每次打开演示文稿或更改源文件时将会更新链接")
            break
        case ppUpdateOptionManual:
            alert("仅当用户特别要求更新演示文稿时才会更新链接")
            break
        case ppUpdateOptionMixed:
            alert("混合")
            break
    }
}
```
