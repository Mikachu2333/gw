# Range.Hyperlinks

返回一个 **Hyperlinks** 集合，该集合代表指定范围内的所有超链接。只读。



## 语法

express.**Hyperlinks**

express   一个代表 **Range** 对象的变量。

## 类型

Hyperlinks

## 说明


有关返回集合中单个成员的信息，请参阅返回集合中的对象。



## 示例


```JavaScript
/*以下示例显示活动文档中前十个段落中的每个含有wps的超链接的名称。*/
function test() {
    let hyperlinks = ActiveDocument.Range(ActiveDocument.Paragraphs.Item(1).Range.Start, ActiveDocument.Paragraphs.Item(10).Range.End).Hyperlinks
    for (let i = 1; i <= hyperlinks.Count; i++) {
        if ((hyperlinks.Item(i).Address.toLowerCase().search("wps")) !== -1) {
            alert(hyperlinks.Item(i).Name)
        }
    }
}
```


```JavaScript
/*本示例显示活动文档中前十个段落中所有超链接的数量。*/
function test() {
    let hyperlinks = ActiveDocument.Range(ActiveDocument.Paragraphs.Item(1).Range.Start, ActiveDocument.Paragraphs.Item(10).Range.End).Hyperlinks
    alert(`超链接的数量：${hyperlinks.Count}`)
}
```
