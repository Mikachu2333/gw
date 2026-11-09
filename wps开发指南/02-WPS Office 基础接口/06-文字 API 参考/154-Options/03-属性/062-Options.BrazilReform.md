# Options.BrazilReform

返回或设置巴西葡萄牙语拼写检查器的模式。 **[WdPortugueseReform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdPortugueseReform)** 可读/写。



## 语法

express.**BrazilReform**

express   一个代表 **Options** 对象的变量。

## 类型

WdPortugueseReform

## 说明


该属性不设置欧洲葡萄牙语拼写器的模式。若要设置欧洲葡萄牙语拼写器模式，请使用 **[PortugalReform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Options/member/PortugalReform)** 属性。



## 示例


```JavaScript
/*本示例设置巴西葡萄牙语拼写检查器的模式为 wdPortuguesePostReform。*/
function test() {
    Options.BrazilReform = wdPortuguesePostReform
}
```


```JavaScript
/*本示例显示巴西葡萄牙语拼写检查器的模式。*/
function test() {
    switch (Options.BrazilReform) {
        case wdPortuguesePreReform:
            alert("使用前期修订拼写规则。")
            break
        case wdPortuguesePostReform:
            alert("使用后期修订拼写规则。")
            break
        case wdPortugueseBoth:
            alert("使用前期修订和后期修订拼写规则。")
            break
    }
}
```
