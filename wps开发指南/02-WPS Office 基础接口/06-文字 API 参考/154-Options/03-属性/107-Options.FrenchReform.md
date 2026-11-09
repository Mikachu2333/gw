# Options.FrenchReform

返回或设置一个 **[WdFrenchSpeller](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFrenchSpeller)** 常量，该常量代表要对语言格式设置为法语的文本区域使用哪个拼写词典。可读写。



## 语法

express.**FrenchReform**

express   一个代表 **Options** 对象的变量。

## 类型

WdFrenchSpeller

## 示例


```JavaScript
/*本示例设置法语拼写检查词典时所使用的法语版本为 wdFrenchPreReform。*/
function test() {
    Options.FrenchReform = wdFrenchPreReform
}
```


```JavaScript
/*本示例显示法语拼写检查词典时所使用的法语版本。*/
function test() {
    switch (Options.FrenchReform) {
        case wdFrenchBoth:
            alert("在检查法语拼写时同时使用后期修订和前期修订法语词典。")
            break
        case wdFrenchPreReform:
            alert("在检查法语拼写时只使用前期修订法语词典。")
            break
        case wdFrenchPostReform:
            alert("在检查法语拼写时只使用后期修订法语词典。")
            break
    }
}
```
