# SmartArtColor.Name

检索 SmartArt 颜色样式的字符串名称。只读。



## 语法

express.**Name**

express   一个代表 **SmartArtColor** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于文字组件，显示活动文档上第一个内嵌 SmartArt 图表的颜色样式的字符串名称。*/
function test() {
    let smartArtColor = ActiveDocument.InlineShapes.Item(1).SmartArt.Color
    alert(smartArtColor.Name)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 SmartArt 图表的颜色样式的字符串名称。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.SmartArtColors.Count; i++) {
        str += Application.SmartArtColors.Item(i).Name + "\n"
    }
    alert(str)
}
```
