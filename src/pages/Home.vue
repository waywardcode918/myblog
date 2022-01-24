<!--  -->
<template>
	<div class="md-content">
		<div class="position-top">
			<div class="md-top">
				<div
					class="md-title"
					@click="goHome"
				>
					任性的代码
				</div>
				<div class="md-tab">
					<el-menu
						:default-active="activeIndex"
						class="el-menu-demo"
						mode="horizontal"
						@select="handleSelect"
					>
						<el-menu-item
							:index="item"
							v-for="(item, index) in tabList"
							>{{ item }}</el-menu-item
						>
						<el-submenu index="gitee">
							<template slot="title">gitee和其他</template>
							<el-menu-item
							index="myBlog"

								>博客园</el-menu-item
							>
							<el-menu-item
							index="gitee"
								>gitee</el-menu-item
							>
							
							<el-menu-item
								v-for="(menu, index) in menuLst"
								:index="menu"
								>{{ menu }}</el-menu-item
							>
							<el-menu-item
							index="blogCode"
								>博客源码</el-menu-item
							>
						</el-submenu>
					</el-menu>
				</div>
			</div>
			<div class="line"></div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			str: "# 12",
			activeIndex: "1",
			tabList: [],
			menuLst: [],
			hrefArray:{
				myBlog:'https://www.cnblogs.com/waywordcode/',
				gitee:'https://gitee.com/waywordcode',
				blogCode:'https://gitee.com/waywordcode/web/tree/master/mdblog/mdblog'
			}
		};
	},
	mounted() {
		const tabArrays = [];
		const menuArrays = [];
		const Tabfiles = require
			.context("../../public/md", false, /.md$/)
			.keys();
		const menufiles = require
			.context("../../public/md/menumd", false, /.md$/)
			.keys();
		Tabfiles.forEach(function (item) {
			tabArrays.push(item.split("/")[1].split(".")[0]);
		});
		menufiles.forEach(function (item) {
			menuArrays.push(item.split("/")[1].split(".")[0]);
		});
		this.tabList = tabArrays;
		this.menuLst = menuArrays;
		window.typeCode=tabArrays[0]
		console.log(menuArrays, tabArrays);
	},

	methods: {
		handleSelect(key, keyPath) {
			const typeArray=this.tabList
			if(typeArray.includes(key)){
				this.$router
					.push({
						path: "/Home/Article",
						query: {
							type: key,
						},
					}).catch(() => {});
			}else{
				//window.open(this.hrefArray[key])
				window.location.href=this.hrefArray[key]
			}

		},
		goHome(){
			this.$router.push('/').catch(() => {})
		}
	},
};
</script>
<style lang='less' scoped>
.md-content {
	width: 80%;
	margin: 0 auto;
	.md-title{
		font-size: 25px;
		font-weight: bold;
	}
	.position-top{
		position: sticky;
		top: 0px;
		z-index: 1000;
		background-color: white;
			.md-top {
		width: 100%;
		height: 65px;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	.line::before {
		content: "";
		position: absolute;
		height: 1px;
		background-color: #E6E6E6;
		width: 100%;
		overflow: hidden;
	}
		}
		.el-menu.el-menu--horizontal{
			border-bottom:unset
		}
		.el-menu--horizontal>.el-menu-item.is-active{
			color: #409EFF;
		}
		.el-menu--horizontal>.el-menu-item{
			color: #2C3E50;
		}
		.el-menu--horizontal>.el-menu-item:hover{
			color: green;
		}
		.el-menu--horizontal>.el-submenu .el-submenu__title{
			color: #2C3E50;
		}

}
</style>