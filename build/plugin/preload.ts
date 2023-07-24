import fs from 'node:fs';
// 查找文件
function getFiles(e: string) {
	const arr: string[] = [];
	const dirents = fs.readdirSync(e, { withFileTypes: true });
	for (const dirent of dirents) {
		if (dirent.isDirectory()) arr.push(...getFiles(e + dirent.name + '/'));
		else {
			arr.push(e + dirent.name);
		}
	}
	return arr;
}
// 插入加载文件脚本
export const setPreLoadFile = (options: { pathList: string[]; preFix: string } = { pathList: [], preFix: '' }) => {
	if (options.pathList && options.pathList.length) {
		let res: string[] = [];
		options.pathList.forEach((path) => {
			res = res.concat(getFiles(path));
		});
		let linkStr = `
        <script>
        setTimeout(() => {
            function preLoadSource(url){
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        console.log('预加载成功');
                    } else {
                        console.error('预加载失败');
                    }
                };
                xhr.send();
            }\n
        `;
		res.forEach((item) => {
			linkStr += `preLoadSource('${options.preFix + item.substring(1)}')\n`;
		});
		linkStr += '})\n</script>';
		return {
			name: 'preload-file',
			transformIndexHtml(dom) {
				return dom.replace('</body>', `${linkStr}</body>`);
			},
		};
	}
};
