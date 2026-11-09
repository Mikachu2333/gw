# FileConverter 对象

代表用于打开或保存文件的文件转换器。 **FileConverter** 对象是 **FileConverters** 集合的一个成员。 **FileConverters** 集合包含所有已安装的用于打开和保存文件的文件转换器。


## 说明


使用 **FileConverters** (*Index*) 可返回一个 **FileConverter** 对象，其中 *Index* 是类别名称或索引号。以下示例显示与 ET 工作表转换器相关联的扩展名。


## 示例


```JavaScript
MsgBox(FileConverters.Item("MSBiff").Extensions)
```
索引号代表文件转换器在 **FileConverters** 集合中的位置。以下示例显示第一个文件转换器的格式名称。



```JavaScript
MsgBox(FileConverters.Item(1).FormatName)
```
不能新建一个文件转换器或向 **FileConverters** 集合添加一个文件转换器。 **FileConverter** 对象是在安装 WPS Office的过程中或通过安装补充文件转换器添加的。使用 **CanSave** 或 **CanOpen** 属性可确定 **FileConverter** 对象是否可用于打开或保存文档。

用于保存文档的文件转换器列在 **“另存为”** 对话框中。如果选中了 **“选项”** 对话框（ **“工具”** 菜单）中 **“常规”** 选项卡上的 **“打开时确认转换”** 复选框，则用于打开文档的文件转换器显示在一个对话框中。


{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [CanOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/CanOpen) | 如果指定的文件转换器可用来打开文件，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [CanSave](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/CanSave) | 如果指定的文件转换器可用来保存文件，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [ClassName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/ClassName) | 返回用来标识文件转换器的唯一名字。 **String** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Extensions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/Extensions) | 返回与指定 **FileConverter** 对象关联的文件扩展名。 **String** 类型，只读。 |
| [FormatName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/FormatName) | 返回指定文件转换器的名称。 **String** 类型，只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [OpenFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/OpenFormat) | 返回指定文件转换器的文件格式。 **Long** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **FileConverter** 对象的父对象。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/Path) | 返回指定对象的磁盘或 Web 路径。只读 **String** 类型。 |
| [SaveFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FileConverter/member/SaveFormat) | 返回指定文档或文件转换器的文件格式。只读 **Long** 类型。 |