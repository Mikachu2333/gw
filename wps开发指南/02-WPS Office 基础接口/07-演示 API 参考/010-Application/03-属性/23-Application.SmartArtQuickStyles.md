# Application.SmartArtQuickStyles

返回当前 **Application** 对象中的 SmartArt 图表的快速样式。只读。



## 语法

express.**SmartArtQuickStyles**

express   一个代表 **Application** 对象的变量。

## 类型

SmartArtQuickStyles

## 示例


```JavaScript
/*本示例更改 SmartArt 图表的快速样式。*/
function test() {
    ActivePresentation.Slides(1).Shapes(1).SmartArt.QuickStyle = Application.SmartArtQuickStyles(5)
}
```


```JavaScript
/*本示例显示 SmartArt 图表的快速样式数量。*/
function test() {
    alert(Application.SmartArtQuickStyles.Count)
}
```
