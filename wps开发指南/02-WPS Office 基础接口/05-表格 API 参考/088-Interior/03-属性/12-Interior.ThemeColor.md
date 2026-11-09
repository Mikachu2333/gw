# Interior.ThemeColor

返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **Variant** 类型。



## 语法

express.**ThemeColor**

express   一个代表 **Interior** 对象的变量。

## 类型

any

## 说明


如果对象当前未应用主题颜色，试图访问其主题颜色则会引起无效请求运行时错误。



## 示例


```JavaScript
/*本示例对活动工作表 A1:D2 区域单元格添加网格图案，并将图案主题颜色设置为 xlThemeColorAccent4，单元格背景主题颜色设置为 xlThemeColorAccent2。*/
function test() {
    let interior = ActiveSheet.Range("A1:D2").Interior
    interior.Pattern = xlPatternGrid
    interior.PatternThemeColor = xlThemeColorAccent4
    interior.ThemeColor = xlThemeColorAccent2
}
```


```JavaScript
/*本示例显示活动工作表 A1:C2 区域背景主题颜色是否为 xlThemeColorDark2。*/
function test() {
    let interior = ActiveSheet.Range("A1:C2").Interior
    alert(interior.ThemeColor == xlThemeColorDark2)
}
```
