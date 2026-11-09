# Font.Ligatures

返回或设置指定 **Font** 对象的连字设置。可读/写 **[WdLigatures](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLigatures)** 类型。



## 语法

express.**Ligatures**

express   一个代表 **Font** 对象的变量。

## 类型

WdLigatures

## 说明


OpenType 字体支持使用连字。 **Ligatures** 属性指定要应用于 OpenType 字体的 WPS 连字设置。

下表列出了连字的四个基本值。

| 值   | 说明                                        |
| --- | ----------------------------------------- |
| 标准  | 设计用来增强可读性和吸引力。拉丁语言中的标准连字包括“fi”、“fl”和“ff”。 |
| 上下文 | 设计用来通过根据周围文本提供最佳连字选择来增强可读性和吸引力。           |
| 历史  | 较老的、装饰用连字，对于现代读者可能看起来比较古老。不是专为可读性而设计的。    |
| 任意  | 旨在起装饰作用，不是为了可读性。                          |

这四个基本值的组合构成了 **Ligatures** 属性的可用值集合。该组值在 **WdLigatures** 枚举中提供。



## 示例


```JavaScript
/*本示例将任意连字应用于活动文档中的字体。*/
function test() {
    ActiveDocument.Range().Font.Ligatures = wdLigaturesDiscretional
}
```


```JavaScript
/*本示例显示所选内容的字体的连字类型是否为wdLigaturesNone。*/
function test() {
    alert(Selection.Font.Ligatures == wdLigaturesNone)
}
```
