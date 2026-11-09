# DefaultWebOptions.Fonts

返回一个 **WebPageFonts** 集合，该集合代表在 WPS 中打开网页时 WPS 所使用的字体集。



## 语法

express.**Fonts**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

WebPageFonts

## 说明


如果网页中没有指定的字体信息，或者 WPS 无法显示字符集，则 WPS 使用 **WebPageFonts** 集合中的字体在 WPS 中显示网页。



## 示例


```JavaScript
/*本示例设置英语/西欧/其他拉丁语系字符集的默认的固定宽度字体为 Courier New，14 磅。*/
function test() {
    let webPageFont = Application.DefaultWebOptions().Fonts.Item(msoCharacterSetEnglishWesternEuropeanOtherLatinScript)
    webPageFont.FixedWidthFont = "Courier New"
    webPageFont.FixedWidthFontSize = 14
}
```


```JavaScript
/*本示例显示 WebPageFonts 对象中的项数。*/
function test() {
    alert(Application.DefaultWebOptions().Fonts.Count)
}
```
