# WebPageFonts.Count

获取一个 **Long** 类型的值，指示 **WebPageFonts** 对象中的项数。只读。



## 语法

express.**Count**

express   一个代表 **WebPageFonts** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于文字组件，显示在 WPS 文字中打开网页时使用的字符集的数量。*/
function test() {
    alert(Application.DefaultWebOptions().Fonts.Count)
}
```
