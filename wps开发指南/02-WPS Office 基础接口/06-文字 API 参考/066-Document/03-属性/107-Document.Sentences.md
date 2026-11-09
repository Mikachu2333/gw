# Document.Sentences

返回一个 **[Sentences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/obj)** 集合，该集合代表文档中的所有句子。只读。



## 语法

express.**Sentences**

express   一个代表 **Document** 对象的变量。

## 类型

Sentences

## 示例


```JavaScript
/*本示例复制活动文档中的第一个句子。*/
function test() {
    ActiveDocument.Sentences.Item(1).Copy()
}
```


```JavaScript
/*本示例删除活动文档中的最后一个句子。*/
function test() {
    ActiveDocument.Sentences.Last.Delete()
}
```
