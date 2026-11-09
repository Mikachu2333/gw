# Range.Hyperlinks

返回 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** 集合，它代表区域的超链接。



## 语法

express.**Hyperlinks**

express   一个代表 **Range** 对象的变量。

## 类型

Hyperlinks

## 示例


```JavaScript
/*本示例显示 A1 单元格的超链接数量*/
function test() {
    alert(Range("A1").Hyperlinks.Count)
}
```


```JavaScript
/*本示例为 C2 单元格添加超链接 https://www.wps.cn/，并显示 C2 单元格的超链接数量*/
function test() {
    Range("C2").Hyperlinks.Add(Range("C2"), "https://www.wps.cn/")
    alert(Range("C2").Hyperlinks.Count)
}
```
