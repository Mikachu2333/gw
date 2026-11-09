# Application.SmartArtColors

返回当前 **Application** 对象的 SmartArt 颜色。只读。



## 语法

express.**SmartArtColors**

express   一个代表 **Application** 对象的变量。

## 类型

SmartArtColors

## 示例


```JavaScript
/*本示例设置 SmartArt 图表的配色方案。*/
function test() {
    ActivePresentation.Slides(1).Shapes(1).SmartArt.Color = Application.SmartArtColors(1)
}
```


```JavaScript
/*本示例显示 SmartArt 图表的配色方案数量。*/
function test() {
    alert(Application.SmartArtColors.Count)
}
```
