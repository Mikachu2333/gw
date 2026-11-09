# View.Reviewers

返回一个 **Reviewers** 对象，该对象代表所有审阅者。




## 语法

express.**Reviewers**

express   一个代表 **View** 对象的变量。

## 类型

Reviewers

## 说明


 **Reviewers** 对象是所有审阅者的全局列表，无论审阅者是否审阅指定窗口中显示的文档。




## 示例


```JavaScript
/*本示例隐藏文档中的所有修订和批注，只显示由“Jeff Smith”所作的修订和批注。*/
function HideRevisions(){
    let view = ActiveWindow.View

    view.ShowRevisionsAndComments = false
    view.ShowFormatChanges = true
    view.ShowInsertionsAndDeletions = true

    for(let i = 1; i <= view.Reviewers.Count; i++){
        view.Reviewers.Item(i).Visible = true
    }

    view.Reviewers.Item("Jeff Smith").Visible = true
}
```
