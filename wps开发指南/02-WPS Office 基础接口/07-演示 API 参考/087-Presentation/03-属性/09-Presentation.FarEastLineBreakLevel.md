# Presentation.FarEastLineBreakLevel

返回或设置基于亚洲字符级别的换行符。可读/写， **PpFarEastLineBreakLevel** 类型。



## 语法

express.**FarEastLineBreakLevel**

express   一个代表 **Presentation** 对象的变量。

## 类型

PpFarEastLineBreakLevel

## 说明


 **FarEastLineBreakLevel** 属性的值可以是下列 **PpFarEastLineBreakLevel** 常量之一：

| ----------------------------------------------------------- |
| **ppFarEastLineBreakLevelCustom**                           |
| **ppFarEastLineBreakLevelNormal**                           |
| **ppFarEastLineBreakLevelStrict**                           |



## 示例


```JavaScript
/*本示例将活动演示文稿的换行控制设置为使用第一级首尾字符。*/
function test() {
    Application.ActivePresentation.FarEastLineBreakLevel = ppFarEastLineBreakLevelNormal
}
```


```JavaScript
/*本示例判断第一篇演示文稿添加换行符所基于的亚洲字符级别，并通知用户。*/
function test() {
    let lineBreakLevel = Presentations.Item(1).FarEastLineBreakLevel
    switch (lineBreakLevel) {
        case ppFarEastLineBreakLevelCustom:
            alert("亚洲字符级别为自定义级别")
            break
        case ppFarEastLineBreakLevelNormal:
            alert("亚洲字符级别为正常级别")
            break
        case ppFarEastLineBreakLevelStrict:
            alert("亚洲字符级别为严格级别")
            break
    }
}
```
