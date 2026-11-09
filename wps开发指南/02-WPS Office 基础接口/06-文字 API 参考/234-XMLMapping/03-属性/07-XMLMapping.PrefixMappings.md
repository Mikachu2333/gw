# XMLMapping.PrefixMappings

返回 **String** 值，该值表示用于为当前 XML 映射计算 XPath 的前缀映射。只读。



## 语法

express.**PrefixMappings**

express   一个代表 **XMLMapping** 对象的变量。

## 类型

string

## 说明


若要为内容控件设置映射，请使用 **SetMapping** 方法或 **SetMappingByNode** 方法。



## 示例


```JavaScript
/*本示例显示活动文档内所有内容控件的 XML 映射的 XPath 的前缀映射。*/
function test() {
    let str = ""
    for (let i = 1; i <= ActiveDocument.ContentControls.Count; i++) {
        let xmlMapping = ActiveDocument.ContentControls.Item(i).XMLMapping
        str += xmlMapping.PrefixMappings + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例将所选内容的文本替换为第一个文档上第一个内容控件的 XML 映射的 XPath 的前缀映射。*/
function test() {
    let xmlMapping = Documents.Item(1).ContentControls.Item(1).XMLMapping
    Selection.Range.Text = xmlMapping.PrefixMappings
}
```
