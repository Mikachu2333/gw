# Workbook.BuiltinDocumentProperties

返回一个 **[DocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/obj)** 集合，该集合表示指定工作簿的所有内置文档属性。只读。



## 语法

express.**BuiltinDocumentProperties**

express   一个代表 **Workbook** 对象的变量。

## 类型

Object

## 说明


本属性返回的是内置文档属性的整个集合。通过指定属性的名称或集合索引号（数字），用 **Item** 方法可返回集合中的单个成员（一个 **[DocumentProperty](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperty/obj)** 对象）。

可通过索引值或名称来引用文档属性。下面的列表显示的是可用的内置文档属性的名称：

| 标题 主题 作者 关键字 批注 模板 上一个作者 修订次数 应用程序名 上次打印日期 | 创建日期 上次保存时间 编辑时间总计 页数 字数 字符数 安全性 类别 格式 经理 | 单位 字节数 行数 段落数 幻灯片数 备注数 隐藏幻灯片数 多媒体剪辑数 超链接基础 字符数（包含空格） |
| ------------------------------------------ | ----------------------------------------- | ---------------------------------------------------- |

无须通过容器应用程序对每一内置文档属性值进行定义。如果 ET 对某个内置文档属性值没有定义，则读取该文档属性的 **Value** 属性时将产生错误。

由于 **Item** 方法是 **DocumentProperties** 集合的默认方法，所以下列语句是相同的：

```JavaScript
BuiltinDocumentProperties.Item(1)
BuiltinDocumentProperties(1)
```

使用 **[CustomDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CustomDocumentProperties)** 属性可以返回自定义文档属性的集合。



## 示例


```JavaScript
/*本示例在活动工作表中以列表的形式显示活动工作簿的内置文档属性的名称。*/
function test() {
    for (let i = 1; i <= ActiveWorkbook.BuiltinDocumentProperties.Count; i++) {
        let p = ActiveWorkbook.BuiltinDocumentProperties.Item(i)
        Cells(i, 1).Value(undefined, p.Name)
    }
}
```


```JavaScript
/*本示例演示BuiltinDocumentProperties属性的总数和第三个内置文档属性名称。*/
function test() {
    alert(`BuiltinDocumentProperties属性的总数为：${ActiveWorkbook.BuiltinDocumentProperties.Count}\nBuiltinDocumentProperties属性的第三个内置文档属性名称为：${ActiveWorkbook.BuiltinDocumentProperties.Item(3).Name}`)
}
```
