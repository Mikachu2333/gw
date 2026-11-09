# DefaultWebOptions.Fonts

返回 **WebPageFonts** 集合，该集合代表用户在 ET 中打开网页，而该网页中没有指定任何字体信息，或者当前默认字体无法显示网页中的字符集时，ET 将使用的字体集。只读。



## 语法

express.**Fonts**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

WebPageFonts

## 示例


```JavaScript
/*本示例设置英语/西欧/其他拉丁语系字符集的默认的固定宽度字体为 Courier New，14 磅。*/
function test() {
    let webPageFont = Application.DefaultWebOptions.Fonts.Item(msoCharacterSetEnglishWesternEuropeanOtherLatinScript)
    webPageFont.FixedWidthFont = "Courier New"
    webPageFont.FixedWidthFontSize = 14
}
```


```JavaScript
/*本示例显示 WebPageFonts 对象中的项数。*/
function test() {
    alert(Application.DefaultWebOptions.Fonts.Count)
}
```
