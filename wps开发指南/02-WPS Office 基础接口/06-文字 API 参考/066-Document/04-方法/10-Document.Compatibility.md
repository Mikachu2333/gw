# Document.Compatibility

如果为 **True** ，则启用由 *Type* 参数指定的兼容性选项。兼容性选项将影响 WPS 中文档的显示方式。 **Boolean** 类型，可读写。



## 语法

**注意：**为 **Compatibility** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
Compatibility(Type: WdCompatibility, prop: boolean): void;
Compatibility(Type: WdCompatibility): boolean;
```

express.**Compatibility(Type)**

express   一个代表 **Document** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | WdCompatibility | 兼容性选项。 |
| prop | 可选 | boolean | 用于指定兼容性选项的相应 **Boolean** 值。不传该参数则为取值情况。 |

## 返回值

boolean

## 说明


由于您选择或安装的语言支持不同（例如美国英语），上述部分常量可能无法使用。



## 示例


```JavaScript
/*本示例启用 WPS 兼容性选项中“取消硬分页符或分栏符前后的空格”的功能。*/
function test() {
    ActiveDocument.Compatibility(wdSuppressSpBfAfterPgBrk, true)
}
```


```JavaScript
/*本示例在启用或关闭“不为悬挂式缩进添加自动制表位”选项之间进行切换。*/
function test() {
    ActiveDocument.Compatibility(wdNoTabHangIndent, !ActiveDocument.Compatibility(wdNoTabHangIndent))
}
```
