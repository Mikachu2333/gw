# Templates 对象

 **[Template](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Template/obj)** 对象的集合，这些对象代表当前可用的所有模板。该集合包括打开的模板、附加到打开的文档的模板和在 **“模板和加载项”** 对话框中加载的全局模板。

## 说明


使用 **Templates** 属性可返回 **Templates** 集合。


## 示例


```JavaScript
/*本示例显示 Templates 集合中每个模板的路径及文件名。*/
function test() {
    for (let i = 1; i <= Application.Templates.Count; i++) {
        alert(Application.Templates.Item(i).FullName)
    }
}
```
 **Add** 方法不适用于 **Templates** 集合。相反，您可以通过执行以下任一操作将模板添加到 **Templates** 集合中：

- 将 **Open** 方法与 **Documents** 集合结合使用，以打开基于模板或模板的文档

- 将 **Add** 方法与 **Documents** 集合结合使用，以打开基于模板的新文档

- 将 **Add** 方法与 **Addins** 集合一起使用以加载全局模板

- 将 **AttachedTemplate** 属性与 **Document** 对象结合使用，将模板附加到文档

使用 **Templates** (Index)（其中 Index 是模板名称或索引号）返回单个 **Template** 对象。



```JavaScript
/*本示例保存名为“example.dot”的模板。*/
function test() {
    Application.Templates.Item("D:\\示例2\\example.dot").Save()
}
```
索引号表示模板在 **Templates** 集合中的位置。



```JavaScript
/*本示例显示 Templates 集合中第一个模板的文件名。*/
function test() {
    alert(Application.Templates.Item(1).FullName)
}
```
使用 **NormalTemplate** 属性返回引用 Normal 模板的模板对象。使用 **AttachedTemplate** 属性返回附加到指定文档的模板。

使用 **DefaultFilePath** 属性可以确定用户模板或工作组模板的位置（即，要存储这些模板的文件夹）。



```JavaScript
/*本示例将所选内容的文本替换为第一个模板的路径。*/
function test() {
    Selection.Range.Text = Application.Templates.Item(1).Path
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Templates/member/Item) | 返回集合中的单个 **Template** 对象。 |
| [LoadBuildingBlocks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Templates/member/LoadBuildingBlocks) | 将所有模板的构建基块加载到 WPS 中。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Templates/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Templates/member/Count) | 返回一个 **Long** 类型的值，该值代表指定集合中模板的数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Templates/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Templates/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Templates** 对象的父对象。 |