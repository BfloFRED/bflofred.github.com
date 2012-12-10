/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'bflocons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#xe000;',
			'icon-github' : '&#xe001;',
			'icon-github-2' : '&#xe002;',
			'icon-chrome' : '&#xe003;',
			'icon-firefox' : '&#xe004;',
			'icon-IE' : '&#xe005;',
			'icon-opera' : '&#xe006;',
			'icon-safari' : '&#xe007;',
			'icon-ampersand' : '&#xe008;',
			'icon-earth' : '&#xe009;',
			'icon-location' : '&#xe00a;',
			'icon-google-plus' : '&#xe00b;',
			'icon-envelope' : '&#xe00c;',
			'icon-list' : '&#xe00d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};