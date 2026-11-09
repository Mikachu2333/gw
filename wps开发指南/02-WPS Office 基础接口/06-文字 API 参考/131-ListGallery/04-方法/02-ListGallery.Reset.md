# ListGallery.Reset

将指定列表库中由 _Index_ 指定的列表模板重新设置为内置列表模板格式。



## 语法

express.**Reset(Index)**

express   一个代表 **ListGallery** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要重新设置的模板。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将“项目符号和编号”对话框内“编号”选项卡上的第四种格式设置为内置编号格式，然后将其应用于选定部分。*/
function test() {
    let listGallery = Application.ListGalleries.Item(wdNumberGallery)
    listGallery.Reset(4)
    let listTemplate = listGallery.ListTemplates.Item(4)
    Selection.Range.ListFormat.ApplyListTemplate(listTemplate)
}
```


```JavaScript
/*本示例将数组 arr 中所有列表库中七个模板（格式）重新设置成内置列表模板格式。*/
function test() {
    let arr = [wdBulletGallery, wdNumberGallery, wdOutlineNumberGallery]
    for (let i = 0; i < arr.length; i++) {
        let listGallery = Application.ListGalleries.Item(arr[i])
        for (let j = 1; j <= 7; j++) {
            listGallery.Reset(j)
        }
    }
}
```
