# DisplayFormat.Style

返回一个包含 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj)** 对象的值，该值表示关联的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象在当前用户界面中显示时所采用的样式。



## 语法

express.**Style**

express   一个代表 **DisplayFormat** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例设置 G2 单元格字体的字号为 15 磅，并显示是否设置成功。*/
function test() {
    Range("G2").Style.Font.Size = 15
    alert(Range("G2").DisplayFormat.Style.Font.Size == 15)
}
```


```JavaScript
/*本示例显示在当前用户界面中 G2 单元格字体的字号。*/
function test() {
    alert(Range("G2").DisplayFormat.Style.Font.Size)
}
```
