# Options.DefaultFilePath

返回或设置各项（例如文档、模板和图形）的默认文件夹。 **String** 类型，可读写。



## 语法

**注意：**为 **DefaultFilePath** 赋值，须将新值追加到参数中，如下分别为赋值与取值的 TypeScript 函数声明：
```typescript
DefaultFilePath(Path: WdDefaultFilePath, prop: string): void;
DefaultFilePath(Path: WdDefaultFilePath): string;
```

express.**DefaultFilePath(Path)**

express   一个代表 **Options** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | WdDefaultFilePath | 设置默认的文件夹。 |

## 返回值

string

## 说明


您可以使用空字符串（""）从 Windows 注册表中删除设置。新设置会立即生效。



## 示例


```JavaScript
/*本示例为 WPS 文档设置默认文件夹。*/
function test() {
    Options.DefaultFilePath(wdDocumentsPath, "D:\\Documents")
}
```


```JavaScript
/*本示例显示用户模板当前的默认路径（相当于“选项”对话框中“文件位置”选项卡上的默认路径设置）。*/
function test() {
    alert(Options.DefaultFilePath(wdUserTemplatesPath))
}
```
