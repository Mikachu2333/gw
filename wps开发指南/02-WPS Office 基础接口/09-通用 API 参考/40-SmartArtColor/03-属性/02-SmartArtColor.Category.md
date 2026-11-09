# SmartArtColor.Category

检索与 SmartArt 颜色样式关联的主类别名称。只读。



## 语法

express.**Category**

express   一个代表 **SmartArtColor** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第一个 SmartArt 图表的颜色样式关联的主类别名称。*/
function test() {
    let smartArtColor = ActiveDocument.Shapes.Item(1).SmartArt.Color
    alert(smartArtColor.Category)
}
```


```JavaScript
/*本示例运行于文字组件，将所有 SmartArt 图表的颜色样式关联的主类别名称插入到新建文档中。*/
function test() {
    Documents.Add()
    for (let i = 1; i <= Application.SmartArtColors.Count; i++) {
        Selection.TypeText(Application.SmartArtColors.Item(i).Category + "\n")
    }
}
```
