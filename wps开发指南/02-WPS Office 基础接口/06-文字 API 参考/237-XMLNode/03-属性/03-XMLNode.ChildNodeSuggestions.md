# XMLNode.ChildNodeSuggestions

返回一个 **XMLChildNodeSuggestions** 集合，代表指定元素的子元素列表。




## 语法

express.**ChildNodeSuggestions**

express   一个代表 **XMLNode** 对象的变量。

## 类型

XMLChildNodeSuggestions

## 说明


 **XMLChildNodeSuggestions** 集合中的每个 **XMLChildNodeSuggestion** 对象都是允许的、可能做为子元素的 XML 元素列表中的一项，该列表位于 **“XML 结构”** 任务窗格底部。




## 示例


```JavaScript
/*下列示例循环遍历活动文档中选定的第一个元素的建议子元素，并在插入点插入所有允许的元素。*/
function test() {
    let objSuggestion
    let objNode = Application.Selection.XMLParentNode
    
    for(objSuggestion = 1; objSuggestion <= objNode.ChildNodeSuggestions.Count; objSuggestion++) {
        XMLChildNodeSuggestions.Item(objSuggestion).Insert()
        Application.Selection.MoveRight()
    }
}
```
