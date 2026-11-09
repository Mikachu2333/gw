# ListGalleries.Item

返回集合中的单个 **ListGallery** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ListGalleries** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdListGalleryType | 要返回的单个对象。 |

## 返回值

ListGallery

## 示例


```JavaScript
/*本示例显示“项目符号和编号”对话框中“项目符号”选项卡上的所有列表模板的数量*/
function test() {
    let listGallery = Application.ListGalleries.Item(wdBulletGallery)
    alert("共有" + listGallery.ListTemplates.Count + "个列表模板")
}
```


```JavaScript
/*本示例将“项目符号和编号”对话框中“编号”选项卡上最后一个列表模板重新设置为内置列表模板格式。*/
function test() {
    Application.ListGalleries.Item(wdNumberGallery).Reset(Application.ListGalleries.Count)
}
```
