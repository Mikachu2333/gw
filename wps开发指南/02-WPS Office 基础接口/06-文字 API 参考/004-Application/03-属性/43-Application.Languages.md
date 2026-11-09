# Application.Languages

返回一个 **[Languages](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Languages/obj)** 集合。



## 语法

express.**Languages**

express   一个代表 **Application** 对象的变量。

## 类型

Languages

## 示例


```JavaScript
/*本示例显示所选区域语言的名称。*/
function test() {
    let language = Application.Languages.Item(Selection.LanguageID)
    alert(language.Name)
}
```


```JavaScript
/*本示例将数组arrLanguageID中的语言以用户语言表示的名称存储在数组arr中。*/
function test() {
    let arrLanguageID = [wdSimplifiedChinese, wdEnglishUS, wdKorean]
    let arr = []
    for (let i = 0; i < arrLanguageID.length; i++) {
        arr.push(Languages.Item(arrLanguageID[i]).NameLocal)
    }
}
```
