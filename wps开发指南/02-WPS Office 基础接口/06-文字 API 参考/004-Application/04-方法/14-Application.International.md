# Application.International

返回当前的国家/地区和国际设置信息。 **Variant** 类型，只读。



## 语法

express.**International(Index)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdInternationalIndex | 当前的国家/地区和/或国际设置。 |

## 返回值

any

## 示例


```JavaScript
/*本示例显示 WPS 的语言版本是否为简体中文。*/
function test() {
    alert(Application.International(wdProductLanguageID) == wdSimplifiedChinese)
}
```


```JavaScript
/*本示例判断如果 WPS 的语言版本不为美国英语，则显示活动文档的名称。*/
function test() {
    if (Application.International(wdProductLanguageID) != wdEnglishUS) {
        alert(ActiveDocument.Name)
    }
}
```
