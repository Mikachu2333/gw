# Worksheet.Hyperlinks

返回 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** 集合，它代表区域的超链接。



## 语法

express.**Hyperlinks**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Hyperlinks

## 示例


```JavaScript
/*此示例检查第一张工作表上的超链接是否含有“Kingsoft”字样。*/
function test() {
    let hyperlinks = Worksheets.Item(1).Hyperlinks
    for (let i = 1; i <= hyperlinks.Count; i++) {
        let h = hyperlinks.Item(i)
        if (h.Name.indexOf("Kingsoft") >= 0) {
            h.Follow()
        }
    }
}
```


```JavaScript
/*本示例为活动工作表 A3 单元格添加超链接。*/
function test() {
    ActiveSheet.Hyperlinks.Add(Range("A3"), "https://www.wps.cn/")
}
```
