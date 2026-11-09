# Border.ThemeColor

返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **Variant** 类型。



## 语法

express.**ThemeColor**

express   一个代表 **Border** 对象的变量。

## 类型

any

## 说明


如果对象当前未应用主题颜色，试图访问其主题颜色则会引起无效请求运行时错误。



## 示例


```JavaScript
/*本示例将 D2 单元格左边缘的边框主题颜色设置为指定“强调文字颜色6”主题颜色。*/
function test() {
    Range("D2").Borders.Item(xlEdgeLeft).ThemeColor = msoThemeColorAccent6
}
```


```JavaScript
/*本示例显示 E10 单元格右边缘的边框主题颜色是否为指定无主题颜色。*/
function test() {
    alert(Range("E10").Borders.Item(xlEdgeRight).ThemeColor == msoNotThemeColor)
}
```
