# XMLNamespace.Location

返回或设置 **String** 值，该值表示 XML 架构的命名空间在架构库中的物理位置。可读/写。



## 语法

**注意：**为 **Location** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
Location(AllUsers?: Default<boolean, false>, prop?: string): void;
Location(AllUsers?: Default<boolean, false>): string;
```

express.**Location(AllUsers)**

express   一个代表 **XMLNamespace** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| AllUsers | 可选 | boolean | 指定是否为所有用户返回该位置。如果为 **False** ，将只为当前用户返回位置，该位置可能与为所有用户返回的位置不同。 |

## 返回值

string

## 示例


```JavaScript
/*本示例显示第一个架构在架构库的物理位置。*/
function test() {
    alert(Application.XMLNamespaces.Item(1).Location())
}
```


```JavaScript
/*本示例将活动文档上新建段落的文档部分的文本设置为架构库中所有架构的物理位置。*/
function test() {
    let xmlNamespaces = Application.XMLNamespaces
    for (let i = 1; i <= xmlNamespaces.Count; i++) {
        let paragraph = ActiveDocument.Paragraphs.Add()
        paragraph.Range.Text = xmlNamespaces.Item(i).Location()
    }
}
```
