# SmartArtQuickStyle.Name

检索 SmartArt 快速样式的字符串名称。只读。



## 语法

express.**Name**

express   一个代表 **SmartArtQuickStyle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个 SmartArt 图形的名称。*/
function test() {
    let smartArt = ActivePresentation.Slides.Item(1).Shapes.Item(1).SmartArt
    alert(smartArt.QuickStyle.Name)
}
```


```JavaScript
/*本示例运行于各组件，显示所有 SmartArt 快速样式的名称。*/
function test() {
    let str = ""
    for (let i = 1; i <= Application.SmartArtQuickStyles.Count; i++) {
        let smartArtQuickStyle = Application.SmartArtQuickStyles.Item(i)
        str += smartArtQuickStyle.Name + "\n"
    }
    alert(str)
}
```
