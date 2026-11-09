# Pages 对象

通过 [Document.Pages](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Document/member/Pages) 访问当前 PDF 文档中的全部页面。

## 说明


**Pages** 表示文档内页面的有序集合。页码与 **Item**、**DeletePagesByRange** 等方法中的索引均从 **1** 开始，与界面中常见的「第 1 页」一致。通过 **Count** 可读取总页数；通过 **Item**(*index*) 可得到单个 **Page** 对象，用于读取页面尺寸、页面文本或该页上的注释集合 **Annots** 等。

在集合层面可执行页面级编辑：**InsertBlankPage** 按指定位置插入空白页；**InsertPagesFromFile** 从本地 PDF 按页码范围合并页面；**DeletePagesByRange** 按范围删除页面。插入位置由 `insertPositionType` 等参数控制（文档开头、末尾或指定页前后），详见各方法页。

## 示例


```JavaScript
var pages = app.ActiveDocument.Pages;
var count = pages.Count;
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Pages/member/Item) | 根据索引获取指定页面对象。 |
| [InsertBlankPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Pages/member/InsertBlankPage) | 插入空白页。 |
| [InsertPagesFromFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Pages/member/InsertPagesFromFile) | 从另一个 PDF 文件中抽取指定页面插入到当前文档。 |
| [DeletePagesByRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Pages/member/DeletePagesByRange) | 按范围删除页面。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Pages/member/Count) | 获取页面数量。 |
