## 常用指令

uname 打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）
 -a 或--all：显示全部的信息；
 -m 或--machine：显示电脑类型；
 -n 或-nodename：显示在网络上的主机名称；
 -r 或--release：显示操作系统的发行编号；
 -s 或--sysname：显示操作系统名称；
 -v：显示操作系统的版本；
 -p 或--processor：输出处理器类型或"unknown"；
 -i 或--hardware-platform：输出硬件平台或"unknown"；
 -o 或--operating-system：输出操作系统名称；
 --help：显示帮助；
 --version：显示版本信息。
cat /etc/issue 显示的是发行版本信息
lsb_release -a (适用于所有的 linux，包括 Redhat、SuSE、Debian 等发行版，但是在 debian 下要安装 lsb)
ls 显示文件或目录
 -l 列出文件详细信息 l(list)
 -a 列出当前目录下所有文件及目录，包括隐藏的 a(all)
mkdir 创建目录
-p 创建目录，若无父目录，则创建 p(parent)
cd 切换目录
echo 创建带有内容的文件。
cat 查看文件内容
cp 拷贝
mv 移动或重命名
rm 删除文件
 -r 递归删除，可删除子目录及文件
 -f 强制删除
find 在文件系统中搜索某文件
wc 统计文本中行数、字数、字符数
grep 在文本文件中查找某个字符串
pwd 显示当前目录
ln 创建链接文件
tar 解压缩文件
磁盘管理命令
fdisk 观察硬盘实体使用情况，也可对硬盘分区
  -b<分区大小>：指定每个分区的大小；
  -l：列出指定的外围设备的分区表状况；
  -s<分区编号>：将指定的分区大小输出到标准输出上，单位为区块；
  -u：搭配"-l"参数列表，会用分区数目取代柱面数目，来表示每个分区的起始地址；
  -v：显示版本信息。
lsblk 列出所有可用块设备的信息，而且还能显示他们之间的依赖关系，但是它不会列出 RAM 盘的信息
df 显示磁盘分区上的可使用的磁盘空间
 -h 以可读性较高的方式来显示信息
blkid 对查询设备上所采用文件系统类型进行查询(查看磁盘 UUID 信息)
make 编译 https://blog.csdn.net/weixin_33494995/article/details/116553563
touch 创建文件
