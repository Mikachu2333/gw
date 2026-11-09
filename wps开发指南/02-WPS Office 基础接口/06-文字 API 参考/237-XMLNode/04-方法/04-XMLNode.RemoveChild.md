# XMLNode.RemoveChild

从指定的元素中删除子元素。



## 语法

express.**RemoveChild(ChildElement)**

express   一个代表 **XMLNode** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ChildElement | 必选 | XMLNode | 要删除的子元素。 |

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中第一个XML元素的第一个子元素。*/
function test() {
    ActiveDocument.XMLNodes.Item(1).RemoveChild(ActiveDocument.XMLNodes.Item(1).ChildNodes.Item(1))
}
```


```JavaScript
/*本示例删除第一个文档上第四个XML元素中的所有子元素。*/
function test() {
    let xmlNode = Documents.Item(1).XMLNodes.Item(4)
    for (let i = xmlNode.ChildNodes.Count; i >= 1; i--) {
        xmlNode.RemoveChild(xmlNode.ChildNodes.Item(i))
    }
}
```
