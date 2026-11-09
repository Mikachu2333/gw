# Application.NormalTemplate

返回一个 **[Template](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/obj)** 对象，该对象代表 Normal 模板。



## 语法

express.**NormalTemplate**

express   一个代表 **Application** 对象的变量。

## 类型

Template

## 示例


```JavaScript
/*本示例判断如果 AutoTextEntries 集合中包含一个名为“Test”的“自动图文集”词条，则本示例从 Normal 模板插入该词条。*/
function test() {
    let autoTextEntries = Application.NormalTemplate.AutoTextEntries
    for (let i = 1; i <= autoTextEntries.Count; i++) {
        if (autoTextEntries.Item(i).Name == "Test") {
            autoTextEntries.Item(i).Insert(Selection.Range)
        }
    }
}
```


```JavaScript
/*本示例判断如果对 Normal 模板进行了更改，则将保存该模板。*/
function test() {
    if (!Application.NormalTemplate.Saved) {
        Application.NormalTemplate.Save()
    }
}
```
